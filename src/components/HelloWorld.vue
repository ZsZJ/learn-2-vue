<template>
  <div>
    <!-- or to manually control the datasynchronization（或者手动控制数据流，需要像这样手动监听changed事件） -->
    <codemirror ref="myCm"
                :value="code" 
                :options="cmOptions"
                @ready="onCmReady"
                @focus="onCmFocus"
                @input="onCmCodeChange">
    </codemirror>
  </div>
</template>

<script>

import "codemirror/mode/javascript/javascript.js";
import "codemirror/theme/base16-dark.css"

export default {
    data() {
        return {
            code: 'const a = 10',
            cmOptions: {
                // codemirror options
                tabSize: 4,
                mode: 'text/javascript',
                theme: 'base16-dark',
                lineNumbers: true,
                line: true,
            }
        }
    },
    methods: {
      onCmReady(cm) {
        console.log('the editor is readied!', cm)
      },
      onCmFocus(cm) {
        console.log('the editor is focus!', cm)
      },
      onCmCodeChange(newCode) {
        console.log('this is new code', newCode)
        this.code = newCode
      }
    },
    computed: {
        codemirror() {
          return this.$refs.myCm.codemirror
        }
    },
}
</script>
