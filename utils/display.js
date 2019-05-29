const chalk = require('chalk')

const separator = chalk.gray(' | ')

function listHeading(heading) {
  return chalk.blue(`${heading}:\n\n`)
}

function listContent(content) {
  return `${chalk.white(content.join(separator))}\n\n`
}

function title(title) {
  return chalk.green(`${title}\n\n`)
}

module.exports = {
  listHeading,
  listContent,
  seperator,
  title,
}
