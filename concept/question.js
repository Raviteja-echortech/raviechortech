
// a = {
//     a:1
// } 

// b = {
//     a:a,
//     d:1
// }

// //c=structuredClone(b)

// //  c= JSON.parse(JSON.stringify(b))
// c= structuredClone(b)

// b.a.a=2
// console.log(b,a)
// console.log(c.a.a)
//console.log(b)
//console.log(c.a.a);
// var a={
//     a:1,
//     l:"raviteja"
// }
// var b={
//     a:1,
//     l:"raviteja"
// }
// console.log(a===b)
// a={
//     o:1,
// }
// b={
//     k:1,
// }
// c={
//     m:1,
// }
// d={
//     p:2,
// }
// l=Object.assign({},a,b,c,d)
// console.log(l)

a={a:{a:{a:{a:{a:[2,6,73,2,5]}}}}}

const givenvalue=(val)=>{
    for(key in val ){
        if(typeof(val[key])==="object"){
         givenvalue(val[key])
        }else{
            console.log(val[key])
        }
     }
     
}
givenvalue(a)

// arr=[1,2,3,45,0]
// for(key in arr){
//     console.log(arr[key])
// }
// arr=[{a:2,b:3}]
// c=arr.filter((val)=>{
//     if(val.a===2){
//        return val.b
//     }else{
//         return "no"
//     }
// })
// console.log(c)
