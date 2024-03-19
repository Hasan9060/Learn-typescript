// Question : 54

/*Making Flexible Object Keys: Learn how to set up a list where you can change the 
name of each section based on what you need at that moment, like adjusting labels
 based on user choices.*/

//  use of Flexible Object
interface FlexibleObject {
    [key: string]: any;
  }
  const flexibleList: FlexibleObject = {
    section1: ['Apple', 'Banana'],
    section2: ['PineApple', 'Watermelon'],
  };
  
  // Change the section name dynamically
  const newSectionName = 'dynamicSection';
  flexibleList[newSectionName] = ['Grapes', 'cherry'];
  
  console.log(flexibleList);
  










