const fs = require('fs');
const content = fs.readFileSync('./onlyWord.md', 'utf8');
// 读取Markdown文件并解析内容
function parseMarkdownFile() {
  const regex = /\*\*(.*?)\*\*\s*\[.*?\]\s*(.*)/g;
  let match;
  const wordsParams = [];

  while ((match = regex.exec(content)) !== null) {
    wordsParams.push(
      {
        english:match[1],
        chinese:match[2]
      }
    )

  }

  return wordsParams;
}

// 打乱数组顺序的函数
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// 获取随机单词和中文解释
function getRandomWordsByIndex(start, end) {
  const wordsList = parseMarkdownFile();
  let selectedWordsList = wordsList;
  if(start !== undefined && end !== undefined){
    selectedWordsList = wordsList.slice(start-1, end );
  }

  const shuffledWordsList = shuffleArray(selectedWordsList);

  shuffledWordsList.map(_=>console.log(_.english))
  console.log();
  shuffledWordsList.map(_=>console.log(_.chinese))
}


// 使用函数
// getRandomWordsByIndex();
getRandomWordsByIndex(457,498);



