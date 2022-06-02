//  document.getElementById("btn").addEventListener("click",myfun);

async function search1(){
try{
    var search = document.getElementById("query").value 
   let res = await fetch(`https://swapi.dev/api/people/?search=${search}`)
   let data = await res.json();
   console.log(data.results);
   append(data.results)
}
catch (err){
    console.log(err);
}


}



function append(data){
    let container = document.getElementById('results')
 
    container.innerHTML = null;

    data.forEach(function(el){
        let p = document.createElement('H3')
        p.innerText = el.name
        p.style.color = 'white'
        let age = document.createElement("p");
       age.innerText=el.birth_year;
         age.id="age"


        container.append(p,age)
    })
}
