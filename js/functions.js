// Optional enable tooltips

document.addEventListener("DOMContentLoaded", function(){
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function(element){
        return new bootstrap.Tooltip(element);
    });
});


$( '#submit' ).on( 'click', function(){
    const oka = $( '#oka' ).val();
    const rawTotal = total(...getClassVals('.raw'));
    const rawSumcheck = rawTotal === 100 || rawTotal === 0 || (rawTotal === 120 && oka === "0");
    const chipTotal = total(...getClassVals('.chip'));
    const chipSumcheck = chipTotal % 4 === 0 && chipTotal >= 0;

    $( '#rawTitle' ).css( 'color', 'white');
    $( '#chipTitle' ).css( 'color', 'white');

    if( rawSumcheck && chipSumcheck ){
        $( '#finalTable').show();
        $( '#newGame').show();
        $( '#clipboard').show();
        $( '#submit').hide();
        $( '#clear').hide();

        // apply names to Final Score Table
        $( '#name1').html( $( '#p1' ).val());
        $( '#name2').html( $( '#p2' ).val());
        $( '#name3').html( $( '#p3' ).val());
        $( '#name4').html( $( '#p4' ).val());

        let finalScores = getScore(); // need to implement

        setScore(...finalScores); //set Final Scores
        return;
    }

    if(!rawSumcheck){
        $( '#rawTitle' ).css( 'color', 'crimson');
    }

    if(!chipSumcheck){
        $( '#chipTitle' ).css( 'color', 'crimson');
    }
    

});

// Clear Raw Scores and Chip

$( '#clear' ).on( 'click', function() {
    $('.raw').val('');
    $('.chip').val('');

    $( '#rawTitle' ).css( 'color', 'white');
    $( '#chipTitle' ).css( 'color', 'white');
});

// Negate Raw Score or Chip

$( '.delta' ).on( 'click', function() {
    let negate = $(this).next().val() * -1;
    $(this).next().val(negate);
});

// Hide Final Score Table

$( '#newGame' ).on( 'click', function(){
    $( '#finalTable').hide();
    $( '#newGame').hide();
    $( '#clipboard').hide();
    $( '#submit').show();
    $( '#clear').show();
});

// Copy Table to Clip Board

$( '#clipboard' ).on( 'click', function(){
    $( "#tableExport" ).select();
    $( "#tableExport" ).setSelectionRange(0,99999);
    navigator.clipboard.writeText( $( "#tableExport" ).val() );
   
});

// Return an array of a given class
function getClassVals(className){
    return $( className ).map((_, elem) => elem.value).get();
}

// Calculate the total sum of a given array
function total(...array){
    let totalSum = 0;
    for (let i = 0; i < array.length; i++) totalSum += Number(array[i]) * 100;
    return totalSum / 100;
}

function getRanks(){
    let scores = getClassVals('.raw');
    let unique = [];
    let ranks = new Map();
    for (let i = 0; i < scores.length; i++){
        var score = Number(scores[i]);
        scores[i] = score;
        if (unique.indexOf(score) === -1){
            unique.push(score);
            ranks.set(score, 0);
        }
    }
    let sortedUnique = bubbleSort(unique);
    let scoresRanked = [];

    let r = 1;

    for (let score of sortedUnique){
        let counted = count(score, scores);
        ranks.set(score, (2 * r + counted - 1) / 2);
        r += counted;
    }

    for (let i = 0; i < scores.length; i++){
        scoresRanked[i] = ranks.get(scores[i]);
    }

    return scoresRanked;
}

function getUma(...array){
    let uma = new Map();
    switch($( '#uma').val() ){
        case "10":
            uma.set(1, 10);
            uma.set(1.5, 7.5);
            uma.set(2, 5);
            uma.set(2.5, 0);
            uma.set(3, -5);
            uma.set(3.5, -7.5);
            uma.set(4, -10);
            break;
        case "15":
            uma.set(1, 15);
            uma.set(1.5, 10);
            uma.set(2, 5);
            uma.set(2.5, 0);
            uma.set(3, -5);
            uma.set(3.5, -10);
            uma.set(4, -15);
            break;
        case "20":
            uma.set(1, 20);
            uma.set(1.5, 15);
            uma.set(2, 10);
            uma.set(2.5, 0);
            uma.set(3, -10);
            uma.set(3.5, -15);
            uma.set(4, -20);
            break;
        case "30":
            uma.set(1, 30);
            uma.set(1.5, 20);
            uma.set(2, 10);
            uma.set(2.5, 0);
            uma.set(3, -10);
            uma.set(3.5, -20);
            uma.set(4, -30);
            break;
        default:
            uma.set(1, 0);
            uma.set(1.5, 0);
            uma.set(2, 0);
            uma.set(2.5, 0);
            uma.set(3, 0);
            uma.set(3.5, 0);
            uma.set(4, 0);
    }

    let umaScores = [];

    for(let i = 0; i < array.length; i++) umaScores.push(uma.get(array[i]));

    return umaScores;
}

function getScore(){
    const start = total(...getClassVals('.raw')) / 4;
    let finalScores = [0, 0, 0, 0];
    const ranks = getRanks();
    const uma = getUma(...ranks);
    const topRank = Math.min(...ranks);
    var oka = Number( $( '#oka' ).val() ) / count(topRank, ranks);
    oka = round(oka, 2);
    const chips = getClassVals('.chip');
    const chipsStart = total(...chips) / 4;
    const chipRate = Number($( '#chip' ).val());
    const rate = Number($( '#rate' ).val());

    $( '.raw').each(function(index){
        let ante = oka > 0 ? 5 : 0;
        let addOka =  (ranks[index] === topRank) && (start === 25) ? oka : 0;
        let addChips = (Number(chips[index]) - chipsStart) * chipRate;
        let score = Number($(this).val()) - ante + addOka - start + uma[index];
        score = round(score * rate, 2);
        finalScores[index] = (score + addChips).toFixed(2); // add rate calculation
    });
    return finalScores;
}

// Assign Final Scores
function setScore(...args){
    $( '.fScore').each(function(index){
        $ (this).html(args[index]);
    });
}

// not suitable for large data sets
function bubbleSort(array){ //descending sort
    for (let i = 0; i < array.length - 1; i++){
        for (let j = 0; j < array.length - i - 1; j++){
            if(array[j] < array[j+ 1]){
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }
    }
    return array;
}

function round(value, precision = 0){
    var multiplier = Math.pow(10, precision);
    return Math.round(value * multiplier) / multiplier;
}

function count(find, array){
    let total = 0;
    for (let elem of array) if (elem === find) total += 1; // changed to true equality
    return total;
}
