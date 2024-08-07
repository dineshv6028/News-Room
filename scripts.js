$(document).ready(function(){
    $('.news-card').hover(
        function(){
            $(this).find('img').css("transform", "scale(1.1)");
            $(this).css("transform", "translateY(-10px)");
            $(this).css("box-shadow", "0 8px 16px rgba(0, 0, 0, 0.2)");
        },
        function(){
            $(this).find('img').css("transform", "scale(1)");
            $(this).css("transform", "translateY(0)");
            $(this).css("box-shadow", "0 4px 8px rgba(0, 0, 0, 0.1)");
        }
    );
});
