Vue.component("greeting",{
    template:'<p>{{name}},大家好' +
        '<button @click="changeName">变吴</button></p>',
    data:function () {
        return{
            name:'oooo'
        }
    },
    methods:{
        changeName:function () {
            this.name = "吴亦凡";
        }
    }
})

//实例化vue对象
var one = new Vue({
    el:'#vue-app',
    data:{
        name:"Mr.Wu",
        job:"数据挖掘",
        website:"http://www.my.com",
        websiteTag:"<a href='www.baidu.com'>baidu</a>",
        age:30,
        x:0,
        y:0,
        a:0,
        b:0,
        changeColor:false,
        changeLength:false,
        error:false,
        success:false,
        characters:["1","2","3"],
        users:[
            {name:"a",age:1},{name:"b",age:2},{name:"c",age:3},
            ],
        health:100,
        ended:false,
        title:"app one的内容"
    },
    methods:{
        greet:function (time) {
            return "Good " + time + " "+this.name+"!";
        },
        add:function (inc) {
          this.age+=inc;
        },
        subtract:function (dec) {
            this.age-=dec;
        },
        updateXY:function (event) {
            console.log(event);
            this.x = event.offsetX;
            this.y = event.offsetY;
        },
        stopMoving:function (event) {
            event.stopPropagation();
        },
        alert:function () {
            alert("hello")
        },

        logName:function () {
            // console.log("输入名字")
            // console.log( this.$refs.name.value);
            this.name = this.$refs.name.value
        },
        logAge:function () {
            // console.log("输入年龄")
            this.age = this.$refs.age.value
            // console.log(this.name = this.$refs.age.value);

        },
        
        // addToA:function () {
        //     return this.a + this.age
        // },
        // addToB:function () {
        //     return this.b + this.age
        // },

        punch:function () {
            this.health -= 10;
            if(this.health <= 0){
                this.ended = true
            }
        },
        restart:function () {
            this.health = 100;
            this.ended = false;
        }



    },
    computed:{
        addToA:function () {
            console.log("add to a")
            return this.a + this.age
        },
        addToB:function () {
            console.log("add to b")
            return this.b + this.age
        },
        compClasses:function () {
            return{
                changeColor:this.changeColor,
                changeLength: this.changeLength
            }
        }
    }
});

var two = new Vue({
    el:"#vue-app-two",
    data:{
        title:"app two的内容"
    },
    methods:{
        changeTitle1:function () {
            one.title="改名了"
        }
    },
    computed:{}
})

/**
 *el:element:需要获取的元素，一定是html中的根容器元素
 * data:用于数据的存储，key和value自定义,数据只能在容器的范围以内
 * method方法属性：用于存储各种方法
 * v-binding/v-html:给属性绑定至
 */