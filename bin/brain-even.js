#!/usr/bin/env node

import greetUser from '../src/greet.js'
import askName from '../src/cli.js'
import EvenGame from '../src/games/even-game.js'
import brainGame from '../src/index.js'

greetUser()

const name = askName()
const game = new EvenGame()

brainGame(name, game)
