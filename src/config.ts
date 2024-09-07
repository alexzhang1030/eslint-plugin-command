import type { Linter } from 'eslint'
import defaultPlugin from './index'
import { createPluginWithCommands } from './plugin'
import type { ESLintPluginCommandOptions } from './types'

export default function config(options: ESLintPluginCommandOptions = {}): Linter.FlatConfig {
  const plugin = options.commands
    ? createPluginWithCommands(options)
    : defaultPlugin
  const {
    name = 'command',
  } = options

  // @keep-sorted
  return {
    name,
    plugins: {
      [name]: plugin,
    },
    rules: {
      [`${name}/command`]: 'error',
    },
  }
}
