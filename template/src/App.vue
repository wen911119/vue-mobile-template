<template>
  <div id="app">
    {{#router}}
    <transition :name="transitionName">
        <router-view/>
    </transition>
    {{else}}
    <HelloWorld/>
    {{/router}}
  </div>
</template>

<script>
{{#unless router}}
import demo from './modules/Demo/pages/demo1/app.vue'

{{/unless}}
export default {
  name: 'app',{{#router}} 
  data() {
        return {
            transitionName: ''
        }
    },
    watch: {
        '$route'(to, from) {
            if(from.name){
                const toDepth = to.path.split('/').length
                const fromDepth = from.path.split('/').length
                this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
            }
        }
    } {{else}}
  components: {
    demo
  }{{/router}}
}
</script>

<style lang="scss">
@import './style/common.scss';
@font-face {
    font-family: 'iconfont';
    src:url('./assets/iconfont.ttf') format('truetype')
}
html,body{
  margin: 0;
  padding: 0;
}
#app {
  height: 100%;
}
ul,li{
  list-style: none;
  margin: 0;
  padding: 0;
}
  
i{
  font-style: normal;
}
  
*{
  box-sizing: border-box;
}

.app-page {
        position: absolute;
        height: 100%;
        width: 100%;
        z-index: 10;
        left: 0;
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
        background-color: #fff;
    }

    .slide-left-enter-active,
    .slide-right-enter-active {
        transition: left .5s;
        z-index: 12;
    }
    .slide-left-leave-active,
    .slide-right-leave-active{
        z-index: 9;
        transition: left .5s;
    }

    .slide-left-leave {
        left: 0rem;
    }

    .slide-left-enter {
        left: 10rem;
    }

    .slide-right-leave {
        left: 0rem;
    }

    .slide-right-enter {
        left: -10rem;
    }
</style>
