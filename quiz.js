function onSubmit(){

    let score = 0;
    let numOfQuestions = 20;
    let ansArr = [ 'a', 'a', 'c', 'c', 'd', 'a', 'a', 'b', 'a', 'c','a', 'a', 'c', 'c', 'd', 'a', 'a', 'b', 'a', 'c'];


    let q1 = document.forms["quiz"]["q1"].value;
    let q2 = document.forms["quiz"]["q2"].value;
    let q3 = document.forms["quiz"]["q3"].value;
    let q4 = document.forms["quiz"]["q4"].value;
    let q5 = document.forms["quiz"]["q5"].value;
    let q6 = document.forms["quiz"]["q6"].value;
    let q7 = document.forms["quiz"]["q7"].value;
    let q8 = document.forms["quiz"]["q8"].value;
    let q9 = document.forms["quiz"]["q9"].value;
    let q10 = document.forms["quiz"]["q10"].value;
    let q11 = document.forms["quiz"]["q11"].value;
    let q12 = document.forms["quiz"]["q12"].value;
    let q13 = document.forms["quiz"]["q13"].value;
    let q14 = document.forms["quiz"]["q14"].value;
    let q15 = document.forms["quiz"]["q15"].value;
    let q16 = document.forms["quiz"]["q16"].value;
    let q17 = document.forms["quiz"]["q17"].value;
    let q18 = document.forms["quiz"]["q18"].value;
    let q19 = document.forms["quiz"]["q19"].value;
    let q20 = document.forms["quiz"]["q20"].value;
    
     
    for (var i = 1; i <= numOfQuestions; i++){
        if(eval('q' + i) == ' ') {
            alert("You missed question number" + i);
        }
    }
        for (var i = 1; i <= numOfQuestions; i++){
            if (eval('q' + i ) == ansArr[i - 1]) {
                score++;
            }
        }
        let results = document.getElementById('results');
        results.innerHTML= "<h2>You Scored " + score + " points out of " + numOfQuestions + "</h2>";
        alert (" You scored " + score + " out of " + numOfQuestions);
        return false;
    };
































   