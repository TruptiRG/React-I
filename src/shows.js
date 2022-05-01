// const api="AIzaSyDjAZNJ5jbxuZZKXmZNVXzmymQboVaHUr8";


let sdata= async()=>{
    try{
        // const q=document.getElementById("search").value;
        let res= await fetch("https://fakestoreapi.com/products");
        let data=await res.json();
        add1(data);
        console.log(data);
    }catch(err){
        console.log(err);
    }
}

sdata();

let container=document.getElementById("show");

    function add1(data){
        data.forEach(function (el){
            let div=document.createElement("div");
            let title=document.createElement("h5");
            title.innerText=el.title;
            let price=document.createElement("h4");
            price.innerText=el.price;
            let image=document.createElement("img");
            image.src=el.image;
            div.append(image,title,price);
            container.append(div);
        });
    
    }    