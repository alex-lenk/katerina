!function(a){a(function(){a("ul.nav-tabs").on("click","li:not(.active)",function(){a(this).addClass("active").siblings().removeClass("active").closest("div.tabs").find("div.tabs__content").removeClass("active").eq(a(this).index()).addClass("active")})})}(jQuery),$(document).ready(function(){function a(){var a=$(".slider"),s=a.attr("data-current"),i=a.children().last().attr("data-number");a.append(a.children().first().clone()),a.find('[data-number="'+s+'"]').css({opacity:"0"}),a.children().last().attr("data-number",+i+1),s++,a.find('[data-number="'+s+'"]').css({opacity:"1"}),a.attr("data-current",s),setTimeout(function(){$(".slider").children().first().remove()},700)}$("#contacts-slider").owlCarousel({navigation:!1,slideSpeed:300,paginationSpeed:400,singleItem:!0}),$(".bg").css("height",$(document).height()+"px"),$(".tab-block").css("height",$(window).height()-100+"px"),$(".table-container").css("height",$(window).height()-150+"px");var s,i,o,e=[];$(".music-button,.music-player-hide").on("click",function(){$(".music-player").toggleClass("music-player-open")}),$(".play-social-nav .fork").on("click",function(){$(".play-social-nav .social").toggleClass("share-open")}),$(".play-video-post").on("click",function(){$(".youtube-player").addClass("show-youtube-player"),$(".play-video-post, .play-social-nav .count-video").hide()}),$(".point").on("click",function(){var a,t,n=6,l=$(this).attr("data-id"),c=$(this).attr("data-index");for($(".calendar-show").addClass("calendar-hide"),$(".moving-panel").css({display:"none",left:"-120%"}),$(".bg").removeClass("blur");n--&&c<=n;)$('[data-index="'+n+'"]').addClass("blur");$(l).css("display","block"),setTimeout(function(){$(l).css("left","-60px"),a=$(l).find("h2").css("width"),$(".hr").css("width","calc(100% - "+a+")"),t=$(l).find(".content").height();var n=$(l).find(".tab.active").attr("data-id");if(o=n,$(n).css("display","block"),i=$(n).find(".drop-nav ul").children().length)for(s=i;s;)$(o).find('[data-n="'+s+'"]').css({height:"auto"}),$(o).find('[data-n="'+s+'"]').css({height:$(o).find('[data-n="'+s+'"]').height()+"px"}),e[s]=$(o).find('[data-n="'+s+'"]').css("height"),s--},50),$(".drop-nav li").removeClass("active"),$(".drop-nav li:first-child").addClass("active"),$(".drop-tab").removeClass("active"),$(".drop-tab:first-child").addClass("active"),$(".bg").addClass("blur")}),$(".close").on("click",function(){$(".calendar-show").toggleClass("calendar-hide");var a=6;for($(".point").attr("data-cur","0"),$(".moving-panel").css("left","-120%"),setTimeout(function(){$(".moving-panel").css("display","none")},500),$(".bg").removeClass("blur"),$(".point").removeClass("blur"),$(".tab").removeClass("active"),$(".tab:first-of-type").addClass("active"),$(".tab-block").css("display","none"),$(".drop-nav li").removeClass("active"),$(".drop-nav li:first-of-type").addClass("active"),s=e.length;s--;)$('[data-n="'+s+'"]').css({height:e[s]});for(;a--;)$("#p"+a+"c1").css("display","block")}),$(window).on("resize",function(){$(".bg").css("height",$(window).height()+"px"),$(".tab-block").css("height",$(window).height()-100+"px"),$(".table-container").css("height",$(window).height()-100+"px")}),$(".tab").on("click",function(){if($(".tab").removeClass("active"),$(this).addClass("active"),o=$(this).attr("data-id"),$(".tab-block").css("display","none"),$(o).css("display","block"),i=$(o).find(".drop-nav ul").children().length)for(s=i;s;)$(o).find('[data-n="'+s+'"]').css({height:"auto"}),$(o).find('[data-n="'+s+'"]').css({height:$(o).find('[data-n="'+s+'"]').height()+"px"}),e[s]=$(o).find('[data-n="'+s+'"]').css("height"),s--;$(".drop-nav li").removeClass("active"),$(".drop-nav li:first-child").addClass("active"),$(".drop-tab").removeClass("active"),$(".drop-tab:first-child").addClass("active")}),$(".drop-nav li").on("click",function(){var a=$(this).attr("data-id"),t=1,n=$(a).attr("data-n");for(s=i;s;)$(o).find('[data-n="'+s+'"]').css({height:e[s]}),s--;for(;n>t;)$(o).find('[data-n="'+t+'"]').css("height","35px"),t++;$(".drop-nav li").removeClass("active"),$(this).addClass("active"),$(".drop-tab").removeClass("active"),$(a).addClass("active")}),setInterval(function(){a()},1e4);var t=$(".music-player-wrap,.table-container,.item-grid,.music-player");t.mCustomScrollbar({theme:"minimal"}),$(".scroll-container,.wrapper").mCustomScrollbar({theme:"minimal"}),$(".item-grid-info").on("click",function(){$(".overlay").css("display","block"),setTimeout(function(){$(".overlay").css("background-color","rgba(0,0,0,0.6)")},50),$(".item-card").css("display","block"),$(".moving-panel").addClass("blur"),$(".music").addClass("blur"),$(".point").addClass("blur"),$(".main-footer").addClass("blur"),$('[name="card-photo"]').prop("checked","false"),$('[name="card-photo"]:first-of-type').prop("checked","true")}),$(".overlay").on("click",function(){$(".overlay").css("background-color","rgba(0,0,0,0)"),setTimeout(function(){$(".overlay").css("display","none")},300),$(".item-card").css("display","none"),$(".moving-panel").removeClass("blur"),$(".music").removeClass("blur"),$(".point").removeClass("blur"),$(".main-footer").removeClass("blur")}),$(".card-close").on("click",function(){$(".overlay").trigger("click")});var n=$("#owl-demo");n.owlCarousel({pagination:!1,items:7,itemsDesktop:[1300,5],itemsDesktopSmall:[1024,4],itemsTablet:[850,3],itemsMobile:[700,2]}),$(".arrow-next").click(function(){n.trigger("owl.next")}),$(".arrow-prev").click(function(){n.trigger("owl.prev")}),$(".photo-slide").on("click",function(){var a=$(this).attr("id");$(".main-image").removeClass("now"),$(".photo-slide").removeClass("now"),$(this).addClass("now"),$('[data-id="'+a+'"]').addClass("now")}),$(".modal-window").on("show",function(){$(".moving-panel").addClass("blur"),$(".music").addClass("blur"),$(".point").addClass("blur"),$(".main-footer").addClass("blur"),$(".overlay").css("display","block"),setTimeout(function(){$(".overlay").css("background-color","rgba(0,0,0,0.6)")},50)}),$(".overlay").on("click",function(){$(".overlay").css("background-color","rgba(0,0,0,0)"),setTimeout(function(){$(".overlay").css("display","none")},300),$(".modal-window").css("display","none"),$(".moving-panel").removeClass("blur"),$(".music").removeClass("blur"),$(".point").removeClass("blur"),$(".main-footer").removeClass("blur"),$(".pay-cont").css("display","block"),$(".order-cont").css("display","none")}),$(".card-close").on("click",function(){$(".overlay").trigger("click")}),$(".shop-grid .item").on("click",function(){$(".item-card").css("display","block"),$('[name="card-photo"]').prop("checked","false"),$('[name="card-photo"]:first-of-type').prop("checked","true"),$(".modal-window").trigger("show")}),$(".basket").on("click",function(){$(".basket-card").css("display","block"),$(".modal-window").trigger("show")}),$(".checkout").on("click",function(){$(".pay-cont").css("display","none"),$(".order-cont").css("display","block")})});