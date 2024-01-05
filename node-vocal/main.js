import MODEL_PATH from "./src/index.js"
import { SAMPLE_RATE } from "./src/voskconf.js"
import buffx from "./src/buffer.js"
import logUpdate from "log-update";
import chalk from "chalk"
import vosk from "vosk"
import mic from "mic"

vosk.setLogLevel(0);

// @vosk.init
const model = new vosk.Model(MODEL_PATH);
const rec = new vosk.Recognizer({model: model, sampleRate: SAMPLE_RATE});

// @mic.init
var micInstance = mic({
    rate: String(SAMPLE_RATE),
    channels: '1',
    debug: false,
    device: 'default',    
});

// @mic.getAudioStream
var micInputStream = micInstance.getAudioStream();


// @audio->text
micInputStream.on('data', data => {
    if (rec.acceptWaveform(data)) {
        //console.log(rec.result());
        const proto = rec.result()
        // console.log("res", rec.result());
        console.log(rec.result(), proto);
        buffx(proto);
    }
    else
        process.stdout.write(`${chalk.red("\rwaiting")} : ${JSON.stringify(rec.partialResult())}`);
        
});



// @exit
micInputStream.on('audioProcessExitComplete', function() {
    console.log("Cleaning up");
    console.log(rec.finalResult());
    rec.free();
    model.free();
});

process.on('SIGINT', function() {
    console.log("\nStopping");
    micInstance.stop();
});

micInstance.start();