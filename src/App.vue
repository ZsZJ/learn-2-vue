<template>
  <div id="root">
    <!-- As a heading -->
    <nav class="navbar navbar-dark bg-dark">
      <span class="navbar-brand mb-0 h1">Learn to Vue</span>
      <span class="right text-white">by Joey Lim</span>
    </nav>
    <CodeEditor />
    <footer class="footer bg-dark">
      <div class="container-fluid">
        <div class="d-flex">
          <span class="text-muted">
            Learn to Vue
          </span>
          <span class="ml-auto">
            <a class="text-white" href="https://www.linkedin.com/in/joey-lim-09082986/" target="_blank">Contact Me</a>
          </span>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>

import CodeEditor from './components/CodeEditor.vue'

export default {
  name: 'root',
  components: {
    CodeEditor,
  }
}
</script>

<style>
#root {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 68px;
    line-height: 68px;
    background-color: #f5f5f5;
}

</style>
