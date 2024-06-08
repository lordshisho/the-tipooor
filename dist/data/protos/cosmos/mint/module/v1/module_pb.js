"use strict";
// @generated by protoc-gen-es v1.5.0 with parameter "target=ts"
// @generated from file cosmos/mint/module/v1/module.proto (package cosmos.mint.module.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
Object.defineProperty(exports, "__esModule", { value: true });
exports.Module = void 0;
const protobuf_1 = require("@bufbuild/protobuf");
/**
 * Module is the config object of the mint module.
 *
 * @generated from message cosmos.mint.module.v1.Module
 */
class Module extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string fee_collector_name = 1;
         */
        this.feeCollectorName = "";
        /**
         * authority defines the custom module authority. If not set, defaults to the governance module.
         *
         * @generated from field: string authority = 2;
         */
        this.authority = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new Module().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new Module().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new Module().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(Module, a, b);
    }
}
exports.Module = Module;
Module.runtime = protobuf_1.proto3;
Module.typeName = "cosmos.mint.module.v1.Module";
Module.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "fee_collector_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "authority", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);