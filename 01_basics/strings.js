const name = "Krishna"
const repoCount = 26
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)
console.log(typeof(String))
const game = new String('Krishna Sahoo')
console.log(game[1])
console.log(game.__proto__)
console.log(game.length)
console.log(game.toUpperCase())
console.log(game.toLowerCase())
console.log(game.charAt(2))
console.log(game.indexOf('s'))

console.log()

const newString = game.substring(0,4)
console.log(newString)
const anotherString = game.slice(-4, -1)
console.log(anotherString)
console.log(game.trim())

let damn = "                holy shit           "
console.log(damn)
console.log(damn.trim())
console.log()

const url = "https://krishna-portfolio%20lake-psi.vercel.app/"
console.log(url.replace('%20', '-'))
console.log(url.includes('krishna'))