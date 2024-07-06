<template>
  <NuxtLink :href="firstLesson.path"> Go to first Lesson </NuxtLink>
</template>

<script setup>
const firstLesson = useFirstLesson();
</script>
