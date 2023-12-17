firstNames = Array("Billy", "Bob", "Joe", "James", "Mark", "Simon", "Richard", "Wayne", "Lucas", "Oliver", "Natalie", "Lily", "Mary", "Marcos", "Marco", "Joseph", "Anna", "Jacob", "Ryan", "Mia", "Zach", "Jorge", "Michael", "Blake", "Aaron", "Brody", "Alec", "Toby", "Charles", "Gregory", "Emma", "Sam", "Cole", "Anthony", "Brady", "Daniel", "Scrooge", "Buzz", "St.", "Mr.", "Mrs.", "Ms.")
lastNames = Array("Cheese", "Biggs", "Gregory", "Richards", "Richardson", "Simons", "Simone", "Wayne", "Smalls", "Maples", "Bogs", "Scott", "O'Connors", "Junior", "Senior", "Rod", "Rodson", "Hipp", "Doffman", "Entes", "Wrench", "Bulgar", "Polo", "Swift", "Mattson")

const person = {
  firstName: firstNames[Math.floor(Math.random()*firstNames.length)];,
  lastName:  lastNames[Math.floor(Math.random()*lastNames.length)];,
  health: 5566,
  fullName : function() {
    return {this.firstName, this.lastName, this.health}
  }
