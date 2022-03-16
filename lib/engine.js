import chalk from 'chalk';
import figlet from 'figlet';
import inquirer from 'inquirer';
import gradient from 'gradient-string';
import chalkAnimation from 'chalk-animation';

let playerName;

export const welcome = async () => {
    const rainbowTitle = chalkAnimation.rainbow(
        'Who Wants To Be A JavaScript Millionaire? \n'
    );

    await sleep();
    rainbowTitle.stop();

    console.log(`
    ${chalk.bgBlue('HOW TO PLAY')} 
    I am a process on your computer.
    If you get any question wrong I will be ${chalk.bgRed('killed')}
    So get all the questions right...
  `);
}

export const askName = async () => {
    const answers = await inquirer.prompt({
        name: 'player_name',
        type: 'input',
        message: 'What is your name?',
        default() {
            return 'Player';
        },
    });

    playerName = answers.player_name;
}

export const winner = () => {
    console.clear();
    figlet(`Congrats , ${playerName} !\n $ 1 , 0 0 0 , 0 0 0`, (err, data) => {
        console.log(gradient.pastel.multiline(data) + '\n');

        console.log(
            chalk.green(
                `Programming isn't about what you know; it's about making the command line look cool`
            )
        );
        process.exit(0);
    });
}

export const sleep = async (ms = 1000) => new Promise((r) => setTimeout(r, ms));