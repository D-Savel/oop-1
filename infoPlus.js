
let { alice, bob, charlie } = require('./info')

printInfo = (person) => {
  console.log(person.firstName)
  console.log(person.lastName)
  console.log(`${person.age}\n`)
}

printInfo(alice)
printInfo(bob)
printInfo(charlie)

canVote = (person) => {
  return person.age > 18 ? true : false
}

console.log(canVote(alice))
console.log(canVote(charlie))

alice.language = ['java', 'javascript', 'python']
bob.language = ['rust', 'c++']
charlie.language = ['java', 'python']

mostSkillDev = (person1, person2) => {
  if (person1.language.length > person2.language.length) {
    return person1.firstName
  }
  else if (person1.language.length === person2.language.length) {
    return 'draw'
  }
  else {
    return person2.firstName
  }
}
console.log('\n')
console.log(mostSkillDev(alice, bob))
console.log(mostSkillDev(charlie, bob))
