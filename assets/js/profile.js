$(document).ready(function(){
        $(".profile").css({ "color":"maroon","background-color":"white","border-bottom":"3px solid maroon"});
        $(".home").click(function(){
            $(".home").css({ "color":"maroon","background-color":"white","border-bottom":"3px solid maroon"});
            $(".answer").css({"color":"black","border-bottom":"none"});
            $(".notification").css({"border-bottom":"none","border-bottom":"none"});
        });
        $(".answer").click(function(){
            $(".answer").css({"color":"maroon","background-color":"white","border-bottom":"3px solid maroon"});
            $(".home").css({"color":"black","border-bottom":"none"});
            $(".notification").css({"color":"black","border-bottom":"none"});
        });
        $(".notification").click(function(){
            $(".notification").css({"color":"maroon","background-color":"white","border-bottom":"3px solid maroon"});
            $(".home").css({"color":"black","border-bottom":"none"});
            $(".answer").css({"color":"black","border-bottom":"none"});
        });
        $('.edit_profile').click(function(){
            $('.name_of_person').prop('disabled',false);
            $('.education').prop('disabled',false);
            $('.city').prop('disabled',false);
            $('.edit_profile').css("display","none");
            $('.save_profile').css("display","block");
        });
        $('.save_profile').click(function(){
            $('.name_of_person').prop('disabled',true);
            $('.education').prop('disabled',true);
            $('.city').prop('disabled',true);
            $('.edit_profile').css("display","block");
            $('.save_profile').css("display","none");
        });
        /*$(".upvote_btn").click(function(){
           $(".upvote_text").css("color","blue");
            $(".upvote_icon").css("color","blue");
            $(".downvote_text").css("color","black");
            $(".downvote_icon").css("color","black");
        });
        $(".downvote_btn").click(function(){
           $(".downvote_text").css("color","blue");
            $(".downvote_icon").css("color","blue");
            $(".upvote_text").css("color","black");
            $(".upvote_icon").css("color","black");
        });
        $(".answer_btn").click(function(){
           $(".text_editor").css({"display":"block","margin-top":"3px"}); 
        });
        $(".text_editor_close").click(function(){
           $(".text_editor").css("display","none"); 
        });
        $(".bold_btn").click(function(){
            $("textarea").css({"font-weight":"bold","width":"100%"});
        })
        $(".italic_btn").click(function(){
            $("textarea").css({"font-style":"italic","width":"100%"});
        })*/
    });
