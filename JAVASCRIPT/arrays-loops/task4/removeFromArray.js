const removeFromArray = function(array, ...elements) {
    let modifiedArray = [];
    /*
    main:
    for(let i = 0, k = 0; i < array.length; i++)
    {
        for(let j = 0; j < elements.length; j++)
        {
            if(array[i] === elements[j])
            {
                continue main;
            }
        }
        modifiedArray[k] = array[i];
        k++;
    }
    */
   
   array.forEach(item => {
       if(!elements.includes(item)){
            modifiedArray.push(item);
        }
        });
        return modifiedArray;
        
    /*
   return array.filter(val => !elements.includes(val));
   */
        };
        
        // Do not edit below this line
        module.exports = removeFromArray;
