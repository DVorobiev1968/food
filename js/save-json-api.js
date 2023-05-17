
const fs = require('node-fs');
const getDb = require('../db');
const db = getDb();
const pathDist='./dist/';

const paths = [{
    name:'css', 
  },
  {
    name:'icons',
  },
  {
    name:'img',
  },
  {
    name:'db',
  }
];

function mkDir(target){
  fs.mkdir(target, { recursive: true }, (err) => {
    if (err) throw err;
})};


function done(text){
  console.log(text);
}

function writeDB(){
  try{
    for (let [key, value] of Object.entries(db)) {
      fs.writeFile(
        `./dist/db/db.json`,
        JSON.stringify(value),
        (err) => {
          if (err) throw err;
        }
      );
    }
    console.log('DB createtd')
  } catch (error) {
    console.log(error.message);
  }

}

function startCopyFile(src, dest){
  // let srcPath;
  // let destPath;
  fs.readdir(src, function(err, items){
    for (let i = 0; i < items.length; i++){
      const srcPath=`${src}/${items[i]}`;
      const destPath=`${dest}/${items[i]}`;
      if (fs.lstatSync(srcPath).isDirectory()){
        console.log(srcPath,' its directory');
        startCopyFile(srcPath,destPath);
      } 
      else {
        fs.copyFile(srcPath, destPath,()=>{done(`Copied file ${srcPath} to ${destPath} success!`)});
      }
    }
  });
}

let destDir;
let srcDir;
paths.forEach((element,i)=>{
  try{
    destDir=pathDist+element.name;
    srcDir='./'+element.name;
    mkDir(destDir);
    console.log(destDir,' created success!');
    startCopyFile(srcDir,destDir);
  }catch (error) {
    console.log(error.message);
  }}
);

fs.mkdir(pathDist+'/static/db', 0777, () => {
});

