module.exports = ({ fontFamily = '', languageSupport = [] }) => `
@font-face {
 font-family: '${fontFamily}';
 src: url('.eot?#iefix');
 src: url('.eot?#iefix') format('embedded-opentype'),
   url('.woff2') format('woff2'),
   url('.woff') format('woff'),
   url('.ttf') format('truetype');
}

/**
 * Language Support
 * ${languageSupport.join(', ')}
 */
`

// function parseFont(fontPath) {
//   opentype.load(fontPath, (err, font) => {
//     console.log('font:', font)
//     if (err) {
//       console.log('Font could not be loaded: ' + err)
//     } else {
//       const {
//         names: {
//           fullName: { en: fontFamily = '' } = {},
//           postScriptName: { en: fileName = '' } = {},
//         } = {},
//       } = font

//       // const languageSupport = detectLanguage(font, languageData)
//       // console.log('languageSupport:', languageSupport)
//       // fs.writeFileSync(
//       //   `css/${fileName}.css`,
//       //   getFontFace({ fontFamily, languageSupport }),
//       // )
//       return font
//     }
//   })
// }
