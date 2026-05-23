/*

3. Add elements using:
push()
unshift()
Then remove elements using:
pop()
shift()

*/

let myArr = [1, 13 , -7 , 0]
console.log(myArr)
myArr.push(12)
console.log(myArr)
myArr.push(13983)
console.log(myArr)

myArr.unshift(10)
console.log(myArr)

myArr.pop()
console.log(myArr)
myArr.shift()
console.log(myArr)

let fruits = ["apples" , "bannana" , "oranges"]
fruits[5] = "mango";
console.log(fruits[5]); // 'mango'
console.log(Object.keys(fruits)); // ['0', '1', '2', '5']
console.log(fruits.length); // 6

console.log(typeof Object.keys(fruits))