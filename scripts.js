function camelize(str){
    return str
    .split('-')
    .map((val,index)=>
        index==0? val:val[0].toUpperCase()+
        val.slice(1)).join('');
}
console.log(camelize("background-Color"))

function filterRange(arr,a,b){
    let array1= arr;
    return array1.filter((val,index)=>val>a&&val<=b);
}
console.log(filterRange([5,3,2,8,7,9],5,9))

function filterRangeInplace(arr ,a,b){
   for (let i = 0; i<arr.length;i++){
    let val =arr[i];
    if (val<a || val>=b){
            arr.splice(i,1);
            i--;
    }
   }
}

let arr = [5,3,8,1];
filterRangeInplace(arr,1,4);
alert(arr);

let arr2 =[5,2,1,-10,8];
arr2.sort((a,b)=>b-a)
alert(arr2)



function copySorted(arr){
    return arr.slice().sort();
}
let arr3= [ "HTML", "JavaScript","CSS"];
let sorted= copySorted(arr3);
alert(sorted);
alert(arr3);
function unique(arr4){
    let result =[];
    for (let str of arr4){
        if (!result.includes(str)){
            result.push(str);
        }
    }
    return result;
}
let strings =["Hare","Krishna","Hare","Hare","Krishna","Krishna","Krishna","Hare","Hare",":-o"];
alert(unique(strings));