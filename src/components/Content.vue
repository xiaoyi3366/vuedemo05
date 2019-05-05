<template>
    <div v-html="content">
        <!-- {{content}} -->
    </div>
</template>

<script>
    export default {
        data(){
            return{
                content:''
            }
        },
        methods:{
            requestData(aid){
                var api='http://www.phonegap100.com/appapi.php?a=getPortalArticle&aid='+aid;
                this.$http.get(api).then((response)=>{
                    console.log(response)
                    this.content=response.body.result["0"].content;
                }).then( err =>{
                    console.log(err)
                })
            }
        },
        mounted(){
            var aid = this.$route.params.aid;
            this.requestData(aid);
            console.log(this.$route.params);
        }
    }
</script>

<style lang="scss" scoped>

</style>