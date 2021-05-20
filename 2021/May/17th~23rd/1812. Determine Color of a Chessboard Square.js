'use strict';

const squareIsWhite = coordinates => {
  const aceg = [null, false, true, false, true, false, true, false, true];
  const bdfh = [null, true, false, true, false, true, false, true, false];

  const eng = coordinates.split('')[0];
  const num = parseInt(coordinates.split('')[1]);

  if (eng === 'a' || eng === 'c' || eng === 'e' || eng === 'g')
    return aceg[num];
  else return bdfh[num];
};

console.log(squareIsWhite('a1'));
