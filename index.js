const readline = require('readline-sync')
const robots = {
    text: require('./robots/text.js')
}
async function start(){
    const contentVideo = {}

    contentVideo.searchTerm = askAndReturnSearchTerm()
    contentVideo.prefix = askAndReturnPrefix()

    await robots.text(contentVideo)

    function askAndReturnSearchTerm(){
        return readline.question('Type a Wikipedia seach term: ')
    }

    function askAndReturnPrefix(){
        const prefixes = ['Who is', 'What is', 'The history for']
        const selectPrefixIndex = readline.keyInSelect(prefixes, 'Choose a option: ')
        const selectPrefixText = prefixes[selectPrefixIndex]

        return selectPrefixText
    }

    console.log(contentVideo)
}

start()