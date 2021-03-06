import * as path from 'path'
import { Config } from '../src/config'
import { Parser } from '../src/parser'

describe('Parser', () => {
  test('Sample', () => {
    const directory = path.join(__dirname, './sample')
    const config = new Config({directory})
    const parser = new Parser(config)

    expect(parser.parse()).toMatchSnapshot()
  })

  test('Angular2 Todo', () => {
    const directory = path.join(__dirname, './angular2_es2015')
    const parser = new Parser(new Config({directory}))

    expect(parser.parse()).toMatchSnapshot()
  })

  test('Express', () => {
    const directory = path.join(__dirname, './express')
    const parser = new Parser(new Config({directory}))

    expect(parser.parse()).toMatchSnapshot()
  })
})
