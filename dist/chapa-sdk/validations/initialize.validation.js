"use strict";
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
exports.validateInitializeOptions = void 0;
const yup = require("yup");
const validateInitializeOptions = (initializeOptions) => __awaiter(void 0, void 0, void 0, function* () {
    const schema = yup.object().shape({
        first_name: yup.string().required(),
        last_name: yup.string().required(),
        email: yup.string().email(),
        currency: yup.string().required(),
        amount: yup.string().required(),
        tx_ref: yup.string().required(),
        callback_url: yup.string().url().optional(),
        return_url: yup.string().url().optional(),
        customization: yup
            .object()
            .shape({
            title: yup.string().optional(),
            description: yup.string().optional(),
            logo: yup.string().optional(),
        })
            .optional(),
        subaccounts: yup
            .array()
            .of(yup.object().shape({
            id: yup.string().required(),
            split_type: yup.string().optional(),
            transaction_charge: yup.string().optional(),
        }))
            .nullable()
            .optional(),
    });
    return yield schema.validate(initializeOptions);
});
exports.validateInitializeOptions = validateInitializeOptions;
