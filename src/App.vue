<template>
  <div id="app">
    <!-- As a heading -->
    <nav class="navbar navbar-dark bg-dark">
      <span class="navbar-brand mb-0 h1">Learn to Vue</span>
      <span class="right text-white">by Joey Lim</span>
    </nav>
    <CodeEditor />
  </div>
</template>

<script>

import CodeEditor from './components/CodeEditor.vue'

export default {
  name: 'app',
  components: {
    CodeEditor,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
