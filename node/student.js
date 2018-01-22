var person=require('./person.js')
var util=require('util');

function Student(){
    Person.call(this);
}

util.inherits(Student,Person);

Student.prototype.study=function(){
    console.log("I am studying")
}
module.exports=Student;