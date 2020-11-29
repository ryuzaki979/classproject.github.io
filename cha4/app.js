
let count= 0;
let result= 0;
let big;
let ul = document.getElementById('ul');
let showResult = document.getElementById('showResult')
console.log(showResult);
while(true){
    
    let data = prompt('Enter data to get sum.');
    if(data == ''){
        break
    }
    let intData = parseInt(data);
    let length = data.length;
    count++
    big = Math.max(data);
    // let li = document.createElement('li');
    // li.innerText = (`New data is ${intData}`);
    // ul.appendChild(li);
    result += intData;
    // showResult.innerText = (`result is ${result}`);
}
console.log('count is ' + count);
console.log('result is ' + result);
console.log('big is ' + big);







