const colors=['red','green','blue','yellow','white','gray','orange','purple','brown','pink','maroon','gold','silver'];
function changeColor(){
    const colorIndex=parseInt(Math.random()*colors.length)
    document.body.style.background=colors[colorIndex];
}