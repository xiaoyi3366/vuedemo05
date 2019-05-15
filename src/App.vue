<template>
  <div id="app">
    <button @click="eventFn($event)">监听</button>
    <!-- <h1>首页</h1>
    <p>这是一个首页</p>
    {{msg}}
    <br/>
    <ul>
     
      <li v-for="(item,key) in list1" :key="key" :class="key === 0 ? 'red': ''">{{item}}</li>
      <li v-for="(item,key) in list1" :key="key" :class="{red: key===0,blue: key===1}">{{item}}</li>
    </ul>
    <br/>
    <ul>
      <li v-for="(item,key) in list2" :key="key">{{item.title}}</li>
    </ul>
    <br/>
    <ul>
      <li v-for="(item,key) in list3" :key="key">
        {{item.cate}}
        <ol>
          <li v-for="(value,eq) in item.list" :key="eq">{{value.title}}</li>
        </ol>
      </li>
    </ul>
    <br />
    <ul>
      <li></li>
    </ul> -->
    <input v-model="text" type="text"> <button @click="setDate">添加</button>
    <hr/>
    <br>
    <button @click="deleALL">删除</button>
    <br>
    <h2>未完成</h2>
    <ul>
      <li v-for="(item,index) in list" :key="index" v-if="!item.checked">
          <span @click="changeDo(index)">未完成</span>
          <input type="checkbox" v-model="item.checked">
          <span>{{item.content}}</span>
          <span @click="deleDate(index)">删除</span>
          多选：<input type="checkbox" v-model="item.select">
      </li>
    </ul>
    <h2>已完成</h2>
    <ul>
      <li v-for="(item,index) in list" :key="index" v-if="item.checked">
          <span @click="changeDo(index)">已完成</span>
          <input type="checkbox" v-model="item.checked">
          <span>{{item.content}}</span>
          <span @click="deleDate(index)">删除</span>
          多选：<input type="checkbox" v-model="item.select">
      </li>
    </ul>

  
  </div>
</template>

<script>

export default {
  // name: 'app',
  data () {
    return {
    //   msg: 'Welcome to Your Vue.js App',
    //   list1:['111','222','333'],
    //   list2:[
    //     {"title":'zhang'},
    //     {"title":'li'},
    //     {"title":'wang'},
    //   ],
    //   list3:[
    //     {
    //       "cate":"国内新闻",
    //       list:[
    //         {"title":"国内行文1"},
    //         {"title":"国内行文2"}
    //       ]
    //     },
    //     {
    //       "cate":"国外新闻",
    //       list:[
    //         {"title":"国外行文1"},
    //         {"title":"国外行文2"}
    //       ]
    //     }
    //   ]
      text:'',
      list:[
        {
           "content":"124",
           "checked":false,
           "select":true,
        },
        {
          "content":"111",
           "checked":true,
           "select":false,
        },
        {
           "content":"333",
           "checked":false,
           "select":true,
        },
        {
          "content":"222",
           "checked":true,
           "select":false,
        },
      ],

    }
    
  },
  components:{
 
  },
  methods:{
    setDate(){
 
      this.list.push({
        "content": this.text,
        "checked": false
      });
      this.text = '';
      console.log(wlist)
    },
    eventFn(e){
      console.log(e);
      e.srcElement.style.background="red";
    },
    deleDate(index){
      this.list.splice(index,1);
    },
    changeDo(index){
   
      this.list[index].checked = !this.list[index].checked;
      

    },
    deleALL(){
      for(let i=0;i<this.list.length;i++){
        if(this.list[i]["select"]){
          this.list.splice(i,1)
          i--;
        }
        
        
      }
    }
  },
  computed:{
    
  },
  watch:{
    
  }
}

</script>

<style lang="scss">
.red{
  color:red;
}
.blue{
  color: blue;
}
</style>
