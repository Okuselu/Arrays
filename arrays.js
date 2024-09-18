let grades = [85, 92, 78, 88, 90, 67, 95];

//PUSH
grades.push(83); 
console.log(grades);

//POP
grades.pop();
console.log(grades);

//unshit
grades.unshift(77);
console.log(grades);

//shift
grades.shift();
console.log(grades);

//splice
grades.splice(2, 1, 50);
console.log(grades);

//slice
let newGrades = grades.slice(1, 5);
console.log(newGrades);

//concat
let addedGrades = [88, 76, 90];
let allGrades = grades.concat(addedGrades);
console.log(allGrades);

//joins
let joinedGrades = allGrades.join(' - ');
console.log(joinedGrades);

//reverse
let reversedGrades = allGrades.reverse();
console.log(reversedGrades);

//sort
let sortedGrades = allGrades.sort((a, b) => a - b);
console.log(sortedGrades);

//forEach
allGrades.forEach(grade => console.log(allGrades));

//map
let mappedGrades = allGrades.map(grade => grade + 5);
console.log(mappedGrades);


//filter
let filteredGrades = allGrades.filter(grade => grade >= 70);
console.log(filteredGrades);

//reduce
let reducedGrades = allGrades.reduce((acc, grade) => acc + grade, 0);
console.log(reducedGrades);


//find
let foundGrade = allGrades.find(grade => grade >= 88);
console.log(foundGrade);


//findIndex
let foundIndex = allGrades.findIndex(grade => grade < 70);
console.log(foundIndex);

//some
let someGrades = allGrades.some(grade => grade >= 60);
console.log(someGrades);

//every
let everyGrade = allGrades.every(grade => grade >= 50);
console.log(everyGrade);

//includes
let includesGrade = allGrades.includes(90);
console.log(includesGrade);