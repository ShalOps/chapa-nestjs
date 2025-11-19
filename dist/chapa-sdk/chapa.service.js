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
exports.ChapaService = void 0;
const axios_1 = require("@nestjs/axios");
const common_1 = require("@nestjs/common");
const nanoid_1 = require("nanoid");
const nanoid_dictionary_1 = require("nanoid-dictionary");
const constants_1 = require("./constants");
const enums_1 = require("./enums");
const validations_1 = require("./validations");
let ChapaService = exports.ChapaService = class ChapaService {
    constructor(chapaOptions, httpService) {
        this.chapaOptions = chapaOptions;
        this.httpService = httpService;
    }
    initialize(initializeOptions) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield (0, validations_1.validateInitializeOptions)(initializeOptions);
                const response = yield this.httpService.axiosRef.post(enums_1.ChapaUrls.INITIALIZE, initializeOptions, {
                    headers: {
                        Authorization: `Bearer ${this.chapaOptions.secretKey}`,
                    },
                });
                return response.data;
            }
            catch (error) {
                if (error.response) {
                    throw new common_1.HttpException(error.response.data.message, error.response.status);
                }
                else if (error.name === 'ValidationError') {
                    throw new common_1.BadRequestException(error.errors[0]);
                }
                else {
                    throw error;
                }
            }
        });
    }
    mobileInitialize(initializeOptions) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield (0, validations_1.validateInitializeOptions)(initializeOptions);
                const response = yield this.httpService.axiosRef.post(enums_1.ChapaUrls.MOBILE_INITIALIZE, initializeOptions, {
                    headers: {
                        Authorization: `Bearer ${this.chapaOptions.secretKey}`,
                    },
                });
                return response.data;
            }
            catch (error) {
                if (error.response) {
                    throw new common_1.HttpException(error.response.data.message, error.response.status);
                }
                else if (error.name === 'ValidationError') {
                    throw new common_1.BadRequestException(error.errors[0]);
                }
                else {
                    throw error;
                }
            }
        });
    }
    verify(verifyOptions) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield (0, validations_1.validateVerifyOptions)(verifyOptions);
                const response = yield this.httpService.axiosRef.get(`${enums_1.ChapaUrls.VERIFY}/${verifyOptions.tx_ref}`, {
                    headers: {
                        Authorization: `Bearer ${this.chapaOptions.secretKey}`,
                    },
                });
                return response.data;
            }
            catch (error) {
                if (error.response) {
                    throw new common_1.HttpException(error.response.data.message, error.response.status);
                }
                else if (error.name === 'ValidationError') {
                    throw new common_1.BadRequestException(error.errors[0]);
                }
                else {
                    throw error;
                }
            }
        });
    }
    generateTransactionReference(generateTransactionReferenceOptions) {
        return __awaiter(this, void 0, void 0, function* () {
            const prefix = generateTransactionReferenceOptions &&
                generateTransactionReferenceOptions.prefix
                ? generateTransactionReferenceOptions.prefix
                : 'TX';
            const size = generateTransactionReferenceOptions &&
                generateTransactionReferenceOptions.size
                ? generateTransactionReferenceOptions.size
                : 15;
            const nanoid = (0, nanoid_1.customAlphabet)(nanoid_dictionary_1.alphanumeric, size);
            const reference = yield nanoid();
            return `${prefix}-${reference.toUpperCase()}`;
        });
    }
    getBanks() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const banks = yield this.httpService.axiosRef.get(enums_1.ChapaUrls.BANKS, {
                    headers: {
                        Authorization: `Bearer ${this.chapaOptions.secretKey}`,
                    },
                });
                return banks.data;
            }
            catch (error) {
                if (error.response) {
                    throw new common_1.HttpException(error.response.data.message, error.response.status);
                }
                else {
                    throw error;
                }
            }
        });
    }
    createSubaccount(createSubaccountOptions) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield (0, validations_1.validateCreateSubaccountOptions)(createSubaccountOptions);
                const response = yield this.httpService.axiosRef.post(enums_1.ChapaUrls.SUBACCOUNT, createSubaccountOptions, {
                    headers: {
                        Authorization: `Bearer ${this.chapaOptions.secretKey}`,
                    },
                });
                return response.data;
            }
            catch (error) {
                if (error.response) {
                    throw new common_1.HttpException(error.response.data.message, error.response.status);
                }
                else if (error.name === 'ValidationError') {
                    throw new common_1.BadRequestException(error.errors[0]);
                }
                else {
                    throw error;
                }
            }
        });
    }
};
exports.ChapaService = ChapaService = __decorate([
    (0, common_1.Injectable)()
    /**
     *
     *  The only thing you need to leave intact is the `@Inject(CHAPA_OPTIONS) private chapaOptions`.
     *
     *  That injected dependency gives you access to the options passed in to
     *  ChapaService.
     *
     */
    ,
    __param(0, (0, common_1.Inject)(constants_1.CHAPA_OPTIONS)),
    __metadata("design:paramtypes", [Object, axios_1.HttpService])
], ChapaService);
