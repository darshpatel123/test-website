function create(){
    
    var number=localStorage.length+1;
    localStorage.setItem(number,document.getElementById("textarea").value);
    var get=localStorage.length;
    var get2=localStorage.length+1;

    document.getElementById("d_reg").innerHTML=get+ " alerady registered"+"<br>"+"You are registered at "+get2;
    
}
function get(){
    var get=localStorage.length;
    var get2=localStorage.length+1;

    document.getElementById("d_reg").innerHTML=get+ " alerady registered"+"<br>"+"You are registered at "+get2;
}
function remove(){
    localStorage.removeItem(document.getElementById("textarear").value);
}
function getthename(){
    var get_n=document.getElementById("textareap").value;
    var n=localStorage.getItem(get_n);
document.getElementById("getp").innerHTML="   Name -"+n;
}
function clear(){
    localStorage.clear;
}



