var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
   if (this.readyState == 4 && this.status == 200) {
       myFunction(this);
   }
};
xhttp.open("GET", "info.xml", true);
xhttp.send();
function myFunction(xml) {

	 			
	         	var student, attnode, xmlDoc, program, mynum, myname, title;
    			xmlDoc = xml.responseXML;
			    program = "";
			    
			    //populating program in footer
			    student = xmlDoc.getElementsByTagName('student');
			    attnode = student[0].getAttributeNode("program");
			    program = attnode.value;
			    document.getElementById("footer").innerHTML = program;
			    
			    
			    //populating student number in footer
			    mynum = $(xmlDoc).find('studentNumber');
			    $('#footer').append( " " + mynum.text() );
			    
			   
			    //populating student name in footer
			    myname = $(xmlDoc).find('studentName');
			    $('#footer').append( " " + myname.text() );
			    
		

			    //populating title in header
			    title = $(xmlDoc).find('title');
			    $('#header').append( title.text() );


			    //populating movie names on main page
			    var mname, i, movie;
			    mname = xmlDoc.getElementsByTagName("movieName");
			    for (i = 0; i < mname.length; i++) { 
			        movie += "<li><a href='#page" + (i + 2) + "'" + "class='ui-link'>" + mname[i].childNodes[0].nodeValue + "</a></li>";
			    }
			    document.getElementById("movietitles").innerHTML = movie;

			    //populating picture
			    var image, i, mimg;
			    mimg = xmlDoc.getElementsByTagName("movie");
			    for (i = 0; i < mimg.length; i++) { 
			    	image = "<img src='" + mimg[i].getAttributeNode("image").value + "'>";
			    	document.getElementById("pic" + (i+1)).innerHTML = image;			        
			    }

			    //populating movie title on individual page
			    var movtitle, i, mtitle;
			    mtitle = xmlDoc.getElementsByTagName("movieName");
			    for (i = 0; i < mtitle.length; i++) { 
			        movtitle = mtitle[i].childNodes[0].nodeValue;
			        document.getElementById("movie" + (i+1)).innerHTML = movtitle;
			    }

			    //populating synopsis
			    var synopsis, i, plot;
			    synopsis = xmlDoc.getElementsByTagName("plot");
			    for (i = 0; i < synopsis.length; i++) { 
			        plot = synopsis[i].childNodes[0].nodeValue;
			        document.getElementById("movie" + (i+1) + "plot").innerHTML = plot;
			    }

			    //populating cast
			    var i, actors, roles, attr1, attr2, attr3, role1, role2, role3;
			    actors = xmlDoc.getElementsByTagName("actor");
			    roles = xmlDoc.getElementsByTagName("role");
			    	//first movie
			    for (i = 0; i < 3; i++) {
			    	attr1 = actors[i].getAttributeNode("name").value;
			    	document.getElementById("mov1" + "act" + (i+1)).innerHTML = attr1;  
			    	role1 = roles[i].childNodes[0].nodeValue;
			        document.getElementById("mov1" + "role" + (i+1)).innerHTML = role1;
			    }
			    	//second movie
			    for (i = 3; i < 6; i++) {
			    	attr2 = actors[i].getAttributeNode("name").value;
				    document.getElementById("mov2" + "act" + (i+1)).innerHTML = attr2;  
				    role2 = roles[i].childNodes[0].nodeValue;
				    document.getElementById("mov2" + "role" + (i+1)).innerHTML = role2;			    	
			    }
			    	//third movie
			    for (i = 6; i < 9; i++) {
			    	attr3 = actors[i].getAttributeNode("name").value;
			    	document.getElementById("mov3" + "act" + (i+1)).innerHTML = attr3;  
			    	role3 = roles[i].childNodes[0].nodeValue;
			        document.getElementById("mov3" + "role" + (i+1)).innerHTML = role3;			    	
			    }


			   

			    //populating reviews
			    var reviews, i, rev1, rev2, rev3;
			    reviews = xmlDoc.getElementsByTagName("review");
			    for (i = 0; i < 3; i++) { 
			        rev1 += "<li>" + reviews[i].childNodes[0].nodeValue + "</li>";
			        document.getElementById("movie1rev").innerHTML = rev1;
			    }
			    for (i = 3; i < 6; i++) { 
			        rev2 += "<li>" + reviews[i].childNodes[0].nodeValue + "</li>";
			        document.getElementById("movie2rev").innerHTML = rev2;
			    }
			    for (i = 6; i < 9; i++) { 
			        rev3 += "<li>" + reviews[i].childNodes[0].nodeValue + "</li>";
			        document.getElementById("movie3rev").innerHTML = rev3;
			    }


			    




			    
			    
			    

}

    


