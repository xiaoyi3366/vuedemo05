<template>
    <div>
        <ul>
            <li v-for="(item,key) in list" :key="key">
                <router-link :to="'/content/'+key">{{item}}</router-link>
            </li>
            
        </ul>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                list:['111','222','333']
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>