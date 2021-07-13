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
const UserInterface_1 = require("./UserInterface");
class DisplayMessage {
    constructor() {
    }
    startApp() {
        return __awaiter(this, void 0, void 0, function* () {
            this.setOptionsForUi({
                type: 'select',
                name: 'value',
                message: 'App is started. What do you want to do?',
                choices: [
                    { title: 'search TextAdventures', description: 'You can search with title name', value: 'search' },
                    { title: 'show TextAdventures', value: 'show', description: 'Display the TextAdventures' },
                    { title: 'login', value: 'login', description: 'If you have alraedy an account' },
                    { title: 'registration', value: 'registartion' },
                ],
                initial: 1
            });
            let uiTask = new UserInterface_1.UserInterface(this.uiOptions);
            return uiTask.response();
        });
    }
    setOptionsForUi(uioptions) {
        this.uiOptions = uioptions;
    }
    initUI(uiOptions) {
    }
}
exports.DisplayMessage = DisplayMessage;
//# sourceMappingURL=DisplayMessage.js.map