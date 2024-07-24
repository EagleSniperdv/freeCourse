<template>
  <div class="wrapper">
    <h2>Lessons</h2>
    <p>Lesson {{ chapter.number }} - {{ lesson.number }}</p>
    <h3>{{ chapter.title }}</h3>
    <h4>{{ lesson.title }}</h4>
    <VideoPlayer />
    <p>{{ lesson.text }}</p>
    <LessoncompleteBtn
      :model-value="isLessonComplete"
      @update:model-value="toggleComplete"
    />
    <!-- <button class="err"
            @click="throwError()";
        >error</button> -->
  </div>
</template>

<script setup>
const course = useCourse();
const route = useRoute();

definePageMeta({
  middleware: [
    function ({ params }, from) {
    // validate({params}){
    const course = useCourse();

    const chapter = course.chapters.find(
      (chapter) => chapter.slug === params.chapterSlug
    );

    if (!chapter) {
      return abortNavigation(
        createError({
          statusCode: 404,
          message: 'Chapter not Found.',
        })
      );
    }

    const lesson = chapter.lessons.find(
      (lesson) => lesson.slug === params.lessonSlug
    );

    if (!lesson) {
      return abortNavigation(
        createError({
          statusCode: 404,
          message: 'Lesson not Found.',
        })
      );
    }
  }, 
  'auth',
],
});

const chapter = computed(() => {
  return course.chapters.find(
    (chapter) => chapter.slug === route.params.chapterSlug
  );
});

const lesson = computed(() => {
  return chapter.value?.lessons.find(
    (lesson) => lesson.slug === route.params.lessonSlug
  );
});

const title = computed(() => {
  return `${lesson.value?.title} - ${course.title}`;
});

useHead({
  title,
});

const progress = useState('progress', () => {
  return [];
});

const isLessonComplete = computed(() => {
  if (!progress.value[chapter.value.number - 1]) {
    return false;
  }

  if (!progress.value[chapter.value.number - 1][lesson.value.number - 1]) {
    return false;
  }

  return progress.value[chapter.value.number - 1][lesson.value.number - 1];
});

const toggleComplete = () => {
  if (!progress.value[chapter.value.number - 1]) {
    progress.value[chapter.value.number - 1] = [];
  }

  progress.value[chapter.value.number - 1][lesson.value.number - 1] =
    !isLessonComplete.value;
};
console.log(course);

// const createError = (message) => {
//             return new Error(message);
//         };

//         const throwError = () => {
//             throw createError('could not update1 frombtn');
//         };
</script>

<style scoped>
.wrapper {
  width: 100%;
}
/* .wrapper .err {
  padding: 10px 20px;
  font-size: 1rem;
  color: #fff;
  background-color: #ff6b6b;
  border: none;
  border-radius: 5px;
  cursor: pointer;

} */

.err:hover {
  background-color: #ff4b4b;
}
</style>
