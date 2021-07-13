"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { gamePlaces } from './types/gamePlacesInterface';
const GamePlaces_1 = require("./GamePlaces");
class Game {
    constructor(game) {
        if (game) {
            this.title = game.title;
            this.creator = game.creator;
            this.gamePlaces = this.generateGamePlaces(game.gamePlaces);
        }
        else {
            this.title = "";
            this.creator = "";
            this.gamePlaces = [];
        }
    }
    get gameTitle() {
        return this.title;
    }
    set gameTitle(value) {
        this.title = value;
    }
    get creatorName() {
        return this.creator;
    }
    set creatorName(value) {
        this.creator = value;
    }
    get placesFromGame() {
        return this.gamePlaces;
    }
    set placesFromGame(value) {
        this.gamePlaces = value;
    }
    generateGamePlaces(_gamePlaces) {
        let temporaryGamePlaces = [];
        _gamePlaces.forEach(element => {
            let temporaryGamePlace = new GamePlaces_1.GamePlaces(element);
            temporaryGamePlaces.push(temporaryGamePlace);
        });
        return temporaryGamePlaces;
    }
}
exports.Game = Game;
//# sourceMappingURL=Game.js.map