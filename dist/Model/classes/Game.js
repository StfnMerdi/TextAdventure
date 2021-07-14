"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { gamePlaces } from './types/gamePlacesInterface';
const GamePlaces_1 = require("./GamePlaces");
class Game {
    constructor(game) {
        this.xPositions = [];
        this.yPositions = [];
        this.titlesOfCurrentPosition = [];
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
    get playableGame() {
        return this.titlesOfCurrentPosition;
    }
    generateGamePlaces(_gamePlaces) {
        let temporaryGamePlaces = [];
        _gamePlaces.forEach(element => {
            let temporaryGamePlace = new GamePlaces_1.GamePlaces(element);
            temporaryGamePlaces.push(temporaryGamePlace);
        });
        return temporaryGamePlaces;
    }
    createGame() {
    }
    makeGamePlayable() {
        let xHighestValue = this.getHighesValueOfX();
        let YHighestValue = this.getHighesValueOfY();
        let index = 0;
        for (let i = 0; i < xHighestValue; i++) {
            for (let j = 0; j < YHighestValue; j++) {
                this.titlesOfCurrentPosition[i][j] = this.gamePlaces[index].titelOfplacename;
                index++;
            }
        }
    }
    getHighesValueOfX() {
        this.xPositions = [];
        this.gamePlaces.forEach(element => {
            this.xPositions.push(element.valueOfX);
        });
        this.xPositions = this.xPositions.sort((n1, n2) => n1 - n2);
        return this.xPositions[this.xPositions.length - 1];
    }
    getHighesValueOfY() {
        this.yPositions = [];
        this.gamePlaces.forEach(element => {
            this.yPositions.push(element.valueOfY);
        });
        this.yPositions = this.yPositions.sort((n1, n2) => n1 - n2);
        return this.yPositions[this.yPositions.length - 1];
    }
}
exports.Game = Game;
//# sourceMappingURL=Game.js.map