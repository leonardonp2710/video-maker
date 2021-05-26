const readline = require('readline-sync')
function start(){
    const contentVideo = {}

    contentVideo.searchTerm = askAndReturnSearchTerm()
    contentVideo.prefix = askAndReturnPrefix()

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