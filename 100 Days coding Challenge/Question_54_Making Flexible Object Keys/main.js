// Question : 54
var flexibleList = {
    section1: ['Apple', 'Banana'],
    section2: ['PineApple', 'Watermelon'],
};
// Change the section name dynamically
var newSectionName = 'dynamicSection';
flexibleList[newSectionName] = ['Grapes', 'cherry'];
console.log(flexibleList);
