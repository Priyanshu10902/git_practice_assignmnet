let n=5;
let count=0;
for(let i=0; i<n; i++){
if(n%i==0){
    count++;
}
}
if(count==0){
    console.log("number is prime");
}
else{
    console.log("number is not prime");
}