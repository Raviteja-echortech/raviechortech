n=5;
res=""
//1
// for(i=0;i<=n;i++){
//    for(j=0;j<=i;j++){
//       res+="*"
//    }
//    res+='\n'
// }
// console.log(res)

//2
// for(i=n;i>=0;i--){
//    for(j=0;j<=i;j++){
//       res+="*"
//    }
//    res+='\n'
// }
// console.log(res)
 
//3
// for(i=0;i<=n;i++){
//       for(j=0;j<=n-i-1;j++){
//          res+=" "
//       }
//       for(k=0;k<=i;k++){
//          res+="*"
//       }
//       res+='\n'
//    }
//    console.log(res)

//4
//  for(i=n;i>=0;i--){
//       for(j=0;j<=n-i-1;j++){
//          res+=" "
//       }
//       for(k=0;k<=i;k++){
//          res+="*"
//       }
//       res+='\n'
//    }
//    console.log(res)
//5
// for(i=0;i<=n;i++){
//       for(j=0;j<=n-i-1;j++){
//          res+=" "
//       }
//       for(k=0;k<=i;k++){
//          res+="*"
//       }
//       res+='\n'
//    }
//    console.log(res)

//6
// for(i=n;i>=0;i--){
//       for(j=0;j<=n-i-1;j++){
//          res+=" "
//       }
//       for(k=0;k<=i;k++){
//          res+="* "
//       }
//       res+='\n'
//    }
//    console.log(res)


//7
//  for(i=0;i<=n;i++){
//    res+="*"
//  }
//  for(j=0;j<=n;j++){
//    console.log(res)
//  }
//
//8
// for(i=0;i<=n;i++){
//    for(j=0;j<=n-i-1;j++){
//       res+=" "
//    }
//    for(k=0;k<=i;k++){
//       res+="*"
//    }
//    res+='\n'
// }
// for(i=n-1;i>=0;i--){
//    for(j=0;j<=n-i-1;j++){
//       res+=" "
//    }
//    for(k=0;k<=i;k++){
//       res+="*"
//    }
//    res+='\n'
// }
// console.log(res)
//9
//   for(i=0;i<=n;i++){
//    for(j=0;j<=i;j++){
//     res+="*"
//    }
//    res+='\n'
//   }
//   for(i=n-1;i>=0;i--){
//    for(j=0;j<=i;j++){
//     res+="*"
//    }
//    res+='\n'
//   }
//   console.log(res)
//10
// for(i=0;i<=n;i++){
//    for(j=0;j<=n-i-1;j++){
//       res+=" "
//    }
//    for(k=0;k<=i;k++){
//       res+="* "
//    }
//    res+='\n'
// }
// for(i=n-1;i>=0;i--){
//    for(j=0;j<=n-i-1;j++){
//       res+=" "
//    }
//    for(k=0;k<=i;k++){
//       res+="* "
//    }
//    res+='\n'
// }
// console.log(res)
//11
// for(i=0;i<=n;i++){
//    for(j=0;j<=n;j++){
//        if(i+j==n+1){
//          res+='*'
//        }else{
//          res+=" "
//        }
//    }

//    for(j=n-1;j>=0;j--){
//       if(i+j==n+1){
//         res+='*'
//       }else{
//         res+=" "
//       }
//   }
//   res+='\n'
// }

// console.log(res)


//12
// for(i=n;i>=0;i--){
//        for(j=0;j<=n-i-1;j++){
//            res+="  "
//        }
//        for(k=1;k<=i;k++){
//            if(k>1){
//                res+="* "+"* "
//            }else{
//                res+="* "
//            }
          
          
//        }
//        res+="\n"
//    }
//    console.log(res)


//13
// for(i=n;i>=0;i--){
//    for(j=0;j<=n;j++){
//        if(i+j==n+1){
//          res+='*'
//        }else{
//          res+=" "
//        }
//    }

