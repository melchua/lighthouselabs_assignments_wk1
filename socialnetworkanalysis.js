var data = {
  f01: {
    name: "Alice",
    age: 15,
    follows: ["f02", "f03", "f04"]
  },
  f02: {
    name: "Bob",
    age: 20,
    follows: ["f05", "f06"]
  },
  f03: {
    name: "Charlie",
    age: 35,
    follows: ["f01", "f04", "f06"]
  },
  f04: {
    name: "Debbie",
    age: 40,
    follows: ["f01", "f02", "f03", "f05", "f06"]
  },
  f05: {
    name: "Elizabeth",
    age: 45,
    follows: ["f04"]
  },
  f06: {
    name: "Finn",
    age: 25,
    follows: ["f05"]
  }
  // f07: {
  //   name: "Natalie",
  //   age: 2,
  //   follows: ["f01", "f02", "f03", "f05", "f06"]
  // }

};

/******************************************* Q1 ***********************************************/
// List everyone and for each of them, list the names of who they follow and who follows them
function listEveryone() {
  for (var userKey in data) {
    console.log(data[userKey].name);
    console.log('The user is following: ' + isFollowing(userKey));
    console.log('Is followed by: ' + isFollowedBy(userKey) +'\n');
  }
}

listEveryone(); // run to test

// takes in userKey and prints out who user follows
function isFollowing(userKey) {
  var followsArr = data[userKey].follows;
  var followsNames = [];
  // loop through the followsArr to return names for all users
  followsArr.forEach(function(followKey) {
    followsNames.push(data[followKey].name);
  });
  return followsNames;
}

// takes user key and figures out who follows this user
function isFollowedBy(userKey) {
  var arr = [];
  for (var user in data) {
    if (data[user].follows.includes(userKey)) {
      arr.push(nameLookup(user));
    }
  }
  return arr;
}

function nameLookup(userKey) {
  return data[userKey].name;
}

/******************************************* Q1 end ********************************************/

/******************************************* Q2 ***********************************************/
// Identify who follows the most people
// iterate through and compare the length of each array

function whoFollowsMostPeople() {
  var highest = 0;
  var highestUser = [];
  var highestUserName = [];
  for (var user in data) {
    if (data[user].follows.length === highest) {
      highestUser.push(user);
    } else if (data[user].follows.length > highest) {
      highest = (data[user].follows.length);
      highestUser = [ user ];
    }
  }
  highestUser.forEach(function(userKey) {
    highestUserName.push(nameLookup(userKey));
  });

  return highestUserName;
}

console.log('follows most people: ' + whoFollowsMostPeople());

/******************************************* Q2 end ********************************************/

/******************************************* Q3 ***********************************************/
// Identify who has the most followers
function hasTheMostFollowers() {
  var highest = 0;
  var highestUser = [];
  var highestUserName = [];
  for (var user in data) {
    if (howManyFollowers(user) === highest) {
      highestUser.push(user);
    } else if (howManyFollowers(user) > highest) {
      highest = howManyFollowers(user);
      highestUser = [user];
    }
  }

  highestUser.forEach(function(userKey) {
    highestUserName.push(nameLookup(userKey));
  });

  return highestUserName;
}

function howManyFollowers(userKey) {
  var followCount = 0;
  for (var user in data) {
    if (data[user].follows.includes(userKey)) {
      followCount++;
    }
  }
  return followCount;
}

console.log('most followers: ' + hasTheMostFollowers());

/******************************************* Q3 end ********************************************/

// Identify who has the most followers over 30
// Identify who follows the most people over 30
// List those who follow someone that doesn't follow them back
// List everyone and their reach (sum of # of followers and # of followers of followers)
