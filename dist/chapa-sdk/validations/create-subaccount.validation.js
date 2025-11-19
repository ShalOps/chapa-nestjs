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
exports.validateCreateSubaccountOptions = void 0;
const yup = require("yup");
const enums_1 = require("../enums");
const validateCreateSubaccountOptions = (createSubaccountOptions) => __awaiter(void 0, void 0, void 0, function* () {
    const schema = yup.object().shape({
        business_name: yup.string().required(),
        account_name: yup.string().required(),
        bank_code: yup.string().required(),
        account_number: yup.string().required(),
        split_type: yup.mixed().oneOf(Object.values(enums_1.SplitType)).required(),
        split_value: yup.number().required(),
    });
    return yield schema.validate(createSubaccountOptions);
});
exports.validateCreateSubaccountOptions = validateCreateSubaccountOptions;
