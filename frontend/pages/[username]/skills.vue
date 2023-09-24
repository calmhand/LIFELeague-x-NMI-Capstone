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
                    link: '/home'
                },
                {
                    content: 'LEADERSHIP',
                    link: '/home'
                },
                {
                    content: 'DEFENSE',
                    link: '/home'
                },
                {
                    content: 'PROFESSIONALISM',
                    link: '/home'
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