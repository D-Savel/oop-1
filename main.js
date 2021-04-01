const Point = require('./point')
const Human = require('./classInfo')

let p1 = new Point(2, 52)
let p2 = new Point(5, -1)

const alice = new Human(
  'Alice',
  'Liddell',
  28,
  ['java', 'javascript', 'python']
)

const bob = new Human(
  'Bob',
  'Lemon',
  30,
  ['rust', 'c++']
)
const charlie = new Human(
  'Charlie',
  'Charlot',
  8,
  ['java', 'python']
)

console.log('Human functions');

alice.printInfo()
bob.printInfo()
charlie.printInfo()
console.log(alice.canVote())
console.log(charlie.canVote())
console.log('\n')
console.log(alice.mostSkillDev(bob))
console.log(bob.mostSkillDev(charlie))

console.log('\n#############\n');

console.log('Point functions\n');

console.log(p1.distance(p2))
