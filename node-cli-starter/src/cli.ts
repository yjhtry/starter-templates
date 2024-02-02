import process from 'node:process'
import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
import { version } from '../package.json'

// eslint-disable-next-line no-unused-expressions
yargs(hideBin(process.argv))
  .command(
    'say <name>',
    'input your name',
    (yargs) => {
      return yargs.positional('name', {
        type: 'string',
        describe: 'Your name',
      })
    },
    (argv) => {
      // eslint-disable-next-line no-console
      console.log(`Hello, ${argv.name}!`)
    },
  )
  .showHelpOnFail(false)
  .alias('h', 'help')
  .version('version', version)
  .alias('v', 'version')
  .help()
  .argv
