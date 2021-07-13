import prompts from 'prompts';
// const prompts = require('prompts');
export class UserInterface {
    private prompts: any;
    private options: any;

    constructor(options: any) {
        this.options = options;
    }


    public async response(): Promise<string> {
        let response = await prompts(this.options);
        return response.value;
    }
}