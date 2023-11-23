const fs = require('fs');

// 假设PETS3-2023.json文件在同一目录下
const petsData = require('./PETS3-2023.json');

petsData.sort((a, b) => a.name.localeCompare(b.name));
function printPetsData(startIndex, endIndex) {
  // 使用slice方法获取指定范围的数据
  const selectedPets = petsData.slice(startIndex-1, endIndex);

  // 遍历并打印所需信息
  selectedPets.forEach((pet, index) => {
    // console.log(`Index: ${startIndex+index}, Name: ${pet.name}, Trans: ${pet.trans}`);
    console.log(`Name: ${pet.name}, Trans: ${pet.trans}`);
  });
}

// 假设我们想打印索引从2到5的宠物数据
printPetsData(363, 413);

