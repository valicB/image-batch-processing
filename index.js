const fs = require('fs');
const resizeImg = require('resize-img');

function processAll(){
  fs
    .readdirSync('./original')
    // .forEach(processImg);
    .forEach((image)=>{
      console.log(image);
      processImg(image);
    });
}

// process ONE image
function processImg(name){
  resizeImg(
    fs.readFileSync('./original/'+name),
    {width: 200, height: 200}
  )
  .then(buf => {
    [filename,ext] = name.split('.');
      // fs.writeFileSync(`./done/small_${filename}.${ext}`, buf);
      fs.writeFileSync('./done/small_'+filename+'.'+ ext, buf);
  });
}

// processImg('1.jpg');
processAll();

// daca imaginea a fost prelucrata, sa fie stearsa din mapa original
// fs.watch
