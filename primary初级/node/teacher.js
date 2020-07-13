var Person=require('./person.js');
var util=require('util');

function Teacher(){
    Person.call(this);
    this.teach=function(){
        console.log('I am teaching')
    }
}

util.inherits(Teacher,Person);
module.exports=Teacher;