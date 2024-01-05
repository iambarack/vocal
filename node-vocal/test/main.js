import buffx from "../src/buffer.js"
import randomWords from "random-words"
const max = 5;

for (let i = 0; i < max; i++) {
    buffx({
        //text : randomWords({ min: 3, max: 10 }).join(" ")
        //text : "five " + randomWords({ min: 1, max: 2 }).join(" ") + " ninety nine" 
        text : "five " + "times" + " ninety nine" 
    })
}