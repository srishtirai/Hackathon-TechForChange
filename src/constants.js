import moment from 'moment';
const level1 = [0, 1000]
const level2 = [1000, 1500]
const level3 = [1500, 2000]
export const XP_LIMITS = {
  [level1]: "1",
  [level2]: "2",
  [level3]: "3",
}

export const getXPLevel= (currentPoints) => {
  for(let limits in XP_LIMITS) {
    console.log(XP_LIMITS);
    if (currentPoints >= limits[0] && currentPoints < limits[1]) {
      return {
        "levelName": currentPoints[limits],
        "remaining": limits[1] - currentPoints,
      }
    }
  }
  return {};
}


export const formatDate = (date) => moment(date).format("MM/DD/YYYY");