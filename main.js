function multiply() {
    var num1 = number=document.getElementById("n1").value;
    var num2 = number=document.getElementById("n2").value;
    var numf = num1 * num2;
    console.log(numf);
    document.getElementById("ans").innerHTML = numf;
    document.getElementById("answer").innerHTML = "answer of multiplication";
    }


    function test()  {

        var test=number=document.getElementById("Creeper").value;
        document.getElementById("p1").innerHTML = test;
        console.log(test);


    }
    function add() {
    
   
    var numf =  Number(document.getElementById("n1").value) +Number(document.getElementById("n2").value);
    console.log(numf);
    document.getElementById("ans").innerHTML = numf;
    document.getElementById("answer").innerHTML = "answer of addition";
    }


    function divide() {
    
   
    var numf =  Number(document.getElementById("n1").value) /Number(document.getElementById("n2").value);
    
    
    console.log(numf);
    document.getElementById("ans").innerHTML = numf;
    document.getElementById("answer").innerHTML = "answer of divide";

    }


    function minus() {
    
   
    var numf =  Number(document.getElementById("n1").value) -Number(document.getElementById("n2").value);
    console.log(numf);
    document.getElementById("ans").innerHTML = numf;
    document.getElementById("answer").innerHTML = "answer of subtracting";
    


    }
    function click() {
        var score = 0;
        score = score + 1;
        document.getElementById("cps").innerHTML = score;

    }