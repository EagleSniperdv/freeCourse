<script setup lang="ts">
</script>

<template>
    <div class="header">
        <h1>
            Course:
            <span>Mastering Nuxt</span>
        </h1>
    </div>

    <div class="wrapper">
 
        <div class="chapters">
            <h3>Chapters</h3>
            <div class="chapter-item"
            v-for="chapter in chapters"
            :key="chapter.slug"
            >
                <h4>{{ chapter.title }}</h4>
                <NuxtLink
                v-for="(lesson, index) in chapter.lessons"
                :key="lesson.slug"
                :to="lesson.path"
                >
            {{ index + 1 }}
            {{ lesson.title }} 
            </NuxtLink>
            </div>
        </div>

        <div class="lessons">
            <NuxtPage />
        </div>
    </div>
</template>

<script setup>
const {chapters} = useCourse();
</script>

<style scoped>
.header {
    display: flex;
    justify-content: center;
    align-items: center;
}

.wrapper {
    display: flex;
    justify-content: center;
    /* align-items: center; */
    gap: 25px;
    width: 80vw;
    height: 70vh;
    margin-left: auto;
    margin-right: auto;
    color: aliceblue;
}

.chapters {
    background-color: #8c72fd;
    padding: 10px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    width: 30vw;
}
.chapter-item {
    display: flex;
    flex-direction: column;
}

.lessons {
    background-color: #312d2d;
    padding: 10px;
    border-radius: 5px;
    width: 100%;
}

.router-link-active {
    color: rgb(247, 57, 57);
}


</style>