//    for(j=n-1;j>=0;j--){
//       if(i+j==n+1){
//         res+='*'
//       }else{
//         res+=" "
//       }
//   }
//   res+='\n'
// }

// console.log(res)


//14

   // for(i=0;i<=n;i++){
   //    for(j=0;j<=n;j++){
   //        if(i+j==n+1){
   //          res+='*'
   //        }else{
   //          res+=" "
   //        }
   //    }
   
   //    for(j=n-1;j>=0;j--){
   //       if(i+j==n+1){
   //         res+='*'
   //       }else{
   //         res+=" "
   //       }
   //   }
   //   res+='\n'
   // }
   // for(i=n-1;i>=0;i--){
   //    for(j=0;j<=n;j++){
   //        if(i+j==n+1){
   //          res+='*'
   //        }else{
   //          res+=" "
   //        }
   //    }
   
   //    for(j=n-1;j>=0;j--){
   //       if(i+j==n+1){
   //         res+='*'
   //       }else{
   //         res+=" "
   //       }
   //   }
   //   res+='\n'
   // } 
   // console.log(res)
   
   //15
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


//16
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


//17
// for(i=n;i>=0;i--){
//    for(j=0;j<=i;j++){
//       res+="*"
//    }
//    res+="\n"
// }
// for(i=0;i<=n;i++){
//    for(j=0;j<=i;j++){
//       res+="*"
//    }
//    res+="\n"
// }
// console.log(res)


//18
// for(i=1;i<=n;i++){
//    for(j=1;j<=n;j++){
//       if(i+j==n+1||i==j){
//      res+="*"
//       }else{
//          res+=" "
//       }
//    }
//    res+="\n"
// }
// console.log(res)


//19
// for(i=1;i<=n;i++){
//    for(j=1;j<=n;j++){
//       if(j==1||i==n||i==j){
//          res+="*"
//       }else{
//          res+=" "
//       }
//    }
//    res+='\n'
// }
// console.log(res)

//20
// for(i=1;i<=n;i++){
//    for(j=1;j<=n;j++){
//       if(j==1||i==n||j==n||i==1){
//          res+="*"
//       }else{
//          res+=" "
//       }
//    }
//    res+='\n'
// }
// console.log(res)


//21
// val=1;
// for(i=1;i<=n;i++){
//     for(j=1;j<=n;j++){
//     if(j<=val||j>=n-val+1){
//         res+="*"
//     }else{
//         res+=" "
//     }
//     }
//     if(i<=n/2){
//      val++
//     }else{
//     val--
    
//     }
//     res+='\n' 
// }
// console.log(res)

//22
// for(i=1;i<=n;i++){
//    for(j=0;j<=n;j++){
//       res+=i
//    }
//    res+='\n'
// }
// console.log(res)


//23
// for(i=1;i<=n;i++){
//    res+=i
// }
// for(j=1;j<=n;j++){
//    console.log(res)
// }


//24
// for(i=n;i>=1;i--){
//    for(j=1;j<=n;j++){
//     res+=i
//    }
//    res+='\n'
// }
// console.log(res)

//25
// for(i=1;i<=n;i++){
//    for(j=n;j>=1;j--){
//     res+=j
//    }
//    res+='\n'
// }
// console.log(res)

//26
// for(i=1;i<=n;i++){
//    for(j=1;j<=i;j++){
//      res+=i
//    }
//    res+="\n"
// }
// console.log(res)

//27

// for(i=1;i<=n;i++){
//    for(j=1;j<=i;j++){
//        res+=j
//    }
//    res+='\n'
// }
// console.log(res)

//28
// val=1
// for(i=1;i<=n;i++){
//    for(j=1;j<=n-i;j++){
//       res+=val
//    }
//    res+="\n"
//    val++
// }
// console.log(res)


//29
// for(i=n;i>=1;i--){
//    for(j=1;j<=n-i-1;j++){
//       res+=" "
//    }
//    for(k=1;k<=i;k++){
//     res+=k
//    }
//    res+="\n"
// }
// console.log(res)

