<template>
    <div>
        Admin Home :)
        <NuxtLink to="/admin/account/">Account Settings </NuxtLink>
        <button @click="logoutAdmin">logout</button>
    </div>
</template>
<script>
export default {
    methods: {
        logoutAdmin() {
            // TODO: Create logout procedure
        }
    }
}
</script>
<style lang="">
    
</style>