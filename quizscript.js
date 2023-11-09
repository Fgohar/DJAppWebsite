function checkAnswers(){
    let score = 0;
    let result = 0;
    let quiz = document.forms.quiz.elements;
    let answer1 = quiz.colour.value;

    if (answer1 == "pink"){
        score = score + 1;
    }
    else if (answer1 == "yellow"){
        score = score + 2;

    }
    else if (answer1 == "green") {
        score = score + 3
    }
    else {
        score = score + 4;
    }

    let answer2 = quiz.animal.value;

    if (answer2 == "dog"){
        score = score + 1;
    }
    else if (answer2 == "cat"){
        score = score + 2;

    }
    else if (answer2 == "frog") {
        score = score + 3
    }
    else {
        score = score + 4;
    }


    let answer3 = quiz.animal.value;

    if (answer3 == "pop"){
        score = score + 1;
    }
    else if (answer3 == "hiphop"){
        score = score + 2;

    }
    else if (answer3 == "rock") {
        score = score + 3
    }
    else {
        score = score + 4;
    }


    let answer4 = quiz.animal.value;

    if (answer4 == "ps4"){
        score = score + 1;
    }
    else if (answer4 == "gym"){
        score = score + 2;

    }
    else if (answer4 == "movies") {
        score = score + 3
    }
    else {
        score = score + 4;
    }

    if (score < 6) {
        result = "Python";
    }
    else if (score < 10) {
        result = "Javascript";
    }
    else if (score < 13) {
        result = "HTML";
    }
    else {
        result = "Java";
    }

    alert ("The programming language you should learn is" + result);
}
