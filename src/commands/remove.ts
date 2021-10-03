import { Command } from "@oclif/command"
import todoAPI from '../api/todoApi'
import chalk = require('chalk');

export default class Remove extends Command {
    static description = 'Remove A Todo From List'
    static args = [{name : 'index'}]
    async run(){
        const {args} = this.parse(Remove)
        const index = args.index
        if(index){
            const todo = todoAPI.get(index).todo
            todoAPI.remove(index)
            this.log(`${chalk.green('[Success]')}  'Remove todo :' ${todo}`)
        }
        else {
            this.error(chalk.red('Please specify the todo \'s index'))
        }
    }
}

