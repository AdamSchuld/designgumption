!function(){function a(){var a=!1;return function(b){(/(android|ipad|playbook|silk|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(b)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(b.substr(0,4)))&&(a=!0)}(navigator.userAgent||navigator.vendor||window.opera),a}function b(){var b=document.getElementById("bt-menu"),c=b.querySelector("a.bt-menu-trigger"),d=a()?"touchstart":"click",e=function(){classie.remove(b,"bt-menu-open"),classie.add(b,"bt-menu-close")},f=function(){e(),g.removeEventListener(d,f)},g=document.createElement("div");g.className="bt-overlay",b.appendChild(g),c.addEventListener(d,function(a){a.stopPropagation(),a.preventDefault(),classie.has(b,"bt-menu-open")?e():(classie.remove(b,"bt-menu-close"),classie.add(b,"bt-menu-open"),g.addEventListener(d,f))})}b()}(),$(document).ready(function(){$(".menu-link").bigSlide(),$(".logo-container").imagefill(),$(".rotate").textrotator();var a=$(".owl-carousel");a.owlCarousel({slideSpeed:600,itemsCustom:[[0,1],[595,2],[1295,3]],pagination:!1}),$(".right-btn").click(function(){a.trigger("owl.next")}),$(".left-btn").click(function(){a.trigger("owl.prev")});var b=function(){$('<div id="imagelightbox-loading"><div></div></div>').appendTo("body")},c=function(){$("#imagelightbox-loading").remove()},d=function(){$('<div id="imagelightbox-overlay"></div>').appendTo("body")},e=function(){$("#imagelightbox-overlay").remove()},f=function(a){$('<a href="#" id="imagelightbox-close">Close</a>').appendTo("body").on("click",function(){return $(this).remove(),a.quitImageLightbox(),!1})},g=function(){$("#imagelightbox-close").remove()},h=function(){$("#imagelightbox-caption").remove()},i=function(a,b){var c=$(b);if(c.length){for(var d=$('<div id="imagelightbox-nav"></div>'),e=0;e<c.length;e++)d.append('<a href="#"></a>');d.appendTo("body"),d.on("click touchend",function(){return!1});var f=d.find("a");f.on("click touchend",function(){var b=$(this);return c.eq(b.index()).attr("href")!=$("#imagelightbox").attr("src")&&a.switchImageLightbox(b.index()),f.removeClass("active"),f.eq(b.index()).addClass("active"),!1}).on("touchend",function(){return!1})}},j=function(a){var b=$("#imagelightbox-nav a");b.removeClass("active"),b.eq($(a).filter('[href="'+$("#imagelightbox").attr("src")+'"]').index(a)).addClass("active")},k=function(){$("#imagelightbox-nav").remove()},l='a[data-imagelightbox="sporrior"]',m=$(l).imageLightbox({onStart:function(){i(m,l),d(),f(m)},onEnd:function(){e(),g(),c(),k()},onLoadStart:function(){b()},onLoadEnd:function(){j(l),h(),c()}}),n='a[data-imagelightbox="adidas"]',o=$(n).imageLightbox({onStart:function(){i(o,n),d(),f(o)},onEnd:function(){e(),g(),c(),k()},onLoadStart:function(){b()},onLoadEnd:function(){j(n),h(),c()}}),p='a[data-imagelightbox="tru"]',q=$(p).imageLightbox({onStart:function(){i(q,p),d(),f(q)},onEnd:function(){e(),g(),c(),k()},onLoadStart:function(){b()},onLoadEnd:function(){j(p),h(),c()}}),r='a[data-imagelightbox="integra"]',s=$(r).imageLightbox({onStart:function(){i(s,r),d(),f(s)},onEnd:function(){e(),g(),c(),k()},onLoadStart:function(){b()},onLoadEnd:function(){j(r),h(),c()}}),t='a[data-imagelightbox="movie"]',u=$(t).imageLightbox({onStart:function(){i(u,t),d(),f(u)},onEnd:function(){e(),g(),c(),k()},onLoadStart:function(){b()},onLoadEnd:function(){j(t),h(),c()}})});