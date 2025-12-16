#![no_std]

multiversx_sc::imports!();
multiversx_sc::derive_imports!();

#[derive(TypeAbi, TopEncode, TopDecode, NestedEncode, NestedDecode, Clone)]
pub struct ProtocolMetrics<M: ManagedTypeApi> {
    pub tvl: BigUint<M>,
    pub apy: BigUint<M>,
    pub risk_score: u8,
    pub timestamp: u64,
}

#[multiversx_sc::contract]
pub trait ProtocolMonitor {
    #[init]
    fn init(&self) {}

    #[upgrade]
    fn upgrade(&self) {}

    // Storage
    #[view(getMonitoredProtocols)]
    #[storage_mapper("monitored_protocols")]
    fn monitored_protocols(&self) -> SetMapper<ManagedBuffer>;

    #[view(getProtocolMetrics)]
    #[storage_mapper("protocol_metrics")]
    fn protocol_metrics(&self, protocol_id: &ManagedBuffer) -> SingleValueMapper<ProtocolMetrics<Self::Api>>;

    #[view(getAlertThreshold)]
    #[storage_mapper("alert_threshold")]
    fn alert_threshold(&self) -> SingleValueMapper<u8>;

    // Admin functions
    #[only_owner]
    #[endpoint(addProtocol)]
    fn add_protocol(&self, protocol_id: ManagedBuffer) {
        self.monitored_protocols().insert(protocol_id);
    }

    #[only_owner]
    #[endpoint(setAlertThreshold)]
    fn set_alert_threshold(&self, threshold: u8) {
        require!(threshold <= 100, "Invalid threshold");
        self.alert_threshold().set(threshold);
    }

    #[only_owner]
    #[endpoint(updateMetrics)]
    fn update_metrics(
        &self,
        protocol_id: ManagedBuffer,
        tvl: BigUint,
        apy: BigUint,
        risk_score: u8,
    ) {
        require!(
            self.monitored_protocols().contains(&protocol_id),
            "Protocol not monitored"
        );
        require!(risk_score <= 100, "Invalid risk score");

        let timestamp = self.blockchain().get_block_timestamp();
        let metrics = ProtocolMetrics {
            tvl,
            apy,
            risk_score,
            timestamp,
        };

        self.protocol_metrics(&protocol_id).set(metrics);

        // Check if alert should be triggered
        if risk_score >= self.alert_threshold().get() {
            self.risk_alert_event(&protocol_id, risk_score);
        }
    }

    #[view(getProtocolRisk)]
    fn get_protocol_risk(&self, protocol_id: ManagedBuffer) -> u8 {
        let metrics = self.protocol_metrics(&protocol_id).get();
        metrics.risk_score
    }

    // Events
    #[event("risk_alert_event")]
    fn risk_alert_event(
        &self,
        #[indexed] protocol_id: &ManagedBuffer,
        #[indexed] risk_score: u8,
    );
}
