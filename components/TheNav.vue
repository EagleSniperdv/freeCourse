<script setup lang="ts">
const route = useRoute();

const links = [
  [
    {
      label: 'Installation',
      icon: 'i-heroicons-home',
      to: '/',
    },
    {
      label: 'Horizontal Navigation',
      icon: 'i-heroicons-chart-bar',
      to: '/',
    },
    {
      label: 'Command Palette',
      icon: 'i-heroicons-command-line',
      to: '/',
    },
  ],
  [
    {
      label: 'Examples',
      icon: 'i-heroicons-light-bulb',
    },
    {
      label: 'Log-In',
      icon: 'i-heroicons-question-mark-circle',
      to: '/login',
    },
  ],
];
</script>

<template>
  <UHorizontalNavigation
    
    :links="links"
    class=" navv border-b border-gray-200 dark:border-gray-800"
  />
</template>

<style scoped>
/* .navv{
  position: absolute;
  position: fixed;
} */
</style>