//30
// val=1;
// for(i=1;i<=n;i++){
// for(j=1;j<=n-i-1;j++){
//      res+="   "
// }
// for(k=1;k<=val;k++){
//    res+=i+"  "
// }
// res+='\n'
//  val+=2
// }
// console.log(res)


//31
// val=1
// for(i=1;i<=n;i++){
//    for(j=1;j<=n-i-1;j++){
//     res+=" "
//    }
//    for(k=1;k<=val;k++){
//      res+=val;
//    }
//    res+='\n'
//    val+=2
// }
// console.log(res)


//32
// val=1
// for(i=1;i<=n;i++){
//    for(j=1;j<=n-i-1;j++){
//       res+=" "
//    }
//    for(k=1;k<=val;k++){
//       res+=k
     
//    }
//    val++
//    res+='\n'
// }
// console.log(res)

//33
// val=1
// for(i=1;i<=n;i++){
//    for(j=1;j<=n-i-1;j++){
//       res+=" "
//    }
//    for(k=val;k>=1;k--){
//       res+=k
     
//    }
//    val+=2
//    res+='\n'
// }
// console.log(res)

//34
// val=1
// for(i=0;i<=n;i++){
//    for(j=0;j<=n-i-1;j++){
//       res+=" "
//    }
//    for(k=0;k<=i;k++){
//       res+=val+" "
//    }
//    res+='\n'
//    val++
// }
// console.log(res)
  
//35

// for(i=n;i>=1;i--){
//    for(j=0;j<=n-i-1;j++){
//       res+=" "
//    }
//    for(k=i;k>=1;k--){
//       res+=i+" "
//    }
//    res+='\n'
 
// }
// console.log(res)


//36
// val=1
// for(i=0;i<n;i++){
//    for(j=0;j<=n-i-1;j++){
//       res+=" "
//    }
//    for(k=0;k<=i;k++){
//       res+=val+" "
//    }
//    res+='\n'
//    val++
// }
// for(i=n-1;i>=1;i--){
//    for(j=0;j<=n-i-1;j++){
//       res+=" "
//    }
//    for(k=i;k>=1;k--){
//       res+=i+" "
//    }
//    res+='\n'
 
// }
// console.log(res)

//37
// for(i=1;i<=n;i++){
//    for(j=1;j<=n;j++){
//        if(i+j==n+1){
//            res+=i
//        }else{
//            res+=" "
//        }

//    }
//    for(j=n-1;j>=1;j--){
//        if(i+j==n+1){
//            res+=i
//        }else{
//            res+=" "
//        }

//    }
//    res+="\n"
// }
// console.log(res)


//38
// for(i=n-1;i>=1;i--){
//    for(j=1;j<=n;j++){
//        if(i+j==n+1){
//            res+=i
//        }else{
//            res+=" "
//        }

//    }
//    for(j=n-1;j>=1;j--){
//        if(i+j==n+1){
//            res+=i
//        }else{
//            res+=" "
//        }

//    }
//    res+="\n"
// }

// console.log(res)

//39
// for(i=1;i<=n;i++){
//    for(j=1;j<=n;j++){
//        if(i+j==n+1){
//            res+=i
//        }else{
//            res+=" "
//        }

//    }
//    for(j=n-1;j>=1;j--){
//        if(i+j==n+1){
//            res+=i
//        }else{
//            res+=" "
//        }

//    }
//    res+="\n"
// }
// for(i=n-1;i>=1;i--){
//    for(j=1;j<=n;j++){
//        if(i+j==n+1){
//            res+=i
//        }else{
//            res+=" "
//        }

//    }
//    for(j=n-1;j>=1;j--){
//        if(i+j==n+1){
//            res+=i
//        }else{
//            res+=" "
//        }

//    }
//    res+="\n"
// }

// console.log(res)

