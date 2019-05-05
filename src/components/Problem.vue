<template>
    <div>
        <ul>
            <li v-for="(item,key) in list" :key="key">
                <router-link :to="'/content/'+item.aid">{{item.title}}</router-link>
            </li>
            
        </ul>
        <br>
        {{this.$store.state.count}}
    </div>
</template>

<script>
    import store from '../vuex/store.js';
    export default {
        data(){
            return{
                list:[]
            }
        },
        store,
        methods:{
            requesttData(){
                var api = 'http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1';
                this.$http.get(api).then((response)=>{
                    console.log(response)
                    this.list=response.body.result;
                    this.$store.commit('addList',response.body.result)
                }).then((error)=>{
                    console.log(error)
                });
            }
        },
        mounted(){
            var listData = this.$store.state.list;
            console.log(listData)
            if(listData){
                this.list = listData;
            }else{
                this.requesttData();
            }
            
        }
    }
</script>

<style lang="scss" scoped>

</style>