import { DisplayMessage } from './../View/DisplayMessage';
export class MainController {
    private displayObject: DisplayMessage = new DisplayMessage();
    private response: string = "";

    constructor() {

    }

    public async startApp(): Promise<void> {
        this.response = await this.displayObject.startApp();
    }





}