export const getEnum = (obj) => {
  let reversedObj = {};
  for(let key in obj) {
    reversedObj[obj[key]] = key;
  }

  return Object.freeze({...obj, ...reversedObj});
};
