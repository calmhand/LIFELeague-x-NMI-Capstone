<template>
    <div id="leadership-container">
        <NuxtLayout name="skills-layout" :info="layoutContent">
        </NuxtLayout>
    </div>
</template>

<script>
export default {
    data() {
        return {
            layoutContent : {
                skill: "Leadership",
                desc: "Unleash your leadership potential with this bar, empowering you to inspire and guide your team, showcasing qualities like communication, decision-making, and motivation, and becoming a driving force in your team's success.",
                value : 20
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    
</style>