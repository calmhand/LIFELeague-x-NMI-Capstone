<template>
    <div id="defense-container">
        <NuxtLayout name="skills-layout" :info="layoutContent">
        </NuxtLayout>
    </div>
</template>

<script>
export default {
    data() {
        return {
            layoutContent : {
                skill: "Defense",
                desc: "Elevate your defensive skills with this bar, improving your ability to steal, block shots, and maintain tight coverage on opponents, making you a formidable force on the court.",
                value : 20
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    
</style>