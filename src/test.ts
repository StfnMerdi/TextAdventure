import chalk from 'chalk';
import boxen from 'boxen';
import { UserInterface } from './UserInterface';
import prompts from 'prompts';

// let greeting = chalk.white.bold("gzugbzugbzu!");

// let boxenOptions: boxen.Options = {
//  padding: 1,
//  margin: 3,
//  borderColor: "yellow",
//  backgroundColor: "#555555"
// };
// let msgBox = boxen( greeting, boxenOptions );

// console.log(msgBox);
let options: optionsForPrompts = {
    type: 'select',
    name: 'value',
    message: 'Pick a color',
    choices: [
        { title: 'Red', description: 'This option has a description', value: 'red' },
        { title: 'Green', value: '#00ff00', disabled: true },
        { title: 'Blue', value: '#0000ff' }
    ],
    initial: 1
};

let x: UserInterface = new UserInterface(options);
hallo();

async function hallo(): Promise<void> {
    let y = await x.response();
    if (y.value == "#0000ff") {
        console.log("ficker");
    } else console.log(y.value);
}

