<template>
    <div>
        <div class="user">
            <div class="left">
                <ul>
                    <li>
                        <router-link to="/user/useradd">添加用户</router-link> 
                    </li>
                    <li>
                        <router-link to="/user/userlist">用户管理</router-link> 
                    </li>
                </ul>
            </div>
            <div class="right">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.user{
    display: flex;
    display-direction: row;
    .left{
        width: 200px;
        min-height: 400px;
        border-right: 1px solid #eee;
    }
    .right{
        flex: 1;
    }
}
</style>