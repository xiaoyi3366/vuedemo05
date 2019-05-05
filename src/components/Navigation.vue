<template>
    <div>
        <ul>
            <li v-for="(item,key) in list" :key="key">
                <router-link :to="'/pcontent?id='+key">{{item}}</router-link>
            </li>
        </ul>
        <hr>
        <button >js跳转到problem</button>
        <br><br>
        <el-button type="primary" @click="toProblem()">主要按钮</el-button>
        <br><br>
        {{this.$store.state.count}}-----{{this.$store.getters.computedCount}}
        <el-button @click="incCount()">增加数量</el-button>
    </div>
</template>

<script>
    //1.引入store
    import store from '../vuex/store.js';
    //2.注册
    export default {
        data(){
            return{
                list:['111','aaa','bbbb']
            }
        },
        store,
        methods:{
            toProblem(){
                this.$router.push({path:'problem'});
                // this.$router.push({name:'problem'});
            },
            incCount(){
                //触发 mutations 改变vuex store里面的数据
                this.$store.commit('incCount');
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>