const gradeCalculator = function (studentScore, totalScore) {
    if (typeof studentScore !== 'number' || typeof totalScore !== 'number') {
        throw Error('Please provide numbers only!')
    }

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
            throw Error('Invalid scores entered!')
        }
    }

    return `You have got a ${letterGrade} (${percent}%)!`
}

try {
    const result = gradeCalculator(70, 100)
    console.log(result)
} catch (e) {
    console.log(e)
}