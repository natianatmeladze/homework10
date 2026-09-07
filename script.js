//davaleba1
const nums = [1, 2, 3, 3, 45, 11, 23, 11, 2, 55];
const uniqueElements = [];

nums.forEach((num) => {
  if (!uniqueElements.includes(num)) {
    uniqueElements.push(num);
  }
});
console.log(uniqueElements);

//davaleba2
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
let count = 0;
let sum = 0;
arr.forEach((num) => {
  if (num > 0) {
    count++;
  } else {
    sum = sum + num;
  }
});
console.log(`raodenoba ${count} , jami ${sum}`);

//davaleba3
const nums2 = [10, 12, 44, 32, 15, 93, 15, 66, 93];
const filteredNums = nums2.filter((num) => num % 3 === 0);
let filteredNumsSum = 0;
filteredNums.forEach((num) => (filteredNumsSum += num));
console.log("filtered numbers:", filteredNums);
console.log("sum of filtered numbers:", filteredNumsSum);

//davaleba4
const strs = ["apple", "banana", "pear", "watermelon"];
const updatedStrs = strs.map((fruit) => fruit.slice(0, -1));
console.log("sliced fruits:", updatedStrs);

//davaleba5
const arr2 = [19, 5, 42, 2, 77];
const sortedArr2 = arr2.sort((a, b) => a - b);
const lowNumsSum = sortedArr2[0] + sortedArr2[1];
console.log("sorted numbers:", sortedArr2, "2 lowest nums sum:", lowNumsSum);

//davaleba6
const arr3 = ['Hi', 'Everyone', 'Little', 'Liar', 'Orange']
const updatedArr = arr3.map((word) => word.slice(0,1)).join('')
console.log('result:',updatedArr)