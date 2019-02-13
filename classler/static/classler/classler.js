code = "";
function getCode(CodeMirror, editor) {
	var code = editor.getValue();
	$.ajax({
		url: '/classler/submit_code',
		data: {
			'code': code
		},
		dataType: 'json',
		success: function(data) {
			var ans = data.result.replace(/\n/g,"<br>");
			$('#output').empty();
			$('#output').append("<div class=\"col\"><span>"+ans+"</span><\/div>");
			$('#answer').show();
		}
	});
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
