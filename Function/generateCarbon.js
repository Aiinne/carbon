const { CarbonError } = require("../Classes/CarbonError.js");
let fetch = require("node-fetch")
async function generateCarbon(options) {
    if (!options) throw new CarbonError("The function cannot be empty")
    if (typeof options !== "object") throw new CarbonError("The function must be a object")
    if (!options.code) throw new CarbonError("The option code cannot be empty")
    if (typeof options.code !== "string") throw new CarbonError("The option code must be a string")
    if (options.backgroundColor) {
        if (typeof options.backgroundColor !== "string") throw new CarbonError("The option background color must be a string")
        if (!options.backgroundColor.match("^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3,6})$")) throw new CarbonError("Enter a valid color in hexadecimal")
    }
    if (options.dropShadow) {
        shadow
        if (typeof options.dropShadow !== "boolean") throw new CarbonError("The option dropShadow must be a boolean")

        if (options.dropShadowBlurRadius) {
            if (options.dropShadow === false) throw new CarbonError("Cannot change the shadow if dropShadow are turned off")
            if (isNaN(options.dropShadowBlurRadius)) throw new CarbonError("The option dropShadowBlurRadius must be a number")
            options.dropShadowBlurRadius = options.dropShadowBlurRadius + "xp"

        }
        if (options.dropShadowOffsetY) {
            if (options.dropShadow === false) throw new CarbonError("Cannot change the shadow if dropShadow are turned off")
            if (isNaN(options.dropShadowOffsetY)) throw new CarbonError("The option dropShadowOffsetY must be a number")
            options.dropShadowOffsetY = options.dropShadowOffsetY + "xp"
        }
    }
    if (options.exportSize) {
        if (isNaN(options.exportSize)) throw new CarbonError("The option exportSize must be a number")
        options.exportSize = options.exportSize + "x"
    }
    if (options.fontFamily) {
        if (typeof options.fontFamily !== "string") throw new CarbonError("The option fontFamily must be a string")
        let fonts = ["Dank Mono", "Anonymous Pro", "Droid Sans Mono", "Fantasque Sans Mono", "Fira Code", "Hack", "IBM Plex Mono", "Inconsolata", "Iosevka", "JetBrain Mono", "Monoid", "Source Code Pro", "Space Mono", "Ubuntu Mono"]
        if (!fonts.includes(options.fontFamily)) throw new CarbonError("Please enter a valid font")
    }
    if (options.fontSize) {
        if (isNaN(options.fontSize)) throw new CarbonError("The option fontSize must be a number")
        options.fontSize = options.fontSize + "xp"
    }
    if (options.language) {
        if (typeof options.language !== "string") throw new CarbonError("The option language must be a string")
        let language = ["auto", "apache", "bash", "c", "c++", "c#", "clojure", "cobol", "coffeescript", "crystal", "css", "d", "dart", "diff", "django", "elixir", "elm", "erlang", "fortran", "gherkin", "graphql", "go", "groovy", "handlebars", "haskell", "html/xml", "java", "javascript", "json", "jsx", "julia", "kotlin", "latex", "lisp", "lua", "markdown", "mathematica", "matlab/octave", "mysql", "n-triples", "nim", "objective c", "ocaml/f#", "pascal", "perl", "pho", "powershell", "python", "r", "risc-v", "ruby", "rust", "sass", "scala", " smalltalk", "solidity", "sparql", "sql", "stylus", "switf", "tcl", "toml", "turtle", "typescript", "tsx", "twig", "vb.net", "verilog", "vhdl", "vue", "xquery", "yaml"]
        if (!language.includes(options.language.toLowerCase())) throw new CarbonError("Please enter a valid language")
    }
    if (options.lineHeight) {
        if (isNaN(options.lineHeight)) throw new CarbonError("The option lineHeight must be a number")
        options.lineHeight = options.lineHeight + "%"
    }
    if (options.firstLineNumber) {
        if (isNaN(options.firstLineNumber)) throw new CarbonError("The option firstLineNumber must be a number")
    }
    if (options.lineNumbers) {
        if (typeof options.lineNumbers !== "boolean") throw new CarbonError("The option lineNumbers must be a boolean")
    }
    if (options.paddingHorizontal) {
        if (isNaN(options.paddingHorizontal)) throw new CarbonError("The option paddingHorizontal must be a number")
        options.paddingHorizontal = options.paddingHorizontal + "xp"
    }
    if (options.paddingVertical) {
        if (isNaN(options.paddingVertical)) throw new CarbonError("The option paddingVertical must be a number")
        options.paddingVertical = options.paddingVertical + "xp"
    }
    if (options.prettify) {
        if (typeof options.prettify !== "boolean") throw new CarbonError("The option prettify must be a boolean")
    }
    if (options.theme) {
        if (typeof options.theme !== "string") throw new CarbonError("The option theme must be a string")
        let theme = ["3024 night", "a11y dark", "blackboard", "base 16 (dark)", "base 16 (light)", "cobalt", "duotone", "hopscotch", "lucario", "material", "monokai", "night owl", "nord", "oceanic next", "one light", "one dark", "panda", "paraiso", "seti", "shades of purple", "solarized (dark)", "solarized (light)", "synthwave '84", "twilight", "verminal", "vscode", "yeti", "zenburn"]
        if (!theme.includes(options.theme.toLowerCase())) throw new CarbonError("Please enter a valid theme")
    }
    if (options.watermark) {
        if (typeof options.watermark !== "boolean") throw new CarbonError("The option watermark must be a boolean")
    }
    if (options.widthAdjustment) {
        if (typeof options.widthAdjustment !== "boolean") throw new CarbonError("The option widthAdjustment must be a boolean")
    }
    if (options.windowControls) {
        if (typeof options.windowControls !== "boolean") throw new CarbonError("The option windowControls must be a boolean")
        if (options.windowTheme) {
            if (options.windowControls === false) throw new CarbonError("Cannot change the theme of windows if windows are turned off")
            let windowTheme = ["none", "sharp", "bw"]
            if (!windowTheme.includes(options.windowTheme.toLowerCase())) throw new CarbonError("Please enter a valid windowTheme")

        }
    }
    let fetchCarbon = await fetch('https://carbonara.solopov.dev/api/cook', {
        method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(options)
    })

    let bufferCarbon = await fetchCarbon.buffer()
    return await bufferCarbon
}
module.exports = { generateCarbon }