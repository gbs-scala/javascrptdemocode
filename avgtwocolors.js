function hexToRgb(hex){

 const regex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
 return regex.exec(hex).splice(1, 4).map(c => parseInt(c, 16)).join(',');
}

function rgbToHex(r, g, b) {
 return [r, g, b].map(c => {
           c = c.toString(16);
     return c.length === 1 ? '0' + c : c;
   }).join('');
 }

function findAvg(color1, color2) {
 let rgb1 = hexToRgb(color1).split(',');
   let rgb2 = hexToRgb(color2).split(',');

 let avg = rgb1.map((color, index, array) => {
     return Math.floor((parseInt(color) + parseInt(rgb2[index])) / 2);
   });
 return `The average color between:
           #${color1} and #${color2}
           is #${rgbToHex(avg[0], avg[1], avg[2])}
          `;
 }

console.log(findAvg('11cfdb', 'bedcdd'));
The average color between:
          #11cfdb and #bedcdd
          is #67d5dc


console.log(findAvg('85d1af', 'b52bc1'));
The average color between:
          #85d1af and #b52bc1
          is #9d7eb8


console.log(findAvg('00ff00', 'ff00ff'));
The average color between:
          #00ff00 and #ff00ff
          is #7f7f7f
