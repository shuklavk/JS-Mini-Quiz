var submitAnswers = function(){
    var total = 5; 
    var score = 0;

    // Get user input 
    var q1 = document.forms['quizForm']['q1'].value;
    var q2 = document.forms['quizForm']['q2'].value;
    var q3 = document.forms['quizForm']['q3'].value;
    var q4 = document.forms['quizForm']['q4'].value;
    var q5 = document.forms['quizForm']['q5'].value;

    // Validation
    if(q1 === null || q1 === ''){
        alert('You missed question 1');
        return false;
    }else if(q2 === null || q2 === ""){
        alert('You missed question 2');
        return false;
    } else if(q3 === null || q3 === ""){
        alert('You missed question 3');
        return false;
    } else if(q4 === null || q4 === ""){
        alert('You missed question 4');
        return false;
    } else if(q5 === null || q5 === ""){
        alert('You missed question 5');
        return false;
    } 



    // Set Correct Answers
    var answers = ['b','a','d', 'b', 'd'];

    //Check Answers
    for(var i = 0; i < answers.length; i++){
        if(eval('q'+ (i + 1)) === answers[i]){
            score++;
        }
    }

    // Display Results
    var results = document.getElementById('results');
    results.innerHTML = '<h3>You scored  <span>'+score+'</span> out of  <span>' +total+'</span></h3>';

    return false;
}