<template>
    <div id="professionalism-container">
        <NuxtLayout name="skills-layout" :info="layoutContent">
        </NuxtLayout>
    </div>
</template>

<script>
export default {
    data() {
        return {
            layoutContent : {
                skill: "Professionalism",
                desc: "Enhance your professionalism, demonstrating unwavering commitment, reliability, and sportsmanship both on and off the court, earning respect and trust from teammates, coaches, and fans.",
                value : 20
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    
</style>