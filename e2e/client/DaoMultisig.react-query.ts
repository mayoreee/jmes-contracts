/**
* This file was automatically generated by @jmes-cosmwasm/ts-codegen@0.14.2.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @jmes-cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { UseQueryOptions, useQuery, useMutation, UseMutationOptions } from "@tanstack/react-query";
import { ExecuteResult } from "@cosmjs/cosmwasm-stargate";
import { StdFee } from "@cosmjs/amino";
import { Executor, Addr, Duration, Threshold, Decimal, InstantiateMsg, ExecuteMsg, Expiration, Timestamp, Uint64, CosmosMsgForEmpty, BankMsg, Uint128, WasmMsg, Binary, Vote, Coin, Empty, MemberChangedHookMsg, MemberDiff, QueryMsg, ConfigResponse, VoteResponse, VoteInfo, Status, ThresholdResponse, ProposalListResponseForEmpty, ProposalResponseForEmpty, VoterListResponse, VoterDetail, VoteListResponse, VoterResponse } from "./DaoMultisig.types";
import { DaoMultisigQueryClient, DaoMultisigClient } from "./DaoMultisig.client";
export const daoMultisigQueryKeys = {
  contract: ([{
    contract: "daoMultisig"
  }] as const),
  address: (contractAddress: string | undefined) => ([{ ...daoMultisigQueryKeys.contract[0],
    address: contractAddress
  }] as const),
  threshold: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{ ...daoMultisigQueryKeys.address(contractAddress)[0],
    method: "threshold",
    args
  }] as const),
  proposal: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{ ...daoMultisigQueryKeys.address(contractAddress)[0],
    method: "proposal",
    args
  }] as const),
  listProposals: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{ ...daoMultisigQueryKeys.address(contractAddress)[0],
    method: "list_proposals",
    args
  }] as const),
  reverseProposals: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{ ...daoMultisigQueryKeys.address(contractAddress)[0],
    method: "reverse_proposals",
    args
  }] as const),
  getVote: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{ ...daoMultisigQueryKeys.address(contractAddress)[0],
    method: "get_vote",
    args
  }] as const),
  listVotes: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{ ...daoMultisigQueryKeys.address(contractAddress)[0],
    method: "list_votes",
    args
  }] as const),
  voter: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{ ...daoMultisigQueryKeys.address(contractAddress)[0],
    method: "voter",
    args
  }] as const),
  listVoters: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{ ...daoMultisigQueryKeys.address(contractAddress)[0],
    method: "list_voters",
    args
  }] as const),
  config: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{ ...daoMultisigQueryKeys.address(contractAddress)[0],
    method: "config",
    args
  }] as const)
};
export interface DaoMultisigReactQuery<TResponse, TData = TResponse> {
  client: DaoMultisigQueryClient | undefined;
  options?: Omit<UseQueryOptions<TResponse, Error, TData>, "'queryKey' | 'queryFn' | 'initialData'"> & {
    initialData?: undefined;
  };
}
export interface DaoMultisigConfigQuery<TData> extends DaoMultisigReactQuery<ConfigResponse, TData> {}
export function useDaoMultisigConfigQuery<TData = ConfigResponse>({
  client,
  options
}: DaoMultisigConfigQuery<TData>) {
  return useQuery<ConfigResponse, Error, TData>(daoMultisigQueryKeys.config(client?.contractAddress), () => client ? client.config() : Promise.reject(new Error("Invalid client")), { ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface DaoMultisigListVotersQuery<TData> extends DaoMultisigReactQuery<VoterListResponse, TData> {
  args: {
    limit?: number;
    startAfter?: string;
  };
}
export function useDaoMultisigListVotersQuery<TData = VoterListResponse>({
  client,
  args,
  options
}: DaoMultisigListVotersQuery<TData>) {
  return useQuery<VoterListResponse, Error, TData>(daoMultisigQueryKeys.listVoters(client?.contractAddress, args), () => client ? client.listVoters({
    limit: args.limit,
    startAfter: args.startAfter
  }) : Promise.reject(new Error("Invalid client")), { ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface DaoMultisigVoterQuery<TData> extends DaoMultisigReactQuery<VoterResponse, TData> {
  args: {
    address: string;
  };
}
export function useDaoMultisigVoterQuery<TData = VoterResponse>({
  client,
  args,
  options
}: DaoMultisigVoterQuery<TData>) {
  return useQuery<VoterResponse, Error, TData>(daoMultisigQueryKeys.voter(client?.contractAddress, args), () => client ? client.voter({
    address: args.address
  }) : Promise.reject(new Error("Invalid client")), { ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface DaoMultisigListVotesQuery<TData> extends DaoMultisigReactQuery<VoteListResponse, TData> {
  args: {
    limit?: number;
    proposalId: number;
    startAfter?: string;
  };
}
export function useDaoMultisigListVotesQuery<TData = VoteListResponse>({
  client,
  args,
  options
}: DaoMultisigListVotesQuery<TData>) {
  return useQuery<VoteListResponse, Error, TData>(daoMultisigQueryKeys.listVotes(client?.contractAddress, args), () => client ? client.listVotes({
    limit: args.limit,
    proposalId: args.proposalId,
    startAfter: args.startAfter
  }) : Promise.reject(new Error("Invalid client")), { ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface DaoMultisigGetVoteQuery<TData> extends DaoMultisigReactQuery<VoteResponse, TData> {
  args: {
    proposalId: number;
    voter: string;
  };
}
export function useDaoMultisigGetVoteQuery<TData = VoteResponse>({
  client,
  args,
  options
}: DaoMultisigGetVoteQuery<TData>) {
  return useQuery<VoteResponse, Error, TData>(daoMultisigQueryKeys.getVote(client?.contractAddress, args), () => client ? client.getVote({
    proposalId: args.proposalId,
    voter: args.voter
  }) : Promise.reject(new Error("Invalid client")), { ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface DaoMultisigReverseProposalsQuery<TData> extends DaoMultisigReactQuery<ProposalListResponseForEmpty, TData> {
  args: {
    limit?: number;
    startBefore?: number;
  };
}
export function useDaoMultisigReverseProposalsQuery<TData = ProposalListResponseForEmpty>({
  client,
  args,
  options
}: DaoMultisigReverseProposalsQuery<TData>) {
  return useQuery<ProposalListResponseForEmpty, Error, TData>(daoMultisigQueryKeys.reverseProposals(client?.contractAddress, args), () => client ? client.reverseProposals({
    limit: args.limit,
    startBefore: args.startBefore
  }) : Promise.reject(new Error("Invalid client")), { ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface DaoMultisigListProposalsQuery<TData> extends DaoMultisigReactQuery<ProposalListResponseForEmpty, TData> {
  args: {
    limit?: number;
    startAfter?: number;
  };
}
export function useDaoMultisigListProposalsQuery<TData = ProposalListResponseForEmpty>({
  client,
  args,
  options
}: DaoMultisigListProposalsQuery<TData>) {
  return useQuery<ProposalListResponseForEmpty, Error, TData>(daoMultisigQueryKeys.listProposals(client?.contractAddress, args), () => client ? client.listProposals({
    limit: args.limit,
    startAfter: args.startAfter
  }) : Promise.reject(new Error("Invalid client")), { ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface DaoMultisigProposalQuery<TData> extends DaoMultisigReactQuery<ProposalResponseForEmpty, TData> {
  args: {
    proposalId: number;
  };
}
export function useDaoMultisigProposalQuery<TData = ProposalResponseForEmpty>({
  client,
  args,
  options
}: DaoMultisigProposalQuery<TData>) {
  return useQuery<ProposalResponseForEmpty, Error, TData>(daoMultisigQueryKeys.proposal(client?.contractAddress, args), () => client ? client.proposal({
    proposalId: args.proposalId
  }) : Promise.reject(new Error("Invalid client")), { ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface DaoMultisigThresholdQuery<TData> extends DaoMultisigReactQuery<ThresholdResponse, TData> {}
export function useDaoMultisigThresholdQuery<TData = ThresholdResponse>({
  client,
  options
}: DaoMultisigThresholdQuery<TData>) {
  return useQuery<ThresholdResponse, Error, TData>(daoMultisigQueryKeys.threshold(client?.contractAddress), () => client ? client.threshold() : Promise.reject(new Error("Invalid client")), { ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface DaoMultisigMemberChangedHookMutation {
  client: DaoMultisigClient;
  msg: MemberChangedHookMsg;
  args?: {
    coins?: Coins;
  };
}
export function useDaoMultisigMemberChangedHookMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, DaoMultisigMemberChangedHookMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, DaoMultisigMemberChangedHookMutation>(({
    client,
    msg,
    args: {
      coins
    } = {}
  }) => client.memberChangedHook(msg, coins), options);
}
export interface DaoMultisigCloseMutation {
  client: DaoMultisigClient;
  msg: {
    proposalId: number;
  };
  args?: {
    coins?: Coins;
  };
}
export function useDaoMultisigCloseMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, DaoMultisigCloseMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, DaoMultisigCloseMutation>(({
    client,
    msg,
    args: {
      coins
    } = {}
  }) => client.close(msg, coins), options);
}
export interface DaoMultisigExecuteMutation {
  client: DaoMultisigClient;
  msg: {
    proposalId: number;
  };
  args?: {
    coins?: Coins;
  };
}
export function useDaoMultisigExecuteMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, DaoMultisigExecuteMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, DaoMultisigExecuteMutation>(({
    client,
    msg,
    args: {
      coins
    } = {}
  }) => client.execute(msg, coins), options);
}
export interface DaoMultisigVoteMutation {
  client: DaoMultisigClient;
  msg: {
    proposalId: number;
    vote: Vote;
  };
  args?: {
    coins?: Coins;
  };
}
export function useDaoMultisigVoteMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, DaoMultisigVoteMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, DaoMultisigVoteMutation>(({
    client,
    msg,
    args: {
      coins
    } = {}
  }) => client.vote(msg, coins), options);
}
export interface DaoMultisigProposeMutation {
  client: DaoMultisigClient;
  msg: {
    description: string;
    latest?: Expiration;
    msgs: CosmosMsgForEmpty[];
    title: string;
  };
  args?: {
    coins?: Coins;
  };
}
export function useDaoMultisigProposeMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, DaoMultisigProposeMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, DaoMultisigProposeMutation>(({
    client,
    msg,
    args: {
      coins
    } = {}
  }) => client.propose(msg, coins), options);
}