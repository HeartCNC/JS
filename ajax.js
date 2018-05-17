var t = {
	t:'123',
	tt:'456'
};

	var test = new data();
	test.getData("data.php",t);




function data(){
	
	
	
	this.getData=function(url,arr){
		var str = "";
		for(var key in arr){
			str += key + "=" + arr[key] + "&";
		}
		str = str.replace(/&$/,"");
		if( str != "" ) url += "?" + str;
		
		$.get(url,function(data,status){
			var arr = JSON.parse(data);
			return arr
		});
	}
	
	this.getPage=function(){
		
		
		
	}
	
}
