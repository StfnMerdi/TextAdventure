import { DisplayMessage } from './../View/DisplayMessage';
import FileHandler from "./FileHandler";
import { GameDAO } from './types/gamedao.type';
import { GamePlaces } from './GamePlaces';
import { Game } from './Game';

export class Model {
    private games: Game[] = [];
    private viewObject: DisplayMessage;

    constructor(viewObject: DisplayMessage) {
        this.viewObject = viewObject;

        let gamesJson: GameDAO[] = FileHandler.readArrayFile('../src/Model/data/games.json');

        for (let game of gamesJson) {
            this.games.push(new Game(game));
        }

        this.sendData();
    }

    public sendData() {
        this.viewObject.getDataFromModel(this.games);
    }

}