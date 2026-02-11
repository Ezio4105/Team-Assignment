function validateForm() {

    // getElementById
    let username = document.getElementById("username").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let password = document.getElementById("password").value.trim();
    let confirmPassword = document.getElementById("confirmPassword").value.trim();

    // Empty validation
    if (username === "" || email === "" || phone === "" || password === "" || confirmPassword === "") {
        alert("Fields cannot be empty. Spaces are considered empty.");
        return false;
    }

    // Phone validation (10 digits numeric)
    let phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone)) {
        alert("Phone number must be exactly 10 digits and numeric only.");
        return false;
    }

    // Password validation
    let passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[&,$,#@]).{7,}$/;
    if (!passwordRegex.test(password)) {
        alert("Password must be 7+ characters, include 1 capital letter, 1 digit and 1 special character (&,$,#@)");
        return false;
    }

    // Confirm password match
    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return false;
    }

    // Email validation
    let emailRegex = /^[A-Za-z]+@[A-Za-z]{3}\.[A-Za-z]{2,3}$/;
    if (!emailRegex.test(email)) {
        alert("Invalid Email format.");
        return false;
    }

    alert("Form Submitted Successfully!");

    // Change text using innerHTML
    document.getElementById("title").innerHTML = "Registration Successful";

    // Change CSS properties
    document.getElementById("title").style.color = "green";
    document.getElementById("title").style.position = "relative";
    document.getElementById("title").style.left = "20px";
}

/* --------- getElementsByClassName --------- */
let info = document.getElementsByClassName("info");
info[0].style.color = "purple";

/* --------- getElementsByTagName --------- */
let inputs = document.getElementsByTagName("input");
for (let i = 0; i < inputs.length; i++) {
    inputs[i].style.border = "1px solid black";
}

/* --------- Add Text Node --------- */
document.getElementById("addNodeBtn").onclick = function () {
    let textNode = document.createTextNode("Welcome to Web Technologies Course!");
    let para = document.createElement("p");
    para.appendChild(textNode);
    document.body.appendChild(para);
};

/* --------- Delete Node --------- */
document.getElementById("deleteNodeBtn").onclick = function () {
    let title = document.getElementById("title");
    title.parentNode.removeChild(title);
};

/* --------- jQuery Operations --------- */

$(document).ready(function () {

    // Change button text
    $("#changeTextBtn").click(function () {
        $(this).text("Text Changed Using jQuery");
    });

    // Set background image
    $("#bgBtn").click(function () {
        $("body").css("background-image", "url('https://picsum.photos/1200/800')");
    });

    // Access form data
    $("#showDataBtn").click(function () {
        let uname = $("#username").val();
        alert("Username entered: " + uname);
    });

    // Add attribute
    $("#submitBtn").attr("title", "Click to Submit Form");

});
