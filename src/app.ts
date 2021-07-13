// import chalk from 'chalk';
// import boxen from 'boxen';
import { UserInterface } from './View/UserInterface';
import { MainController } from './Controller/MainController';
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


let x: MainController = new MainController();
x.startApp();

// async function hallo(): Promise<void> {
//     let y = await x.response();
//     if (y.value == "#0000ff") {
//         console.log("ficker");
//     } else console.log(y.value);
// }

