/**
 * Created by Administrator on 2017/4/29.
 */
$(function () {
    $('.content-nav ul>li').click(function () {
        $(this).addClass('current').siblings('li').removeClass('current');
        var index = $(this).index();

        $('.demo').eq(index)
            .addClass('slider')
            .siblings('.demo')
            .removeClass('slider');
    });
    })
  var friends = {"@施清清":["a"],"@施妹妹":["b"],"@小帅哥":["c"],"@小美女":["d"],"@小洋洋":["f"],"@小美美":["g"],"@小屁孩":["h"]};

 $(function(){
 	 var $div = $("<div class='dom'></div>");
            $("#friend").append($div);
             for (var k in friends){
                 var p = $("<p>"+ k +"</p>");
                 $div.append(p);
             }
            $("#friend").hover(function () {
                $div.show();
            }, function () {
                $div.hide();
            });
            $div.hide();
            $div.on("click","p", function (event) {
                var val = $(this).text();
//                console.log(val);
                $("#txt").text($("#txt").text()+val);
                event.preventDefault();
            });
 })
           


