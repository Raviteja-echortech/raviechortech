// 1 const n = 7;
// let a = 0, b = 1, c
// for(i=0;i<=n;i++){
//     c = a + b
//     a=b;
//     b=c;
//     console.log(c)
// }
// res="";
// for(i=0;i<=n;i++){
//    for(j=0;j<=n;j++){
//     if(i==j||i+j==n){
//         res+="*"
//     }else{
//         res+=" "
//     }
//    }
//    res+='\n'

// }

// console.log(res)

//2 let n = 5;
// let string = "";
// for (let i = 1; i <= n; i++) {
//   for (let j = 0; j < i; j++) {
//     string += "*";
//   }
//   string += "\n";
// }
// for (let i = 1; i <= n - 1; i++) {
//   for (let j = 0; j < n - i; j++) {
//     string += "*";
//   }
//   string += "\n";
// }
// console.log(string)

//3 let n = 5;
// let string = "";
// for (let i = 1; i <= n; i++) {
//   for (let j = 0; j < n - i; j++) {
//     string += " ";
//   }
//   for (let k = 0; k < i; k++) {
//     string += "*";
//   }
//   string += "\n";
// }
// for (let i = 1; i <= n - 1; i++) {
//   for (let j = 0; j < i; j++) {
//     string += " ";
//   }
//   for (let k = 0; k < n - i; k++) {
//     string += "*";
//   }
//   string += "\n";
// }
//  console.log(string);
// n=7;
//4 res=""
//   for(i=0;i<=n;i++){
//     for(j=0;j<=(n-i-1);j++){
//       res+=" "
//     }
//     for(k=0;k<=i;k++){
//         res+="*"
//     }
//     res+="\n"
//   }
//   for(i=n-1;i>=0;i--){
//   for(j=0;j<=(n-i-1);j++){
//     res+=" "
//   }
//   for(k=0;k<=i;k++){
//       res+="*"
//   }
//   res+="\n"
// }
//   console.log(res)

//5 let res=""
// for(i=1;i<=n;i++){
//   for(j=1;j<=n;j++){
//     if(i+j==n-2||i-j==Math.floor(n/2)){
//       res+="*"
//     }else{
//       res+=" "
//     }
//   }
//   for(j=n-1;j>=1;j--){
//     if(i+j==n-2||i-j==Math.floor(n/2)){
//       res+="*"
//     }else{
//       res+=" "
//     }

//   }
//   res+='\n'
// }

// console.log(res)
//6 let res=""
//  for(i=0;i<=n;i++){
//   for(j=0;j<=(n-i-1);j++){
//     res+=" "
//   }
//   for(k=0;k<=i;k++){
//     res+="* "
//   }
//   res+='\n'
//  }
//  for(i=n-1;i>=0;i--){
//   for(j=0;j<=(n-i-1);j++){
//     res+=" "
//   }
//   for(k=0;k<=i;k++){
//     res+="* "
//   }
//   res+='\n'
//  }

//  console.log(res)

// 7 let res=""
// let a=0 , b=1 , c
// for(i=0;i<=n;i++){
//     c=a+b
//     a=b
//     b=c
//     console.log(c)
// }

//8 for(i=1;i<=n;i++){
//   val=1;
//   res=""
//     for(j=1;j<=n;j++){
//       res+=val
//       val++
//     }

//     console.log(res)
// }

// res=""
// 9 for(i=1;i<=n;i++){

//   for(j=1;j<=n-i;j++){

//     if(i<=9){
//       res+=`0${i} `
//     }
//     else{
//       res+=i+" "
//     }
//   }

//   res+='\n'
// }
// console.log(res)
//10 val = 1;
// res = "";
// for (i = 1; i <= n; i++) {
//   for (j = 1; j <= i; j++) {
//     res += val;
//     val++;
//   }
//   res += "\n";
// }
// console.log(res);
//var alp=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

// 11 res=""
// for(i=n;i>=0;i--){
//    for(j=0;j<=n;j++){
//        if(i+j==n){
//          res+=alp[i]
//        }else{
//          res+=" "
//        }
//    }
//    for(j=n-1;j>=0;j--){
//       if(i+j==n){
//          res+=alp[i]
//        }else{
//          res+=" "
//        } 
//    }
//    res+='\n'
// }
// console.log(res)


//12 res=""

// for(i=0;i<=n;i++){
//    for(j=0;j<=(n-i-1);j++){
//      res+=" "
//   }
//   for(k=0;k<=i;k++){
//      res+=alp[n]
//   }
//   res+='\n'
// }

