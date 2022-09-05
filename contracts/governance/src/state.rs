use cosmwasm_std::{Addr, Decimal, Env, StdResult, Storage, Uint128};
use cw_storage_plus::{Item, Map};
use schemars::JsonSchema;
use serde::{Deserialize, Serialize};

pub const CONFIG: Item<Config> = Item::new("config");

pub const PROPOSAL_COUNT: Item<u64> = Item::new("proposal_count");

pub const PROPOSALS: Map<u64, Proposal> = Map::new("proposals");

#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]
pub struct Config {
    pub bjmes_token_addr: Addr,
    pub proposal_required_deposit: Uint128,
    // Required percentage for a proposal to pass, e.g. 51
    pub proposal_required_percentage: u64,
    // Epoch when the 1st posting period starts, e.g. 1660000000
    pub period_start_epoch: u64,
    // Length in seconds of the posting period, e.g.  606864 for ~ 1 Week (year/52)
    pub posting_period_length: u64,
    // Length in seconds of the posting period, e.g.  606864 for ~ 1 Week (year/52)
    pub voting_period_length: u64,
}
#[derive(Serialize, Deserialize, Clone, PartialEq, JsonSchema, Debug)]
pub struct Proposal {
    pub id: u64,
    pub dao: Addr,
    pub title: String,
    pub description: String,
    pub coins_yes: Uint128,
    pub coins_no: Uint128,
    pub yes_voters: Vec<Addr>,
    pub no_voters: Vec<Addr>,
    pub deposit_amount: Uint128,
    pub start_block: u64,
    pub posting_start: u64,
    pub voting_start: u64,
    pub voting_end: u64,
    pub concluded: bool,
}

impl Proposal {
    pub fn next_id(store: &mut dyn Storage) -> StdResult<u64> {
        let id: u64 = PROPOSAL_COUNT.may_load(store)?.unwrap_or_default() + 1;
        PROPOSAL_COUNT.save(store, &id)?;
        Ok(id)
    }

    pub fn status(&self, env: Env, proposal_required_percentage: u64) -> ProposalStatus {
        let mut status = ProposalStatus::Posted;

        if env.block.time.seconds() > self.voting_start {
            status = ProposalStatus::Voting;
        }

        if env.block.time.seconds() > self.voting_end {
            let coins_yes = self.coins_yes;
            let coins_no = self.coins_no;
            let coins_total = coins_yes + coins_no;

            let mut yes_ratio: Decimal = Decimal::zero();

            if !coins_total.is_zero() {
                yes_ratio = Decimal::from_ratio(coins_yes, coins_total);
            }

            let required_yes_ratio = Decimal::from_ratio(proposal_required_percentage, 100u64);

            status = if yes_ratio >= required_yes_ratio {
                if self.concluded {
                    ProposalStatus::SuccessConcluded
                } else {
                    ProposalStatus::Success
                }
            } else {
                if self.concluded {
                    ProposalStatus::ExpiredConcluded
                } else {
                    ProposalStatus::Expired
                }
            };
        }
        status
    }
}

#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]
pub enum ProposalStatus {
    Posted,
    Voting,
    Success,
    Expired,
    SuccessConcluded,
    ExpiredConcluded,
}

#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]
pub enum VoteOption {
    Yes,
    No,
}