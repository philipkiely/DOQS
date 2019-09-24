function emailListSignup() {
    var email = document.getElementById("get-email").value
    if (email.indexOf("@") != -1 && email.indexOf(".") != -1) {
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "https://gjfjun4817.execute-api.us-east-1.amazonaws.com/default/DOQSInterestForm", true);
        xhr.setRequestHeader('Content-Type', 'text/plain');
        xhr.send(JSON.stringify({
            email: email
        }));
        document.getElementById("get-email").value = "";
        document.getElementById("invalid-email").hidden = true;
        document.getElementById("valid-email").hidden = false;
        sleep(5000).then(() => {
            document.getElementById("valid-email").hidden = true;
        })
    }
    else {
        document.getElementById("invalid-email").hidden = false;
    }
    
}
