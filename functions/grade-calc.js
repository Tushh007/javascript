const gradeCalculator = function (studentScore, totalScore) {
    const percent = (studentScore / totalScore) * 100
    let letterGrade = ''

    if (percent >= 90 && percent <=100) {
        letterGrade = 'A'
    } else if (percent >= 80 && percent <=89) {
        letterGrade = 'B'
    } else if (percent >= 70 && percent <=79) {
        letterGrade = 'C'
    } else if (percent >= 60 && percent <=69) {
        letterGrade = 'D'
    } else {
        if (percent < 60) {
            letterGrade = 'F'
        } else {
            return 'Invalid scores entered!'
        }
    }

    return `You have got a ${letterGrade} (${percent}%)!`
}


const result = gradeCalculator(25, 20)

console.log(result)