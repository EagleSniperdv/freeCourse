<script setup lang="ts">
const route = useRoute()

const links = [
  [{
    label: 'Installation',
    icon: 'i-heroicons-home',
    to: '/'
  }, {
    label: 'Horizontal Navigation',
    icon: 'i-heroicons-chart-bar',
    to: '/'
  }, {
    label: 'Command Palette',
    icon: 'i-heroicons-command-line',
    to: '/'
  }], [{
    label: 'Examples',
    icon: 'i-heroicons-light-bulb'
  }, {
    label: 'Help',
    icon: 'i-heroicons-question-mark-circle'
  }]
]
</script>

<template>
  <UHorizontalNavigation :links="links" class="border-b border-gray-200 dark:border-gray-800" />
</template>

