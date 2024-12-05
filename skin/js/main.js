define(function(require, exports, module) {

  require('lazyload');

  lowBrowser();

  $(document).ready(function(){
    
    /* 图片延迟加载 */
    if($(".lazyImg").length){
      $(".lazyImg").lazyload({effect:"fadeIn",failure_limit:6});
    }

    if($("."+website.currentNavId).length){
      $("."+website.currentNavId).addClass("active");
    }

    /* 手机菜单 */
    if($("#mobileMenuBtn")[0]){
      var mobileMenuBtn = $("#mobileMenuBtn"),
          mobileMenu = $("#mobileMenu");
      mobileMenuBtn.on("click",function(){
        $("body").append("<div id=\"menuLockScreen\" style=\"position:fixed;width:100%;height:100%;z-index:6004;left:0;top:0;background:rgba(0,0,0,.3)\"></div>")
        mobileMenu.css({left:0});
        $("#menuLockScreen").on("click",function(){
          $(this).remove();
          mobileMenu.css({left:-200});
        });
      });
      mobileMenu.on("click",".openChild",function(){
        $(this).next("ul").css({left:0});
      });
      mobileMenu.on("click",".returnPrevLevel",function(){
        $(this).parent().parent().css({left:"100%"});
      });
    }

    /* 回顶部 */
    $("body").append('<div id="toTop"><i class="fa-arrow-up"></i></div>');
    var toTop = $('#toTop');
    toTop.on("click",function () {
      $('body,html').animate({
        scrollTop: 0
      }, 1000);
    });
    $(window).scroll(function () {
      if (jQuery(this).scrollTop() < 100) {
        toTop.css("bottom","-100px");
      } else {
        toTop.css("bottom","60px");
      }
    });

  })

})
