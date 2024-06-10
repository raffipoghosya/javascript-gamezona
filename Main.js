// document.getElementById("main-form").addEventListener("submit", checkForm)


// function checkForm(event) {
//     event.preventDefault();
//     var el = document.getElementById("main-form");

//     var name = el.name.value;
//     var pass = el.pass.value;
//     var repass = el.repass.value;
//     var state = el.state.value;
//     console.log(name + "-" + pass + "-" + repass + "-" + state)
//     var error = "";
//     if (name == "" || pass == "" || state == "")
//         error = "please chek all form";
//     else if (name.length <= 1 || name.length > 15)
//         error = "one mor time";
//     else if (pass != repass)
//         error = "Your password is not correct.";
//     else if (pass.split("$").length > 1)
//         error = "you have ancorect"

//     if(error!=""){
//         document.getElementById("errorr").innerHTML = error;
    
//     }else{
//         alert("Access Granted. Let's begin.")
//         window.open ="Homepage.html";
//     }
 
// }