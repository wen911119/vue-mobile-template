<template>
  <div id="app">
    <img src="./assets/logo.png">
    {{#router}}
    <router-view/>
    {{else}}
    <HelloWorld/>
    {{/router}}
  </div>
</template>

<script>
{{#unless router}}
import HelloWorld from './components/HelloWorld'

{{/unless}}
export default {
  name: 'app'{{#router}}{{else}},
  components: {
    HelloWorld
  }{{/router}}
}
</script>

<style lang="scss">
#app {
  height: 100%;
}
@font-face {
    font-family: 'iconfont';
    src:url('./assets/iconfont.ttf') format('truetype')
}
</style>
