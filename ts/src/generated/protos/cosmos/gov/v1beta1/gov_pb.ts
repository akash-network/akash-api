// @generated by protoc-gen-es v2.2.3 with parameter "target=ts,json_types=true,import_extension=ts"
// @generated from file cosmos/gov/v1beta1/gov.proto (package cosmos.gov.v1beta1, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Coin, CoinJson } from "../../base/v1beta1/coin_pb.ts";
import { file_cosmos_base_v1beta1_coin } from "../../base/v1beta1/coin_pb.ts";
import { file_gogoproto_gogo } from "../../../gogoproto/gogo_pb.ts";
import type { Any, AnyJson, Duration, DurationJson, Timestamp, TimestampJson } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_any, file_google_protobuf_duration, file_google_protobuf_timestamp } from "@bufbuild/protobuf/wkt";
import { file_cosmos_proto_cosmos } from "../../../cosmos_proto/cosmos_pb.ts";
import { file_amino_amino } from "../../../amino/amino_pb.ts";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file cosmos/gov/v1beta1/gov.proto.
 */
export const file_cosmos_gov_v1beta1_gov: GenFile = /*@__PURE__*/
  fileDesc("Chxjb3Ntb3MvZ292L3YxYmV0YTEvZ292LnByb3RvEhJjb3Ntb3MuZ292LnYxYmV0YTEikgEKEldlaWdodGVkVm90ZU9wdGlvbhIuCgZvcHRpb24YASABKA4yHi5jb3Ntb3MuZ292LnYxYmV0YTEuVm90ZU9wdGlvbhJMCgZ3ZWlnaHQYAiABKAlCPMjeHwDa3h8mZ2l0aHViLmNvbS9jb3Ntb3MvY29zbW9zLXNkay90eXBlcy5EZWPStC0KY29zbW9zLkRlYyJyCgxUZXh0UHJvcG9zYWwSDQoFdGl0bGUYASABKAkSEwoLZGVzY3JpcHRpb24YAiABKAk6PuigHwHKtC0aY29zbW9zLmdvdi52MWJldGExLkNvbnRlbnSK57AqF2Nvc21vcy1zZGsvVGV4dFByb3Bvc2FsIrcBCgdEZXBvc2l0EhMKC3Byb3Bvc2FsX2lkGAEgASgEEisKCWRlcG9zaXRvchgCIAEoCUIY0rQtFGNvc21vcy5BZGRyZXNzU3RyaW5nEmAKBmFtb3VudBgDIAMoCzIZLmNvc21vcy5iYXNlLnYxYmV0YTEuQ29pbkI1yN4fAKrfHyhnaXRodWIuY29tL2Nvc21vcy9jb3Ntb3Mtc2RrL3R5cGVzLkNvaW5zqOewKgE6CIigHwDooB8AIuAECghQcm9wb3NhbBITCgtwcm9wb3NhbF9pZBgBIAEoBBJFCgdjb250ZW50GAIgASgLMhQuZ29vZ2xlLnByb3RvYnVmLkFueUIeyrQtGmNvc21vcy5nb3YudjFiZXRhMS5Db250ZW50EjIKBnN0YXR1cxgDIAEoDjIiLmNvc21vcy5nb3YudjFiZXRhMS5Qcm9wb3NhbFN0YXR1cxJGChJmaW5hbF90YWxseV9yZXN1bHQYBCABKAsyHy5jb3Ntb3MuZ292LnYxYmV0YTEuVGFsbHlSZXN1bHRCCcjeHwCo57AqARI+CgtzdWJtaXRfdGltZRgFIAEoCzIaLmdvb2dsZS5wcm90b2J1Zi5UaW1lc3RhbXBCDcjeHwCQ3x8BqOewKgESQwoQZGVwb3NpdF9lbmRfdGltZRgGIAEoCzIaLmdvb2dsZS5wcm90b2J1Zi5UaW1lc3RhbXBCDcjeHwCQ3x8BqOewKgESZwoNdG90YWxfZGVwb3NpdBgHIAMoCzIZLmNvc21vcy5iYXNlLnYxYmV0YTEuQ29pbkI1yN4fAKrfHyhnaXRodWIuY29tL2Nvc21vcy9jb3Ntb3Mtc2RrL3R5cGVzLkNvaW5zqOewKgESRAoRdm90aW5nX3N0YXJ0X3RpbWUYCCABKAsyGi5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wQg3I3h8AkN8fAajnsCoBEkIKD3ZvdGluZ19lbmRfdGltZRgJIAEoCzIaLmdvb2dsZS5wcm90b2J1Zi5UaW1lc3RhbXBCDcjeHwCQ3x8BqOewKgE6BOigHwEiywIKC1RhbGx5UmVzdWx0EkkKA3llcxgBIAEoCUI8yN4fANreHyZnaXRodWIuY29tL2Nvc21vcy9jb3Ntb3Mtc2RrL3R5cGVzLkludNK0LQpjb3Ntb3MuSW50Ek0KB2Fic3RhaW4YAiABKAlCPMjeHwDa3h8mZ2l0aHViLmNvbS9jb3Ntb3MvY29zbW9zLXNkay90eXBlcy5JbnTStC0KY29zbW9zLkludBJICgJubxgDIAEoCUI8yN4fANreHyZnaXRodWIuY29tL2Nvc21vcy9jb3Ntb3Mtc2RrL3R5cGVzLkludNK0LQpjb3Ntb3MuSW50ElIKDG5vX3dpdGhfdmV0bxgEIAEoCUI8yN4fANreHyZnaXRodWIuY29tL2Nvc21vcy9jb3Ntb3Mtc2RrL3R5cGVzLkludNK0LQpjb3Ntb3MuSW50OgTooB8BItoBCgRWb3RlEicKC3Byb3Bvc2FsX2lkGAEgASgEQhLq3h8CaWSi57AqAmlkqOewKgESJwoFdm90ZXIYAiABKAlCGNK0LRRjb3Ntb3MuQWRkcmVzc1N0cmluZxIyCgZvcHRpb24YAyABKA4yHi5jb3Ntb3MuZ292LnYxYmV0YTEuVm90ZU9wdGlvbkICGAESQgoHb3B0aW9ucxgEIAMoCzImLmNvc21vcy5nb3YudjFiZXRhMS5XZWlnaHRlZFZvdGVPcHRpb25CCcjeHwCo57AqAToImKAfAOigHwAi6wEKDURlcG9zaXRQYXJhbXMSeQoLbWluX2RlcG9zaXQYASADKAsyGS5jb3Ntb3MuYmFzZS52MWJldGExLkNvaW5CScjeHwDq3h8VbWluX2RlcG9zaXQsb21pdGVtcHR5qt8fKGdpdGh1Yi5jb20vY29zbW9zL2Nvc21vcy1zZGsvdHlwZXMuQ29pbnMSXwoSbWF4X2RlcG9zaXRfcGVyaW9kGAIgASgLMhkuZ29vZ2xlLnByb3RvYnVmLkR1cmF0aW9uQijI3h8A6t4fHG1heF9kZXBvc2l0X3BlcmlvZCxvbWl0ZW1wdHmY3x8BImUKDFZvdGluZ1BhcmFtcxJVCg12b3RpbmdfcGVyaW9kGAEgASgLMhkuZ29vZ2xlLnByb3RvYnVmLkR1cmF0aW9uQiPI3h8A6t4fF3ZvdGluZ19wZXJpb2Qsb21pdGVtcHR5mN8fASKfAgoLVGFsbHlQYXJhbXMSUgoGcXVvcnVtGAEgASgMQkLI3h8A2t4fJmdpdGh1Yi5jb20vY29zbW9zL2Nvc21vcy1zZGsvdHlwZXMuRGVj6t4fEHF1b3J1bSxvbWl0ZW1wdHkSWAoJdGhyZXNob2xkGAIgASgMQkXI3h8A2t4fJmdpdGh1Yi5jb20vY29zbW9zL2Nvc21vcy1zZGsvdHlwZXMuRGVj6t4fE3RocmVzaG9sZCxvbWl0ZW1wdHkSYgoOdmV0b190aHJlc2hvbGQYAyABKAxCSsjeHwDa3h8mZ2l0aHViLmNvbS9jb3Ntb3MvY29zbW9zLXNkay90eXBlcy5EZWPq3h8YdmV0b190aHJlc2hvbGQsb21pdGVtcHR5KuYBCgpWb3RlT3B0aW9uEiwKF1ZPVEVfT1BUSU9OX1VOU1BFQ0lGSUVEEAAaD4qdIAtPcHRpb25FbXB0eRIiCg9WT1RFX09QVElPTl9ZRVMQARoNip0gCU9wdGlvblllcxIqChNWT1RFX09QVElPTl9BQlNUQUlOEAIaEYqdIA1PcHRpb25BYnN0YWluEiAKDlZPVEVfT1BUSU9OX05PEAMaDIqdIAhPcHRpb25ObxIyChhWT1RFX09QVElPTl9OT19XSVRIX1ZFVE8QBBoUip0gEE9wdGlvbk5vV2l0aFZldG8aBIijHgAqzAIKDlByb3Bvc2FsU3RhdHVzEi4KG1BST1BPU0FMX1NUQVRVU19VTlNQRUNJRklFRBAAGg2KnSAJU3RhdHVzTmlsEjsKHlBST1BPU0FMX1NUQVRVU19ERVBPU0lUX1BFUklPRBABGheKnSATU3RhdHVzRGVwb3NpdFBlcmlvZBI5Ch1QUk9QT1NBTF9TVEFUVVNfVk9USU5HX1BFUklPRBACGhaKnSASU3RhdHVzVm90aW5nUGVyaW9kEiwKFlBST1BPU0FMX1NUQVRVU19QQVNTRUQQAxoQip0gDFN0YXR1c1Bhc3NlZBIwChhQUk9QT1NBTF9TVEFUVVNfUkVKRUNURUQQBBoSip0gDlN0YXR1c1JlamVjdGVkEiwKFlBST1BPU0FMX1NUQVRVU19GQUlMRUQQBRoQip0gDFN0YXR1c0ZhaWxlZBoEiKMeAEI+WjBnaXRodWIuY29tL2Nvc21vcy9jb3Ntb3Mtc2RrL3gvZ292L3R5cGVzL3YxYmV0YTHI4R4A2OEeAIDiHgBiBnByb3RvMw", [file_cosmos_base_v1beta1_coin, file_gogoproto_gogo, file_google_protobuf_timestamp, file_google_protobuf_any, file_google_protobuf_duration, file_cosmos_proto_cosmos, file_amino_amino]);

