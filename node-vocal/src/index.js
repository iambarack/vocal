import vosk_init from "./init.js"
import MODEL_PATHS from "./voskconf.js"

// @return -> model_path
//export default vosk_init(MODEL_PATHS.path_publish); 
export default vosk_init(MODEL_PATHS.path_dev_stable); 
//export default vosk_init(MODEL_PATHS.path_dev_fast); 