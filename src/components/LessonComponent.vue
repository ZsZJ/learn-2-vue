<template>
    <div id="introduction" class="row">
        
        <div class="col-12 mb-4">
            <h3 class="course-title">{{ courses[courseLevel - 1].title }}</h3>
        </div>
        <div class="col-12">

            <div class="mb-4" v-for="story in courses[courseLevel - 1].stories" :key="story.id">
                <div v-show="story.title">
                    <h5 class="course-subtitle">{{ story.title }}</h5>
                    <hr class="bg-light">
                </div>
                <p>{{story.text}}</p>
            </div>

            <div>
                <button v-if="courseLevel != 1" @click="courseLevel -= 1" class="btn btn-large btn-default mr-3">
                    Vorige Stap
                </button>
                <button v-if="courseLevel < courseCount" @click="courseLevel += 1" class="btn btn-large btn-default">
                    Volgende Stap
                </button> 
            </div>

        </div>
    </div>
</template>

<style scoped>
    .course-title, .course-subtitle  {
        font-weight: bold;
    }
</style>

<script>
export default {
    data() {
        return {
            courseLevel : 1,
            courses : [
                {
                    title : "Introductie", 
                    stories : [
                        {
                            title : "Wat is Vue?",
                            text : `Vue (uitgesproken / vjuː) is een progressief framework voor 
                            het bouwen van gebruikersinterfaces. In tegenstelling tot 
                            andere monolithische frameworks, is Vue vanaf de grond af ontworpen om 
                            incrementeel te kunnen worden aangepast. De core library is alleen gericht op de weergavelaag en 
                            is eenvoudig op te halen en te integreren met andere library's of bestaande projecten. 
                            Aan de andere kant is Vue ook perfect in staat geavanceerde Single-Page Applications aan te sturen.`
                        }
                    ] 
                },
                {
                    title : "Declaratieve weergave", 
                    stories : [
                        {
                            title : "",
                            text : `De kern van Vue.js is een systeem dat ons in staat stelt 
                            declaratief gegevens naar de DOM weer te geven met 
                            behulp van eenvoudige template syntax: \n <pre></pre>`
                        }
                    ] 
                } 
            ]
        }
    },
    computed : {
        courseCount : function() {
            return this.courses.length
        }
    },
    watch : {
        courseLevel : function(newVal, oldVal) {

        }
    }
}
</script>
