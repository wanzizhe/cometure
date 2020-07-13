var Student=require('./student.js')
var Teacher=require('./teacher.js')
var coder=require('./coder.js')

var student=new Student();
student.eat();
student.study();

var teacher=new Teacher();
teacher.eat();
teacher.study();

coder.code();
coder.sleep();