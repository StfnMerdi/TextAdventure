import { Model } from './../Model/Model';
import { View } from '../View/View';

export class UnregisteredUserController {
    private viewObject: View;
    private modelObject: Model;
    private response: String = "";

    constructor() {
        this.viewObject = new View();
        this.modelObject = new Model(this.viewObject);
    }

    public async startApp(): Promise<void> {
        this.response = await this.viewObject.startApp();
        this.decisiontree(this.response);

    }

    private decisiontree(response: String): void {
        switch (response) {
            case "searchForTextAdventure":
                this.searchForTextAdventure();
                break;
            case "showTextAdventures":
                this.showTextAdventures();
                break;
            case "login":
                this.login();
                break;
            case "registration":
                this.registration();
                break;
            case "":
                console.log("Error! Response is empty.");
                break;
            default:
                console.log("Error!");
                break;
        }
    }

    private async searchForTextAdventure(): Promise<void> {
        console.log("searchForTextAdventure");
        this.response = await this.viewObject.searchForTextAdventure();
        this.modelObject.searchGame(this.response);
        // this.viewObject.loadGame();
    }

    private showTextAdventures() {
        console.log("showTextAdventures");
    }

    private login(): void {
        throw new Error('Method not implemented.');
    }

    private registration(): void {
        throw new Error('Method not implemented.');
    }






}