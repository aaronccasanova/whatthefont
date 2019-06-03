module.exports = function getUnicodeBlocks(fontLanguages, unicodeBlocks) {
  const fontUnicodeBlocks = Object.entries(unicodeBlocks).reduce(
    (acc, [blockName, blockLangs]) => {
      const hasCompatibleLang = blockLangs.some(lang =>
        fontLanguages.includes(lang),
      )

      if (hasCompatibleLang) {
        return [...acc, blockName]
      }

      return acc
    },
    [],
  )

  return fontUnicodeBlocks
}