/**
 * WeightedVoteOption defines a unit of vote for vote split.
 *
 * Since: cosmos-sdk 0.43
 *
 * @generated from message cosmos.gov.v1beta1.WeightedVoteOption
 */
export type WeightedVoteOption = Message<"cosmos.gov.v1beta1.WeightedVoteOption"> & {
  /**
   * option defines the valid vote options, it must not contain duplicate vote options.
   *
   * @generated from field: cosmos.gov.v1beta1.VoteOption option = 1;
   */
  option: VoteOption;

  /**
   * weight is the vote weight associated with the vote option. 
   *
   * @generated from field: string weight = 2;
   */
  weight: string;
};

/**
 * WeightedVoteOption defines a unit of vote for vote split.
 *
 * Since: cosmos-sdk 0.43
 *
 * @generated from message cosmos.gov.v1beta1.WeightedVoteOption
 */
export type WeightedVoteOptionJson = {
  /**
   * option defines the valid vote options, it must not contain duplicate vote options.
   *
   * @generated from field: cosmos.gov.v1beta1.VoteOption option = 1;
   */
  option?: VoteOptionJson;

  /**
   * weight is the vote weight associated with the vote option. 
   *
   * @generated from field: string weight = 2;
   */
  weight?: string;
};

/**
 * Describes the message cosmos.gov.v1beta1.WeightedVoteOption.
 * Use `create(WeightedVoteOptionSchema)` to create a new message.
 */
