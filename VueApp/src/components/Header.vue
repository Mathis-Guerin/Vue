<template>
    <div id="header">
        <h2>Tuto Vue</h2>
        <router-link to="/"><button class="ui button">Users</button></router-link>
        <router-link to="/posts"><button class="ui button">Posts</button></router-link>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
#header {
    border-bottom: 2px solid #444;
    padding: 20px;
    background-color: #00E676;
}
</style>
