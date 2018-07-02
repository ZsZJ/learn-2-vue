<template>
    <div>
        <div class="row">
            <div id="instructions" class="col-3 pr-0 text-white pt-4">
                
                <div class="container">
                    <LessonComponent />
                </div>
            </div>
            <div class="col pl-0 pr-0">
                
                <div class="col-12 typeheader p-2">
                    <b>HTML</b>
                </div>
                
                <codemirror ref="myCm"
                            :value="html" 
                            :options="cmOptions[0]"
                            @ready="onCmReadyHtml"
                            @focus="onCmFocusHtml"
                            @input="onCmCodeChangeHtml">
                </codemirror>
                
                <div class="col-12 typeheader p-2">
                    <b>JS + Vue</b>
                </div>
                
                <codemirror ref="myCm"
                            :value="javascript" 
                            :options="cmOptions[1]"
                            @ready="onCmReadyJavaScript"
                            @focus="onCmFocusJavaScript"
                            @input="onCmCodeChangeJavaScript">
                </codemirror>
            </div>
            <div class="col-5 p-0">
                <PreviewComponent :html = "html" :javascript = "javascript" />
            </div>
        </div>
    </div>
</template>

<style scoped>
    .typeheader {
        background-color: #2f3640;
        color: #ffffff;
    }
    #preview {
        width: 100%;
        height: 100%;
    }
    #instructions {
        background-color: #16a085;
    }
</style>

<script>

// Code Mirror Essentials
import "codemirror/mode/javascript/javascript.js"
import "codemirror/addon/edit/closebrackets.js"
import "codemirror/addon/edit/matchtags.js"
import "codemirror/theme/mbo.css"

// Lesson Component
import LessonComponent from './LessonComponent.vue'

// Preview Component
import PreviewComponent from './PreviewComponent.vue'

export default {
    components : {
        LessonComponent,
        PreviewComponent
    },
    data() {
        return {

            html : `<div id="app">\n\t<h1>Welcome to Vue</h1>\n</div>`,
            javascript : `new Vue({\n\tel: "#app",\n\tdata: {\n\t\tmessage: "Hello Vue!"\n\t}\n})`,
           
            cmOptions: [
                {
                    // codemirror options
                    tabSize: 4,
                    mode: 'text/html',
                    theme: 'mbo',
                    lineNumbers: true,
                    line: true,
                    lineWrapping: true,
                    autoCloseBrackets : true,
                    matchTags : true
                },
                {
                    // codemirror options
                    tabSize: 4,
                    mode: 'text/javascript',
                    theme: 'mbo',
                    lineNumbers: true,
                    line: true,
                    lineWrapping: true,
                    autoCloseBrackets : true,
                    matchTags : true
                }
            ],
        }
    },
    mounted() {
        
    },
    methods: {

        onCmReadyHtml(cm) {
            // console.log('the html editor is readied!', cm)            
        },
        onCmFocusHtml(cm) {
            // console.log('the html editor is focus!', cm)
        },
        onCmCodeChangeHtml(newCode) {

            // console.log('this is new code', newCode)
            this.html = newCode
        },

        onCmReadyJavaScript() {   
            
        },

        onCmFocusJavaScript(cm) {
            // console.log('the javascript editor is focus!', cm)
        },

        onCmCodeChangeJavaScript(newCode) {
            this.javascript = newCode  
        },
    },
    computed: {
        codemirror() {
          return this.$refs.myCm.codemirror
        }
    },
}
</script>
