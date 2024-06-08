"use strict";
// @generated by protoc-gen-es v1.5.0 with parameter "target=ts"
// @generated from file cosmos/distribution/v1beta1/genesis.proto (package cosmos.distribution.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisState = exports.ValidatorSlashEventRecord = exports.DelegatorStartingInfoRecord = exports.ValidatorCurrentRewardsRecord = exports.ValidatorHistoricalRewardsRecord = exports.ValidatorAccumulatedCommissionRecord = exports.ValidatorOutstandingRewardsRecord = exports.DelegatorWithdrawInfo = void 0;
const protobuf_1 = require("@bufbuild/protobuf");
const coin_pb_js_1 = require("../../base/v1beta1/coin_pb.js");
const distribution_pb_js_1 = require("./distribution_pb.js");
/**
 * DelegatorWithdrawInfo is the address for where distributions rewards are
 * withdrawn to by default this struct is only used at genesis to feed in
 * default withdraw addresses.
 *
 * @generated from message cosmos.distribution.v1beta1.DelegatorWithdrawInfo
 */
class DelegatorWithdrawInfo extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * delegator_address is the address of the delegator.
         *
         * @generated from field: string delegator_address = 1;
         */
        this.delegatorAddress = "";
        /**
         * withdraw_address is the address to withdraw the delegation rewards to.
         *
         * @generated from field: string withdraw_address = 2;
         */
        this.withdrawAddress = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new DelegatorWithdrawInfo().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new DelegatorWithdrawInfo().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new DelegatorWithdrawInfo().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(DelegatorWithdrawInfo, a, b);
    }
}
exports.DelegatorWithdrawInfo = DelegatorWithdrawInfo;
DelegatorWithdrawInfo.runtime = protobuf_1.proto3;
DelegatorWithdrawInfo.typeName = "cosmos.distribution.v1beta1.DelegatorWithdrawInfo";
DelegatorWithdrawInfo.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "delegator_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "withdraw_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * ValidatorOutstandingRewardsRecord is used for import/export via genesis json.
 *
 * @generated from message cosmos.distribution.v1beta1.ValidatorOutstandingRewardsRecord
 */
class ValidatorOutstandingRewardsRecord extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * validator_address is the address of the validator.
         *
         * @generated from field: string validator_address = 1;
         */
        this.validatorAddress = "";
        /**
         * outstanding_rewards represents the outstanding rewards of a validator.
         *
         * @generated from field: repeated cosmos.base.v1beta1.DecCoin outstanding_rewards = 2;
         */
        this.outstandingRewards = [];
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new ValidatorOutstandingRewardsRecord().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new ValidatorOutstandingRewardsRecord().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new ValidatorOutstandingRewardsRecord().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(ValidatorOutstandingRewardsRecord, a, b);
    }
}
exports.ValidatorOutstandingRewardsRecord = ValidatorOutstandingRewardsRecord;
ValidatorOutstandingRewardsRecord.runtime = protobuf_1.proto3;
ValidatorOutstandingRewardsRecord.typeName = "cosmos.distribution.v1beta1.ValidatorOutstandingRewardsRecord";
ValidatorOutstandingRewardsRecord.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "validator_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "outstanding_rewards", kind: "message", T: coin_pb_js_1.DecCoin, repeated: true },
]);
/**
 * ValidatorAccumulatedCommissionRecord is used for import / export via genesis
 * json.
 *
 * @generated from message cosmos.distribution.v1beta1.ValidatorAccumulatedCommissionRecord
 */
class ValidatorAccumulatedCommissionRecord extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * validator_address is the address of the validator.
         *
         * @generated from field: string validator_address = 1;
         */
        this.validatorAddress = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new ValidatorAccumulatedCommissionRecord().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new ValidatorAccumulatedCommissionRecord().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new ValidatorAccumulatedCommissionRecord().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(ValidatorAccumulatedCommissionRecord, a, b);
    }
}
exports.ValidatorAccumulatedCommissionRecord = ValidatorAccumulatedCommissionRecord;
ValidatorAccumulatedCommissionRecord.runtime = protobuf_1.proto3;
ValidatorAccumulatedCommissionRecord.typeName = "cosmos.distribution.v1beta1.ValidatorAccumulatedCommissionRecord";
ValidatorAccumulatedCommissionRecord.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "validator_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "accumulated", kind: "message", T: distribution_pb_js_1.ValidatorAccumulatedCommission },
]);
/**
 * ValidatorHistoricalRewardsRecord is used for import / export via genesis
 * json.
 *
 * @generated from message cosmos.distribution.v1beta1.ValidatorHistoricalRewardsRecord
 */
