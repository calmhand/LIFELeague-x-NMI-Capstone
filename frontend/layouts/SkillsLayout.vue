<template>
    <div id="skills-layout">
        <h1>{{ info.skill }}</h1>
        <h2>{{ info.desc }}</h2>
        <SkillBar/>
        <slot/>
        <NavBar />
    </div>
</template>
<script>
import SkillBar from "@/components/game/SkillBar.vue"

export default {
    props: ["info"],
    components: { SkillBar }
}
</script>
<style lang="scss" scoped>
    #skills-layout {
        padding: 50px;
        font-family: "termina-regular";
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        background-color: black;

        h1, h2 {
            color: white;
            font-family: "termina-bold";
            text-align: center;
        }
    }
</style>