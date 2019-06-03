module.exports = function getLanguageSupport(fontData, languageData) {
  const fontGlyphs = fontData.glyphs.glyphs
  const fontUnicodes = Object.keys(fontGlyphs).reduce((acc, glyph) => {
    const glyphUnicodes = fontGlyphs[glyph].unicodes

    if (glyphUnicodes !== 'undefined' && glyphUnicodes.length > 0) {
      return [...acc, glyphUnicodes[0]]
    }

    return acc
  }, [])

  const fontLanguages = Object.keys(languageData).reduce((acc, language) => {
    const languageName = languageData[language].name
    const langIndex = languageData[language].langindex
    const hasLangSupport = langIndex.every(characterCode => {
      return fontUnicodes.includes(characterCode)
    })

    if (hasLangSupport) {
      return [...acc, languageName]
    }

    return acc
  }, [])

  return fontLanguages
}
