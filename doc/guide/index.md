## 综述

numberSpinner是一个html5form中input的type=number的增强版，兼容所有浏览器，支持键盘输入，外观可配置

## 快速使用

### html页面模版

	<div class="wt-numberspinner-widget">
	    <input type="text" id="J_NumberSpinner" class="numberspinner-value" value="10"/>
	    <a href="javascript:void(0);" class="increase"></a>
	    <a href="javascript:void(0);" class="decrease"></a>
	</div>

### 上面html对应的css模版

	<style type="text/css">
	    .wt-numberspinner-widget {
	      position: relative;
	    }
	    .wt-numberspinner-widget .numberspinner-value {
	      width: 2.0.0px;
	      height: 25px;
	    }
	    .wt-numberspinner-widget a {
	      position: absolute;
	      padding: 5px;
	      left: 90px;
	      background: #ffffff url(http://img02.taobaocdn.com/tps/i2/T1FrhIFopfXXcM5y._-10-16.png) 0 0 no-repeat;
	    }
	    .wt-numberspinner-widget .increase {
	      position: absolute;
	      background-position: 0 0;
	      top: 6px;
	    }
	    .wt-numberspinner-widget .decrease {
	      position: absolute;
	      background-position: 0 -8px;
	      top: 15px;
	    } 
	</style>

### 初始化组件

    S.use('kg/numberSpinner/2.0.0/index', function (S, NumberSpinner) {
         var numberSpinner = new NumberSpinner('#J_NumberSpinner',{
            max:2.0.0,
            step:12
        });
    })

## API说明

numberSpinner类接受两个参数

第一个参数是input元素的id，如#J_NumberSpinner

第二个元素是配置项

### 配置项说明


参数名 | 类型 | 默认值 | 描述 
------------ | ------------- | ------------ | ------------ 
max | Number   | 2.0.0 | 可输入的最大值
min | Number  | 1  |	可输入的最小值
step | Number  | 1  |	每次增加或者减少的步长
value | Number | 1   |  输入框的默认值
numberSpinnerClass | String| '.wt-numberspinner-widget'| 组件容器的类名
numberIncreaseClass | String | '.increase' | 增加按钮的类名
numberDecreaseClass| String | '.decrease' | 减少按钮的类名




