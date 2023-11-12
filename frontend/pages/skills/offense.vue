<template>
    <div id="offense-container">
        <NuxtLayout name="skills-layout" :info="layoutContent">
        </NuxtLayout>
    </div>
</template>

<script>
export default {
    data() {
        return {
            layoutContent : {
                skill: "Offense",
                desc: "Boosts a player's offensive prowess, enhancing shooting accuracy, dribbling finesse, and strategic decision-making on the court.",
                value : 20
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    
</style>