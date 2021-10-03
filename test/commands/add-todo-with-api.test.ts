import {expect, test} from '@oclif/test'

describe('add-todo-with-api', () => {
  test
  .stdout()
  .command(['add-todo-with-api'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['add-todo-with-api', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
