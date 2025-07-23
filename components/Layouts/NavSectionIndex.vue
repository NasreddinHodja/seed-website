<script setup lang="ts">
defineProps<{
  options: { url: string; title: string }[];
}>();
</script>
<template>
  <div
    class="w-full flex flex-col items-start justify-center px-6 md:px-16 gap-10 md:gap-16 pt-14 pb-28 md:pt-32 overflow-auto"
  >
    <div v-for="option in options">
      <h1>
        <NuxtLink :to="option.url">{{ option.title }}</NuxtLink>
      </h1>
    </div>
  </div>
</template>
