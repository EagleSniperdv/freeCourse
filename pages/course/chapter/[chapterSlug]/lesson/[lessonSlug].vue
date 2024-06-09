<template>
    <div>
        <h2>Lessons</h2>
        <p>Lesson {{ chapter.number }} - {{ lesson.number }}</p>
        <h3> {{ chapter.title}}</h3>
        <h4> {{ lesson.title }}</h4>
        <VideoPlayer />
        <p>{{ lesson.text }}</p>
        <LessoncompleteBtn 
        :model-value="isLessonComplete"
        @update:model-value="toggleComplete"
        />
    </div>
</template>

<script setup>
const course = useCourse();
const route = useRoute();

const chapter = computed(() => {
    return course.chapters.find(
        (chapter) => chapter.slug === route.params.chapterSlug
    );
});

const lesson = computed(() => {
    return chapter.value?.lessons.find(
        (lesson) => lesson.slug === route.params.lessonSlug
    )
})

const title = computed(() => {
    return `${lesson.value?.title} - ${course.title}`
})

useHead({
title,
})

const progress = useState('progress', () => {
    return [];
});

const isLessonComplete = computed(() => {
    if(!progress.value[chapter.value.number - 1]) {
        return false;
    }

    if (
        !progress.value[chapter.value.number - 1][lesson.value.number - 1]
    ) {
        return false;
    }

    return progress.value[chapter.value.number - 1][
        lesson.value.number - 1
    ]
})

const toggleComplete = () => {
    if (!progress.value[chapter.value.number - 1]) {
        progress.value[chapter.value.number - 1] = []
    }

    progress.value[chapter.value.number - 1][
        lesson.value.number - 1
    ] = !isLessonComplete.value;
}
console.log(course);

</script>