//40
// for(i=0;i<=n;i++){
//    for(j=0;j<=i;j++){
//        res+=n-j
//    }
//    res+='\n'
// }
// for(i=n-1;i>=0;i--){
//    for(j=0;j<=i;j++){
//        res+=n-j
//    }
//    res+='\n'
// }
// console.log(res)

//41
// for(i=0;i<=n;i++){
//       for(j=0;j<=n-i-1;j++){
//           res+=" "
//       }
//       for(k=j;k<=n;k++){
//          res+=k
//       }
//       res+='\n'
//    }
//    for(i=n-1;i>=0;i--){
//       for(j=0;j<=n-i-1;j++){
//           res+=" "
//       }
//       for(k=j;k<=n;k++){
//          res+=k
//       }
//       res+='\n'
//    }

// console.log(res)


//42
// for(i=0;i<=n;i++){
//    for(j=n;j>=1;j--){
//       if(i+j==n+1||i==j){
//          res+=i
//       }else{
//          res+=" "
//       }
//    }
//    res+="\n"
// }
// console.log(res)

// 43 let a=0 , b=1 , c=a+b
// for(i=0;i<=n;i++){
//     for(j=0;j<=i;j++){
//         res+=c+" "
//        c=a+b
//        a=b
//        b=c

//     }
//     res+='\n'
// }
// console.log(res)


// 44 val=1;
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

//45
// for(i=1;i<=n;i++){
//    for(j=1;j<=n;j++){
//       if(j==1||i==j){
//         res+=i
//       }else if(i==n){
//          res+=n
//       }else{
//          res+=' '
//       }
//    }
//    res+='\n'
// }
// console.log(res)

//46
// val=1
// for(i=1;i<=n;i++){
//    for(j=1;j<=i;j++){
//       res+=val
//       val++
//    }
//    res+='\n'
// }
// console.log(res)

//47

var alp=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
// for(i=0;i<=n;i++){
//    for(j=0;j<=n;j++){
//       res+=alp[i]
//    }
//    res+='\n'
// }
// console.log(res)

//48
// for(i=0;i<=n;i++){
//    for(j=0;j<=n;j++){
//       res+=alp[j]
//    }
//    res+='\n'
// }
// console.log(res)


//49
// for(i=0;i<=n;i++){
//    for(j=0;j<=n;j++){
//       res+=alp[n-i]
//    }
//    res+='\n'
// }
// console.log(res)


//50
// for(i=0;i<=n;i++){
//    for(j=n;j>=0;j--){
//       res+=alp[j]
//    }
//    res+='\n'
// }
// console.log(res)


//51
// for(i=0;i<=n;i++){
//    for(j=0;j<=n-i-1;j++){
//       res+=""
//    }
//    for(k=0;k<=i;k++){
//       res+=alp[i]
//    }
//    res+='\n'
// }
// console.log(res)

//52
// for(i=0;i<=n;i++){
//    for(j=0;j<=n-i-1;j++){
//       res+=""
//    }
//    for(k=0;k<=i;k++){
//       res+=alp[k]
//    }
//    res+='\n'
// }
// console.log(res)

//53
// val=n
// for(i=n;i>=0;i--){
//    for(j=0;j<=n-i-1;j++){
//       res+=""
//    }
//    for(k=0;k<=i;k++){
//       res+=alp[val]
//    }
//    res+='\n'
//    val--
// }
// console.log(res)

//54
// for(i=n;i>=0;i--){
//    for(j=0;j<=n-i-1;j++){
//       res+=""
//    }
//    for(k=0;k<=i;k++){
//       res+=alp[n]
//    }
//    res+='\n'
// }
// console.log(res)


//55
// val=0
//  for(i=n;i>=0;i--){
//    for(j=0;j<=n-i-1;j++){
//       res+=""
//    }
//    for(k=0;k<=i;k++){
//       res+=alp[val]
//    }
//    res+='\n'
//    val++
// }

//console.log(res)


//56
// for(i=n;i>=0;i--){
//    for(j=0;j<=n-i-1;j++){
//       res+=""
//    }
//    for(k=0;k<=i;k++){
//       res+=alp[n-k]
//    }
//    res+='\n'
// }
// console.log(res)


