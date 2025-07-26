<script setup lang="ts">
defineProps<{
  title: string;
  mainLink?: string;
  relatedLinks?: { url: string; label: string }[];
  langButton?: boolean;
}>();
</script>

<template>
  <div class="flex flex-col gap-10">
    <SharedLangButton v-if="langButton" />

    <SharedLink v-if="mainLink" :url="mainLink">
      <h1>{{ title }}</h1>
    </SharedLink>
    <h1 v-else>{{ title }}</h1>

    <div v-if="relatedLinks" class="flex flex-col gap-6">
      <NuxtLink
        v-for="link in relatedLinks"
        :to="link.url"
        class="bg-white text-black px-2 w-fit"
      >
        {{ link.label }}
      </NuxtLink>
    </div>
  </div>
</template>
