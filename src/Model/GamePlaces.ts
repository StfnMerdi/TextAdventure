import { GameDAO } from './types/gamedao.type';
import { GamePlacesDAO } from './types/gamePlacesdao.type';
export class GamePlaces {
    private positionX: number;
    private positionY: number;
    private placename: String;


    constructor(gamePlaces?: GamePlaces) {
        if (gamePlaces) {
            this.positionX = gamePlaces.positionX;
            this.positionY = gamePlaces.positionY;
            this.placename = gamePlaces.placename;
        }
        else {
            this.positionX = 0;
            this.positionY = 0;
            this.placename = "";
        }
    }

    public get valueOfX(): number {
        return this.positionX;
    }

    public set valueOfX(value: number) {
        this.positionX = value;
    }

    public get valueOfY(): number {
        return this.positionY;
    }

    public set valueOfY(value: number) {
        this.positionY = value;
    }

    public get titelOfplacename(): String {
        return this.placename;
    }
    public set titelOfplacename(value: String) {
        this.placename = value;
    }
}