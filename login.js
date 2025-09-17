
function Login(){
    let mobile = document.getElementById("mobile").value.trim();
    let password = document.getElementById("pass").value.trim();

    let getUsersdata = JSON.parse(localStorage.getItem("usersdata")) || [];
    let count = 0;

    if (mobile.length === 0) {
        alert("Enter the mobile number");
    }
    else if (mobile.length !== 10) {
        alert("Mobile number should contain exactly 10 digits");
    }

    for(let i=0;i<getUsersdata.length;i++){
        if(mobile == getUsersdata[i].mobile){
            if(password == getUsersdata[i].password){
                alert("Sign in Successful");
                window.location.href = "index.html"
            }else{
                alert("Invalid password");
            }
        }else{
            count++;
        }
    }
    if (!found) {
        console.log("Invalid mobile number or password");
        alert("Invalid mobile number or password");
    }
    if(count == getUsersdata.length){
        alert("User is not registered. Signup");
        window.location.href = "signup.html"
    }
}