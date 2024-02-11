function calculate(){
    document.getElementById('finalScore').style.visibility = 'visible';
    document.getElementById('resetButton').style.visibility = 'visible';
    document.getElementById('submitButton').style.visibility = 'hidden';

    setValues('name1','p1','name2','p2','name3','p3','name4','p4');
    
    return;
}

function reset(){
    document.getElementById('finalScore').style.visibility = 'hidden';
    document.getElementById('resetButton').style.visibility = 'hidden';
    document.getElementById('submitButton').style.visibility = 'visible';

    resetValues('raw1','raw2','raw3','raw4','chip1','chip2','chip3','chip4');
    
    return;
}



function setValues(...args){
    for (let i=0; i < arguments.length; i +=2) document.getElementById(arguments[i]).innerHTML = document.getElementById(arguments[i+1]).value;
    return;
}

function resetValues(...args){
  for (let arg of args) document.getElementById(arg).value = '';
  return;
}
