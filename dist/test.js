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
// let greeting = chalk.white.bold("gzugbzugbzu!");
// let boxenOptions: boxen.Options = {
//  padding: 1,
//  margin: 3,
//  borderColor: "yellow",
//  backgroundColor: "#555555"
// };
// let msgBox = boxen( greeting, boxenOptions );
// console.log(msgBox);
let options = {
    type: 'select',
    name: 'value',
    message: 'Pick a color',
    choices: [
        { title: 'Red', description: 'This option has a description', value: 'red' },
        { title: 'Green', value: '#00ff00', disabled: true },
        { title: 'Blue', value: '#0000ff' }
    ],
    initial: 1
};
let x = new UserInterface_1.UserInterface(options);
hallo();
function hallo() {
    return __awaiter(this, void 0, void 0, function* () {
        let y = yield x.response();
        if (y.value == "#0000ff") {
            console.log("ficker");
        }
        else
            console.log(y.value);
    });
}
//# sourceMappingURL=test.js.map