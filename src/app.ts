// import chalk from 'chalk';
// import boxen from 'boxen';
import { UserInterface } from './View/UserInterface';
import { UnregisteredUserController } from './Controller/UnregisteredUserController';
import prompts from 'prompts';
import { Model } from './Model/Model';

// let greeting = chalk.white.bold("gzugbzugbzu!");

// let boxenOptions: boxen.Options = {
//  padding: 1,
//  margin: 3,
//  borderColor: "yellow",
//  backgroundColor: "#555555"
// };
// let msgBox = boxen( greeting, boxenOptions );

// console.log(msgBox);


let x: UnregisteredUserController = new UnregisteredUserController();
x.startApp();