//13 for(i=n-1;i>=0;i--){
//    for(j=0;j<=(n-i-1);j++){
//      res+=" "
//   }
//   for(k=0;k<=i;k++){
//    if(j==n){
//       res+=alp[n]
//    }
     
     
//   }
//   res+='\n'
// }

// 14 console.log(res)
// res='';
// for(i=0;i<=n;i++){
//    for(j=0;j<=n;j++){
//      if(i+j==n){
//       res+="*"
//      }else{
//       res+=" "
//      }
//    }
//    for(j=n-1;j>=0;j--){
//       if(i+j==n){
//        res+="*"
//       }else{
//        res+=" "
//       }
//     }
//    res+='\n'
// }
// for(i=n-1;i>=0;i--){
//    for(j=0;j<=n;j++){
//      if(i+j==n){
//       res+="*"
//      }else{
//       res+=" "
//      }
//    }
//    for(j=n-1;j>=0;j--){
//       if(i+j==n){
//        res+="*"
//       }else{
//        res+=" "
//       }
//     }
//    res+='\n'
// }

// console.log(res)
// 15 res=""
// for(i=0;i<=n;i++){
//    for(j=0;j<=i;j++){
     
//       res+=n
//    }
//    res+="\n"
// }
// for(i=n;i>=0;i--){
//    for(j=0;j<=i;j++){
//       res+=n
//    }
//    res+="\n"
// }
// console.log(res)
//  16 res="";
// for(i=0;i<=n;i++){
//   for(j=0;j<=n-i-1;j++){
//     res+=" "
//   }
//   for(k=0;k<=i;k++){
//     res+="* "
//   }
//   res+='\n'
// }
// for(i=n-1;i>=0;i--){
//   for(j=0;j<=n-i-1;j++){
//     res+=" "
//   }
//   for(k=0;k<=i;k++){
//     res+="* "
//   }
//   res+='\n'
// }

// console.log(res)
// 17 n = 10;
// res="";
// y=n;
// x=n;
// for(i=0;i<=n;i++){
//     for(j=0;j<=n*2;j++){
//         if(j>x&&j<y){
//             res+=" "
//         }else{
//             res+="*"   
//         }       
//     }
//     res+='\n'
//     x--;
//     y++;  
// }
// console.log(res)
  
// 18 n=10
// res=""
// for(i=1;i<=n;i++){
//     for(j=1;j<n*2;j++){
//         if(j<=i||j>=n*2-i){
//           res+="*"
//         }else{
//             res+=" "
//         }
//     }
//     res+='\n'
// }
// console.log(res)
// n=10
// res='';
// for(i=n;i>=0;i--){
//     for(j=0;j<=i;j++){
//     res+="*"
//     }
//     res+="\n"
// }
// for(i=0;i<=n;i++){
//     for(j=0;j<=i;j++){
//     res+="*"
//     }
//     res+="\n"
// }

// console.log(res)
//19 n=10
// res=""
// for(i=1;i<=n;i++){
//     for(j=1;j<=n;j++){
//         if(j==1||i==n||i==j){
//             res+='*'
//         }else{
//             res+=" "
//         }
//     }
//     res+="\n"
// }
// console.log(res)
// 20 n=10
// res=""
// val=1;
// for(i=1;i<=n;i++){
//     for(j=1;j<=n;j++){
//     if(j<=val||j>=n-val+1){
//         res+=j
//     }else{
//         res+=" "
//     }
//     }
//     if(i<=(n/2)){
//      val++
//     }else{
//     val--
       
//     }
//     res+='\n'
// }
// console.log(res)

//21 n=77;
// count=0;
// for(i=0;i<=n/2;i++){
//     if(n%i==0){
//        count++
//     }
// }
// if(count>2){
//     console.log("not prime number")
// }else{
//     console.log("Prime")
// }
//22 n=10;
// res="";
// for(i=n;i>=0;i--){
//     for(j=0;j<=i;j++){
//         res+=" "
//     }
//     for(k=i;k<=n;k++){
//         res+=k
//     }
//     res+='\n'
// }
// for(i=1;i<n;i++){
//     for(j=0;j<=i;j++){
//         res+=" "
//     }
//     for(k=i;k<=n;k++){
//         res+=k
//     }
//     res+='\n'
// }
// console.log(res)
// 23 n=10;
// res="";
// for(i=0;i<=n;i++){
//     for(j=0;j<=i;j++){
//         res+=" "
//     }
//     for(k=i;k<=n;k++){
//         res+='*'
//     }
//     res+='\n'
// }
// console.log(res)
