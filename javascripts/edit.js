function setEditButonNm() {
 $(document).ready(function () {


        var node = document.getElementById("edit_page_div");
       	var n =location.pathname.split("/").slice(-1)+"";
		var link ="https://github.com/overturetool/overturetool.github.io/edit/master/_netmeetings/"+n.substring(0,n.lastIndexOf("."))+".md";
    node.innerHTML  = "<a href=\""+ link+"\">Edit</a>" ;
    });
	
	
 };