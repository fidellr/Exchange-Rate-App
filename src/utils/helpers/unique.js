const isExist = (originArr, key, targetValue) => {
  let exist = false;
  for (let i=0; i < originArr.length; i++) {
    if (originArr[i][key] === targetValue) {
      exist = true;
    }
  }

  return exist; 
}

export {
  isExist,
};
