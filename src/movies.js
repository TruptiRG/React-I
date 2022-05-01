
let movdiv=document.getElementById("showVedio")

let sdata= async()=>{
    try{
        let q=document.getElementById("search").value;
        let res= await fetch(`http://www.omdbapi.com/?t=${q}&apikey=4da2ec90`);
        let data=await res.json();
        add(data);
        console.log(data);
    }catch(err){
        console.log(err);
    }
}
document.getElementById("search").addEventListener("input",sdata);

function add(data){
    movdiv.innerHTML=null;
        let div=document.createElement('div')
        let i1=document.createElement("img");
        i1.src=data.Poster;
        i1.setAttribute("class","im")
        let i2=document.createElement("h2");
        i2.setAttribute("class","h")
        i2.innerText=data.Title;
        div.append(i1,i2);
        movdiv.append(div);
        
}    

