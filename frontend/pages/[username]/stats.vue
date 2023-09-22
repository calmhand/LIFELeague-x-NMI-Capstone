<template>
    <div id="stats-container">
        <NuxtLayout name="main-menu" :info="layoutContent">
            Stats!
            Only accessible to a user with the role "Player"
        </NuxtLayout>
    </div>
</template>
<script>
export default {
    data() {
        return {
            layoutContent: [
                {
                    content: 'CAREER STATISTICS', 
                    link: '/home'
                },
                {
                    content: 'MESSAGES',
                    link: '/'
                },
                {
                    content: 'SCOUTING REPORT',
                    link: '/home'
                },
                {
                    content: 'LESSONS',
                    link: '/'
                },
            ]
        }
    }
}
</script>
<style lang="scss" scoped>
    #stats-container {
        min-height: 100%;
        transition: all 0.4s ease;

        background-image: url('@/assets/images/LIFELeague_Stats.jpg');
        background-size: cover;
        background-position: center;
    }
</style>