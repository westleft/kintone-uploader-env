#!/usr/bin/env node

import { exec } from 'child_process'
import { loadEnv } from './utils/loadEnv.js'
import { getCommand } from './utils/command.js'

const main = () => {
  try {
    const options = loadEnv()
    const command = getCommand(options!.mainfest)
    if (!command) {
      console.log('Please check .env file is fillout')
      return
    }

    exec(command, (error, stdout) => {
      if (error) {
        console.error(`error: ${error}`)
        return
      }
      console.log(stdout)
    })
  } catch (e) {
    console.log(e)
  }
}

main()
