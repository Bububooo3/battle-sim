firstNames = Array("Billy", "Bob", "Joe", "James", "Mark", "Simon", "Richard", "Wayne", "Lucas", "Oliver", "Natalie", "Lily", "Mary", "Marcos", "Marco", "Joseph", "Anna", "Jacob", "Ryan", "Mia", "Zach", "Jorge", "Michael", "Blake", "Aaron", "Brody", "Alec", "Toby", "Charles", "Gregory", "Emma", "Sam", "Cole", "Anthony", "Brady", "Daniel", "Scrooge", "Buzz", "St.", "Mr.", "Mrs.", "Ms.")
lastNames = Array("Cheese", "Biggs", "Gregory", "Richards", "Richardson", "Simons", "Simone", "Wayne", "Smalls", "Maples", "Bogs", "Scott", "O'Connors", "Junior", "Senior", "Rod", "Rodson", "Hipp", "Doffman", "Entes", "Wrench", "Bulgar", "Polo", "Swift", "Mattson")

const person = {
  firstName: firstNames[Math.floor(Math.random()*firstNames.length)],
  lastName:  lastNames[Math.floor(Math.random()*lastNames.length)],
  fullName: firstName + lastName,
  
  status: 0,
  maxhealth: Math.floor(Math.random()*20) + 10,
  currenthealth: maxhealth,
  
  statusCheck : function() {
    if (currenthealth <= 0) {
      status = 1;
      return status
    }
  }
