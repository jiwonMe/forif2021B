// madge.js 에 추가 후 madge.js를 node로 실행할 경우
// import
const madge = require('madge');
// functions
madge('./src/App.tsx')
  .then((res) => res.image('./madge/image.svg'))
  .then((writtenImagePath) => {
    console.log('Image written to ' + writtenImagePath);
  });
//.....더 추가할 수 있습니다.