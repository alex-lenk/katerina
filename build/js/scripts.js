!function(a){a(function(){a("ul.tabs__caption").on("click","li:not(.active)",function(){a(this).addClass("active").siblings().removeClass("active").closest("div.tabs").find("div.tabs__content").removeClass("active").eq(a(this).index()).addClass("active")})})}(jQuery),$(document).ready(function(){function a(){var a=$(".slider"),t=a.attr("data-current"),i=a.children().last().attr("data-number");a.append(a.children().first().clone()),a.find('[data-number="'+t+'"]').css({opacity:"0"}),a.children().last().attr("data-number",+i+1),t++,a.find('[data-number="'+t+'"]').css({opacity:"1"}),a.attr("data-current",t),setTimeout(function(){$(".slider").children().first().remove()},700)}$("#contacts-slider").owlCarousel({navigation:!1,slideSpeed:300,paginationSpeed:400,singleItem:!0}),$(".bg").css("height",$(document).height()+"px"),$(".tab-block").css("height",$(window).height()-100+"px"),$(".table-container").css("height",$(window).height()-150+"px");var t,i,s,e=[];$(".music-button,.music-player-hide").on("click",function(){$(".music-player").toggleClass("music-player-open")}),$(".point").on("click",function(){var a,n,d=6,c=$(this).attr("data-id"),l=$(this).attr("data-index");for($(".calendar-show").toggleClass("calendar-hide"),$(".moving-panel").css({display:"none",left:"-120%"}),$(".bg").removeClass("blur");d--&&l<=d;)$('[data-index="'+d+'"]').addClass("blur");$(c).css("display","block"),setTimeout(function(){$(c).css("left","-60px"),a=$(c).find("h2").css("width"),$(".hr").css("width","calc(100% - "+a+")"),n=$(c).find(".content").height();var d=$(c).find(".tab.active").attr("data-id");if(s=d,$(d).css("display","block"),i=$(d).find(".drop-nav ul").children().length)for(t=i;t;)$(s).find('[data-n="'+t+'"]').css({height:"auto"}),$(s).find('[data-n="'+t+'"]').css({height:$(s).find('[data-n="'+t+'"]').height()+"px"}),e[t]=$(s).find('[data-n="'+t+'"]').css("height"),t--},50),$(".drop-nav li").removeClass("active"),$(".drop-nav li:first-child").addClass("active"),$(".drop-tab").removeClass("active"),$(".drop-tab:first-child").addClass("active"),$(".bg").addClass("blur")}),$(".close").on("click",function(){$(".calendar-show").toggleClass("calendar-hide");var a=6;for($(".point").attr("data-cur","0"),$(".moving-panel").css("left","-120%"),setTimeout(function(){$(".moving-panel").css("display","none")},500),$(".bg").removeClass("blur"),$(".point").removeClass("blur"),$(".tab").removeClass("active"),$(".tab:first-of-type").addClass("active"),$(".tab-block").css("display","none"),$(".drop-nav li").removeClass("active"),$(".drop-nav li:first-of-type").addClass("active"),t=e.length;t--;)$('[data-n="'+t+'"]').css({height:e[t]});for(;a--;)$("#p"+a+"c1").css("display","block")}),$(window).on("resize",function(){$(".bg").css("height",$(window).height()+"px"),$(".tab-block").css("height",$(window).height()-100+"px"),$(".table-container").css("height",$(window).height()-100+"px")}),$(".tab").on("click",function(){if($(".tab").removeClass("active"),$(this).addClass("active"),s=$(this).attr("data-id"),$(".tab-block").css("display","none"),$(s).css("display","block"),i=$(s).find(".drop-nav ul").children().length)for(t=i;t;)$(s).find('[data-n="'+t+'"]').css({height:"auto"}),$(s).find('[data-n="'+t+'"]').css({height:$(s).find('[data-n="'+t+'"]').height()+"px"}),e[t]=$(s).find('[data-n="'+t+'"]').css("height"),t--;$(".drop-nav li").removeClass("active"),$(".drop-nav li:first-child").addClass("active"),$(".drop-tab").removeClass("active"),$(".drop-tab:first-child").addClass("active")}),$(".drop-nav li").on("click",function(){var a=$(this).attr("data-id"),n=1,d=$(a).attr("data-n");for(t=i;t;)$(s).find('[data-n="'+t+'"]').css({height:e[t]}),t--;for(;d>n;)$(s).find('[data-n="'+n+'"]').css("height","35px"),n++;$(".drop-nav li").removeClass("active"),$(this).addClass("active"),$(".drop-tab").removeClass("active"),$(a).addClass("active")}),setInterval(function(){a()},1e4);var n=$(".music-player-wrap,.table-container,.item-grid,.music-player");n.mCustomScrollbar({theme:"minimal"})});