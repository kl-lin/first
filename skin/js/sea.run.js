seajs.config({
  paths: {
    'path': website.root+"/js"
  },
  alias: {
    "jquery": "/skin/js/jquery-1.11.0.min.js",
    "lazyload": "/skin/js/jquery.lazyload.min.js",
    "jqcookie": "/skin/js/jquery.cookie.min.js",
    "jqform": "/skin/js/jquery.form.min.js",
    "jqjson": "/skin/js/jquery.json.min.js",
    "functions": "/skin/js/functions.js",
    "validator": "/skin/js/jquery.validator.min.js",
    "owlcarousel": "/skin/js/owl.carousel.min.js",
    "owlcarouselcss": "/skin/css/owl.carousel.css",
    "imagesloaded": "/skin/js/jquery.imagesloaded.min.js",
    "fastclick": "/skin/js/fastclick.min.js",
    "datepicker": "/skin/js/jquery-ui.datepicker.min.js",
    "echarts": "/skin/echarts/echarts-all.js",
    "bdmapapi": "http://api.map.baidu.com/getscript?v=1.1&ak=&services=true&t=20130716024058",
    "bdmapcss": "http://api.map.baidu.com/res/11/bmap.css",
    "bdmap": "/skin/js/baidumap.js",
    "signin": "/skin/js/signin.js",
    "singletextscroll": "/skin/js/singleTextScroll.min.js",
    "msgdialog": "/skin/js/lm.msgdialog.min.js",
    "mmenucss": "/skin/css/jquery.mmenu.css",
    "mmenu": "/skin/js/jquery.mmenu.min.js",
    "laypage": "/skin/js/laypage.js",
    "lmselect": "/skin/js/selectBeautify.min.js",
    "scrollreveal": "/skin/js/scrollReveal.min.js",
    "verticalscroll": "/skin/js/lmVerticalScroll.min.js",
    "verticalmenu": "/skin/js/lmVerticalMenu.min.js",
    "swipercss": "/skin/css/swiper.min.css",
    "swiperjs": "/skin/js/swiper.min.js"
  }
});
seajs.use("path/main");