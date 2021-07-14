import { Game } from '../Model/classes/Game';
import { UserInterface } from './UserInterface';

export class View {
    private uiOptions: any;
    private games: Game[] = [];
    private playablegame: String[][] = [];

    constructor() {
    }

    public getgamesDataFromModel(games: Game[]): void {
        this.games = games;
    }

    public getPlayableGameFromModel(playableGame: String[][]) {
        this.playablegame = playableGame;
    }

    public async startApp(): Promise<string> {
        this.setOptionsForUi({
            type: 'select',
            name: 'value',
            message: 'App is started. What do you want to do?',
            choices: [
                { title: 'search TextAdventure', description: 'You can search with title name', value: 'searchForTextAdventure' },
                { title: 'show TextAdventures', value: 'showTextAdventures', description: 'Display the TextAdventures' },
                { title: 'login', value: 'login', description: 'If you have alraedy an account' },
                { title: 'registration', value: 'registration' },
            ],
            initial: 0
        });
        return this.sendResponse();
    }

    public async searchForTextAdventure(): Promise<string> {
        this.setOptionsForUi({
            type: 'autocomplete',
            name: 'value',
            message: 'Type the titles of TextAdventures',
            limit: 1,
            choices: this.loadChoices(),
            style: 'default',
        })
        return this.sendResponse();
    }

    // public async loadGame():

    private setOptionsForUi(uioptions: any): void {
        this.uiOptions = uioptions;
    }

    private async sendResponse(): Promise<string> {
        let uiTask = new UserInterface(this.uiOptions);
        return uiTask.response();
    }

    private loadChoices(): any[] {
        let temporaryChoices: any[] = [];
        this.games.forEach(element => {
            let obj = { title: element.gameTitle, value: element.gameTitle };
            temporaryChoices.push(obj);
        });
        return temporaryChoices;
    }

    



}