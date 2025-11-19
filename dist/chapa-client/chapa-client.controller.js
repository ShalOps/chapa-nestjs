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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChapaClientController = void 0;
/**
 *  ChapaClientController is a testing controller that verifies that
 *  ChapaModule was generated properly.
 *
 *  You can quickly verify this by running `npm run start:dev`, and then
 *  connecting to `http://localhost:3000` with your browser.  It should return
 *  a custom message like `Hello from ChapaModule`.
 *
 *  Once you begin customizing ChapaModule, you'll probably want
 *  to delete this controller.
 */
const common_1 = require("@nestjs/common");
const chapa_service_1 = require("../chapa-sdk/chapa.service");
let ChapaClientController = exports.ChapaClientController = class ChapaClientController {
    constructor(chapaService) {
        this.chapaService = chapaService;
    }
    initialize(initializeOptions) {
        return __awaiter(this, void 0, void 0, function* () {
            const tx_ref = yield this.chapaService.generateTransactionReference();
            return this.chapaService.initialize(Object.assign(Object.assign({}, initializeOptions), { tx_ref }));
        });
    }
    verify(verifyOptions) {
        return this.chapaService.verify(verifyOptions);
    }
    createSubaccount(createSubaccountOptions) {
        return this.chapaService.createSubaccount(createSubaccountOptions);
    }
};
__decorate([
    (0, common_1.Post)('initialize'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ChapaClientController.prototype, "initialize", null);
__decorate([
    (0, common_1.Get)('verify/:tx_ref'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ChapaClientController.prototype, "verify", null);
__decorate([
    (0, common_1.Post)('subaccount'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ChapaClientController.prototype, "createSubaccount", null);
exports.ChapaClientController = ChapaClientController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [chapa_service_1.ChapaService])
], ChapaClientController);
