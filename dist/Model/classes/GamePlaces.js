"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GamePlaces {
    constructor(gamePlaces) {
        if (gamePlaces) {
            this.positionX = gamePlaces.positionX;
            this.positionY = gamePlaces.positionY;
            this.placename = gamePlaces.placename;
            this.startpoint = gamePlaces.startpoint;
        }
        else {
            this.positionX = 0;
            this.positionY = 0;
            this.placename = "";
            this.startpoint = false;
        }
    }
    get valueOfX() {
        return this.positionX;
    }
    set valueOfX(value) {
        this.positionX = value;
    }
    get valueOfY() {
        return this.positionY;
    }
    set valueOfY(value) {
        this.positionY = value;
    }
    get titelOfplacename() {
        return this.placename;
    }
    set titelOfplacename(value) {
        this.placename = value;
    }
}
exports.GamePlaces = GamePlaces;
//# sourceMappingURL=GamePlaces.js.map