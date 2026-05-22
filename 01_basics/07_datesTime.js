// dates 

let myDate = new Date()
console.log(myDate);
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleString())
console.log(typeof myDate)

console.log()

let myCreatedDate = new Date(2023, 0, 23)
let myCreatedDate2 = new Date(2023, 0, 23, 5, 3)

console.log(myCreatedDate.toDateString())
console.log(myCreatedDate2.toLocaleString())

console.log()

let myCreated = new Date("2023-01-14")
let myCreated2 = new Date("01-04-2023")
console.log(myCreated.toDateString())
console.log(myCreated2.toLocaleString())

console.log()

let myTimeStamp = Date.now()
console.log(myTimeStamp)
console.log(myCreated.getTime())

console.log()

console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1)

newDate.toLocaleString('default', {
    weekday: "long",
})