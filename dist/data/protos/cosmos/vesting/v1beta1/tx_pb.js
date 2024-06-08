"use strict";
// @generated by protoc-gen-es v1.5.0 with parameter "target=ts"
// @generated from file cosmos/vesting/v1beta1/tx.proto (package cosmos.vesting.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgCreatePeriodicVestingAccountResponse = exports.MsgCreatePeriodicVestingAccount = exports.MsgCreatePermanentLockedAccountResponse = exports.MsgCreatePermanentLockedAccount = exports.MsgCreateVestingAccountResponse = exports.MsgCreateVestingAccount = void 0;
const protobuf_1 = require("@bufbuild/protobuf");
const coin_pb_js_1 = require("../../base/v1beta1/coin_pb.js");
const vesting_pb_js_1 = require("./vesting_pb.js");
/**
 * MsgCreateVestingAccount defines a message that enables creating a vesting
 * account.
 *
 * @generated from message cosmos.vesting.v1beta1.MsgCreateVestingAccount
 */
class MsgCreateVestingAccount extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string from_address = 1;
         */
        this.fromAddress = "";
        /**
         * @generated from field: string to_address = 2;
         */
        this.toAddress = "";
        /**
         * @generated from field: repeated cosmos.base.v1beta1.Coin amount = 3;
         */
        this.amount = [];
        /**
         * end of vesting as unix time (in seconds).
         *
         * @generated from field: int64 end_time = 4;
         */
        this.endTime = protobuf_1.protoInt64.zero;
        /**
         * @generated from field: bool delayed = 5;
         */
        this.delayed = false;
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgCreateVestingAccount().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgCreateVestingAccount().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgCreateVestingAccount().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(MsgCreateVestingAccount, a, b);
    }
}
exports.MsgCreateVestingAccount = MsgCreateVestingAccount;
MsgCreateVestingAccount.runtime = protobuf_1.proto3;
MsgCreateVestingAccount.typeName = "cosmos.vesting.v1beta1.MsgCreateVestingAccount";
MsgCreateVestingAccount.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "from_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "to_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "amount", kind: "message", T: coin_pb_js_1.Coin, repeated: true },
    { no: 4, name: "end_time", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 5, name: "delayed", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
]);
/**
 * MsgCreateVestingAccountResponse defines the Msg/CreateVestingAccount response type.
 *
 * @generated from message cosmos.vesting.v1beta1.MsgCreateVestingAccountResponse
 */
class MsgCreateVestingAccountResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgCreateVestingAccountResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgCreateVestingAccountResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgCreateVestingAccountResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(MsgCreateVestingAccountResponse, a, b);
    }
}
exports.MsgCreateVestingAccountResponse = MsgCreateVestingAccountResponse;
MsgCreateVestingAccountResponse.runtime = protobuf_1.proto3;
MsgCreateVestingAccountResponse.typeName = "cosmos.vesting.v1beta1.MsgCreateVestingAccountResponse";
MsgCreateVestingAccountResponse.fields = protobuf_1.proto3.util.newFieldList(() => []);
/**
 * MsgCreatePermanentLockedAccount defines a message that enables creating a permanent
 * locked account.
 *
 * Since: cosmos-sdk 0.46
 *
 * @generated from message cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount
 */
class MsgCreatePermanentLockedAccount extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string from_address = 1;
         */
        this.fromAddress = "";
        /**
         * @generated from field: string to_address = 2;
         */
        this.toAddress = "";
        /**
         * @generated from field: repeated cosmos.base.v1beta1.Coin amount = 3;
         */
        this.amount = [];
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgCreatePermanentLockedAccount().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgCreatePermanentLockedAccount().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgCreatePermanentLockedAccount().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(MsgCreatePermanentLockedAccount, a, b);
    }
}
exports.MsgCreatePermanentLockedAccount = MsgCreatePermanentLockedAccount;
MsgCreatePermanentLockedAccount.runtime = protobuf_1.proto3;
MsgCreatePermanentLockedAccount.typeName = "cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount";
MsgCreatePermanentLockedAccount.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "from_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "to_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "amount", kind: "message", T: coin_pb_js_1.Coin, repeated: true },
]);
/**
 * MsgCreatePermanentLockedAccountResponse defines the Msg/CreatePermanentLockedAccount response type.
 *
 * Since: cosmos-sdk 0.46
 *
 * @generated from message cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccountResponse
 */
class MsgCreatePermanentLockedAccountResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgCreatePermanentLockedAccountResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgCreatePermanentLockedAccountResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgCreatePermanentLockedAccountResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(MsgCreatePermanentLockedAccountResponse, a, b);
    }
}
exports.MsgCreatePermanentLockedAccountResponse = MsgCreatePermanentLockedAccountResponse;
MsgCreatePermanentLockedAccountResponse.runtime = protobuf_1.proto3;
MsgCreatePermanentLockedAccountResponse.typeName = "cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccountResponse";
MsgCreatePermanentLockedAccountResponse.fields = protobuf_1.proto3.util.newFieldList(() => []);
/**
 * MsgCreateVestingAccount defines a message that enables creating a vesting
 * account.
 *
 * Since: cosmos-sdk 0.46
 *
 * @generated from message cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount
 */
class MsgCreatePeriodicVestingAccount extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string from_address = 1;
         */
        this.fromAddress = "";
        /**
         * @generated from field: string to_address = 2;
         */
        this.toAddress = "";
        /**
         * start of vesting as unix time (in seconds).
         *
         * @generated from field: int64 start_time = 3;
         */
        this.startTime = protobuf_1.protoInt64.zero;
        /**
         * @generated from field: repeated cosmos.vesting.v1beta1.Period vesting_periods = 4;
         */
        this.vestingPeriods = [];
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgCreatePeriodicVestingAccount().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgCreatePeriodicVestingAccount().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgCreatePeriodicVestingAccount().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(MsgCreatePeriodicVestingAccount, a, b);
    }
}
exports.MsgCreatePeriodicVestingAccount = MsgCreatePeriodicVestingAccount;
MsgCreatePeriodicVestingAccount.runtime = protobuf_1.proto3;
MsgCreatePeriodicVestingAccount.typeName = "cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount";
MsgCreatePeriodicVestingAccount.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "from_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "to_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "start_time", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 4, name: "vesting_periods", kind: "message", T: vesting_pb_js_1.Period, repeated: true },
]);
/**
 * MsgCreateVestingAccountResponse defines the Msg/CreatePeriodicVestingAccount
 * response type.
 *
 * Since: cosmos-sdk 0.46
 *
 * @generated from message cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccountResponse
 */
class MsgCreatePeriodicVestingAccountResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgCreatePeriodicVestingAccountResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgCreatePeriodicVestingAccountResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgCreatePeriodicVestingAccountResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(MsgCreatePeriodicVestingAccountResponse, a, b);
    }
}
exports.MsgCreatePeriodicVestingAccountResponse = MsgCreatePeriodicVestingAccountResponse;
MsgCreatePeriodicVestingAccountResponse.runtime = protobuf_1.proto3;
MsgCreatePeriodicVestingAccountResponse.typeName = "cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccountResponse";
MsgCreatePeriodicVestingAccountResponse.fields = protobuf_1.proto3.util.newFieldList(() => []);