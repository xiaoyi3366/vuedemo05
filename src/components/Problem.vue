<template>
    <div>
        <ul>
            <li v-for="(item,key) in list" :key="key">
                <router-link :to="'/content/'+item.aid">{{item.title}}</router-link>
            </li>
            
        </ul>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                list:[]
            }
        },
        methods:{
            requesttData(){
                var api = 'http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1';
                this.$http.get(api).then((response)=>{
                    console.log(response)
                    this.list=response.body.result;
                }).then((error)=>{
                    console.log(error)
                });
            }
        },
        mounted(){
            this.requesttData();
        }
    }
</script>

<style lang="scss" scoped>

</style>