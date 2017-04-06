function goTop()
{
	window.scrollTo(0,0);
}

// 段落變色-JS寫法
var headers = document.getElementsByTagName("p");

for (var i in headers){
    headers[i].onmouseover = function(){
        this.style.background = 'yellow';
    }
    headers[i].onmouseout = function(){
        this.style.background = 'white';
    }
}

//預設medium
var a = document.body;
a.className += "medium"


function smallFont(){
	var a = document.body;
	if (a.className == "medium"){
		a.classList.remove("medium");
		a.className += "small"
	}
	else if (a.className == "large"){
		a.classList.remove("large");
		a.className += "small"
	}
}


function mediumFont(){
	var a = document.body;
	if (a.className == "small"){
		a.classList.remove("small");
		a.className += "medium"
	}
	else if (a.className == "large"){
		a.classList.remove("large");
		a.className += "medium"
	}
}


function largeFont(){
	var a = document.body;
	if (a.className == "small"){
		a.classList.remove("small");
		a.className += "large"
	}
	else if (a.className == "medium"){
		a.classList.remove("medium");
		a.className += "large"
	}
}

/*=================================FIREBASE====================================*/
// Initialize Firebase
var config = {
	apiKey: "AIzaSyALJ7VoNlkn6Pw_sx6UL9NiL5j2MVGmimY",
	authDomain: "test-8dcd6.firebaseapp.com",
	databaseURL: "https://test-8dcd6.firebaseio.com",
	projectId: "test-8dcd6",
	storageBucket: "test-8dcd6.appspot.com",
	messagingSenderId: "730737363188"
};
firebase.initializeApp(config);

var storageRef = firebase.storage().ref();
var img1 = "img1.jpeg"
var img2 = "img2.jpeg"
var img3 = "img3.jpeg"

$(document).ready(function(){
	image();
})

function image() {
	var publicRef1 = storageRef.child(img1);
    var publicRef2 = storageRef.child(img2);
    var publicRef3 = storageRef.child(img3);

    publicRef1.getDownloadURL().then(function(url1){
        $('#img1').attr('src',url1);
    });
    publicRef2.getDownloadURL().then(function(url2){
        $('#img2').attr('src',url2);
    });
    publicRef3.getDownloadURL().then(function(url3){
        $('#img3').attr('src',url3);
    });   
}


