//selector
let click = document.getElementById('btn');
console.log(click)
//event
click.addEventListener('click', run);

//function
function run(){
    let i= 0;
let result= 0;
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
    let li = document.createElement('li');
    li.innerText = (`New data is ${intData}`);
    ul.appendChild(li);
    result += intData;
    showResult.innerText = (`result is ${result}`);
}
    
}


// let select = document.getElementById('prompt');
// console.log(prompt);

// select.addEventListener('click', show);

// function show(){
//     let data = prompt('data is?')
//     console.log( data);
// }


