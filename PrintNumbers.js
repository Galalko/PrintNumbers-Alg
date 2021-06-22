 //    1. Print 1 - 135 
for(var i=1;i<=135; i++){
   console.log(i) 
}

// Diagram
//i=1 => print  : 1
//i=2 => print  : 1,2
//i=3 => print  : 1,2,3
//i=4 => print  : 1,2,3,4
//i=5 => print  : 1,2,3,4,5
//...
//...
// //i=135 => print  : 1,,2,.....,135
// i=136 => stop print becouse 136>135


// 2. Print Odd Numbers 1 - 135 

for ( var i=1 ;i<=135; i++){
    if(i%2 !=0)
    console.log(i)
}
// Diagram
//i%1 !=0 => print  : 1
//i%2 !=0 => the loop will not print
//i%3 !=0 => print  : 1,3
//i%4 !=0 => the loop will not print
//i%5 !=0 => print  : 1,3,5
//...
//...
// i%135 !=0 => print  : 1,3,5,.....,135
// i%136 !=0=> stop print becouse 136>135

 


// 3. Sum of Printed Numbers 
var i=0
for (var  m =0 ; m <=135; m++){
    i=i+m
    console.log(i)
 }
 
 
 // Diagram
// i=0   (0+0) >> print 0
// i=1   (1+0) >> print 1
// i=2   (2+1) >> print 3
// i=3   (3+3) >> print 6
//.
//.
//.
// i =135 (135 +9045 )>> print 9180



// 4. Print the elements of an array
var x = [1,4,2,12]
console.log (x)

/////


// 5. Find Max

const x = [1, 3, 2,888,545,25,55,8,588,-51,2500];

console.log(Math.max(...x));
// print >>2500


//6. Get Average 
const avg = arr => {
    const sum = arr.reduce((acc, cur) => acc + cur);
    const average = sum/arr.length;
    return average;
  }
  
  console.log(avg([1, 2, 3, 7, 8]));


  //
  // really i have tried a loooot
  //7. Eliminate the Negatives 
   //const array = [5,2,-50,4,-12,-9,20]
  // if (var i=0 ; i>=0 ; i++)
   //else i=0;
   //console.log (array.i)

   /////


   //8. Number to String 
   function turnNeg (){
    const negArray =[1,-1,3,-5]

    for (let i=0;i<negArray.length;i++){
        if(negArray[i]<0){
            negArray[i]="Ahmed"
        }
       
    }
    console.log(negArray) 
   }
   
   turnNeg()