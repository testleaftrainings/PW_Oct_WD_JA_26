
let productDetails = 'Order ID: #12345-Confirmed'
let prod_status = productDetails.split('#')
 // ["Order ID: ","12345-Confirmed"]
 console.log(prod_status);
 
let prod_id = prod_status[1].split('-') // ["12345","Confirmed"]

console.log(prod_id[0])

let str = 'Hello World'

//str[0] = 'J' //silentlt fails str is still 'Hello World'

//correct Approach

str = 'J'+str.slice(1)
console.log(str) 


let str1 = 'Automation testing is incredibly important'

let words = str1.split(" ")
let longest = ""

for(let i =0; i<words.length; i++){
  if(words[i].length>longest.length){
    longest=words[i]
  }
}
console.log(longest)

let word = 'programming'

let letters = word.split('')
let result = []

for(let i=0; i<letters.length; i++){
  if(!result.includes(letters[i])){
    result.push(letters[i])
  }
}

console.log(result.join(""))

let price = '1,20,000'
let cleanPrice = price.replaceAll(',',"")
let rep = price.replace(',','')
console.log(rep);

console.log(cleanPrice)
