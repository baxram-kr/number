"use script" ;


// const user = {
//     fname : "umid",
//     User : "user" ,
//     pass : "passumid"
// }


// const admin = {
//     fname : "umid",
//     User : "admin" ,
//     pass : "padmin"
// }


// const cas = {
//     fname : "umid",
//     User : "cas" ,
//     pass : "pcas"
// }


// let arr = [ user , admin , cas]
// console.log(arr);

// for(let i = 0 ; i<arr.length ; i++){
    // console.log(arr[i].fname);
// }


let num_of_points = prompt("Number");
// let num_of_points = 4 ;
let radius = 310 ;
// document.addEventListener('keydown' , (e)=>{
//     if(e.key=='ArrowLeft' && !e.repeat && num_of_points>2){
//         clear()
//         num_of_points -=1
// draw()

//     }
//     else if(e.key=='ArrowRight' && !e.repeat && num_of_points<50){
//         clear()
//         num_of_points +=1
// draw()


//     }
// })
// function clear(){
//     document.querySelectorAll('.point , line').forEach((elem)=>{
//         elem.remove()
//     })
// }



function draw(){

let diff_angle = (360/num_of_points)*(Math.PI/180);
let angle = 0 ;

let html =''
for(let i=0;i<num_of_points;i++){
    html +=`<circle cx="${radius*Math.cos(angle)}" cy="${radius*Math.sin(angle)}" r=5
    stoke="black" storke-width="1" fill="black" class='point'/>`
angle+= diff_angle
}
document.querySelector('g').insertAdjacentHTML('beforeend' , html) ;

//====================================   

html = ''
let rnd_color = color()
document.querySelectorAll('.point').forEach((pointA)=>{
    document.querySelectorAll('.point').forEach((pointB)=>{
        html += `<line x1="${pointA.getAttribute('cx')}" y1="${pointA.getAttribute('cy')}"
                x2="${pointB.getAttribute('cx')}" y2="${pointB.getAttribute('cy')}" stroke="${rnd_color}" sroke-width="1" />`
    })
})
document.querySelector('g').insertAdjacentHTML('beforeend', html)
}


function color(){
    let colors = ['red' , 'blue' , 'green' ,'purple' , 'black' ]
    return colors[Math.floor(Math.random() * colors.length)]
}


draw()