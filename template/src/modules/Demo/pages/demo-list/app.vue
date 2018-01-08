<template>
    <div class="app-page">
        demo-list
        <ul>
            <li>
                <router-link to="/demo/vuex" class="text36">vuex demo</router-link>
            </li>
            <li>
                <router-link to="/demo/iconfont" class="text36">iconfont demo</router-link>
            </li>
            {{#i18n}}
            <li>
                <router-link to="/demo/i18n" class="text36">i18n demo</router-link>
            </li>
            {{/i18n}}
        </ul>
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