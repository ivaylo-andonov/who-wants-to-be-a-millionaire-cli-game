import { createSpinner } from 'nanospinner';
import inquirer from 'inquirer';

export const question1 = async () => {
    const answers = await inquirer.prompt({
        name: 'question_1',
        type: 'list',
        message: 'Which is a JS build in higher order function?\n',
        choices: [
            '.toString()',
            '.map()',
            '.abs()',
            '.parseInt()',
        ],
    });

    return handleAnswer(answers.question_1 === '.map()');
}

export const question2 = async () => {
    const answers = await inquirer.prompt({
        name: 'question_2',
        type: 'list',
        message: 'How to read a cookie using JavaScript\n',
        choices: ['session.cookie', 'window.cookie', 'window.local.cookie', 'document.cookie']
    });
    return handleAnswer(answers.question_2 === 'document.cookie');
}

export const question3 = async () => {
    const answers = await inquirer.prompt({
        name: 'question_3',
        type: 'list',
        message: `What is the first element in the array? ['🐏', '🦙', '🐍'].length = 0\n`,
        choices: ['0', '🐏', '🐍', 'undefined']
    });

    return handleAnswer(answers.question_3 === 'undefined');
}

export const question4 = async () => {
    const answers = await inquirer.prompt({
        name: 'question_4',
        type: 'list',
        message: 'Which of the following is NOT a primitive type?\n',
        choices: [
            'boolean',
            'number',
            'null',
            'object'
        ]
    });
    return handleAnswer(answers.question_4 === 'object');
}

export const question5 = async () => {
    const answers = await inquirer.prompt({
        name: 'question_5',
        type: 'list',
        message:
            'JS is a high-level single-threaded, garbage-collected,\n' +
            'interpreted(or just-in-time compiled), prototype-based,\n' +
            'multi-paradigm, dynamic language with a ____ event loop\n',
        choices: ['multi-threaded', 'non-blocking', 'synchronous', 'promise-based']
    });

    return handleAnswer(answers.question_5 === 'non-blocking');
}

export const handleAnswer = async (isCorrect) => {
    const spinner = createSpinner('Checking answer...').start();
    await sleep();

    if (isCorrect) {
        spinner.success({ text: `Nice work! That's a legit answer` });
    } else {
        spinner.error({ text: `💀💀💀 Game over, you lose!` });
        process.exit(1);
    }
}

export const sleep = async (ms = 1000) => new Promise((r) => setTimeout(r, ms));