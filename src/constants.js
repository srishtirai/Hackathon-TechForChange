import moment from 'moment';
const level1 = [0, 1000];
const level2 = [1000, 2000];
const level3 = [2000, 3000];

export const XP_LIMITS = {
  [level1]: "Green Initiate",
  [level2]: "Eco Warrior",
  [level3]: "Sustainability Champion",
};

export const getXPLevel = (currentPoints) => {
  for (let limits of Object.keys(XP_LIMITS)) {
    const range = limits.split(",");
    const lowerLimit = parseInt(range[0]);
    const upperLimit = parseInt(range[1]);

    if (currentPoints >= lowerLimit && currentPoints < upperLimit) {
      return {
        levelName: XP_LIMITS[limits],
        remaining: upperLimit - currentPoints,
      };
    }
  }
  return {};
}


export const formatDate = (date) => moment(date).format("MM/DD/YYYY");
