#!/usr/bin/env node

const wtf = require('./../lib/index.js')
const path = require('path')
const chalk = require('chalk')
const figlet = require('figlet')
const opentype = require('opentype.js')
const { listHeading, listContent, title } = require('./../utils/display')

console.log(
  chalk.yellow(figlet.textSync('.W.T.F.', { horizontalLayout: 'full' })),
)

// Delete the 0 and 1 argument (node and script.js)
const args = process.argv.slice(2)

// Retrieve the first argument
const fontPathArg = args[0]

// build absolute font path from args
const fontPath = path.resolve(process.cwd(), fontPathArg)

opentype.load(fontPath, (err, fontData) => {
  if (err) {
    console.log(chalk.red(`Font could not be loaded: ${err}`))
    return
  }

  const {
    names: {
      fullName: { en: fontFamily = '' } = {},
      postScriptName: { en: fileName = '' } = {},
    } = {},
  } = fontData

  const fontLanguages = wtf.detectLanguage(fontData, wtf.languageData)

  const fontUnicodeBlocks = Object.entries(wtf.unicodeBlocks).reduce(
    (acc, [block, langs]) => {
      // console.log('block:', block)
      // console.log('langs:', langs)

      if (langs.some(lang => fontLanguages.includes(lang))) {
        return [...acc, block]
      }

      return acc
    },
    [],
  )

  console.log(
    title(fontFamily),
    listHeading('Language Suport'),
    listContent(fontLanguages),
    listHeading('Unicode Blocks'),
    listContent(fontUnicodeBlocks),
  )
})
