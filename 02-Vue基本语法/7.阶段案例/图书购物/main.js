const app=new Vue({
    el:'#app',
    data:{
        list:[
            {
                id:1,
                name:"《算法导论》",
                date:"2006-5",
                price:56.00,
                count:1
            },
            {
                id:2,
                name:"《spring源码解析》",
                date:"2006-5",
                price:66.00,
                count:1
            },
            {
                id:3,
                name:"《计算机原理》",
                date:"2006-5",
                price:23.00,
                count:1
            },
            {
                id:4,
                name:"《MySQL数据库导论》",
                date:"2006-5",
                price:65.00,
                count:1
            },
            {
                id:5,
                name:"《大数据导论》",
                date:"2006-5",
                price:33.00,
                count:1
            },
        ]
    },
    computed:{
        totalPrice(){
            let totalPrice=0;

            //1.普通for循环
           /* for(let i=0;i<this.list.length;i++){
                totalPrice += this.list[i].price * this.list[i].count;
            }*/

            //2.for(let i in obj)
            /*for(let i in this.list){
                //i为索引值
                totalPrice += this.list[i].price * this.list[i].count;
            }*/

            //3.for(let i of obj)
            /*for(let item of this.list){
                totalPrice += item.price*item.count;
            }*/
            //4.高阶函数map|filter|reduce
            return this.list.reduce(function (preValue,list) {
                return preValue + list.price*list.count;
            },0);
        }
    },
    methods:{
        getFinaPrice(price){
            return '￥'+price.toFixed(2);
        },
        less(index){
            if(this.list[index].count>0){
                this.list[index].count--;
            }
        },
        add(index){
            this.list[index].count++;
        },
        remove(index){
            app.list.splice(index,1)
        }
    },
    filters:{
        showPrices(price){
            return '￥'+price.toFixed(2);
        }
    }
});