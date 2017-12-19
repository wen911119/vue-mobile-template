<template>
    <div class="login-page">
        demo1
        <i class="iconfont">&#xe609;</i>
        <span>{{count}}</span>
        <input type="number" v-model="num"/>
        <button @click="add">加</button>
    </div>
</template>
<script>
    import { mapState, mapActions } from 'vuex'
    export default {
        data() {
            return {
                num:0
            }
        },
        computed:{
            ...mapState({
                count:state=>state.demo.count
            })
        },
        methods:{
            add(){
                this.compute(this.num)
            },
            ...mapActions({
                compute:"demo.compute"
            })
        }
    }
</script>
<style>
</style>