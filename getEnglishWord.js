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
printPetsData(727,777);

// Name: colonel, Trans: n.陆军上校，中校
// Name: colony, Trans: n.侨民，殖民地，侨居地，聚居(地)
// Name: color, Trans: n.颜色，彩色，颜料，气色，风格，vt.把...涂颜色，粉饰，vi.脸红
// Name: column, Trans: n.柱，支柱，圆柱，柱形物，专栏，[计算机]列
// Name: comb, Trans: n.梳子 vt.梳理
// Name: combination, Trans: n.结合，联合，化合，联合体
// Name: combine, Trans: vt.使结合，兼有，融合，联结，收割，混合谷物，vi.结合，联合，n.集团，联合收割机
// Name: come, Trans: vi.来，来到，达到，出现，发生，进入，vt.接近，扮演
// Name: comfort, Trans: n.舒适，安慰，安慰者，vt.安慰
// Name: comfortable, Trans: adj.舒适的，安慰的，充裕的
// Name: command, Trans: vt.命令，指挥，控制，支配，n.命令，指挥，控制，[计算机]DOS命令：引用辅助命令处理器
// Name: commander, Trans: n.司令官，指挥员
// Name: comment, Trans: n.评论，意见，注释，闲话，v.注释，评论
// Name: commerce, Trans: n.商业，贸易，社交
// Name: commercial, Trans: adj.商业的，商品化的，n.商业广告
// Name: commit, Trans: vt.犯(错误)，干(坏事)
// Name: committee, Trans: n.委员会，全体委员
// Name: communicate, Trans: vi.通讯，传达，传播，vi.交流，沟通，联通
// Name: communism, Trans: n.共产主义
// Name: communist, Trans: n.共产党员，共产主义者，adj.共产主义的
// Name: community, Trans: n.社区，团体，社会，公社，群落(生)
// Name: companion, Trans: n.同伴，同事，共事者，伴侣，成对物品之一，(船的)甲板间扶梯(或扶梯的顶篷)，vt.，&，vi.陪伴
// Name: company, Trans: n.公司，商号，同伴，客人，一群，连队，vt.陪伴，vi.联合
// Name: comparative, Trans: adj.比较的，相对的，n.对手
// Name: compare, Trans: vt.，&，vi.比较，对照，比作，比喻，n.比较，对照
// Name: compass, Trans: n.罗盘，指南针，圆规，vt.图谋，包围，达成
// Name: compel, Trans: vt.强迫，迫使屈服
// Name: competent, Trans: adj.有能力的，胜任的，足够的，应该做的
// Name: competition, Trans: n.竞争，比
// Name: complaint, Trans: n.抱怨，怨言，控告
// Name: complete, Trans: adj.完整的，完成的，彻底的，vt.完成，使圆满，使完美
// Name: complex, Trans: adj.结合的，复杂的，n.复合体
// Name: complicate, Trans: vt.使复杂，使陷入，使错综，使起纠纷
// Name: compose, Trans: vt.组成，构成，创作，写作，作曲，使镇静，vi.创作
// Name: compound, Trans: n.，化合物，混合物，复合词，adj.，复(混)合的，合成的，vt.，混合调合，妥协，vi.，混合，妥协
// Name: comprehension, Trans: n.理解，理解力，领悟
