code = "";
function getCode(CodeMirror, editor) {
    console.log(editor.getValue());
    code = editor.getValue();
    var req = new XMLHttpRequest();
    req.onreadystatechange = function() {
        if (req.readyState != 4) return;
        if (req.status != 200) return;
    }
    req.open("POST", "/classler/submit_code", true);
    req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    req.send("code="+code+"&csrfmiddlewaretoken="+getCSRFToken());
}

function getCSRFToken() {
    var cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++) {
        if (cookies[i].startsWith("csrftoken=")) {
            return cookies[i].substring("csrftoken=".length, cookies[i].length);
        }
    }
    return "unknown";
}