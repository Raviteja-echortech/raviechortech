// val=1;
// res=""
// for(i=0;i<=3;i++){
//    for(j=0;j<=3-i-1;j++){
//      res+=" "
//    }
//    for(k=0;k<=i;k++){
//     res+=val;
//     val++
//    }
//    res+='\n'
// }
// console.log(res)

// b=""
// for(i=a.length-1;i>=0;i--){
//    b+=a[i]
// }
// if(b===a){
//     console.log(typeof a)
// }else{
//     console.log("false")
// }
var a = 122212;
var l = a;
var reverse = 0

while (a != 0) {
  reverse=(reverse*10)+a%10;
  console.log(reverse)
  a=parseInt(a/10)
}

if (l == reverse) {
  console.log("true");
} else {
  console.log("false");
}
