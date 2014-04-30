(function(){
	var loadArticleContent = function ( option ,callback) {
		var url = option.name+".html";
		var method = option.method || "GET";
		var xhr = new XMLHttpRequest();
		xhr.open(method,url,true);
		xhr.onreadystatechange = function(){
			if (xhr.readyState == 4 && xhr.status == 200 ) {
				callback(xhr.response);
			}
		}
		xhr.responseType = "document";
		xhr.send();
		
	}
	var appendArticle = function (content) {
		document.querySelector(".list").appendChild(content.body.childNodes[0]);
	}
	var articleNames = ["1","2","3","4","5","6","7","8","9","10"];
	var offset = 0;
	var limit = 2;
	var count = articleNames.length;
	var loadMore = function () {
		for ( var i = 0 ;i < limit ; i++  ) {
			if (i+offset > count  - 1) {
				break;
			}
			loadArticleContent({"name":articleNames[i+offset]},function(content){
				appendArticle(content);
			});
		}
		offset = limit + offset;
		
	}
	window.loadMore = loadMore;

})();