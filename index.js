let mas = ["дим", "an", "рота"];
let res = [];
let temp = '' ;
let el;
let allTemp = '';

for (let i = 0; i < mas.length; i++)
{
  for (let j = mas[i].length-2 ; j >= 0; j--)
  {
    temp = mas[i][j];
    allTemp = allTemp.concat(temp);
    //console.log(allTemp);
  }
  el = mas[i] + allTemp;
  //console.log(el);
  res.push(el);
  allTemp = '';
  el = '';
}

console.log(res);