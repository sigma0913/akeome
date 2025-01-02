// if (window.innerWidth <= window.innerHeight) {
//     document.getElementById("rotate").innerText = "画面が縦向きだと表示が崩れるかもしれません。";
// } else {
//     document.getElementById("rotate").innerText = "";
// }  

// let move;
// let move2;
// move = window.innerWidth <= window.innerHeight;

// console.clear();

// setInterval(() => {
//     move2 = Boolean(move);

//     move = window.innerWidth <= window.innerHeight;
//     if (move !== move2){
//         if (window.innerWidth <= window.innerHeight) {
//             document.getElementById("rotate").innerText = "画面が縦向きだと表示が崩れるかもしれません。";
//             console.clear();
//             console.debug("\"横向き->縦向き\" を検知");
//         } else {
//             document.getElementById("rotate").innerText = "";
//             console.clear();
//             console.debug("\"縦向き->横向き\" を検知");
//         }
//     }
// }, 100);