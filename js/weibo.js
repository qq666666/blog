
     window.onload = function (){
        
            var btn = document.getElementById("btn");
            var ul = document.createElement("ul");
            var txt = document.getElementById("txt");//第一个内容
            var box = document.getElementById("box1");
            box.appendChild(ul);
            btn.onclick = function () {
                if (txt.value == "") { //判断用户是否输入
                    alert("请输入内容");
                    return false;//终止往下执行
                }
                var newli = document.createElement("li");//创建li
                newli.innerHTML = txt.value + "<a>删除</a>"; //设置生成的li是txt的内容

//                 if else 是将新发布的内容提到最上面
//                先判断li有没有，没有li则直接添加li。有li则在第一个li恰门面添加li
                var children = ul.children;
                if (children[0] == "") {    //如果是空则直接添加新li
                    ul.appendChild(newli);
                }
                else {    // 否则在ul的第一个孩子前面插入新li
                    ul.insertBefore(newli, children[0]); //当插入一个时，自动更新第一个孩子
                }
                txt.value = "";// 发布后清空

                //                 删除键的描写
                var a = document.getElementsByTagName("a");
                for (var i = 0; i < a.length; i++) {
                    a[i].onclick = function () {
                        ul.removeChild(this.parentNode);//删除的是a的父亲li。li是ul的儿子
                    }
                }
            }
   
            
   }