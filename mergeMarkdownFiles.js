
const fs = require('fs');
const path = require('path');

const mdFileList = fs.readdirSync('./108');
// console.log(mdFileList);

let mdAllContent = "[toc]\r\n";
let mdArticleContent = "[toc]\r\n";

const readmeContent = fs.readFileSync("./README.md", 'utf-8');

// 全部
mdAllContent += readmeContent + "\r\n\r\n";

// 只包含课文
mdArticleContent += readmeContent + "\r\n\r\n";

for (const szMDFileName of mdFileList) {
    if (path.extname(szMDFileName) !== '.md') {
        continue;
    }
    const realFileName = `./108/${szMDFileName}`;
    // console.log(realFileName);

    const oneMDContent = fs.readFileSync(realFileName, 'utf-8');
    const artileMDContent = oneMDContent.split("**本文评论获取自")[0];

    // 全部
    mdAllContent += oneMDContent + "\r\n\r\n";

    // 只包含课文
    mdArticleContent += artileMDContent + "\r\n\r\n";
}

fs.writeFileSync("./108/108-All.md", mdAllContent);
fs.writeFileSync("./108/108-artileOnly.md", mdArticleContent);
