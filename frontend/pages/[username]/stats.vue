<template>
    <div id="stats-container">
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
                    content: 'CAREER STATISTICS', 
                    link: '/stats/career'
                },
                {
                    content: 'MESSAGES',
                    link: '/stats/messages'
                },
                {
                    content: 'SCOUTING REPORT',
                    link: '/stats/scouting'
                },
                {
                    content: 'LESSONS',
                    link: '/stats/lessons'
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