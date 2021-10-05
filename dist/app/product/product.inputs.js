"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListProductInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const mongoose_1 = require("mongoose");
let ListProductInput = class ListProductInput {
};
__decorate([
    graphql_1.Field(() => String),
    __metadata("design:type", mongoose_1.Schema.Types.ObjectId)
], ListProductInput.prototype, "_id", void 0);
__decorate([
    graphql_1.Field(() => String),
    __metadata("design:type", String)
], ListProductInput.prototype, "brand", void 0);
__decorate([
    graphql_1.Field(() => String),
    __metadata("design:type", String)
], ListProductInput.prototype, "description", void 0);
__decorate([
    graphql_1.Field(() => Number),
    __metadata("design:type", Number)
], ListProductInput.prototype, "price", void 0);
ListProductInput = __decorate([
    graphql_1.InputType()
], ListProductInput);
exports.ListProductInput = ListProductInput;
//# sourceMappingURL=product.inputs.js.map