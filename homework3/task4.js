const raiseToDegree = (a, b) => {
  const result = Math.pow(a, b);
  return result;
};

let base = Numberprompt("Put base");
let exponent = Numberprompt(" Put exponent");

const finalResult = raiseToDegree(base, exponent);
console.log(finalResult);
