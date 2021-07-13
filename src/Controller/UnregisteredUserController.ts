import { Model } from './../Model/Model';
import { DisplayMessage } from '../View/DisplayMessage';

export class UnregisteredUserController {
    private displayObject: DisplayMessage;
    private modelObject: Model;
    private response: String = "";

    constructor() {
        this.displayObject = new DisplayMessage();
        this.modelObject = new Model(this.displayObject);
    }

    public async startApp(): Promise<void> {
        this.response = await this.displayObject.startApp();
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
        console.log("Unregistered 35 searchForTextAdventure");
        this.response = await this.displayObject.searchForTextAdventure();
        console.log(this.response);
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