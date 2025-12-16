#![no_std]

multiversx_sc::imports!();
multiversx_sc::derive_imports!();

#[multiversx_sc::contract]
pub trait StakingOptimizer {
    #[init]
    fn init(&self) {}

    #[upgrade]
    fn upgrade(&self) {}

    // Storage
    #[view(getStakingProviders)]
    #[storage_mapper("staking_providers")]
    fn staking_providers(&self) -> SetMapper<ManagedAddress>;

    #[view(getProviderAPY)]
    #[storage_mapper("provider_apy")]
    fn provider_apy(&self, provider: &ManagedAddress) -> SingleValueMapper<BigUint>;

    #[view(getTotalStaked)]
    #[storage_mapper("total_staked")]
    fn total_staked(&self) -> SingleValueMapper<BigUint>;

    // Admin functions
    #[only_owner]
    #[endpoint(addStakingProvider)]
    fn add_staking_provider(&self, provider: ManagedAddress, apy: BigUint) {
        self.staking_providers().insert(provider.clone());
        self.provider_apy(&provider).set(apy);
    }

    #[only_owner]
    #[endpoint(updateProviderAPY)]
    fn update_provider_apy(&self, provider: ManagedAddress, new_apy: BigUint) {
        require!(
            self.staking_providers().contains(&provider),
            "Provider not registered"
        );
        self.provider_apy(&provider).set(new_apy);
    }

    // Core optimization logic
    #[view(getBestProvider)]
    fn get_best_provider(&self) -> OptionalValue<ManagedAddress> {
        let mut best_provider: OptionalValue<ManagedAddress> = OptionalValue::None;
        let mut highest_apy = BigUint::zero();

        for provider in self.staking_providers().iter() {
            let apy = self.provider_apy(&provider).get();
            if apy > highest_apy {
                highest_apy = apy;
                best_provider = OptionalValue::Some(provider);
            }
        }

        best_provider
    }

    #[payable("EGLD")]
    #[endpoint(optimizeStake)]
    fn optimize_stake(&self) {
        let payment = self.call_value().egld_value().clone_value();
        require!(payment > 0, "No EGLD sent");

        let best_provider = self.get_best_provider();
        require!(best_provider.is_some(), "No staking providers available");

        // Update total staked
        self.total_staked().update(|total| *total += &payment);

        // Emit optimization event
        self.optimization_event(&self.blockchain().get_caller(), &payment, &best_provider.into_option().unwrap());
    }

    // Events
    #[event("optimization_event")]
    fn optimization_event(
        &self,
        #[indexed] user: &ManagedAddress,
        #[indexed] amount: &BigUint,
        #[indexed] provider: &ManagedAddress,
    );
}
