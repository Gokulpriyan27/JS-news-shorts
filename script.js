const getNews = async()=>{
    document.querySelector(".cards").innerHTML = "";
    document.querySelector(".spinners").style.display = "flex";
    let data =[];
    let category = document.querySelector(".form-select").value;
    let contentSection = document.querySelector(".cards");
    await fetch(`https://inshorts.deta.dev/news?category=${category}`)
    .then((response)=>{
        return response.json();
    }).then((newsData)=>{
        data = newsData.data;
        if(data){
            document.querySelector(".spinners").style.display = "none";
            renderCards(data);
        }
     
    })


    function renderCards(data){

        data.forEach(element => {
            const card = document.createElement("div");
            const cardbody = document.createElement("div");
            const title =document.createElement("h5");
            const img =document.createElement("img");
            const news =document.createElement("p");
            const Author =document.createElement("h6");
            const time =document.createElement("h6");
            const readmore =document.createElement("a");
    
            card.classList ="card";
            card.style = "width:25rem;"
            cardbody.classList="card-body";
            title.classList="card-title";
            img.classList="card-img-top";
            news.classList="card=text";
            Author.classList="card-subtitle mb-2 text-muted";
            time.classList="card-subtitle mb-2 text-muted";
            readmore.classList="card-link";
            readmore.href=element.readMoreUrl;

            title.innerText = element.title;
            img.src =element.imageUrl;
            news.innerText = element.content;
            Author.innerText =element.author;
            time.innerText = element.time;
            readmore.innerText ="Read more...";
          
            cardbody.appendChild(title)
            cardbody.appendChild(img)
            cardbody.appendChild(news)
            cardbody.appendChild(Author)
            cardbody.appendChild(time)
            cardbody.appendChild(readmore);
            card.appendChild(cardbody);
            contentSection.appendChild(card);
           
        });
       

    }
}


