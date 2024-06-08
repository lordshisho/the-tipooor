"use strict";
// @generated by protoc-gen-es v1.5.0 with parameter "target=ts"
// @generated from file cosmos/base/v1beta1/coin.proto (package cosmos.base.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
Object.defineProperty(exports, "__esModule", { value: true });
exports.DecProto = exports.IntProto = exports.DecCoin = exports.Coin = void 0;
const protobuf_1 = require("@bufbuild/protobuf");
/**
 * Coin defines a token with a denomination and an amount.
 *
 * NOTE: The amount field is an Int which implements the custom method
 * signatures required by gogoproto.
 *
 * @generated from message cosmos.base.v1beta1.Coin
 */
class Coin extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string denom = 1;
         */
        this.denom = "";
        /**
         * @generated from field: string amount = 2;
         */
        this.amount = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new Coin().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new Coin().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new Coin().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(Coin, a, b);
    }
}
exports.Coin = Coin;
Coin.runtime = protobuf_1.proto3;
Coin.typeName = "cosmos.base.v1beta1.Coin";
Coin.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "denom", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "amount", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * DecCoin defines a token with a denomination and a decimal amount.
 *
 * NOTE: The amount field is an Dec which implements the custom method
 * signatures required by gogoproto.
 *
 * @generated from message cosmos.base.v1beta1.DecCoin
 */
class DecCoin extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string denom = 1;
         */
        this.denom = "";
        /**
         * @generated from field: string amount = 2;
         */
        this.amount = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new DecCoin().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new DecCoin().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new DecCoin().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(DecCoin, a, b);
    }
}
exports.DecCoin = DecCoin;
DecCoin.runtime = protobuf_1.proto3;
DecCoin.typeName = "cosmos.base.v1beta1.DecCoin";
DecCoin.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "denom", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "amount", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * IntProto defines a Protobuf wrapper around an Int object.
 *
 * @generated from message cosmos.base.v1beta1.IntProto
 */
class IntProto extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string int = 1;
         */
        this.int = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new IntProto().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new IntProto().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new IntProto().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(IntProto, a, b);
    }
}
exports.IntProto = IntProto;
IntProto.runtime = protobuf_1.proto3;
IntProto.typeName = "cosmos.base.v1beta1.IntProto";
IntProto.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "int", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * DecProto defines a Protobuf wrapper around a Dec object.
 *
 * @generated from message cosmos.base.v1beta1.DecProto
 */
class DecProto extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string dec = 1;
         */
        this.dec = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new DecProto().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new DecProto().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new DecProto().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(DecProto, a, b);
    }
}
exports.DecProto = DecProto;
DecProto.runtime = protobuf_1.proto3;
DecProto.typeName = "cosmos.base.v1beta1.DecProto";
DecProto.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "dec", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);