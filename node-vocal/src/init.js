import fs from "fs"

export default function(MODEL_PATH) {
    if (!fs.existsSync(MODEL_PATH)) {
        //console.log(process.cwd() + MODEL_PATH)
        //var files = fs.readdirSync(startPath);
        console.log("Please download the model from https://alphacephei.com/vosk/models and unpack as " + MODEL_PATH + " to the /dist directory.")
        process.exit()
    }

    return MODEL_PATH;
}