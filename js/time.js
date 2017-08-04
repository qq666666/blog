/**
 * Created by Administrator on 2017/4/29.
 */
        var demo = document.getElementById("demo");
        var endTime = new Date ("2018/6/15");//定义自己的时间
        setInterval(fn,1000); //定时器，1S间隔时间来重复执行该函数
        function fn() {
            var nowTime = new Date ();//现在时间在变，要获取最新时间，所以要放在函数里面
            //getTime（）是距离1970年午夜的累计毫秒数
            //用最终的距离1970年的毫秒数-现在距离1970年的豪秒数，得到现在距离自己定义时间的长度，/1000d得到秒数
            var second = parseInt((endTime.getTime()-nowTime.getTime())/1000);
            // console.log(s);
            //秒数/3600得到小时，总小时/一天24h，得到天数
            var d = parseInt(second / 3600 / 24);
            //console.log(d);
//            总小时%24得到剩下的小时数
            var h = parseInt(second / 3600 % 24);
            // console.log(hour);
//            秒数/60得到分数，分数%60得到当前剩下的分数
            var m = parseInt(second / 60 % 60);
            // console.log(m);
//            秒数%60得到当前剩下的秒数
            var s = parseInt(second % 60);
            console.log(s);
//            如果是一位数，则在前面添加0
//            if(d<10){
//                d = "0" + d;
//            }
            d<10 ? d = "0" + d : d;
            h<10 ? h =  "0"+ h : h;
            m<10 ? m = "0" + m : m;
            s<10 ? s = "0" + s : s;
            demo.innerHTML = "距离毕业时间还剩：" + d + "天" + h + "小时" + m + "分" + s + "秒";

}