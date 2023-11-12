<template>
    <div id="skills-container">
        <NuxtLayout name="main-menu" :info="layoutContent">
        </NuxtLayout>
    </div>
</template>
<script>
export default {
    data() {
        return {
            layoutContent: [
                {
                    content: 'OFFENSE', 
                    link: '/skills/offense'
                },
                {
                    content: 'LEADERSHIP',
                    link: '/skills/leadership'
                },
                {
                    content: 'DEFENSE',
                    link: '/skills/defense'
                },
                {
                    content: 'PROFESSIONALISM',
                    link: '/skills/professionalism'
                },
            ]
        }
    }
}
</script>
<style lang="scss" scoped>
    #skills-container {
        min-height: 100%;

        transition: all 0.4s ease;
        background-image: url('@/assets/images/LIFELeague_group.jpg');
        background-size: cover;
    }
</style>