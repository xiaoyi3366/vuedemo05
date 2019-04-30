<template>
    <div>
        <ul>
            <li v-for="(item,key) in list" :key="key">
                <router-link :to="'/pcontent?id='+key">{{item}}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                list:['111','aaa','bbbb']
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>