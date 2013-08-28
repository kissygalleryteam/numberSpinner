/*
combined files : 

gallery/numberSpinner/1.0/index

*/
/**
 * @fileoverview 
 * @author 知了<zhiliao.zsl@taobao.com>
 * @module numberSpinner
 **/
KISSY.add('gallery/numberSpinner/1.0/index',function (S, Node,Base) {
    "use strict";

    /**
     * 设定输入框的数字值
     * @class NumberSpinner
     * @constructor
     * @extends S.Base
     */
    function NumberSpinner(id, cfg) {
        if (this instanceof NumberSpinner) {
            this.ele = Node.one(id);
            NumberSpinner.superclass.constructor.call(this, cfg);
            this.init();
        } else {
            return new NumberSpinner(id, cfg);
        }
    }


    S.extend(NumberSpinner, Base, {

        init: function() {
            this._initValue();
            this._bind();
        },
        /**
         * 初始化值
         */         
        _initValue: function(){
            var value = this.ele.val();
            if(!value) {
                this.ele.val(this.get('value'));
            }
        },
        /**
         * 绑定事件
         */     
        _bind: function(){

            var numberSpinnerClass = this.get('numberSpinnerClass'),
            numberIncreaseClass = this.get('numberIncreaseClass'),
            numberDecreaseClass = this.get('numberDecreaseClass'),
            increaseEle = Node.all(numberIncreaseClass, numberSpinnerClass),
            decreaseEle = Node.all(numberDecreaseClass,numberSpinnerClass);

            increaseEle.on('click', function(){
                this._increase();
            },this);    
            decreaseEle.on('click', function(){
                this._decrease();
            },this); 

            this._bindKeyBoard();   
        },
        /**
         * 绑定键盘事件
         */
        _bindKeyBoard: function(){
            var bodyNode = Node.one(document.body);
            bodyNode.on('keydown',function(ev){
                if(ev.keyCode === 40){
                    this._increase();
                    ev.preventDefault();
                }
                if(ev.keyCode === 38){
                    this._decrease();
                    ev.preventDefault();
                }
            },this);
        },
        /**
         * 增加值
         */
        _increase: function(){
            var nowValue = parseInt(this.ele.val(), 10)+this.get('step'),
            max = this.get('max');
            if(nowValue>max){
                nowValue = max;
            }
            this.ele.val(nowValue);
        },
        /**
         * 减少值
         */
        _decrease: function(){
            var nowValue = parseInt(this.ele.val(), 10)-this.get('step'),
            min = this.get('min');
            if(nowValue<min){
                nowValue = min;
            }
            this.ele.val(nowValue);
        }
    },{
        ATTRS:{
            /**
             * 默认值
             * Defaults to: 1
             * @cfg {Number} value
             */
            value: {
                value: 1            
            },
            /**
            * 增加步长
            * Defaults to: 1
            * @cfg {Number} step
            */
            step: {
                value: 1
            },
            /**
            * 最小值
            * Defaults to: 1
            * @cfg {Number} min
            */
            min: {
                value: 1
            },
            /**
             * 最大值
             * Defaults to: 100
             * @cfg {Number} max
             */
            max: {
                value: 100
            },
            /**
             * 组件类名
             * Defaults to: .wt-numberspinner-widget
             * @cfg {Number} numberSpinnerClass
             */
            numberSpinnerClass: {
                value: '.wt-numberspinner-widget'
            },
            /**
             * 增加按钮的类名
             * Defaults to: .increase
             * @cfg {Number} numberIncreaseClass
             */
            numberIncreaseClass: {
                value: '.increase'
            },
            /**
             * 减少值按钮的类名
             * Defaults to: .decrease
             * @cfg {Number} numberDecreaseClass
             */
            numberDecreaseClass: {
                value: '.decrease'
            }
        }
    }
);

    return NumberSpinner;

}, {requires:['node', 'base']});




