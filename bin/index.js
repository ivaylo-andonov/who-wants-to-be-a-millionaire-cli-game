#!/usr/bin/env node

import {
  welcome,
  askName,
  winner,
  question1,
  question2,
  question3,
  question4,
  question5
} from "../lib/index.js"

const startGame = async () => {
  console.clear();

  await welcome();
  await askName();

  await question1();
  await question2();
  await question3();
  await question4();
  await question5();

  winner();
}

startGame();