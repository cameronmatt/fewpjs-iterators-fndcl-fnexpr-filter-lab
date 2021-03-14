// Code your solution here
function findMatching(drivers, string) {
    return drivers.filter( match =>
      match.toLowerCase() === string.toLowerCase()
    )
  }


function fuzzyMatch(drivers, letter){
  return drivers.filter( find => {
    if (letter.charAt(0) === find.charAt(0)){
    return find
    }
  })
}

function matchName(drivers) {
  const newName = drivers.filter(function(driver) {
    return driver.name == "Bobby";
  });
  return newName; 
}