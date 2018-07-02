<template>
    <iframe class="p-5" id="preview"></iframe>
</template>

<style scoped>

</style>

<script>
export default {
    props : ['html', 'javascript'],
    data() {
        return {
            previewFrame : null,
            preview : null,
            stylesheet : {
                element : document.createElement('link'),
                rel : "stylesheet",
                href : "https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css",
                integrity : "sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4",
                crossOrigin : "anonymous"
            },
            script : {
                element : document.createElement('script'),
                src : "https://cdn.jsdelivr.net/npm/vue/dist/vue.js"
            }
        }
    },
    mounted() {

        // Set the preview component
        this.setPreview()

        // Set stylesheet
        this.setStylesheet()

        // Set VueInstance
        this.setScript()

        // Add HTML-DIV for the html code in preview
        let htmlContainer = document.createElement('div')
        htmlContainer.setAttribute("id", "htmlcontainer")
        this.preview.body.append(htmlContainer)

        // Add SCRIPT-DIV for the Script code in preview
        let javascriptContainer = document.createElement('div')
        javascriptContainer.setAttribute("id", "javascriptcontainer")
        this.preview.body.append(javascriptContainer)

        // Update the preview for the first time
        this.updatePreview()
    },
    methods : {

        setPreview() {
            // Set the previewframe
            this.previewFrame = document.getElementById("preview")
            // Set the preview document
            this.preview = this.previewFrame.contentDocument
        },

        // Set the stylesheet in the preview
        setStylesheet() {
            let object = this
            Object.keys(this.stylesheet).forEach(function(key) {
                if(key != "element") {
                    object.stylesheet.element[key] = object.stylesheet[key]
                }
            })
            this.preview.head.append(this.stylesheet.element)
        },

        // Set the VueInstance in the preview
        setScript() {
            let object = this
             Object.keys(this.script).forEach(function(key) {
                if(key != "element") {
                    object.script.element[key] = object.script[key]
                }
            })
            this.preview.body.append(this.script.element)
        },

        updatePreview() {

            let htmlcontainer = this.preview.getElementById("htmlcontainer")
            htmlcontainer.innerHTML = ""
            htmlcontainer.innerHTML = this.html

            let javascriptcontainer = this.preview.getElementById("javascriptcontainer")
            javascriptcontainer.innerHTML = ""
            
            let script = document.createElement("script")
            script.innerHTML = this.javascript
            javascriptcontainer.append(script)
        }
    },
    watch : {
        html : function() {
            this.updatePreview()
        },
        javascript : function() {
            this.updatePreview()
        }
    },
}
</script>