class ValidatorHistoricalRewardsRecord extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * validator_address is the address of the validator.
         *
         * @generated from field: string validator_address = 1;
         */
        this.validatorAddress = "";
        /**
         * period defines the period the historical rewards apply to.
         *
         * @generated from field: uint64 period = 2;
         */
        this.period = protobuf_1.protoInt64.zero;
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new ValidatorHistoricalRewardsRecord().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new ValidatorHistoricalRewardsRecord().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new ValidatorHistoricalRewardsRecord().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(ValidatorHistoricalRewardsRecord, a, b);
    }
}
exports.ValidatorHistoricalRewardsRecord = ValidatorHistoricalRewardsRecord;
ValidatorHistoricalRewardsRecord.runtime = protobuf_1.proto3;
ValidatorHistoricalRewardsRecord.typeName = "cosmos.distribution.v1beta1.ValidatorHistoricalRewardsRecord";
ValidatorHistoricalRewardsRecord.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "validator_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "period", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: "rewards", kind: "message", T: distribution_pb_js_1.ValidatorHistoricalRewards },
]);
/**
 * ValidatorCurrentRewardsRecord is used for import / export via genesis json.
 *
 * @generated from message cosmos.distribution.v1beta1.ValidatorCurrentRewardsRecord
 */
class ValidatorCurrentRewardsRecord extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * validator_address is the address of the validator.
         *
         * @generated from field: string validator_address = 1;
         */
        this.validatorAddress = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new ValidatorCurrentRewardsRecord().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new ValidatorCurrentRewardsRecord().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new ValidatorCurrentRewardsRecord().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(ValidatorCurrentRewardsRecord, a, b);
    }
}
exports.ValidatorCurrentRewardsRecord = ValidatorCurrentRewardsRecord;
ValidatorCurrentRewardsRecord.runtime = protobuf_1.proto3;
ValidatorCurrentRewardsRecord.typeName = "cosmos.distribution.v1beta1.ValidatorCurrentRewardsRecord";
ValidatorCurrentRewardsRecord.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "validator_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "rewards", kind: "message", T: distribution_pb_js_1.ValidatorCurrentRewards },
]);
/**
 * DelegatorStartingInfoRecord used for import / export via genesis json.
 *
 * @generated from message cosmos.distribution.v1beta1.DelegatorStartingInfoRecord
 */
class DelegatorStartingInfoRecord extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * delegator_address is the address of the delegator.
         *
         * @generated from field: string delegator_address = 1;
         */
        this.delegatorAddress = "";
        /**
         * validator_address is the address of the validator.
         *
         * @generated from field: string validator_address = 2;
         */
        this.validatorAddress = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new DelegatorStartingInfoRecord().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new DelegatorStartingInfoRecord().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new DelegatorStartingInfoRecord().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(DelegatorStartingInfoRecord, a, b);
    }
}
exports.DelegatorStartingInfoRecord = DelegatorStartingInfoRecord;
DelegatorStartingInfoRecord.runtime = protobuf_1.proto3;
DelegatorStartingInfoRecord.typeName = "cosmos.distribution.v1beta1.DelegatorStartingInfoRecord";
DelegatorStartingInfoRecord.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "delegator_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "validator_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "starting_info", kind: "message", T: distribution_pb_js_1.DelegatorStartingInfo },
]);
/**
 * ValidatorSlashEventRecord is used for import / export via genesis json.
 *
 * @generated from message cosmos.distribution.v1beta1.ValidatorSlashEventRecord
 */
