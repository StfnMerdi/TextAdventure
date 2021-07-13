"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Model_1 = require("./../Model/Model");
const DisplayMessage_1 = require("../View/DisplayMessage");
class UnregisteredUserController {
    constructor() {
        this.response = "";
        this.displayObject = new DisplayMessage_1.DisplayMessage();
        this.modelObject = new Model_1.Model(this.displayObject);
    }
    startApp() {
        return __awaiter(this, void 0, void 0, function* () {
            this.response = yield this.displayObject.startApp();
            this.decisiontree(this.response);
        });
    }
    decisiontree(response) {
        switch (response) {
            case "searchForTextAdventure":
                this.searchForTextAdventure();
                break;
            case "showTextAdventures":
                this.showTextAdventures();
                break;
            case "login":
                this.login();
                break;
            case "registration":
                this.registration();
                break;
            case "":
                console.log("Error! Response is empty.");
                break;
            default:
                console.log("Error!");
                break;
        }
    }
    searchForTextAdventure() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Unregistered 35 searchForTextAdventure");
            this.response = yield this.displayObject.searchForTextAdventure();
            console.log(this.response);
        });
    }
    showTextAdventures() {
        console.log("showTextAdventures");
    }
    login() {
        throw new Error('Method not implemented.');
    }
    registration() {
        throw new Error('Method not implemented.');
    }
}
exports.UnregisteredUserController = UnregisteredUserController;
//# sourceMappingURL=UnregisteredUserController.js.map