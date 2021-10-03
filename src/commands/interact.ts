import { Command } from "@oclif/command";
import todoAPI from "../api/todoApi";
import * as inquirer from 'inquirer'

export default class interact extends Command{
    static description = 'Enter The Interacting Mode'

    async run(){
        const source = todoAPI.list()
        const choices = source
        const prompt : any = await inquirer.prompt([
            {

                type : 'chech box',
                message : 'update todo',
                name : 'todos',
                choices : choices.map( todo => {

                    return {name : todo.todo , checked : todo.done}
            })
}
        ])
        const finishedTodo = prompt.todos
        source.forEach((todo , index) => {
            if(finishedTodo.indexOf(todo.todo)  !== -1 ){
                todoAPI.done(index)
            }
            else{

                todoAPI.unDone(index)
            }
        })
    }
}

