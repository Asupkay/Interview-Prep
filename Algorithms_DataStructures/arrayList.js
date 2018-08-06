let arrayList = [];

arrayList.push(10);
arrayList.push(8);
arrayList.push(3);
arrayList.push(2);
arrayList.push(1);

//Note .sort() will by default sort by the unicode number of the conversion so in essense by default it will sort alphabet
console.log(arrayList);

//If these function returns less than 0 a will be assumed less than b so a will stay to the left of b = 0 no change > 0 switch
arrayList.sort((a, b) => a - b);
console.log(arrayList);
arrayList.sort((a, b) => b - a);
console.log(arrayList);
