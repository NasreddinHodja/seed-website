<script setup lang="ts">
defineProps<{
  credits: { label: string; link: string }[];
}>();
</script>
<template>
  <div class="flex flex-col gap-6 border-l-4 border-white pl-10">
    <a
      v-for="credit in credits"
      :href="credit.link"
      target="_blank"
      rel="noopener noreferrer"
      class="text-xl w-fit"
    >
      {{ credit.label }}
    </a>
  </div>
</template>
