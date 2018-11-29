	function ajaxPost(obj){//caaa
		var xhr = getXHR();
	
		/*if(obj.data){
			obj.url += "?" + parameter(obj.data);
		}*/
		xhr.open("post",obj.url);
		
		xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		
		if(obj.data){
			xhr.send(parameter(obj.data));
		}else{
			xhr.send();
		}
		xhr.onreadystatechange = function(){
			if(xhr.readyState == 4){
				if(xhr.status == 200){
					//alert(xhr.responseText);
					obj.success(xhr.responseText);
					//text.innerHTML = xhr.responseText;
				}else{
					if(obj.erro){
						obj.erro("响应出错，状态为："+xhr.status+",出错原因"+xhr.statusText);
					}
				}
			}
		}
	}
	function getXHR(){
		var xhr = null;
		if(window.XMLHttpRequest){
			xhr = new XMLHttpRequest();
		}else{
			xhr = new ActiveXObject("Microsoft.XMLHTTP");
		}
		return xhr;
	}
	
	function parameter(obj){
		//{uname: "刘德华", pwd: "234"}
		//uname=刘德华&pwd=234;
		//console.log(obj);
		var arr = [];
		for(var item in obj){
			arr.push(item+"="+obj[item]);
			//console.log(arr);
		}
		//console.log(arr.join("&"));
		
		return arr.join("&");
		
	}