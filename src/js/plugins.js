import "../../node_modules/jquery/dist/jquery.min.js";
import $ from "jquery";
$(document).ready(function () {
    $(".loading").fadeOut();
    $("header nav .menu a").click(function(){
        $("header nav .container ul").slideToggle();
        $("header nav .container ul.social").css('display','flex');
      });
});