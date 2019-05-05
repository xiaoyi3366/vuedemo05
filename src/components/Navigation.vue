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
    </div>
</template>

<script>
    export default {
        data(){
            return{
                list:['111','aaa','bbbb']
            }
        },
        methods:{
            toProblem(){
                this.$router.push({path:'problem'});
                // this.$router.push({name:'problem'});
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>