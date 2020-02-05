let text = 'hello world'

let stringLength = text.length //length is a property

let shout = text.toUpperCase() // these are methods converted to uppercase

let whisper = text.toLowerCase() // and to lowercase

let whereIsW = text.indexOf('w') //Index of first matching character or -1 is found

let whereIsZ = text.indexOf('z') // index of first matching character or -1 is found

let whisperAndShout = whisper.concat(shout) //Joins strings together'

let replace0 = text.replace('o', '0') //Replace the first instance of first thing with second thing
                                                            //See references for more info on this, can also go global
                                                            //and more complex replacements with regular expressions

let replaceAll0 = text.replace(/o/g, '0') //Replace all instance of first thing with second thing

let removeWhiteSpace = text.trim() // Remove spaces, tabs, newlines etc. from both ends of the string

console.log(stringLength, shout, whisper, whereIsW, whereIsZ, whisperAndShout, replace0, replaceAll0, removeWhiteSpace)