export const WeightedVoteOptionSchema: GenMessage<WeightedVoteOption, WeightedVoteOptionJson> = /*@__PURE__*/
  messageDesc(file_cosmos_gov_v1beta1_gov, 0);

/**
 * TextProposal defines a standard text proposal whose changes need to be
 * manually updated in case of approval.
 *
 * @generated from message cosmos.gov.v1beta1.TextProposal
 */
export type TextProposal = Message<"cosmos.gov.v1beta1.TextProposal"> & {
  /**
   * title of the proposal.
   *
   * @generated from field: string title = 1;
   */
  title: string;

  /**
   * description associated with the proposal.
   *
   * @generated from field: string description = 2;
   */
  description: string;
};

/**
 * TextProposal defines a standard text proposal whose changes need to be
 * manually updated in case of approval.
 *
 * @generated from message cosmos.gov.v1beta1.TextProposal
 */
export type TextProposalJson = {
  /**
   * title of the proposal.
   *
   * @generated from field: string title = 1;
   */
  title?: string;

  /**
   * description associated with the proposal.
   *
   * @generated from field: string description = 2;
   */
  description?: string;
};

/**
 * Describes the message cosmos.gov.v1beta1.TextProposal.
 * Use `create(TextProposalSchema)` to create a new message.
 */
