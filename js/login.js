const URL_END_POINT_NEWS = "http://localhost:3000/news";
const URL_END_POINT_CATEGORIES = "http://localhost:3000/categories";
const URL_END_POINT_USERS = "http://localhost:3000/users";


function loginUser(){
    let email_user = document.getElementById('email');
    let password_user = document.getElementById('password');

    fetch(URL_END_POINT_USERS).then(r => r.json().then(data => {
        console.log(data);

        let resultado = data.filter(function(element){

            return element.email == email_user.value;

        })
        console.log(password_user.value);

        if(resultado.length > 0){
            console.log(resultado[0].name);
            if(resultado[0].password == password_user.value){
                console.log("si hay conincidencias");
                localStorage.setItem("autentificado","si");

                if(resultado[0].IsAdmin == true){
                    location.href = "administrator.html"
                    localStorage.setItem(resultado[0].email, `admin: ${resultado[0].name} is logged`)
                }
                else if(resultado[0].IsAdmin == false){ 
                    location.href = "index.html"
                    localStorage.setItem(resultado[0].email, `normal user: ${resultado[0].name} is logged`)
                }
      
            }
            else{
                console.log("Correo o contraseña incorrectos");
            }

        }
        else{
            console.log("No hay coincidencias");
        }    
    

    
    }))


}
