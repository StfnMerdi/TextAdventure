import prompts from 'prompts';
// const prompts = require('prompts');
export class UserInterface {
    private prompts: any;
    private options: any;

    constructor(options: optionsForPrompts) {
           this.options = options;
    }


    async response(): Promise<prompts.Answers<string>> {
        let response = await prompts(this.options);
        return response;
    }
}