export const TextProposalSchema: GenMessage<TextProposal, TextProposalJson> = /*@__PURE__*/
  messageDesc(file_cosmos_gov_v1beta1_gov, 1);

/**
 * Deposit defines an amount deposited by an account address to an active
 * proposal.
 *
 * @generated from message cosmos.gov.v1beta1.Deposit
 */
export type Deposit = Message<"cosmos.gov.v1beta1.Deposit"> & {
  /**
   * proposal_id defines the unique id of the proposal.
   *
   * @generated from field: uint64 proposal_id = 1;
   */
  proposalId: bigint;

  /**
   * depositor defines the deposit addresses from the proposals.
   *
   * @generated from field: string depositor = 2;
   */
  depositor: string;

  /**
   * amount to be deposited by depositor.
   *
   * @generated from field: repeated cosmos.base.v1beta1.Coin amount = 3;
   */
  amount: Coin[];
};

/**
 * Deposit defines an amount deposited by an account address to an active
 * proposal.
 *
 * @generated from message cosmos.gov.v1beta1.Deposit
 */
export type DepositJson = {
  /**
   * proposal_id defines the unique id of the proposal.
   *
   * @generated from field: uint64 proposal_id = 1;
   */
  proposalId?: string;

  /**
   * depositor defines the deposit addresses from the proposals.
   *
   * @generated from field: string depositor = 2;
   */
  depositor?: string;

  /**
   * amount to be deposited by depositor.
   *
   * @generated from field: repeated cosmos.base.v1beta1.Coin amount = 3;
   */
  amount?: CoinJson[];
};

/**
 * Describes the message cosmos.gov.v1beta1.Deposit.
 * Use `create(DepositSchema)` to create a new message.
 */
export const DepositSchema: GenMessage<Deposit, DepositJson> = /*@__PURE__*/
  messageDesc(file_cosmos_gov_v1beta1_gov, 2);

/**
 * Proposal defines the core field members of a governance proposal.
 *
 * @generated from message cosmos.gov.v1beta1.Proposal
 */
export type Proposal = Message<"cosmos.gov.v1beta1.Proposal"> & {
  /**
   * proposal_id defines the unique id of the proposal.
   *
   * @generated from field: uint64 proposal_id = 1;
   */
  proposalId: bigint;

  /**
   * content is the proposal's content.
   *
   * @generated from field: google.protobuf.Any content = 2;
   */
  content?: Any;

  /**
   * status defines the proposal status.
   *
   * @generated from field: cosmos.gov.v1beta1.ProposalStatus status = 3;
   */
  status: ProposalStatus;

  /**
   * final_tally_result is the final tally result of the proposal. When
   * querying a proposal via gRPC, this field is not populated until the
   * proposal's voting period has ended.
   *
   * @generated from field: cosmos.gov.v1beta1.TallyResult final_tally_result = 4;
   */
  finalTallyResult?: TallyResult;

  /**
   * submit_time is the time of proposal submission.
   *
   * @generated from field: google.protobuf.Timestamp submit_time = 5;
   */
  submitTime?: Timestamp;

  /**
   * deposit_end_time is the end time for deposition.
   *
   * @generated from field: google.protobuf.Timestamp deposit_end_time = 6;
   */
  depositEndTime?: Timestamp;

  /**
   * total_deposit is the total deposit on the proposal.
   *
   * @generated from field: repeated cosmos.base.v1beta1.Coin total_deposit = 7;
   */
  totalDeposit: Coin[];

  /**
   * voting_start_time is the starting time to vote on a proposal.
   *
   * @generated from field: google.protobuf.Timestamp voting_start_time = 8;
   */
  votingStartTime?: Timestamp;

  /**
   * voting_end_time is the end time of voting on a proposal.
   *
   * @generated from field: google.protobuf.Timestamp voting_end_time = 9;
   */
  votingEndTime?: Timestamp;
};

