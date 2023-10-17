const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

const desenhe = document.getElementById('desenhar');

desenhe.addEventListener('click', () => {
    
    let x = 10;
    let y = 10;
    let r = 10;
    
    for(let j = 0 ; j < 10 ; j++){
        for(let i = 0 ; i < 25 ; i++){
            ctx.beginPath();
            ctx.arc(x + (i * 2 * r),y + (j * 2 * r), r, 0, 2 * Math.PI);
            // ctx.fillStyle = "rgb("+ (i * 10) + ",0," + (j * 25)  + ")";
            ctx.fillStyle = "rgb("+ Math.random() * 255 + "," + Math.random() * 255+"," + Math.random() * 255  + ")";
            ctx.fill();
        }
    }
   
});
