function getName(name)
{
	var n ="lllll";
	$.ajax({ url:"https://api.github.com/users/"+name,
		async: false,
		dataType: 'json',
		success: function(result)
				{
					if(result.name+""!="undefined")
					{
						n=  result.name
					}else
					{	
						n = name;
					}
				}
		});

	return n;
}


$(document).ready(function(){


var body =document.getElementById("github");
tbl  = document.createElement('table');

var cell = 0;
var tr = tbl.insertRow();
var row=0;

	$.getJSON("https://api.github.com/repos/overturetool/overture/contributors",function(result){
		$.each(result/*.reverse()*/, function(i, field)
		{
			cell=cell+1;
			if(cell>4)
			{
				cell=1;
				row++;
				tr=tbl.insertRow(row);

			}

			var td = tr.insertCell(cell-1);
			
			var gitDiv = document.createElement("div");
			gitDiv.className = "githubcontainer";

			var link = document.createElement("a");
			link.href=field.html_url;
			link.appendChild(gitDiv);


			var img = document.createElement("img");
			img.src = field.avatar_url;
			gitDiv.appendChild(img);
			var rank = document.createElement("h2");
			rank.innerHTML=field.contributions;	
			rank.className = "contributions";
			gitDiv.appendChild(rank);

			var name = document.createElement("h2");
			name.innerHTML=getName(field.login);
			name.className="name";
			gitDiv.appendChild(name);

			td.appendChild(link);
		});

		body.appendChild(tbl);
	});
});
