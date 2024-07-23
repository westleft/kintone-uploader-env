import { config } from 'dotenv'
import { Command } from 'commander'

export const loadEnv = () => {
  try {
    const program = new Command()

    program
      .option('-e, --env <env>', 'Specify the .env file to use', '.env')
      .option('-m, --mainfest <mainfest>', 'Specify the manifest file to use', './mainfests/dev.json')
      .option('-app, --appIdKey <appIdKey>', 'Specify the key to read the app ID from the .env file')
      .parse(process.argv)

    const options = program.opts()
    const envFile = options.env

    config({ path: envFile })
    
    return options
  } catch (e) {
    console.log(e)
  }
}
