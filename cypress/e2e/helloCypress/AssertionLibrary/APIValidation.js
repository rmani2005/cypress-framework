//APIValidation

import logger from "../Logger/logger"
//Common class objects
const log=new logger();

class APIValidation{
  //Type and Should have.value (paramter1-ObjectName, parameter2-value)
  //'.type() - type into a DOM element'
  APIValidation(){

  }

    //API AssertionLibrabry
    //Assert the status code
    Checkstatus(code,statuscode){
        expect(code).to.eq(statuscode)  //expect(code).to.eq(201)
    }

    //Assert the response
    CheckBodyLength(body,length){
      expect(body).to.have.length(length)   //expect(body).to.have.length(length)
    }

    //Assert the response
    CheckStringEqual(string,value){
        expect(string).to.eq(value) //expect(body[0].name).to.eq('space travel plan')
    }
    
    //Assert the response
    CheckBodyLengthGreaterThan(stringLength,intValue){
        expect(stringLength).to.be.greaterThan(intValue) //expect(body.length).to.be.greaterThan(1)
    }

    //Assert the response
    isString(string){
        expect(string).to.be.a('string')//expect(body[0].name).to.be.a('string')
    }
    
  


}module.exports=APIValidation