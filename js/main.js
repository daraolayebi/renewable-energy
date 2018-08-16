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
