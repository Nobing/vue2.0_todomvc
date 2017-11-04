// var filters = {
//     all:function(todos){
//         return todos;
//     },
//     active:function(todos){
//         return todos.filter(function(todo){
//             return !todo.completed;
//         })
//     },
//     completed:function(todos){
//         return todos.filter(function(todo){
//             return todo.completed;
//         })
//     }
// }

var app = new Vue({
    el:".todoapp",
    data:{
        txt:'',
        editingId:'',
        now:false,
        indexs:0,
        item1:[
            {completed:false},
            {completed:false},
            {completed:false}
        ],
        items:[
            {id:0,text:'吃饭',completed:false},
            {id:1,text:'睡觉',completed:true},
            {id:2,text:'打豆豆',completed:true}
        ],
        selected:[
            {name:"All"},
            {name:"Active"},
            {name:"completed"}
        ],
    },
    methods:{
		a:function(aa){
			this.indexs=aa;
			if(aa==0){
				this.all();
			}
			if(aa==1){
				this.active();
			}
			if(aa==2){
				this.completed();
			}
		},
        all:function(){
            for(i in this.items){
                this.item1[i].completed=false;
            }
        },
        active:function(){
            for(i in this.items){
                this.item1[i].completed=this.items[i].completed;
            }
        },
        completed:function(){
            for(i in this.items){
                this.item1[i].completed=!this.items[i].completed;
            }
        },
        add:function(){
            console.log(this.items)
            if(this.txt!=''&&this.txt!=' '){
                this.items.push({
                    id:this.getId(),
                    text:this.txt,
                    completed:false
                })
                this.item1.push({
                    completed:false
                })
            }

            this.txt='';
        },
        del:function(id){
            for(var i=0;i<this.items.length;i++){
                if(this.items[i].id == id){
                    this.items.splice(i,1);
                }
            }
        },
        getId:function(){
            // var id = Math.random();
            //取出数组的长度减去1来获取数组最后一个对象，再将这个对象的id+1来赋给名为id的变量，再塞给新添加的对象的id属性
            var id = 0;
            if(this.items.length > 0){
                id = this.items[this.items.length-1].id+1;
            }
            // for(var i=0;i<this.items.length;i++){
            //     if(this.items[i].id == id){
            //         id = getId();
            //         break;
            //     }
            // }
            return id;
        },
        clear:function(){
            var arr = [];
            for(var i=0;i<this.items.length;i++){
                if(this.items[i].completed == false){
                    arr.push(this.items[i])
                }
            }
            this.items = arr;
        },
        isShow:function(){
            for(var i=0;i<this.items.length;i++){
                if(this.items[i].completed){
                    return true;
                }
            }
            return false;
        },
        editing:function(id){
            this.editingId = id;
        },
        save:function(){
            this.editingId = '';
        },
        isTrue:function(){
            this.now =! this.now;
            for(var i=0;i<this.items.length;i++){
                this.items[i].completed = this.now;
            }
        }
    }
})