class ValidatorSlashEventRecord extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * validator_address is the address of the validator.
         *
         * @generated from field: string validator_address = 1;
         */
        this.validatorAddress = "";
        /**
         * height defines the block height at which the slash event occurred.
         *
         * @generated from field: uint64 height = 2;
         */
        this.height = protobuf_1.protoInt64.zero;
        /**
         * period is the period of the slash event.
         *
         * @generated from field: uint64 period = 3;
         */
        this.period = protobuf_1.protoInt64.zero;
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new ValidatorSlashEventRecord().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new ValidatorSlashEventRecord().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new ValidatorSlashEventRecord().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(ValidatorSlashEventRecord, a, b);
    }
}
exports.ValidatorSlashEventRecord = ValidatorSlashEventRecord;
ValidatorSlashEventRecord.runtime = protobuf_1.proto3;
ValidatorSlashEventRecord.typeName = "cosmos.distribution.v1beta1.ValidatorSlashEventRecord";
ValidatorSlashEventRecord.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "validator_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "height", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: "period", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 4, name: "validator_slash_event", kind: "message", T: distribution_pb_js_1.ValidatorSlashEvent },
]);
/**
 * GenesisState defines the distribution module's genesis state.
 *
 * @generated from message cosmos.distribution.v1beta1.GenesisState
 */
class GenesisState extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * fee_pool defines the delegator withdraw infos at genesis.
         *
         * @generated from field: repeated cosmos.distribution.v1beta1.DelegatorWithdrawInfo delegator_withdraw_infos = 3;
         */
        this.delegatorWithdrawInfos = [];
        /**
         * fee_pool defines the previous proposer at genesis.
         *
         * @generated from field: string previous_proposer = 4;
         */
        this.previousProposer = "";
        /**
         * fee_pool defines the outstanding rewards of all validators at genesis.
         *
         * @generated from field: repeated cosmos.distribution.v1beta1.ValidatorOutstandingRewardsRecord outstanding_rewards = 5;
         */
        this.outstandingRewards = [];
        /**
         * fee_pool defines the accumulated commissions of all validators at genesis.
         *
         * @generated from field: repeated cosmos.distribution.v1beta1.ValidatorAccumulatedCommissionRecord validator_accumulated_commissions = 6;
         */
        this.validatorAccumulatedCommissions = [];
        /**
         * fee_pool defines the historical rewards of all validators at genesis.
         *
         * @generated from field: repeated cosmos.distribution.v1beta1.ValidatorHistoricalRewardsRecord validator_historical_rewards = 7;
         */
        this.validatorHistoricalRewards = [];
        /**
         * fee_pool defines the current rewards of all validators at genesis.
         *
         * @generated from field: repeated cosmos.distribution.v1beta1.ValidatorCurrentRewardsRecord validator_current_rewards = 8;
         */
        this.validatorCurrentRewards = [];
        /**
         * fee_pool defines the delegator starting infos at genesis.
         *
         * @generated from field: repeated cosmos.distribution.v1beta1.DelegatorStartingInfoRecord delegator_starting_infos = 9;
         */
        this.delegatorStartingInfos = [];
        /**
         * fee_pool defines the validator slash events at genesis.
         *
         * @generated from field: repeated cosmos.distribution.v1beta1.ValidatorSlashEventRecord validator_slash_events = 10;
         */
        this.validatorSlashEvents = [];
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new GenesisState().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new GenesisState().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new GenesisState().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(GenesisState, a, b);
    }
}
exports.GenesisState = GenesisState;
GenesisState.runtime = protobuf_1.proto3;
GenesisState.typeName = "cosmos.distribution.v1beta1.GenesisState";
GenesisState.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "params", kind: "message", T: distribution_pb_js_1.Params },
    { no: 2, name: "fee_pool", kind: "message", T: distribution_pb_js_1.FeePool },
    { no: 3, name: "delegator_withdraw_infos", kind: "message", T: DelegatorWithdrawInfo, repeated: true },
    { no: 4, name: "previous_proposer", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "outstanding_rewards", kind: "message", T: ValidatorOutstandingRewardsRecord, repeated: true },
    { no: 6, name: "validator_accumulated_commissions", kind: "message", T: ValidatorAccumulatedCommissionRecord, repeated: true },
    { no: 7, name: "validator_historical_rewards", kind: "message", T: ValidatorHistoricalRewardsRecord, repeated: true },
    { no: 8, name: "validator_current_rewards", kind: "message", T: ValidatorCurrentRewardsRecord, repeated: true },
    { no: 9, name: "delegator_starting_infos", kind: "message", T: DelegatorStartingInfoRecord, repeated: true },
    { no: 10, name: "validator_slash_events", kind: "message", T: ValidatorSlashEventRecord, repeated: true },
]);