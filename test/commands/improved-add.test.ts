import {expect, test} from '@oclif/test'

describe('improved-add', () => {
  test
  .stdout()
  .command(['improved-add'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['improved-add', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
