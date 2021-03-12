module.exports = function toReadable (number) {
  let num = [
    ['','one','two','three','four','five','six','seven','eight','nine','ten','eleven', 'twelve', 'thirteen','fourteen','fifteen', 'sixteen',
  'seventeen','eighteen','nineteen'],
    ['','','twenty', 'thirty','forty','fifty','sixty','seventy','eighty','ninety'],
];
  if (number===0){return 'zero';}
  let digits =number.toString().length;
  number=Number(number);
  let result=[];
  let numberSplit=[];
  let i=0;
  do {
    i+=3;
    (i-3)?numberSplit.push((number%Math.pow(10,i)-number%Math.pow(10,i-3))/number%Math.pow(10,i-3)):numberSplit.push(number%Math.pow(10,i));
  } while (i<digits)
  numberSplit.forEach((item,index)=>{
    let pre='';
    if (item%100<20){
      pre=Math.floor(item/100)? num[0][Math.floor(item/100)]+' hundred '+num[0][item%100]:num[0][item%100];
    } else {
      pre=Math.floor(item/100)? num[0][Math.floor(item/100)]+' hundred '+num[1][Math.floor((item%100)/10)]+' '+num[0][item%10]:num[1][Math.floor((item%100)/10)]+' '+num[0][item%10];
    }
    result.push(pre);
  })
  
  return result.join('').trim();}
 