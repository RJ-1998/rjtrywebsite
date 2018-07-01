const header = document.querySelector('.myheader');

header.addEventListener('mouseover',function(item){
    item.target.style = "color:lightpink";
});
header.addEventListener('mouseout',function(item){
    item.target.style = "color:white";
});