/**
 * Proposal defines the core field members of a governance proposal.
 *
 * @generated from message cosmos.gov.v1beta1.Proposal
 */
export type ProposalJson = {
  /**
   * proposal_id defines the unique id of the proposal.
   *
   * @generated from field: uint64 proposal_id = 1;
   */
  proposalId?: string;

  /**
   * content is the proposal's content.
   *
   * @generated from field: google.protobuf.Any content = 2;
   */
  content?: AnyJson;

  /**
   * status defines the proposal status.
   *
   * @generated from field: cosmos.gov.v1beta1.ProposalStatus status = 3;
   */
  status?: ProposalStatusJson;

  /**
   * final_tally_result is the final tally result of the proposal. When
   * querying a proposal via gRPC, this field is not populated until the
   * proposal's voting period has ended.
   *
   * @generated from field: cosmos.gov.v1beta1.TallyResult final_tally_result = 4;
   */
  finalTallyResult?: TallyResultJson;

  /**
   * submit_time is the time of proposal submission.
   *
   * @generated from field: google.protobuf.Timestamp submit_time = 5;
   */
  submitTime?: TimestampJson;

  /**
   * deposit_end_time is the end time for deposition.
   *
   * @generated from field: google.protobuf.Timestamp deposit_end_time = 6;
   */
  depositEndTime?: TimestampJson;

  /**
   * total_deposit is the total deposit on the proposal.
   *
   * @generated from field: repeated cosmos.base.v1beta1.Coin total_deposit = 7;
   */
  totalDeposit?: CoinJson[];

  /**
   * voting_start_time is the starting time to vote on a proposal.
   *
   * @generated from field: google.protobuf.Timestamp voting_start_time = 8;
   */
  votingStartTime?: TimestampJson;

  /**
   * voting_end_time is the end time of voting on a proposal.
   *
   * @generated from field: google.protobuf.Timestamp voting_end_time = 9;
   */
  votingEndTime?: TimestampJson;
};

/**
 * Describes the message cosmos.gov.v1beta1.Proposal.
 * Use `create(ProposalSchema)` to create a new message.
 */
export const ProposalSchema: GenMessage<Proposal, ProposalJson> = /*@__PURE__*/
  messageDesc(file_cosmos_gov_v1beta1_gov, 3);

/**
 * TallyResult defines a standard tally for a governance proposal.
 *
 * @generated from message cosmos.gov.v1beta1.TallyResult
 */
export type TallyResult = Message<"cosmos.gov.v1beta1.TallyResult"> & {
  /**
   * yes is the number of yes votes on a proposal.
   *
   * @generated from field: string yes = 1;
   */
  yes: string;

  /**
   * abstain is the number of abstain votes on a proposal.
   *
   * @generated from field: string abstain = 2;
   */
  abstain: string;

  /**
   * no is the number of no votes on a proposal.
   *
   * @generated from field: string no = 3;
   */
  no: string;

  /**
   * no_with_veto is the number of no with veto votes on a proposal.
   *
   * @generated from field: string no_with_veto = 4;
   */
  noWithVeto: string;
};

/**
 * TallyResult defines a standard tally for a governance proposal.
 *
 * @generated from message cosmos.gov.v1beta1.TallyResult
 */
