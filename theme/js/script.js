$(window).on("load",function(){"use strict";$(".preloader").fadeOut(0)}),function(e){"use strict";var t;e(".tab-content").find(".tab-pane").each(function(a,t){var s=e(this).closest(".code-tabs").find(".nav-tabs"),o=e(this).attr("title");s.append('<li class="nav-item"><a class="nav-link" href="#">'+o+"</a></li>")}),e(".code-tabs ul.nav-tabs").each(function(){e(this).find("li:first").addClass("active")}),e(".code-tabs .tab-content").each(function(){e(this).find("div:first").addClass("active")}),e(".nav-tabs a").click(function(a){a.preventDefault();var t=e(this).parent(),s=t.index(),a=e(this).closest(".code-tabs"),s=a.find(".tab-pane").eq(s);a.find(".active").removeClass("active"),t.addClass("active"),s.addClass("active")}),e(".accordion-collapse").on("show.bs.collapse",function(){e(this).siblings(".accordion-header").addClass("active")}),e(".accordion-collapse").on("hide.bs.collapse",function(){e(this).siblings(".accordion-header").removeClass("active")}),e(".post-slider").slick({slidesToShow:1,slidesToScroll:1,autoplay:!0,autoplaySpeed:4500,dots:!1,arrows:!0,prevArrow:'<button type="button" class="prevArrow"><i class="fas fa-angle-left"></i></button>',nextArrow:'<button type="button" class="nextArrow"><i class="fas fa-angle-right"></i></button>'}),e(".video-play-btn").click(function(){t=e(this).data("src")}),e("#videoModal").on("shown.bs.modal",function(a){e("#showVideo").attr("src",t+"?autoplay=1&amp;modestbranding=1&amp;showinfo=0")}),e("#videoModal").on("hide.bs.modal",function(a){e("#showVideo").attr("src",t)}),new ScrollMenu("#TableOfContents a",{duration:400,activeOffset:40,scrollOffset:10})}(jQuery);