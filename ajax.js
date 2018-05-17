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
function page(total,now,limit){
	var pages = Math.ceil(total/limit);
	var str = "";
	for(var i=1;i<=pages;i++){
		str += "<a class='page'";
		if( i != now ){
			str += " data-page='"+i+"'";
		}
		str += ">"+i+"</a>";
	}
	$("#page").html(str);
	$(".page").click(function(){
		var t = $(this).attr("data-page");
		page(total,t,limit);
	});
}
