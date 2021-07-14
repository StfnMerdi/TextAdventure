"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const FileHandler_1 = __importDefault(require("./FileHandler"));
const Game_1 = require("./classes/Game");
class Model {
    constructor(viewObject) {
        this.games = [];
        this.viewObject = viewObject;
        let gamesJson = FileHandler_1.default.readArrayFile('../src/Model/data/games.json');
        for (let game of gamesJson) {
            this.games.push(new Game_1.Game(game));
        }
        this.sendData();
    }
    sendData() {
        this.viewObject.getgamesDataFromModel(this.games);
    }
    searchGame(gametitel) {
        let index = 0;
        for (let i = 0; i < this.games.length; i++) {
            if (gametitel == this.games[i].gameTitle) {
                index = i;
                this.sendGame(index);
            }
        }
    }
    sendGame(index) {
        this.games[index].makeGamePlayable();
        this.viewObject.getPlayableGameFromModel(this.games[index].playableGame);
    }
}
exports.Model = Model;
//# sourceMappingURL=Model.js.map