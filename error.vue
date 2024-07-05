<template>
    <NuxtLayout name="404">
    <div class="container">
        <div >You've Arrived Here on Error, boss</div>
        <button class="button" @click="goBack">Back</button>
    </div>
    </NuxtLayout>
</template>

<script>
export default {
    methods: {
    goBack() {
        this.$router.push('/')
    }
    }
}
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.button {
    padding: 4px 6px;
    margin: 10px 0px;
    background: rgb(246, 13, 13);
    color: white;
    justify-content: center;
    border-radius: 10px;
}
</style>