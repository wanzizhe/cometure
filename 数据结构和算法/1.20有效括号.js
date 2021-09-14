function kuohao(str) {
    if(str.length % 2 === 1) return false;
    let stack = [];
    for(let i = 0; i < str.length; i ++){
        let s = str[i];
        if(s === '(' || s === '{' || s === '['){
            stack.push(s)
        }else{
            let top = stack[stack.length - 1];
            if(top === '(' && s === ')' ||
                top === '{' && s === '}' || 
                top === '[' && s === ']'
            ){
                stack.pop();
            }else{
                return false;
            }
        }
    }
    return stack.length === 0;
}

console.log(kuohao('{[]}'))
console.log(kuohao('{[()]}'))