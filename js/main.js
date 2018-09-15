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
    else if(section == "products"){
        window.location.href = "products.html";
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

    if($(x).siblings().is( ":visible" )){
        $(x).children().find('i').removeClass('fa-plus-circle').addClass('fa-minus-circle');
    }
    else{
        $(x).children().find('i').removeClass('fa-minus-circle').addClass('fa-plus-circle');
    }
   
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

function toggleConsumptionType(x){
    if(x.selectedIndex == 0){
        $('.box-add-device').css('display', 'none');
        $('#device-list').css('display', 'none');
    }
    else{
        $('.box-add-device').css('display', 'block');
        $('#device-list').css('display', 'block');
    }
   
}


function addDevice(){
    var count = $("#device-list").children().length;

    var _class = "device";

    var deviceType = document.getElementById('device-type');
    var deviceCount = document.getElementById('device-count');
    var deviceOnTime = document.getElementById('device-on-time');
    var deviceTimeMeasure = document.getElementById('time-measure');

    if(deviceCount.value == ""){
        deviceCount.value = 0;
    }

    if(deviceOnTime.value == ""){
        deviceOnTime.value = 0;
    }

    var s = deviceCount.value+" "+deviceType[deviceType.selectedIndex].text+", "+deviceOnTime.value+deviceTimeMeasure[deviceTimeMeasure.selectedIndex].text+" on-time";
    
    var addedDevice = "<div id = device_"+count+" class ="+_class+">"+s+"</div>" 

    $( "#device-list" ).append( addedDevice );

    if( count % 2 != 0){
        $("#device_"+count).css('float', 'right');
    }

    deviceCount.value = "";
    deviceOnTime.value = "";
   
}
