 <?php 
 // 获取文件，是数组格式
     $data = file_get_contents('info/data.json');
// 将数组转换成php中的数组
     $arr = json_decode($data);
// 随机获取10个数
     $keyAll = array_rand($arr,9);

  // 返回一个随机的数组
     // Array ( [0] => 0 [1] => 2 [2] => 3 [3] => 7 [4] => 9 [5] => 10 [6] => 15 [7] => 16 [8] => 17 [9] => 19 )
      // print_r($keyAll);

//获取长度
    // $length = count($keyAll);
    // echo($length);
 
 // 准备一个新的数组，把随机取到的10个数放在这数组里面
       $newArr = array();
// 使用随机的key取随机的值
     for($i = 0 ;  $i < count($keyAll) ;$i++){
     	// 分别获取随机10个数的每个key
     	$key = $keyAll[$i];
// 使用总数组去获取每个key值
     	$obj = $arr[$key];
     	// 将获取到每个key值存放到新数组中输出
        $newArr[$i] = $obj; //数组随着我们index值的改变而改变
        // print_r($newArr);

     }
// 将10个数组转换成json格式，返回给浏览器
        echo json_encode($newArr);
 ?>