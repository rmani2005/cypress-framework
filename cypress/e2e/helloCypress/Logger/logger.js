
//This logger helps to log all types of logs
class logger{
   
    //Logging  log in console 
    log(text){
        console.log(text) 
    }

    //Logging information 
    info(text){
        console.info(text)
    }

    //Logging error 
    error(text){
        console.error(text)
    }
    
    //Logging basic information 
    warn(text){
        console.warn(text)
    }    

}module.exports = logger