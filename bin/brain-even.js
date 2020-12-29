#!/usr/bin/env node

import greetUser from '../src/greet.js'
import askName from '../src/cli.js'
import evenGame from '../src/even-game.js'

greetUser()
const name = askName()
evenGame(name)
