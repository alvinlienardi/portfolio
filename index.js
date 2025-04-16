$("#english").click(()=>{
    language=0;
    console.log("switched language to english");
});
$("#japanese").click(()=>{
    language=1;
    console.log("switched language to japanese");
});
$("#indonesian").click(()=>{
    language=2;
    console.log("switched language to indonesian");
});

$(".navbar .dropdown-item").click(()=>{
    switch(page){
        case 0:
            switch(language){
                case 0:
                    location.href="index.html";
                    break;
                case 1:
                    location.href="index-japanese.html";
                    break;
                case 2:
                    location.href="index-indonesian.html";
                    break;
                default:
                    break;
            }
            break;
        case 1:
            switch(language){
                case 0:
                    location.href="contact.html";
                    break;
                case 1:
                    location.href="contact-japanese.html";
                    break;
                case 2:
                    location.href="contact-indonesian.html";
                    break;
                default:
                    break;
            }
            break;
        case 2:
            switch(language){
                case 0:
                    location.href="about.html";
                    break;
                case 1:
                    location.href="about-japanese.html";
                    break;
                case 2:
                    location.href="about-indonesian.html";
                    break;
                default:
                    break;
            }
            break;
        default:
            break;
    }
});