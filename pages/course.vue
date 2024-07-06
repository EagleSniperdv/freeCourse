<template>
  <div>
    <div class="header">
      <h1>
        Course:
        <span>Mastering Nuxt</span>
      </h1>
      <h2>{{ title }}</h2>
    </div>

    <div class="wrapper">
      <div class="chapters">
        <h4>Chapters</h4>
        <div
          class="chapter-item"
          v-for="chapter in chapters"
          :key="chapter.slug"
        >
          <h3>{{ chapter.title }}</h3>
          <NuxtLink
            v-for="(lesson, index) in chapter.lessons"
            :key="lesson.slug"
            :to="lesson.path"
          >
            <!-- <p>{{ index + 1 }}</p> -->
            <p>{{ lesson.title }}</p>
          </NuxtLink>
        </div>
      </div>

      <div class="lessons">
        <!-- <NuxtErrorBoundary> -->
        <NuxtPage />
        <!-- <template #error="{error}">
                        <p>
                            oh,no! Something Broke.
                            <code>{{ error }}</code>
                        </p>
                        <p>
                            <button @click="resetError(error)">
                                Reset
                            </button>
                        </p>
                    </template>                 -->
        <!-- </NuxtErrorBoundary> -->
      </div>
    </div>
  </div>
</template>

<script setup>
const { chapters, title } = useCourse();

// const resetError = async (error) => {
//     await navigateTo('/course').refr;
//     error.value = null;
// }
</script>

<style scoped>
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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
  height: 100%;
}

.chapters h4,
h3 {
  color: rgb(54, 253, 36);
}
.chapter-item {
  display: flex;
  flex-direction: column;
  color: blanchedalmond;
}

.lessons {
  background-color: #312d2d;
  padding: 10px;
  border-radius: 5px;
  width: 100%;
  height: 100%;
}

.router-link-active {
  color: rgb(0, 0, 0);
  transform: translateX(1.5em);
}
</style>
