const URL_END_POINT_NEWS = "http://localhost:3000/news";
const URL_END_POINT_CATEGORIES = "http://localhost:3000/categories";
const URL_END_POINT_USERS = "http://localhost:3000/users";


const CARD = document.getElementById("card");
const ROW = document.getElementById("row");
const COL_MD_4 = document.getElementById("col-md-4");
const IMG_NEW = document.getElementById("img-new");
const COL_MD_8 = document.getElementById("col-md-8");
const CARD_BODY = document.getElementById("card-body");
let card_title = document.getElementById("card-title");
let card_text = document.getElementById("card-text");
let date_creation_new = document.getElementById("date-creation-new");





function showNews(){
    let MAIN_INDEX = document.getElementById("main_index");
    console.log(MAIN_INDEX);
    
    template= "";
    fetch(URL_END_POINT_NEWS).then(r =>r.json()).then(data =>{

        for (const element of data) {
            template = `
            <div class="card mb-3" style="max-width: 540px">
            <div class="row g-0">
              <div class="col-md-4">
                <img src="${element.url_image_new}" class="img-fluid rounded-start" alt="..."/>
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">${element.title_new}</h5>
                  <p class="card-text">
                    ${element.description_new}
                  </p>
                  <p class="card-text">
                    <small class="text-body-secondary">${element.date_creation_new}</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
          `
          MAIN_INDEX.innerHTML += template;
        }



    });
}

showNews();