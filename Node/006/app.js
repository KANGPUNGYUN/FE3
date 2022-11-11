// 과거 모듈 세팅(이때 package.json에 "type": "module"이 필요하지 않습니다. package.json자체도 필요하지 않습니다. 최신문법을 사용하기 위해 사용됩니다.)
const path = require("path");

// 모듈 세팅 최신 문법
// import path from 'path';

// 공식문서 링크  : https://nodejs.org/dist/latest-v16.x/docs/api/path.html

console.log(`구분자 : ${path.sep}`); // 구분자는 OS마다 다르기 때문에 폴더나 파일 경로를 사용할 때 path.sep을 사용해주셔야 합니다.

console.log(`디렉토리 : ${path.dirname(__filename)}`);
console.log(`파일이름 : ${path.basename(__filename)}`);
console.log(`확장자 : ${path.extname(__filename)}`);

console.log(__filename);
console.log(__dirname);
console.table(path.parse(__filename));
console.log(path.join(__dirname, 'source')); // 사용하세요.
console.log(path.join(__dirname, 'app.js'));
// console.log(__dirname+'/node'); // 사용하지 마세요.