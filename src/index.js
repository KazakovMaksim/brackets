module.exports = function check(str, bracketsConfig) {
  // your solution
  
  let count = 0;
  let arrOpen = [];
  let arrClose = [];
  console.log(str);
  let result;           

    for (let i = 0; i < bracketsConfig.length; i++) {
        arrOpen.push(bracketsConfig[i][0]);
        arrClose.push(bracketsConfig[i][1]);
    }

  
    
      for (let j = 0; j < bracketsConfig.length;  j++) {
        
       
        count = 0;
          
         for (let i = 0; i < str.length; i++) {
      
            if (str[i] === arrOpen[j]) {
               count++;
              
            } else if (str[i] === arrClose[j]) {
               count--;
              
            }
         
          if (count < 0 ) {
            result = false;
            console.log(result);
             return result;
               break; 
          } else if (count % 2 > 0 && i == str.length-1){
            result = false;
            return result;
        }
          }  
          
         }
         result = true;
            console.log(result);
         return result;
        }
