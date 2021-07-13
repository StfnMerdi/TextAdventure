import { OptionsDAO } from '../Model/types/optionsdao.type';
class Options {
    private type: String;
    private name: String;
    private message: String;
    private choices: any[];
    private initial: number;

    constructor(option: OptionsDAO) {
        this.type = option.type;
        this.name = option.name;
        this.message = option.message;
        this.choices = option.choices;
        this.initial = option.initial;
    }
}