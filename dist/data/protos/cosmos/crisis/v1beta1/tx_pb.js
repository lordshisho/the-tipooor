"use strict";
// @generated by protoc-gen-es v1.5.0 with parameter "target=ts"
// @generated from file cosmos/crisis/v1beta1/tx.proto (package cosmos.crisis.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgUpdateParamsResponse = exports.MsgUpdateParams = exports.MsgVerifyInvariantResponse = exports.MsgVerifyInvariant = void 0;
const protobuf_1 = require("@bufbuild/protobuf");
const coin_pb_js_1 = require("../../base/v1beta1/coin_pb.js");
/**
 * MsgVerifyInvariant represents a message to verify a particular invariance.
 *
 * @generated from message cosmos.crisis.v1beta1.MsgVerifyInvariant
 */
class MsgVerifyInvariant extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * sender is the account address of private key to send coins to fee collector account.
         *
         * @generated from field: string sender = 1;
         */
        this.sender = "";
        /**
         * name of the invariant module.
         *
         * @generated from field: string invariant_module_name = 2;
         */
        this.invariantModuleName = "";
        /**
         * invariant_route is the msg's invariant route.
         *
         * @generated from field: string invariant_route = 3;
         */
        this.invariantRoute = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgVerifyInvariant().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgVerifyInvariant().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgVerifyInvariant().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(MsgVerifyInvariant, a, b);
    }
}
exports.MsgVerifyInvariant = MsgVerifyInvariant;
MsgVerifyInvariant.runtime = protobuf_1.proto3;
MsgVerifyInvariant.typeName = "cosmos.crisis.v1beta1.MsgVerifyInvariant";
MsgVerifyInvariant.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "sender", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "invariant_module_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "invariant_route", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * MsgVerifyInvariantResponse defines the Msg/VerifyInvariant response type.
 *
 * @generated from message cosmos.crisis.v1beta1.MsgVerifyInvariantResponse
 */
class MsgVerifyInvariantResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgVerifyInvariantResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgVerifyInvariantResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgVerifyInvariantResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(MsgVerifyInvariantResponse, a, b);
    }
}
exports.MsgVerifyInvariantResponse = MsgVerifyInvariantResponse;
MsgVerifyInvariantResponse.runtime = protobuf_1.proto3;
MsgVerifyInvariantResponse.typeName = "cosmos.crisis.v1beta1.MsgVerifyInvariantResponse";
MsgVerifyInvariantResponse.fields = protobuf_1.proto3.util.newFieldList(() => []);
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 *
 * Since: cosmos-sdk 0.47
 *
 * @generated from message cosmos.crisis.v1beta1.MsgUpdateParams
 */
class MsgUpdateParams extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * authority is the address that controls the module (defaults to x/gov unless overwritten).
         *
         * @generated from field: string authority = 1;
         */
        this.authority = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgUpdateParams().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgUpdateParams().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgUpdateParams().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(MsgUpdateParams, a, b);
    }
}
exports.MsgUpdateParams = MsgUpdateParams;
MsgUpdateParams.runtime = protobuf_1.proto3;
MsgUpdateParams.typeName = "cosmos.crisis.v1beta1.MsgUpdateParams";
MsgUpdateParams.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "authority", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "constant_fee", kind: "message", T: coin_pb_js_1.Coin },
]);
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 *
 * Since: cosmos-sdk 0.47
 *
 * @generated from message cosmos.crisis.v1beta1.MsgUpdateParamsResponse
 */
class MsgUpdateParamsResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgUpdateParamsResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgUpdateParamsResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgUpdateParamsResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(MsgUpdateParamsResponse, a, b);
    }
}
exports.MsgUpdateParamsResponse = MsgUpdateParamsResponse;
MsgUpdateParamsResponse.runtime = protobuf_1.proto3;
MsgUpdateParamsResponse.typeName = "cosmos.crisis.v1beta1.MsgUpdateParamsResponse";
MsgUpdateParamsResponse.fields = protobuf_1.proto3.util.newFieldList(() => []);