class Human {
  constructor(firstName, lastName, age, language) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.language = language
  }

  printInfo() {
    console.log(this.firstName)
    console.log(this.lastName)
    console.log(`${this.age}\n`)
  }

  canVote() {
    return this.age > 18 ? true : false
  }

  mostSkillDev(person) {
    if (this.language.length > person.language.length) {
      return this.firstName
    }
    else if (this.language.length === person.language.length) {
      return 'draw'
    }
    else {
      return person.firstName
    }
  }
}

module.exports = Human
