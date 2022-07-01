// como pegar radio

const Search = document.querySelector("#search");



Search.onclick = function(e){
    e.preventDefault();
    let searchString = document.querySelector("#searchstring").value;
    let filterType = document.querySelector("input[name='searchfilter']:checked").value;
     
    if(filterType === "all") alert("Busca geral por " + searchString);
    else if (filterType === "cod") alert("Busca pelo código por " + searchString);
    else if (filterType === "mat") alert("Busca pela matrícula por " + searchString);
    else alert("Busca pelo nome por " + searchString);
}
    






