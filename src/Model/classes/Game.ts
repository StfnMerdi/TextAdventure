// import { gamePlaces } from './types/gamePlacesInterface';
import { GamePlaces } from './GamePlaces';
import { GameDAO } from '../types/gamedao.type';
export class Game {
    private title: String;
    private creator: String;
    private gamePlaces: GamePlaces[];
    private xPositions: number[] = [];
    private yPositions: number[] = [];
    private titlesOfCurrentPosition: String[][] = [];


    constructor(game?: GameDAO) {
        if (game) {
            this.title = game.title;
            this.creator = game.creator;
            this.gamePlaces = this.generateGamePlaces(game.gamePlaces);
        } else {
            this.title = "";
            this.creator = "";
            this.gamePlaces = [];
        }
    }

    public get gameTitle(): String {
        return this.title;
    }

    public set gameTitle(value: String) {
        this.title = value;
    }

    public get creatorName(): String {
        return this.creator;
    }

    public set creatorName(value: String) {
        this.creator = value;
    }

    public get placesFromGame(): GamePlaces[] {
        return this.gamePlaces;
    }

    public set placesFromGame(value: GamePlaces[]) {
        this.gamePlaces = value;
    }

    public get playableGame() {
        return this.titlesOfCurrentPosition;
    }

    private generateGamePlaces(_gamePlaces: GamePlaces[]): GamePlaces[] {
        let temporaryGamePlaces: GamePlaces[] = [];
        _gamePlaces.forEach(element => {
            let temporaryGamePlace: GamePlaces = new GamePlaces(element);
            temporaryGamePlaces.push(temporaryGamePlace);
        });
        return temporaryGamePlaces;
    }

    public createGame(): void {

    }

    public makeGamePlayable(): void {
        let xHighestValue = this.getHighesValueOfX();
        let YHighestValue = this.getHighesValueOfY();
        let index: number = 0;
        for (let i = 0; i < xHighestValue; i++) {
            for (let j = 0; j < YHighestValue; j++) {
                this.titlesOfCurrentPosition[i][j] = this.gamePlaces[index].titelOfplacename;
                index++;
            }
        }
    }

    private getHighesValueOfX(): number {
        this.xPositions = [];
        this.gamePlaces.forEach(element => {
            this.xPositions.push(element.valueOfX);
        });
        this.xPositions = this.xPositions.sort((n1, n2) => n1 - n2);
        return this.xPositions[this.xPositions.length - 1];
    }

    private getHighesValueOfY(): number {
        this.yPositions = [];
        this.gamePlaces.forEach(element => {
            this.yPositions.push(element.valueOfY);
        });
        this.yPositions = this.yPositions.sort((n1, n2) => n1 - n2);
        return this.yPositions[this.yPositions.length - 1];
    }




}