export type TallyResultJson = {
  /**
   * yes is the number of yes votes on a proposal.
   *
   * @generated from field: string yes = 1;
   */
  yes?: string;

  /**
   * abstain is the number of abstain votes on a proposal.
   *
   * @generated from field: string abstain = 2;
   */
  abstain?: string;

  /**
   * no is the number of no votes on a proposal.
   *
   * @generated from field: string no = 3;
   */
  no?: string;

  /**
   * no_with_veto is the number of no with veto votes on a proposal.
   *
   * @generated from field: string no_with_veto = 4;
   */
  noWithVeto?: string;
};

/**
 * Describes the message cosmos.gov.v1beta1.TallyResult.
 * Use `create(TallyResultSchema)` to create a new message.
 */
export const TallyResultSchema: GenMessage<TallyResult, TallyResultJson> = /*@__PURE__*/
  messageDesc(file_cosmos_gov_v1beta1_gov, 4);

/**
 * Vote defines a vote on a governance proposal.
 * A Vote consists of a proposal ID, the voter, and the vote option.
 *
 * @generated from message cosmos.gov.v1beta1.Vote
 */
export type Vote = Message<"cosmos.gov.v1beta1.Vote"> & {
  /**
   * proposal_id defines the unique id of the proposal.
   *
   * @generated from field: uint64 proposal_id = 1;
   */
  proposalId: bigint;

  /**
   * voter is the voter address of the proposal.
   *
   * @generated from field: string voter = 2;
   */
  voter: string;

  /**
   * Deprecated: Prefer to use `options` instead. This field is set in queries
   * if and only if `len(options) == 1` and that option has weight 1. In all
   * other cases, this field will default to VOTE_OPTION_UNSPECIFIED.
   *
   * @generated from field: cosmos.gov.v1beta1.VoteOption option = 3 [deprecated = true];
   * @deprecated
   */
  option: VoteOption;

  /**
   * options is the weighted vote options.
   *
   * Since: cosmos-sdk 0.43
   *
   * @generated from field: repeated cosmos.gov.v1beta1.WeightedVoteOption options = 4;
   */
  options: WeightedVoteOption[];
};

/**
 * Vote defines a vote on a governance proposal.
 * A Vote consists of a proposal ID, the voter, and the vote option.
 *
 * @generated from message cosmos.gov.v1beta1.Vote
 */
export type VoteJson = {
  /**
   * proposal_id defines the unique id of the proposal.
   *
   * @generated from field: uint64 proposal_id = 1;
   */
  proposalId?: string;

  /**
   * voter is the voter address of the proposal.
   *
   * @generated from field: string voter = 2;
   */
  voter?: string;

  /**
   * Deprecated: Prefer to use `options` instead. This field is set in queries
   * if and only if `len(options) == 1` and that option has weight 1. In all
   * other cases, this field will default to VOTE_OPTION_UNSPECIFIED.
   *
   * @generated from field: cosmos.gov.v1beta1.VoteOption option = 3 [deprecated = true];
   * @deprecated
   */
  option?: VoteOptionJson;

  /**
   * options is the weighted vote options.
   *
   * Since: cosmos-sdk 0.43
   *
   * @generated from field: repeated cosmos.gov.v1beta1.WeightedVoteOption options = 4;
   */
  options?: WeightedVoteOptionJson[];
};

/**
 * Describes the message cosmos.gov.v1beta1.Vote.
 * Use `create(VoteSchema)` to create a new message.
 */
export const VoteSchema: GenMessage<Vote, VoteJson> = /*@__PURE__*/
  messageDesc(file_cosmos_gov_v1beta1_gov, 5);

/**
 * DepositParams defines the params for deposits on governance proposals.
 *
 * @generated from message cosmos.gov.v1beta1.DepositParams
 */
export type DepositParams = Message<"cosmos.gov.v1beta1.DepositParams"> & {
  /**
   * Minimum deposit for a proposal to enter voting period.
   *
   * @generated from field: repeated cosmos.base.v1beta1.Coin min_deposit = 1;
   */
  minDeposit: Coin[];

  /**
   * Maximum period for Atom holders to deposit on a proposal. Initial value: 2
   * months.
   *
   * @generated from field: google.protobuf.Duration max_deposit_period = 2;
   */
  maxDepositPeriod?: Duration;
};

