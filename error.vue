<template>
    <NuxtLayout >
    <div class="container">
        <div class="content">
            <p>
                You've Arrived Here on Error, boss
            </p>
            <p><strong>{{ error.message }}</strong></p>
            <p>
                Go to the 
                <a @click="handleError">First Lesson.</a>
            </p>
        </div>

        <button class="button" @click="goBack">Back</button>

    </div>
    </NuxtLayout>
</template>

<script setup>
const router = useRouter()
const error = useError();

const handleError = () => {
    clearError({
        redirect: '/course/chapter/1-chapter-1/lesson/1-introduction-typescript'
    });    
} 
    

const goBack = () => {
    router.back();
};


</script>

<style scoped>
.container {
    display: flex;
    height: 100vh;
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
.container .content {
    align-items: center;
    justify-content: center;
    text-align: center;
}
.container .content p{
    padding: 15px;
}
.container .content p a:hover{
    cursor: pointer;
}
</style>