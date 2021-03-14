module.exports = function check(str, bracketsConfig) {
  // your solution
  
  let count = 0;
  let arrOpen = [];
  let arrClose = [];
  let arr = [];
  let result;
  let j = 0;
 console.log(`our string ${str}`);
// const config1 = [['(', ')']]; str.length count=${count}
// const config2 = [['(', ')'], ['[', ']']];
// const config3 = [['(', ')'], ['[', ']'], ['{', '}']];
// const config4 = [['|', '|']];
// const config5 = [['(', ')'], ['|', '|']];
// const config6 = [['1', '2'], ['3', '4'], ['5', '6'], ['7', '7'], ['8', '8']];
// const config7 = [['(', ')'], ['[', ']'], ['{', '}'], ['|', '|']];

  for (let i = 0; i < bracketsConfig.length; i++) {
      arrOpen.push(bracketsConfig[i][0]);
      arrClose.push(bracketsConfig[i][1]);
      
  }
 
  for (let i = 0; i < str.length; i++) {
    
           
           if (str[i] === arrOpen[arrOpen.indexOf(str[i])] && str[i] === arrClose[arrClose.indexOf(str[i])]) {
             if (str[i] === arr[arr.length-1]) {
               arr.pop();
             }  else {
                arr.push(str[i])  
             }
           }

           if (str[i] === arrOpen[arrOpen.indexOf(str[i])]) {
                arr.push(str[i]);
           }  
           
           if (str[i] === arrClose[arrClose.indexOf(str[i])]) {
                if (arr[arr.length-1] === arrOpen[arrClose.indexOf(str[i])]) {
                    arr.pop();
                } else return false;
            } 
  }
    return (arr.length == 0)
  } 
        