/**
 * DepositParams defines the params for deposits on governance proposals.
 *
 * @generated from message cosmos.gov.v1beta1.DepositParams
 */
export type DepositParamsJson = {
  /**
   * Minimum deposit for a proposal to enter voting period.
   *
   * @generated from field: repeated cosmos.base.v1beta1.Coin min_deposit = 1;
   */
  minDeposit?: CoinJson[];

  /**
   * Maximum period for Atom holders to deposit on a proposal. Initial value: 2
   * months.
   *
   * @generated from field: google.protobuf.Duration max_deposit_period = 2;
   */
  maxDepositPeriod?: DurationJson;
};

/**
 * Describes the message cosmos.gov.v1beta1.DepositParams.
 * Use `create(DepositParamsSchema)` to create a new message.
 */
export const DepositParamsSchema: GenMessage<DepositParams, DepositParamsJson> = /*@__PURE__*/
  messageDesc(file_cosmos_gov_v1beta1_gov, 6);

/**
 * VotingParams defines the params for voting on governance proposals.
 *
 * @generated from message cosmos.gov.v1beta1.VotingParams
 */
export type VotingParams = Message<"cosmos.gov.v1beta1.VotingParams"> & {
  /**
   * Duration of the voting period.
   *
   * @generated from field: google.protobuf.Duration voting_period = 1;
   */
  votingPeriod?: Duration;
};

/**
 * VotingParams defines the params for voting on governance proposals.
 *
 * @generated from message cosmos.gov.v1beta1.VotingParams
 */
export type VotingParamsJson = {
  /**
   * Duration of the voting period.
   *
   * @generated from field: google.protobuf.Duration voting_period = 1;
   */
  votingPeriod?: DurationJson;
};

/**
 * Describes the message cosmos.gov.v1beta1.VotingParams.
 * Use `create(VotingParamsSchema)` to create a new message.
 */
export const VotingParamsSchema: GenMessage<VotingParams, VotingParamsJson> = /*@__PURE__*/
  messageDesc(file_cosmos_gov_v1beta1_gov, 7);

/**
 * TallyParams defines the params for tallying votes on governance proposals.
 *
 * @generated from message cosmos.gov.v1beta1.TallyParams
 */
export type TallyParams = Message<"cosmos.gov.v1beta1.TallyParams"> & {
  /**
   * Minimum percentage of total stake needed to vote for a result to be
   * considered valid.
   *
   * @generated from field: bytes quorum = 1;
   */
  quorum: Uint8Array;

  /**
   * Minimum proportion of Yes votes for proposal to pass. Default value: 0.5.
   *
   * @generated from field: bytes threshold = 2;
   */
  threshold: Uint8Array;

  /**
   * Minimum value of Veto votes to Total votes ratio for proposal to be
   * vetoed. Default value: 1/3.
   *
   * @generated from field: bytes veto_threshold = 3;
   */
  vetoThreshold: Uint8Array;
};

/**
 * TallyParams defines the params for tallying votes on governance proposals.
 *
 * @generated from message cosmos.gov.v1beta1.TallyParams
 */
export type TallyParamsJson = {
  /**
   * Minimum percentage of total stake needed to vote for a result to be
   * considered valid.
   *
   * @generated from field: bytes quorum = 1;
   */
  quorum?: string;

  /**
   * Minimum proportion of Yes votes for proposal to pass. Default value: 0.5.
   *
   * @generated from field: bytes threshold = 2;
   */
  threshold?: string;

  /**
   * Minimum value of Veto votes to Total votes ratio for proposal to be
   * vetoed. Default value: 1/3.
   *
   * @generated from field: bytes veto_threshold = 3;
   */
  vetoThreshold?: string;
};

/**
 * Describes the message cosmos.gov.v1beta1.TallyParams.
 * Use `create(TallyParamsSchema)` to create a new message.
 */
export const TallyParamsSchema: GenMessage<TallyParams, TallyParamsJson> = /*@__PURE__*/
  messageDesc(file_cosmos_gov_v1beta1_gov, 8);

/**
 * VoteOption enumerates the valid vote options for a given governance proposal.
 *
 * @generated from enum cosmos.gov.v1beta1.VoteOption
 */
