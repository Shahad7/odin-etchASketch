const container = document.querySelector('.container');
let row;
let grid;
let flag=0;
let randomColor = ()=>{
    let x = (Math.floor(Math.random()*100)+190)%256;
    console.log(x);
    return x;
}
let fill = (n=16) =>
{
    grid = document.createElement('div');
    grid.setAttribute('class','grid');
    for(let i=0;i<n;i++)
    {
        row = document.createElement('div');
        for(let j=0;j<n;j++)
        {
            const div = document.createElement('div');
              
            div.style.height = '5px';
            div.setAttribute('class','square');
            row.appendChild(div);
        }
        row.setAttribute('class','temp')
        grid.appendChild(row);
    }
    container.appendChild(grid);
}
fill();
paint();

const button = document.querySelector('button');
button.addEventListener('click',reset);

function reset (){
    let n = prompt("grid size?");
    if(!(n<100))
    {
        alert('please enter a value under 100');
        reset();
    }
    container.removeChild(grid);
    color = 'black';
    flag=0;
    fill(n);
    paint();
}

const random = document.querySelector('#random');
const eraser = document.querySelector('#eraser');
const black = document.querySelector('#black');
random.addEventListener('click',()=> {flag=1;
    paint()});
eraser.addEventListener('click',()=> {flag=2; paint()});
black.addEventListener('click',()=> {flag=0; paint()});

function paint(){
 const squares = document.querySelectorAll('.square');
 squares.forEach(element => {
        if(flag==1)
        {
            element.addEventListener('mouseover',()=>{
            element.style.backgroundColor = `rgb(${randomColor()},${randomColor()},${randomColor()})`;})
    
        }   
        else if(flag==2)
            element.addEventListener('mouseover',()=>{
            element.style.backgroundColor = 'white';})
        else
        {  
            element.addEventListener('mouseover',()=>{
            element.style.backgroundColor = 'black';})

        }
    
 });
}