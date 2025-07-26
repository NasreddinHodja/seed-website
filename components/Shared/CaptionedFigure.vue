<script setup lang="ts">
defineProps<{
  src: string;
  caption: string;
  link?: { url: string; label: string };
  video?: boolean;
}>();
</script>

<template>
  <figure class="flex flex-col gap-4 m-auto">
    <video v-if="video" controls>
      <source :src="src" type="video/webm" />
    </video>

    <img v-else :href="src" />

    <figcaption class="flex flex-col gap-1">
      <span class="italic">{{ caption }}</span>
      <SharedLink v-if="link" :url="link.url" class="w-fit underline">
        {{ link.label }}
      </SharedLink>
    </figcaption>
  </figure>
</template>