export enum VoteOption {
  /**
   * VOTE_OPTION_UNSPECIFIED defines a no-op vote option.
   *
   * @generated from enum value: VOTE_OPTION_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * VOTE_OPTION_YES defines a yes vote option.
   *
   * @generated from enum value: VOTE_OPTION_YES = 1;
   */
  YES = 1,

  /**
   * VOTE_OPTION_ABSTAIN defines an abstain vote option.
   *
   * @generated from enum value: VOTE_OPTION_ABSTAIN = 2;
   */
  ABSTAIN = 2,

  /**
   * VOTE_OPTION_NO defines a no vote option.
   *
   * @generated from enum value: VOTE_OPTION_NO = 3;
   */
  NO = 3,

  /**
   * VOTE_OPTION_NO_WITH_VETO defines a no with veto vote option.
   *
   * @generated from enum value: VOTE_OPTION_NO_WITH_VETO = 4;
   */
  NO_WITH_VETO = 4,
}

/**
 * VoteOption enumerates the valid vote options for a given governance proposal.
 *
 * @generated from enum cosmos.gov.v1beta1.VoteOption
 */
export type VoteOptionJson = "VOTE_OPTION_UNSPECIFIED" | "VOTE_OPTION_YES" | "VOTE_OPTION_ABSTAIN" | "VOTE_OPTION_NO" | "VOTE_OPTION_NO_WITH_VETO";

/**
 * Describes the enum cosmos.gov.v1beta1.VoteOption.
 */
export const VoteOptionSchema: GenEnum<VoteOption, VoteOptionJson> = /*@__PURE__*/
  enumDesc(file_cosmos_gov_v1beta1_gov, 0);

/**
 * ProposalStatus enumerates the valid statuses of a proposal.
 *
 * @generated from enum cosmos.gov.v1beta1.ProposalStatus
 */
export enum ProposalStatus {
  /**
   * PROPOSAL_STATUS_UNSPECIFIED defines the default proposal status.
   *
   * @generated from enum value: PROPOSAL_STATUS_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * PROPOSAL_STATUS_DEPOSIT_PERIOD defines a proposal status during the deposit
   * period.
   *
   * @generated from enum value: PROPOSAL_STATUS_DEPOSIT_PERIOD = 1;
   */
  DEPOSIT_PERIOD = 1,

  /**
   * PROPOSAL_STATUS_VOTING_PERIOD defines a proposal status during the voting
   * period.
   *
   * @generated from enum value: PROPOSAL_STATUS_VOTING_PERIOD = 2;
   */
  VOTING_PERIOD = 2,

  /**
   * PROPOSAL_STATUS_PASSED defines a proposal status of a proposal that has
   * passed.
   *
   * @generated from enum value: PROPOSAL_STATUS_PASSED = 3;
   */
  PASSED = 3,

  /**
   * PROPOSAL_STATUS_REJECTED defines a proposal status of a proposal that has
   * been rejected.
   *
   * @generated from enum value: PROPOSAL_STATUS_REJECTED = 4;
   */
  REJECTED = 4,

  /**
   * PROPOSAL_STATUS_FAILED defines a proposal status of a proposal that has
   * failed.
   *
   * @generated from enum value: PROPOSAL_STATUS_FAILED = 5;
   */
  FAILED = 5,
}

/**
 * ProposalStatus enumerates the valid statuses of a proposal.
 *
 * @generated from enum cosmos.gov.v1beta1.ProposalStatus
 */
export type ProposalStatusJson = "PROPOSAL_STATUS_UNSPECIFIED" | "PROPOSAL_STATUS_DEPOSIT_PERIOD" | "PROPOSAL_STATUS_VOTING_PERIOD" | "PROPOSAL_STATUS_PASSED" | "PROPOSAL_STATUS_REJECTED" | "PROPOSAL_STATUS_FAILED";

/**
 * Describes the enum cosmos.gov.v1beta1.ProposalStatus.
 */
export const ProposalStatusSchema: GenEnum<ProposalStatus, ProposalStatusJson> = /*@__PURE__*/
  enumDesc(file_cosmos_gov_v1beta1_gov, 1);

