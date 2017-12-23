<template>
    <div class="login-page">
        demo-list
        <router-link to="/demo/vuex">vuex demo</router-link>        
        <router-link to="/demo/iconfont">iconfont demo</router-link> 
        {{#i18n}}       
        <router-link to="/demo/i18n">i18n demo</router-link>
        {{/i18n}}
    </div>
</template>
<script>
    export default {
        data() {
            return {

            }
        }
    }
</script>
<style>
    
</style>