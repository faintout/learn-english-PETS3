const fs = require('fs');
const content = fs.readFileSync('./onlyWord.md', 'utf8');
// 读取Markdown文件并解析内容
function parseMarkdownFile() {
  const regex = /\*\*(.*?)\*\*\s*\[.*?\]\s*(.*)/g;
  let match;
  const englishWords = [];
  const chineseMeanings = [];

  while ((match = regex.exec(content)) !== null) {
    englishWords.push(match[1]);
    chineseMeanings.push(match[2]);
  }

  return { englishWords, chineseMeanings };
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
  const { englishWords, chineseMeanings } = parseMarkdownFile();
  let selectedEnglishWords = englishWords;
  let selectedChineseMeanings = chineseMeanings;
  if(start !== undefined && end !== undefined){
      selectedEnglishWords = englishWords.slice(start-1, end );
      selectedChineseMeanings = chineseMeanings.slice(start-1, end);
  }

  const shuffledEnglishWords = shuffleArray(selectedEnglishWords);
  const shuffledChineseMeanings = shuffleArray(selectedChineseMeanings);

  shuffledEnglishWords.map(_=>console.log(_))
  console.log();
  shuffledChineseMeanings.map(_=>console.log(_))
}


// 使用函数
getRandomWordsByIndex(251,295);


