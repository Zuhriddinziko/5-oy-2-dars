// 3-qism. Masalalar

// Obyekt metodlariga oid masalalar.

// masala1
// let onyr={name :'Salim',
// age:45,
// tel:1234567,
// where:'AQSH'
// }
// function onjKeys(obb){
//     return Object.keys(obb)
// }
// console.log(onjKeys(onyr));

// masala 2
// let onyr={name :'Salim',
// age:45,
// tel:1234567,
// where:'AQSH'
// }
// function onjKeys(obb){
//     return Object.values(obb)
// }
// console.log(onjKeys(onyr));

// masala 3
// let onyr={name :'Salim',
// age:45,
// tel:1234567,
// where:'AQSH'
// }
// function onjKeys(obb){
//     return Object.entries(obb)
// }
// console.log(onjKeys(onyr));

// masala 4
// let onyr={name :'Salim',
// age:45,
// tel:1234567,
// where:'AQSH'
// }
// function onjKeys(obb){
//     return Object.freeze(obb)
// }
// console.log(onjKeys(onyr));


                         
                                    // Massiv metodlariga oid masalalar.


                                    // masala 1
                                    // function mediumArr(arr){
                                    //     let a= arr.length/2;
                                    //     return arr.slice(a,a+3)
                                    // }
                                    // let ar = [12,45,6,8,9,7,8,2];
                                    // console.log(mediumArr(ar));


                                    // masala 2
                                    // function addTo(arr,element,qoshish){
                                    //   arr.splice(element, 0,qoshish)
                                    //  return arr;   
                                    // }
                                    // let a=2;
                                    // let b=28;
                                    // console.log(addTo(ar,a,b));


                                    // masala 3
                                //     function concatMassivs(arr1, arr2, arr3){
                                //        let res= arr2.concat(arr3,arr1);
                                //         return res;
                                //     }
                                //     let a = [445,6,9,8,7,2,3,65];
                                //     let b = [444,6,9,8,7,2,3,65];
                                //     let c = [666,6,9,8,7,2,3,65];
                                //    console.log( concatMassivs(a,b,c));


                                // masala 4
                                // function aarKub(arr,indexin){
                                //     let res= arr.indexOf(indexin);
                                //     let resul;
                                //     if(res>=0){
                                //         resul=res**2
                                //     }else {resul='false'}
                                //     return resul;
                                // }
                                // let num = [45,21,98,64,4]
                                // let a =9;
                                // console.log(aarKub(num,a));

                                // masala 5
                                // function lastIndexElement(arr,element){
                                //     return arr.lastIndexOf(element)
                                // }
                                // let num = [45,21,98,64,4];
                                // let a = 64;
                                // console.log(lastIndexElement(num,a));

                                // masala 6
                                // function truArray(arr,arr1,element){
                                //     let res= arr.indexOf(element);
                                //     let resul= arr1.indexOf(element);
                                //     if(res>=0&&resul>=0){
                                //         console.log("true");
                                //     }else{
                                //         console.log("false");

                                //     }
                                    
                                // }
                                // let num = [40,25,98,64,4];
                                // let mum = [45,21,45,64,4];
                                // let a= 64;
                                // console.log(truArray(num,mum,a));

                                // masala 7
                                // function arrInclu(arr, element){
                                //    return arr.includes(element);
                                    
                                // }
                                let ar=[25,56,455,75,856,965,5]
                                // let a= 85;
                                // console.log(arrInclu(ar,a));

                                // masala 8
                                // function arrMedum(arr){
                                //     let res=0;
                                //     let sum= 0;
                                //     arr.forEach(function(values){
                                //      if(values>99&&values<1000&&values%2==1){
                                //         sum+=values;
                                //         res++
                                //      }
                                //     })
                                //     if(res===0){
                                //         return 0;
                                //     }
                                //     return sum/res
                                // }
                                // console.log(arrMedum(ar));


                                // MASALA 9
                                // function oddArr(arr){
                                //     return arr.map(function(values){
                                //         if(values%2===0){
                                //             return values*values
                                //         }else{
                                //             return values*values*values
                                //         }
                                //     })
                                    
                                // }
                                // console.log(oddArr(ar));

                                // masala 10
                                // function arrString(str){
                                //     return str.map(function(values){
                                //         return values[values.length-1]
                                //     })
                                // }
                                // let aret=['salom','elning','salim','muhsin'];
                                // console.log(arrString(aret));

                                // masala 11
                                //   function arrString(str){
                                //     let res= str.filter(function(values){
                                //         return values.length<=4;
                                //     })
                                //     return res
                                // }
                                // let aret=['salom','elg','sim','muhsin'];
                                // console.log(arrString(aret));

                                // masala 12
                                //   let user =[
                                //     {name: 'Devi', age:33},
                                //     {name: 'JOn', age:13},
                                //     {name: 'Serxi', age:73},
                                //     {name: 'Ubi', age:31}
                                //   ]
                                //   function userBig(user){
                                //    return user.some(function(values){
                                //         return values.age>18
                                //     })
                                    
                                //   }
                                //   console.log(userBig(user));

                                // masala 13
                                // function endsWitr(arr){
                                //     return arr.every(function(nomi){
                                //         return nomi.endsWith('jon')
                                //     })
                                // }
                                // let uzbekNames1 = ["Alijon", "Valijon", "Xolmatjon", "Dilshodjon"];
                                // console.log(endsWitr(uzbekNames1));

                                // masala 14
                                // function findNumber(arr){
                                //     return arr.find(function(values){
                                //         return values>99&& values<1000  &&values%5==0
                                //     })
                                // }
                                // let aret =[45,654,987,48975,215,365];
                                // console.log(findNumber(aret));

                                // masala 15
                                // function endsWitr(arr){
                                //         return arr.findIndex(function(nomi){
                                //             return nomi.includes('bek')
                                //         })
                                //     }
                                //     let uzbekNames1 = ["Aliek", "Valijonbek", "Xolmatjon", "Dilshodbek"];
                                //     console.log(endsWitr(uzbekNames1));
    