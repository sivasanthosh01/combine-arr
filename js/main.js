var size=parseInt(prompt("enter the size of array:"));
var arr=[];
var c=[];
for(let i=0;i<size;i++){
	arr[i]=parseInt(prompt("enter the "+(i+1)+"array value:"));
}
document.write("The array values are"+arr+"<br>");
var size=parseInt(prompt("enter the size of 2nd array:"));
var b=[];
for(let i=0;i<size;i++){
	b[i]=parseInt(prompt("enter the "+(i+1)+"array value:"));
}
document.write("The array values are"+b+"<br>");
c=arr.push(b);
document.write("Combine two array"+arr);

