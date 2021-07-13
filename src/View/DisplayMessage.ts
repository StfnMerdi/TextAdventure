import { UserInterface } from './UserInterface';

export class DisplayMessage {
    private uiOptions: any;

    constructor() {

    }

    public async startApp(): Promise<string> {
        this.setOptionsForUi({
            type: 'select',
            name: 'value',
            message: 'App is started. What do you want to do?',
            choices: [
                { title: 'search TextAdventures', description: 'You can search with title name', value: 'search' },
                { title: 'show TextAdventures', value: 'show', description: 'Display the TextAdventures' },
                { title: 'login', value: 'login', description: 'If you have alraedy an account' },
                { title: 'registration', value: 'registartion' },
            ],
            initial: 1
        });
        let uiTask = new UserInterface(this.uiOptions);
        return uiTask.response();
    }

    public setOptionsForUi(uioptions: any): void {
        this.uiOptions = uioptions;
    }

    private initUI(uiOptions: any): void{
        
    }

}