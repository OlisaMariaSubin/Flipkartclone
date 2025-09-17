let getUsersdata = JSON.parse(localStorage.getItem("usersdata")) || [];
console.log(getUsersdata);

function Signup() {
    let username = document.getElementById('Name').value.trim();
    let mobile = document.getElementById('phone').value.trim();
    let password = document.getElementById('Pass').value.trim();

    if (mobile.length === 0) {
        alert("Enter the mobile number");
    }
    else if (mobile.length !== 10) {
        alert("Mobile number should contain exactly 10 digits");
    }
    else {
        let userData = {
            username: username,
            mobile: mobile,
            password: password
        };

        let users =JSON.parse(localStorage.getItem("usersdata")) || [];
        users.push(userData);

        
        localStorage.setItem("usersdata", JSON.stringify(users));

        console.log(userData);
        alert("Signup successful!");
        window.location.href="login.html"
    }
}
