"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChapaClientModule = void 0;
/**
 *  ChapaClientModule is a testing module that verifies that
 *  ChapaModule was generated properly.
 *
 *  You can quickly verify this by running `npm run start:dev`, and then
 *  connecting to `http://localhost:3000` with your browser.  It should return
 *  a custom message like `Hello from ChapaModule`.
 *
 *  Once you begin customizing ChapaModule, you'll probably want
 *  to delete this module.
 */
const common_1 = require("@nestjs/common");
const chapa_client_controller_1 = require("./chapa-client.controller");
const chapa_module_1 = require("../chapa-sdk/chapa.module");
let ChapaClientModule = exports.ChapaClientModule = class ChapaClientModule {
};
exports.ChapaClientModule = ChapaClientModule = __decorate([
    (0, common_1.Module)({
        controllers: [chapa_client_controller_1.ChapaClientController],
        imports: [
            chapa_module_1.ChapaModule.register({
                secretKey: 'your-chapa-secret-key',
            }),
        ],
    })
], ChapaClientModule);
