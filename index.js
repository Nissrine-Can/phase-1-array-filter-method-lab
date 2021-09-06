//const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];

function findMatching(drivers, name) {
const matchNames = drivers.filter(driver => driver.toLowerCase().indexOf(name.toLowerCase()) !== -1);
if (matchNames) {
  return matchNames;
} else {
  return [];
}

}


function fuzzyMatch(drivers, query) {

  const match = drivers.filter(el => el.substring(0, 2).toLowerCase().indexOf(query.toLowerCase()) !== -1)
  if (match) {
    return match
  } else {
    return []
  }
}

function matchName(drivers, driver) {
  const nameMatch = drivers.filter(obj => obj.name.toLowerCase().indexOf(driver.toLowerCase()) !== -1)
   return nameMatch
}
