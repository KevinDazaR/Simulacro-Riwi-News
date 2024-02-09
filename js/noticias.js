const URL_END_POINT_NEWS = "http://localhost:3000/news";
const URL_END_POINT_CATEGORIES = "http://localhost:3000/categories";
const URL_END_POINT_USERS = "http://localhost:3000/users";

console.log("a")

function listarNoticia(){
    let tbody_noticias = document.getElementById("noticias-tbody");
    template = "";
    fetch(URL_END_POINT_NEWS).then( r => r.json()).then(data => {

        for (const element of data) {
            // console.log(element.title_new);
            template = `
            <tr>
            <td>
              <img
                src="${element.url_image_new}"
                height="50"
                width="50"
                class="rounded-circle"
              />
            </td>
            <td>${element.title_new}</td>
            <td>${element.description_new}</td>
            <td>${element.data_creation_new}</td>
            <td>Kevin Mejia</td>
            <td>Tecnología</td>
            <td>
              <button class="btn btn-primary">Edit</button>
              <button class="btn btn-danger">Delete</button>
            </td>
          </tr>
          `
          tbody_noticias.innerHTML += template;
        }
    })
}

listarNoticia();


/* */
function listarCategorias(){
    let idCategory = document.getElementById("idCategory");
    template="";
    fetch(URL_END_POINT_CATEGORIES,{}).then(r => r.json()).then(data=>{

        for (const element of data) {
            console.log(element);
            template += `
            <option>${element.nameCategory}</option>
            `
        }
        idCategory.innerHTML += template;
    });
}

listarCategorias();


/* FALTA */
function agregarNoticia(){
    let imgNews = document.getElementById("urlImage");
    let titleNews = document.getElementById("nameNotice");
    let descriptionNews = document.getElementById("contentNotice");
    let idCategory = document.getElementById("idCategory");


    let new_News ={
        url_image_new:imgNews,
        title_new:titleNews.value,
        description_new:descriptionNews.value,
        date_creation_new:"09/02/2024",
        author: "",
        category:""
    }

    fetch(URL_END_POINT_NEWS,{

        method: "POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(new_News)

    }).then(r => r.json()).then(data => {






    });
}