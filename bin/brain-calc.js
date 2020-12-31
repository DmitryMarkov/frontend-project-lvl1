#!/usr/bin/env node

import greetUser from '../src/greet.js'
import askName from '../src/cli.js'
import CalcGame from '../src/games/calc-game.js'
import brainGame from '../src/index.js'

greetUser()

const name = askName()
const game = new CalcGame()

brainGame(name, game)
