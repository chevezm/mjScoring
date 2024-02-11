function calculate(){
    document.getElementById('finalScore').style.visibility = 'visible';
    document.getElementById('resetButton').style.visibility = 'visible';
    document.getElementById('submitButton').style.visibility = 'hidden';
    
    document.getElementById('name1').value = document.getElementById('p1').value;
    document.getElementById('name2').value = document.getElementById('p2').value;
    document.getElementById('name3').value = document.getElementById('p3').value;
    document.getElementById('name4').value = document.getElementById('p4').value;
}

function reset(){
    document.getElementById('finalScore').style.visibility = 'hidden';
    document.getElementById('resetButton').style.visibility = 'hidden';
    document.getElementById('submitButton').style.visibility = 'visible';

    resetValues('raw1','chip1');

}

function resetValues(...args){
  for (let arg of args) document.getElementById(arg).value = '';
  return;
}
