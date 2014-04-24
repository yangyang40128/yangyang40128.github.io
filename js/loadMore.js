(function(){
	var loadMore = function(){
		var xhr = new XMLHttpRequest();
		xhr.open("GET","1.html",true);
		xhr.onreadystatechange = function(e) {
			if (xhr.readyState == 4 && xhr.status == 200 ) {
				document.body.appendChild(xhr.response);
			}
		}
		xhr.responseType = "document";
		xhr.send();
	}
	window.loadMore = loadMore;
})();