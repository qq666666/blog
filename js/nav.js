window.onload = function () {
        function $(id) {return document.getElementById(id);}
        function scroll() {
            if(window.pageYOffset != null){
                return {
                    left:window.pageXOffset,
                    top:window.pageYOffset
                }
            }
            else if (document.compatMode == "CSS1compat"){
                return {
                    top : document.documentElement.scrollTop,
                    left:document.documentElement.scrollLeft
                }
            }
            else {
                return {
                    top:document.body.scrollTop,
                    left:document.body.scrollLeft
                }
            }
        }

        var navTop = $("content-nav").offsetTop;
//console.log(navTop);
        window.onscroll = function () {
            if(scroll().top >= navTop){
                $("content-nav").className = "content-nav fixed";
            }
            else {
                $("content-nav").className = "content-nav";
            }
        }
    }
