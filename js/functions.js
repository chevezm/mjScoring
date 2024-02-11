function calculate(){
    toggleVisibility('finalScore','resetButton','submitButton');
    setValues('name1','p1','name2','p2','name3','p3','name4','p4');
    setValues('score1',score('raw1'));
    return;
}

function reset(){
    toggleVisibility('finalScore','resetButton','submitButton');
    resetValues('raw1','raw2','raw3','raw4','chip1','chip2','chip3','chip4');
    return;
}

function toggleVisibility(...args){
    for (let arg of args){
        document.getElementById(arg).style.visibility = document.getElementById(arg).style.visibility == 'visible' ? 'hidden' : 'visible';
    }
    return;
}

function setValues(...args){
    for (let i=0; i < arguments.length; i +=2) document.getElementById(arguments[i]).innerHTML = document.getElementById(arguments[i+1]).value;
    return;
}

function resetValues(...args){
  for (let arg of args) document.getElementById(arg).value = document.getElementById(arg).defaultValue;
  return;
}

function score(oka, uma, rate, chip, raw){
    return Number(document.getElementById(raw).value) + Number(document.getElementById(oka).value) * 20;
}