//57
// val=0;
// for(i=0;i<=n;i++){
//    for(j=0;j<=n-i-1;j++){
//       res+=" "
//    }
//    for(k=0;k<=i;k++){
//       res+=alp[val]
//    }
//    res+='\n'
//    val++
// }
// console.log(res)

//58

// for(i=0;i<=n;i++){
//    val=0
//    for(j=0;j<=n-i-1;j++){
//       res+=" "
//    }
//    for(k=0;k<=i;k++){
//       res+=alp[val]
//       val++
//    }
//    res+='\n'
  
// }
// console.log(res)

//59
//  for(i=n;i>=0;i--){
//       val=0
//       for(j=0;j<=n-i-1;j++){
//          res+=" "
//       }
//       for(k=0;k<=i;k++){
//          res+=alp[val]
//          val++
//       }
//       res+='\n'
     
//    }
//    console.log(res)

//60
//  for(i=n;i>=0;i--){
//       val=0
//       for(j=0;j<=n-i-1;j++){
//          res+=" "
//       }
//       for(k=0;k<=i;k++){
//          res+=alp[val]
//          val++
//       }
//       res+='\n'
     
//    }
//    console.log(res)


//61
// val=0;
// for(i=0;i<=n;i++){
//    for(j=0;j<=n-i-1;j++){
//    res+="  "
//    }
//    for(k=0;k<=i;k++){
//       if(k==0){
//          res+=alp[val]+"  "
        
//       }else{
//          res+=alp[val]+" "+alp[val]+"  "
//       }
     
//    }
//    res+='\n'
//    val++
// }
// console.log(res)


//62
//   for(i=n;i>=0;i--){
//    for(j=0;j<=n-i-1;j++){
//     res+=" "
//    }
//    for(k=0;k<=i;k++){
//    res+=alp[i]+" "
//    }
//    res+='\n'
//   }
//   console.log(res)


//63
// for(i=n;i>=0;i--){
//    for(j=n;j>=i;j--){
//        res+=alp[j]
//    }
//    res+='\n'
// }
// for(i=0;i<=n;i++){
//    for(j=n;j>=i;j--){
//        res+=alp[j]
//    }
//    res+='\n'
// }
// console.log(res)

//64
for(i=n;i>=-n;i--){
   for(j=1;j<=Math.abs(i);j++){
      res+=" "
   }
   for(k=Math.abs(i);k<=n;k++){
      res+=String.fromCharCode(k+65)
     
   }
   res+='\n'
} 
console.log(res)

//65

// val=0;
// for(i=0;i<=n;i++){
//    for(j=0;j<=n-i-1;j++){
//    res+="  "
//    }
//    for(k=0;k<=i;k++){
//       if(k==0){
//          res+=alp[val]+"  "
        
//       }else{
//          res+=alp[val]+" "+alp[val]+"  "
//       }
     
//    }
//    res+='\n'
//    val++
// }
// console.log(res)

//66
// for(i=0;i<=n;i++){
//    for(j=0;j<=n-i-1;j++){
//        res+=" "
//    }
//    for(k=0;k<=i;k++){
//        res+=alp[i]+" "
//    }
//    res+='\n'
// }
// for(i=n-1;i>=0;i--){
//    for(j=0;j<=n-i-1;j++){
//        res+=" "
//    }
//    for(k=0;k<=i;k++){
//        res+=alp[i]+" "
//    }
//    res+='\n'
// }
// console.log(res)



//67
// for(i=0;i<=n;i++){
//    for(j=0;j<=n;j++){
//      if(i==j){
//         res+=alp[i]
//      }else{
//         res+=" "
//      }
//    }
   
//    for(j=n-1;j>=0;j--){
//     if(i==j){
//        res+=alp[i]
//     }else{
//        res+=" "
//     }
//   }
//   res+="\n"
// }
// console.log(res)