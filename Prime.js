  
  let num=13;
  let count=0;
    
    for(let i=1;i<=num;i++){
   
   if((num%1==0)&&(num%i==0)){
     count++
   }
   
    }
   if(count==2){
       console.log("It is Prime number")
   }else{
       console.log("Not a Prime number")
   }
   