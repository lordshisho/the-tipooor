"use strict";
// @generated by protoc-gen-es v1.5.0 with parameter "target=ts"
// @generated from file cosmos/capability/module/v1/module.proto (package cosmos.capability.module.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
Object.defineProperty(exports, "__esModule", { value: true });
exports.Module = void 0;
const protobuf_1 = require("@bufbuild/protobuf");
/**
 * Module is the config object of the capability module.
 *
 * @generated from message cosmos.capability.module.v1.Module
 */
class Module extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * seal_keeper defines if keeper.Seal() will run on BeginBlock() to prevent further modules from creating a scoped
         * keeper. For more details check x/capability/keeper.go.
         *
         * @generated from field: bool seal_keeper = 1;
         */
        this.sealKeeper = false;
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
Module.typeName = "cosmos.capability.module.v1.Module";
Module.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "seal_keeper", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
]);