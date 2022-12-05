const container = document.querySelector('.container');
let row;
let grid;
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
            div.setAttribute('style','border : solid black 1px;')   
            div.style.height = '5px';
            div.addEventListener('mouseover',()=>{
                div.style.backgroundColor = 'red';
            })
            row.appendChild(div);
        }
        row.setAttribute('class','temp')
        grid.appendChild(row);
    }
    container.appendChild(grid);
}
fill();

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
    fill(n);
}