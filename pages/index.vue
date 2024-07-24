<template>
  <div class="link-container">
    <NuxtLink href="/course" class="styled-link">Go to Courses</NuxtLink>
    <NuxtLink :href="firstLesson.path" class="styled-link">Go to First Lesson</NuxtLink>
  </div>
</template>


<script setup>
const firstLesson = useFirstLesson();
</script>

<style scoped>
.link-container {
  display: flex;
  flex-direction: column;
  gap: 15px;
  justify-content: center;
  align-items: center;
  height: 90vh;
  background-color: #f0f0f0;
  border-radius: 15px;
}

.styled-link {
  display: inline-block;
  padding: 10px 20px;
  font-size: 1.2rem;
  color: #fff;
  background-color: #007bff;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.styled-link:hover {
  background-color: #0056b3;
}
</style>
