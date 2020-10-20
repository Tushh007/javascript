const myAge = 2
const showPage = () => 'Showing the page'
const showErrorPage = () => 'Showing the error page.'

const message = myAge >= 21 ? showPage() : showErrorPage()
console.log(message)

const team = ['Tyler', 'Porter', 'Tushar', 'Linda', 'Tinda']
console.log(team.length <= 4 ? `Team size: ${team.length}` : `Too many people on the team`)