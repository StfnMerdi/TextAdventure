import { View } from '../View/View';
import FileHandler from "./FileHandler";
import { GameDAO } from './types/gamedao.type';
import { GamePlaces } from './classes/GamePlaces';
import { Game } from './classes/Game';

export class Model {
    private games: Game[] = [];
    private viewObject: View;

    constructor(viewObject: View) {
        this.viewObject = viewObject;

        let gamesJson: GameDAO[] = FileHandler.readArrayFile('../src/Model/data/games.json');

        for (let game of gamesJson) {
            this.games.push(new Game(game));
        }

        this.sendData();
    }

    public sendData(): void {
        this.viewObject.getgamesDataFromModel(this.games);
    }

    public searchGame(gametitel: String): void {
        let index = 0;
        for (let i = 0; i < this.games.length; i++) {
            if (gametitel == this.games[i].gameTitle) {
                index = i;
                this.sendGame(index);
            }
        }
    }

    private sendGame(index: number): void {
        this.games[index].makeGamePlayable();
        this.viewObject.getPlayableGameFromModel(this.games[index].playableGame);
    }

}