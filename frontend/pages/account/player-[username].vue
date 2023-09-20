<template>
    <div id="player-settings-container">
        <NuxtLayout name="settings" :info="layoutContent">
            Player {{ $route.params.username }} Account
        </NuxtLayout>
    </div>
</template>
<script>
export default {
    data() {
        return {
            layoutContent: [
                {

                },
            ],
        }
    }
}
</script>
<style lang="scss">
    #player-settings-container {
        min-height: 100%;

        transition: all 0.4s ease;
    }
</style>