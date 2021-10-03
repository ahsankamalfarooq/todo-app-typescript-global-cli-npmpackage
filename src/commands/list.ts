import { Command } from "@oclif/command";
import  todoApi  from '../api/todoApi';
import chalk = require ('chalk')
//list.ts

const Table  = require('cli-table')

export default class List extends Command{
    static description = 'print out all todos'
    async run(){
        const table = new Table({
            head : [
                chalk.blueBright('index'),
                chalk.blueBright('todo'),
                chalk.blueBright('status')
            ]
        });
        const todos = todoApi.list()
        for(let i=0 ; i<todos.length; i++ ){
        const todo = todos[i]
        const status = todo.done ? chalk.green('done') : chalk.red('not done')
        table.push([i, todo.todo,status])
        }
        this.log(table.toString())

    }
}