function plus(){
    let num1;
    let num2;
    let result;

    num1=document.getElementById('n1').value;
    num2=document.getElementById('n2').value;

    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    result = num1 + num2;

    //innerHTML
    document.getElementById('out').innerHTML = result;
}

function minus(){
    let num1;
    let num2;
    let result;

    num1 = document.getElementById('n1').value;
    num2 = document.getElementById('n2').value;

    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    result = num1 - num2;

    document.getElementById('out').innerHTML = result;
    
}

function multiply(){
    let num1;
    let num2;
    let result;

    num1=document.getElementById('n1').value;
    num2 =document.getElementById('n2').value;

    num1= parseFloat(num1);
    num2 = parseFloat(num2);

    result = num1 * num2;

    document.getElementById('out').innerHTML = result;
}


function divide(){
    let num1;
    let num2;
    let result;
    let zeroResult = 'Нельзя делить на ноль!';

    num1=document.getElementById('n1').value;
    num2 =document.getElementById('n2').value;

    num1= parseFloat(num1);
    num2 = parseFloat(num2);

   
    result = num1 / num2;
    
    if (num2 === 0) {
        result = zeroResult;
    };
    
    
    document.getElementById('out').innerHTML = result;
};



// function clear(){
   

//     num1=document.getElementById('n1').value;
//     num2 =document.getElementById('n2').value;

//     result = document.getElementById('n1').innerHTML ='';

//     // document.getElementById('n1').innerHTML = result
// }



    // function clear (){
    //     let result;
    //     result = '';
    //     document.getElementById('out').innerHTML = result;
    //     // document.getElementById('n1').innerHTML = '';
    //     // document.getElementById('n2').innerHTML = '';
    // }
