$.fn.extend({
	waterfall:function() {
		// console.log(111);
		
			// 步骤一
			// 为了计算获取必须的知道的值
			// 容器的宽度 .items的宽度
			// 子元素的宽度  item的宽度 {child().width()}
			// 每一行放的元素的个数
			// 计算间距

			// 定义$_变量 方便观察
			var $_this = this;
		 // 父盒子的宽度
			var totalWidth = $_this.width();

			// 子元素的宽度  
			 var width = $_this.children('.item').width();

// 每一行的个数 向下取整
			 var colNum = Math.floor(totalWidth / width);
			 // console.log(colNum);

// 间距 (总宽度-子宽度*个数)/（个数-1）
			 var margin = (totalWidth - width*colNum) /(colNum - 1);



			// 步骤二 
			// 2.1准备一个数组，数组元素的个数与每行个数一样
			// 里面默认值随便取（margin或0）
			// 2.2循环我们所有的item子元素
					// 获取子元素的高度
					// 通过我们在步骤2.1中定义的数组获取最小的值
					// 根据获取最小的索引值获取对应的top和left值
					// 修改步骤2.1中定义的数组对应的索引值就可以了


		 

			// 准备一个高度数组
			var heightArr = [];
			// 循环为高度数组赋值
			for(var i = 0 ; i <colNum;i++) {
				 heightArr[i] = 0;
			}

			// js中循环数组的方法
			// index是索引值   ele是dom对象 ele就是item
			$_this.children('.item').each(function(index,ele){
				console.log(index,ele);

				// 获取当前循环子元素的高度 
				var height = $(ele).height();

				// 计算该元素放在那个位置
			// 先假设索引为0是最小的值
					var minIndex = 0;
					 var minHeight = heightArr[0];

					 // 循环数组的元素
				 for(var i = 0 ; i < heightArr.length;i++) {
					 // 跟最小值比较
					 if(heightArr[i]<minHeight) {
						// 替换假设的最小值
						minHeight = heightArr[i];
						minIndex = i;
					 }
				 }

				 // 获取当前最小高度和最小索引值后，设置当前的子元素
					/*
				 计算每一个元素的top和left值
				 top ：top = arr[index]
				 left:width*minIndex+minIndex*margin

			*/
				 $(ele).css({
					top:minHeight,
					left:width*minIndex+margin*minIndex
					});

					// 修改步骤2.1中定义的数组对应的索引值就可以了
					// 加上自己的高度
					minHeight+=height;
				    minHeight +=margin;

					// 赋值给高度数组
					heightArr[minIndex] = minHeight;
			})

						// 步骤三
						// 3.1修改父盒子的高度
						// 3.2获取数组的最大高度
						// 3.3将最大高度赋值给父盒子


                //设置按钮的位置
					var maxHeight = heightArr[0];
						// 循环找打最大值的数组
						for(var i = 0 ; i < heightArr.length;i++) {
							// 比较谁比较大
							if(heightArr[i] > maxHeight) {
								// 替换最大值
								maxHeight = heightArr[i];
							}
						}
						// 将最大高度赋值给父盒子

						$_this.height(maxHeight);

	}

})