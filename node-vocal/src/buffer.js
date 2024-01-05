import { wordsToNumbers as w2n } from "words-to-numbers"
import logUpdate from "log-update";

// @func -> only-multiply
export default function(buffer) {

    try {
        //console.log(buffer.text.split(" "));
        // setInterval(() => {
        //     process.stdout.write(`\r${buffer.text.split(" ")}`)
        //     process.stdout.cursorTo(10);
        // }, 100)
        logUpdate(buffer.text.split(" "))
        const abuff = w2n(buffer.text, { fuzzy: false }).split(" ");
        console.log(abuff);
        if (abuff.length <= 2) {
            console.log("missing args");
            return -1;
        }
        
        //btw dont need 4 sep funcs can just implement this line and make the stuff
        const calcx = new Set(["times", "plus", "minus", "divide"]) //add alias to each command as well

        let command = "";

        for (let i = 0; i < abuff.length; i++) {
            if (calcx.has(abuff[i])) {
                command = abuff[i];
            }
        }

        if (command.length) {
            //eval('times(buffer)')
            return eval(command + '(buffer)') //what does eval return though
        }
        return -1;

        console.log(calcx);

    } catch(e) {
        console.log("try again x");
        return -1;
    }
}
export function plus(buffer) {

    try {
        const sterilized = w2n(buffer.text, { fuzzy: false }).split(" ")
        console.log("input: ", buffer);
        console.log(sterilized);

        //only works with positive integers should add for negative as well
        const filtered = sterilized.filter(el => {
            if (!isNaN(el) ) {
                return el;
            }
        }).map(el => Number(el))

        const isValidInput = filtered.length
        console.log(isValidInput);

        console.log(filtered);

        const result = filtered.reduce(
            (accumulator, currentValue) => accumulator + currentValue, 0
        );
        // console.log(w2n);
        // console.log(buffer.text.split(" "));
        // console.log(
        //     w2n(buffer.text, { fuzzy: false }).split(" ")
        // );

        console.log("\n", result);
        if (isValidInput) {
            return result;
        }

        return -1;
    } catch(e) {
        console.log("try again");
        return -1;
    }
}
export function times(buffer) {

    try {
        const sterilized = w2n(buffer.text, { fuzzy: false }).split(" ")
        console.log("input: ", buffer);
        console.log(sterilized);

        //only works with positive integers should add for negative as well
        const filtered = sterilized.filter(el => {
            if (!isNaN(el) ) {
                return el;
            }
        }).map(el => Number(el))

        const isValidInput = filtered.length
        console.log(isValidInput);

        console.log(filtered);

        const result = filtered.reduce(
            (accumulator, currentValue) => accumulator * currentValue, 1
        );
        // console.log(w2n);
        // console.log(buffer.text.split(" "));
        // console.log(
        //     w2n(buffer.text, { fuzzy: false }).split(" ")
        // );

        console.log("\n", result);
        if (isValidInput) {
            return result;
        }

        return -1;
    } catch(e) {
        console.log("try again");
        return -1;
    }
}