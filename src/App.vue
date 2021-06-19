<template>
  <div id="app">
    <Navbar></Navbar>
   
    <router-view />
    <Footer></Footer>
    
  </div>
</template>
<script>
import Navbar from  '@/components/Navbar.vue';
import Footer from  '@/components/Footer.vue';
export default {
  components:{
    Navbar,
    Footer,
  }
}
</script>
<style lang="scss">
#app {
  font-family: 'Skita Banner', Georgia, serif;
  margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    scroll-behavior: smooth;
}









// start scroll bar
::-webkit-scrollbar{
    width: 10px;
}
::-webkit-scrollbar-track{
   background-color: #0178C6;
}
::-webkit-scrollbar-thumb{
   background-color: white;
    border-radius: 20px;
    border: 1px solid #0178C6;
}
</style>
