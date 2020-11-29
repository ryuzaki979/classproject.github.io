n= 20
let star = '*' ;
let star2= '#';
let result = '';
let count = 0;

for (i=1; i<=n; i++){
    count++;
    if(i%5==0){
        result+= '⚫';
        continue
    }
    else if(i%2==0){
        result+= '⭐' 
    }
    
     else{
        result+= '❤️';
    }
}
console.log(result);