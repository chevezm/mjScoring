document.addEventListener("DOMContentLoaded", function(){
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function(element){
        return new bootstrap.Tooltip(element);
    });
});

function calculate(){
    
    if(checksumRaw() && checksumChip()){ //
        toggleVisibility('finalScore','resetButton','submitButton');
        setValues('name1','p1','name2','p2','name3','p3','name4','p4');
        setScore(...getFinalScore()); //
        $('#rawScoreTitle').css('color', 'white');
        $('#chipTitle').css('color', 'white');      
        return;
    }
    $('#rawScoreTitle').css('color', checksumRaw() ? 'white' : 'crimson');
    $('#chipTitle').css('color', checksumChip() ? 'white' : 'crimson');
    
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

function getRawScores(){
    return [getNumber('raw1'), getNumber('raw2'), getNumber('raw3'), getNumber('raw4')];
}

function getFinalScore(){
    let [raw1, raw2, raw3, raw4] = getRawScores();
    let start = round(sumRaw() / 4);
    let [uma1, uma2, uma3, uma4] = getUma();
    let max = Math.max(...getRawScores());
    let oka = getOka();
    let [chip1, chip2, chip3, chip4] = getChip();
    let rate = getRate();
    let final1 = raw1 + uma1 - start - (oka > 0 ? 5 : 0) + (raw1 == max ? oka : 0);
    let final2 = raw2 + uma2 - start - (oka > 0 ? 5 : 0) + (raw2 == max ? oka : 0);
    let final3 = raw3 + uma3 - start - (oka > 0 ? 5 : 0) + (raw3 == max ? oka : 0);
    let final4 = raw4 + uma4 - start - (oka > 0 ? 5 : 0) + (raw4 == max ? oka : 0);
    return [roundP(final1 * rate + chip1),roundP(final2 * rate + chip2), roundP(final3 * rate + chip3), roundP(final4 * rate + chip4)];
}

function checksumRaw(){
    // will include 100000 , 120000 functionality in the future
    return [100,120].includes(sumRaw());
}

function checksumChip(){
    let chip1 = getNumber('chip1');
    let chip2 = getNumber('chip2');
    let chip3 = getNumber('chip3');
    let chip4 = getNumber('chip4');
    let chips = [chip1 , chip2, chip3, chip4];
    let total = parseInt(0);
    for (let chip of chips) total += chip;
    return (total % 4 === 0) && (total >= 0);
}

function sumRaw(){
    let total = 0;
    for (let raw of getRawScores()) total += raw;
    return round(total); 
}

function getNumber(idName){
    return Number(document.getElementById(idName).value); 
}

function getOka(){
    let oka = document.getElementById('oka').checked ? 1 : 0;
    let scores = getRawScores();
    let maxCount = 0;
    let max = Math.max(...scores);
    for (let score of scores) if (max == score) maxCount += 1;
    return round(oka / maxCount * 20);
}

function getUma(){
    let [raw1, raw2, raw3, raw4] = getRawScores();
    let ranks = getRanks();
    let uma = setUma();
    return [uma[ranks[raw1]], uma[ranks[raw2]], uma[ranks[raw3]], uma[ranks[raw4]]];
}

function setUma(){
    let uma = new Object();
    switch(document.getElementById('uma').value){
        case "10":
            uma[1] = 10;
            uma[1.5] = 7.5;
            uma[2] = 5;
            uma[2.5] = 0;
            uma[3] = -5;
            uma[3.5] = -7.5;
            uma[4] = -10;
            break;
        case "15":
            uma[1] = 15;
            uma[1.5] = 10;
            uma[2] = 5;
            uma[2.5] = 0;
            uma[3] = -5;
            uma[3.5] = -10;
            uma[4] = -15;
            break;
        case "20":
            uma[1] = 20;
            uma[1.5] = 15;
            uma[2] = 10;
            uma[2.5] = 0;
            uma[3] = -10;
            uma[3.5] = -15;
            uma[4] = -20;
            break;
        case "30":
            uma[1] = 30;
            uma[1.5] = 20;
            uma[2] = 10;
            uma[2.5] = 0;
            uma[3] = -10;
            uma[3.5] = -20;
            uma[4] = -30;
            break;
        default:
            uma[1] = 0;
            uma[1.5] = 0;
            uma[2] = 0;
            uma[2.5] = 0;
            uma[3] = 0;
            uma[3.5] = 0;
            uma[4] = 0;
    }
    return uma;
}

function getRanks(){
    let scores = getRawScores();
    let unique = new Set(scores);
    let sortedUnique = Array.from(unique);
    sortedUnique = bubbleSort(sortedUnique);
    let ranks = new Object();

    let r = 1;
    for (let score of sortedUnique){
        let counted = count(score, scores);
        ranks[score] = (2 * r + counted - 1) / 2;
        r += counted;
    }
    return ranks;
}

function getRate(){
    return getNumber('rate');
}

function getChip(){
    let chipRate = getNumber('chip');
    let chip1 = getNumber('chip1');
    let chip2 = getNumber('chip2');
    let chip3 = getNumber('chip3');
    let chip4 = getNumber('chip4');
    let chips = [chip1 , chip2, chip3, chip4];

    let total = parseInt(0);
    for (let chip of chips) total += chip;
    total = Math.round(total / 4);
    
    chip1 = (chip1 - total) * chipRate;
    chip2 = (chip2 - total) * chipRate;
    chip3 = (chip3 - total) * chipRate;
    chip4 = (chip4 - total) * chipRate;
    
    return [chip1, chip2, chip3, chip4];
}

function bubbleSort(array){
    for (let i = 0; i < array.length - 1; i++){
        for (let j = 0; j < array.length - i - 1; j++){
            if(array[j] < array[j+ 1]){
                let temp1 = array[j];
                array[j] = array[j+1];
                array[j+1] = temp1;
            }
        }
    }
    return array;
}

function count(find, array){
    let total = 0;
    for (let elem of array) if (elem == find) total += 1;
    return total;
}

function round(num){
    return Math.round(num * 10) / 10;
}

function roundP(num){
    return Math.round(num * 100) / 100;
}

function setScore(...args){

    document.getElementById('score1').innerHTML = args[0];
    document.getElementById('score2').innerHTML = args[1];
    document.getElementById('score3').innerHTML = args[2];
    document.getElementById('score4').innerHTML = args[3];    
}
