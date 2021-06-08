var guest_array=[];
function submit(){
    var guest_name=document.getElementById("name").value;
    guest_array.push(guest_name);
document.getElementById("display").innerHTML=guest_array.toString();
}
function show(){
    var i=guest_array.join("<br>");
    document.getElementById("p1").innerHTML=i.toString();
}
function searching(){
    var s=document.getElementById("srch").value;
    var found=0;
    var j;
    for(j=0;j<guest_array.length;j++){
        if(s==guest_array[j])
        {
found=found+1;
        }
    }
document.getElementById("p2").innerHTML="Name Found"+found+"time/s";
}