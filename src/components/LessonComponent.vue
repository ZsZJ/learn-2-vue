<template>
    <div class="row">
        <div class="col-12" id="lesson">

            <div class="row">
                <!-- Course title -->
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
                        <img class="img-fluid mb-2 w-100" v-for="image in story.images" :key="image.id" :src="image.path">
                    </div>
                </div>

                <div class="col-12">
                    <button v-if="courseLevel != 1" @click="courseLevel -= 1" class="btn btn-large btn-default mr-3">
                        Vorige Stap
                    </button>
                    <button v-if="courseLevel < courseCount" @click="courseLevel += 1" class="btn btn-large btn-default">
                        Volgende Stap
                    </button> 
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

    .course-title, .course-subtitle  {
        font-weight: bold;
    }

    #lesson {
        height: 78vh;
        overflow-y: scroll;
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
                            Aan de andere kant is Vue ook perfect in staat geavanceerde Single-Page Applications aan te sturen.`,
                        }
                    ],
                    reward : false
                },
                {
                    title : "Declaratieve weergave", 
                    stories : [
                        {
                            title : "",
                            text : `De kern van Vue.js is een systeem dat ons in staat stelt 
                            declaratief gegevens naar de DOM weer te geven met 
                            behulp van eenvoudige template syntax:`,
                            images : [
                                {
                                    path : require(`../assets/course-2/code-1.png`)
                                },
                                {
                                    path : require(`../assets/course-2/code-2.png`)
                                }
                            ]
                        },
                        {
                            title : "",
                            text : `We hebben onze eerste Vue-app al gemaakt! Dit lijkt erg op het renderen van een string template, 
                            maar Vue heeft veel werk onder de motorkap gedaan.
                            De gegevens en de DOM zijn nu gekoppeld en alles is nu reactief.`
                        }
                    ],
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
