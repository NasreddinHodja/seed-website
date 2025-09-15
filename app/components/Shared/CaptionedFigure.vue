<script setup lang="ts">
withDefaults(
  defineProps<{
    src: string;
    caption?: string;
    link?: { url: string; label: string };
    type?: "image" | "video" | "youtube";
  }>(),
  {
    type: "image",
    caption: undefined,
    link: undefined,
  }
);
</script>

<template>
  <figure class="flex flex-col gap-4 m-auto">
    <video v-if="type === 'video'" controls>
      <source :src="src" type="video/webm" />
    </video>

    <SharedYTLazyEmbed v-else-if="type === 'youtube'" :video-id="src" />

    <NuxtImg v-else :src="src" />

    <figcaption class="flex flex-col gap-1">
      <span v-if="caption" class="italic">{{ caption }}</span>
      <SharedLink v-if="link" :url="link.url" class="w-fit underline">
        {{ link.label }}
      </SharedLink>
    </figcaption>
  </figure>
</template>
