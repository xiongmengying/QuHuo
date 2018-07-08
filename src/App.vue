<template>
  <div id="app">
    <keep-alive include="Index,About,Architecture,Business,Case,Clients,Contact,Intro,Resource">
      <router-view  class="body"/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less">
.confirm{
  font-size: 18px;
}
.cancel{
  font-size: 18px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .body {
    width: 100%;
    flex: 1;
    -webkit-overflow-scrolling: touch;
  }
}
body{background: #f3f3f3;}
body, div, span, header, footer, nav, section, aside, article, ul, dl, dt, dd, li, a, p, h1, h2, h3, h4, h5, h6, i, b,em,u textarea, button, input, select, figure, figcaption {
    padding: 0;
    margin: 0;
    list-style: none;
    font-style: normal;
    text-decoration: none;
    box-sizing: border-box;
    font-family: "Microsoft Yahei", sans-serif;
    -webkit-tap-highlight-color: transparent;
    -webkit-font-smoothing: antialiased;
    outline:none;
    border: 0;
    &:focus {
        outline: none;
    }
}
.clearfix:after {
  content: "";
  display: block;
  height: 0;
  clear: both;
}
.clearfix {
  zoom: 1;
}

img:not([src]) { 
    visibility: hidden;
}
body{
  height:100%;
}
</style>
