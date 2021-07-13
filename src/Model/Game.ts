// import { gamePlaces } from './types/gamePlacesInterface';
import { GamePlaces } from './GamePlaces';
import { GameDAO } from './types/gamedao.type';
export class Game {
    private title: String;
    private creator: String;
    private gamePlaces: GamePlaces[];


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

    private generateGamePlaces(_gamePlaces: GamePlaces[]): GamePlaces[] {
        let temporaryGamePlaces: GamePlaces[] = [];
        _gamePlaces.forEach(element => {
            let temporaryGamePlace: GamePlaces = new GamePlaces(element);
            temporaryGamePlaces.push(temporaryGamePlace);
        });
        return temporaryGamePlaces;
    }

}