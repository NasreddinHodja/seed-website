<script setup lang="ts">
defineProps<{
  title: string;
  links: { url: string | null; label: string }[];
}>();
</script>

<template>
  <div class="flex flex-col gap-4 w-fit">
    <h1 class="bg-black w-fit">{{ title }}</h1>
    <div class="flex flex-col gap-0.5 bg-black w-fit">
      <div v-for="contact in links" class="font-header text-neutral-300">
        <a
          v-if="contact.url !== null"
          :href="contact.url"
          target="_blank"
          rel="noopener noreferrer"
          >{{ contact.label }}</a
        >
        <div v-else>{{ contact.label }}</div>
      </div>
    </div>
  </div>
</template>
