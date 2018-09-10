var bgImageArray = ["blog-bg.png", "main-bg.png"],
base = "img/",
secs = 4;

bgImageArray.forEach(function(img){
    new Image().src = base + img; 
    // caches images, avoiding white flash between background replacements
});

// function backgroundSequence() {
// 	window.clearTimeout();
// 	var k = 0;
// 	for (i = 0; i < bgImageArray.length; i++) {
// 		setTimeout(function(){ 
//             document.getElementById("hero-image").Image.src = "url(" + base + bgImageArray[k] + ") no-repeat center center fixed";
// 			// document.documentElement.style.background = "url(" + base + bgImageArray[k] + ") no-repeat center center fixed";
// 			// document.documentElement.style.backgroundSize ="cover";
// 		if ((k + 1) === bgImageArray.length) { setTimeout(function() { backgroundSequence() }, (secs * 1000))} else { k++; }			
// 		}, (secs * 1000) * i)	
// 	}
// }

// backgroundSequence();


function goToSection(section){
    if(section == "blog"){
        window.location.href = "blog.html";
    }
    else if(section == "login"){
        window.location.href = "login.html";
    }
    else if(section == "register"){
        window.location.href = "signup.html";
    }
    else if(section == "vendor-2"){
        window.location.href = "vendor-profile-2.html";
    }
    else if(section == "vendor-3"){
        window.location.href = "vendor-profile-3.html";
    }
    else if(section == "home"){
        window.location.href = "index.html";
    }
    else if(section == "solution-providers"){
        window.location.href = "solution-providers.html";
    }
    else if(section == "profile-edit"){
        window.location.href = "vendor-profile-edit.html";
    }
    else if(section == "contact"){
        window.location.href = "contact.html";
    }
    else if(section == "about"){
        window.location.href = "about.html";
    }
    else if(section == "faqs"){
        window.location.href = "faqs.html";
    }
    else if(section == "calculator"){
        window.location.href = "calculator.html";
    }
    else if(section == "calculator-result"){
        window.location.href = "calculator-result.html";
    }
}

var menuIcon = null;
var overlayHeight = '0%';

function menuIconClick(x) {
    menuIcon = x;
    x.classList.toggle("change");
    toggleNav();
}

function toggleNav() {
    document.getElementById("overlay").style.height = (overlayHeight == "100%")? "0%" : "100%";
    overlayHeight = document.getElementById("overlay").style.height;
}

function showForm(id){
    if(id >= 0){
        if(id == 2){
            $('#form-bus').css('display', 'block');
            $('#form-ind').css('display', 'none');
            $('#form-rm').css('display', 'none');
        }
        else if(id == 1){
            $('#form-bus').css('display', 'none');
            $('#form-ind').css('display', 'none');
            $('#form-rm').css('display', 'block');
        }
        else{
            $('#form-bus').css('display', 'none');
            $('#form-ind').css('display', 'block');
            $('#form-rm').css('display', 'none');
        }
    }
    else{
        if(id == -1){
            var e = document.getElementById("form-ind-select-box");
            
            if(e.selectedIndex == 1){
                $('#form-bus').css('display', 'none');
                $('#form-ind').css('display', 'block');
                $('#form-rm').css('display', 'none');
            }
            else if(e.selectedIndex == 2){
                $('#form-bus').css('display', 'none');
                $('#form-ind').css('display', 'none');
                $('#form-rm').css('display', 'block');

            }
            else{
                $('#form-bus').css('display', 'block');
                $('#form-ind').css('display', 'none');
                $('#form-rm').css('display', 'none'); 
            }
        }
    }
   

    $('.underline').css('display', 'none');
    document.getElementsByClassName('underline').item(id).style.display = "block";

}

function toggleAnswer(x){
    $(x).siblings().toggle();
}



function expandText(x){
    $(x).parent().siblings().toggle();

    if ($(x).parent().siblings().is(':visible') ){
        $(x).html("Read Less");
    }
    else{
        $(x).html("Read More");
    }
}
