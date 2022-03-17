window.onload = () =>{
    
    $('ul.navTab li a').click(function(){
        $('ul.navTab li a').removeClass('clickOn')
        $(this).addClass('clickOn')
        if($(this).hasClass('news')){
            $('#navbarDiv').css("display", "block");
            $('#navbarNewDiv').css("display", "none"); 
        } else{
            console.log("dd")
            $('#navbarDiv').css("display", "none");
            $('#navbarNewDiv').css("display", "block");
            // console.log($(this).text()); 
            document.querySelector('#navbarNewDiv').innerHTML="<div>" + $(this).text() +"</div>"
            

        }

    })

}

