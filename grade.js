function calcGrading(score) {

    let gradingScore;
    switch (true) {
        case (score <= 100 && score >= 90):
            gradingScore = "A";
            break;
        case (score <= 89 && score >= 70):
            gradingScore = "B";
            break;
        case (score <= 69 && score >= 60):
            gradingScore = "C";
            break;
        case (score <= 59 && score >= 0):
            gradingScore = "F";
            break;
        case (score > 100 || score < 0):
            gradingScore = "Invalid Score";
            break;
        default:
            return "Invalid Score 😒";
    }
    return `You got ${gradingScore} Grade`;
}

const firstPerson = calcGrading(95);
const secondPerson = calcGrading(50);
const thirdPerson = calcGrading(105);

console.log(firstPerson);  // Output: You got A Grade
console.log(secondPerson); // Output: You got F Grade
console.log(thirdPerson);  // Output: Invalid Score 😒
