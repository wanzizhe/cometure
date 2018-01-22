var Person=require('./person.js');
var util=require('util');

function Coder(){
    Person.call(this);
    this.code=function(){
        console.log('I am coding');
    }
}

util.inherits(Coder,Person);


module.exports=coder;