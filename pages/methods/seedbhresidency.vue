<script setup lang="ts">
import seedbhresidency from "@/content/methods/seedbhresidency";

const content = seedbhresidency.en;
const videoId = extractYTVideoID(content.video.src);
const credits = [
  content.credits.artists,
  content.credits.executiveProducers,
  content.credits.commuinications,
  content.credits.visualId,
  content.credits.audioVisualDirection,
  content.credits.audioVisualRecords,
  content.credits.videoEditing,
  content.credits.soundtrack,
];
</script>

<template>
  <SharedScrollablePost>
    <h1>{{ content.title }}</h1>

    <a
      :href="content.flyer.link"
      target="_blank"
      rel="noopener noreferrer"
      class="flex items-center justify-center w-full"
    >
      <img :src="content.flyer.src" class="md:max-w-[500px]" />
    </a>

    <div v-if="videoId" class="flex flex-col items-end mx-auto gap-2">
      <SharedYTLazyEmbed
        :video-id="videoId"
        class="w-full md:w-[700px] mx-auto"
      />
      <a
        :href="content.video.link"
        target="_blank"
        rel="noopener noreferrer"
        class="bg-white text-black px-2"
      >
        {{ content.video.label }}
      </a>
    </div>

    <div class="flex flex-col gap-6">
      <div v-for="paragraph in content.description">
        <p v-html="paragraph"></p>
      </div>
    </div>

    <div v-for="credit in credits" class="flex flex-col gap-10">
      <h2>{{ credit.title }}</h2>
      <SharedCreditsList :names="credit.members" />
    </div>

    <SharedPictureGallery :pictures="content.gallery" class="w-full" />
  </SharedScrollablePost>
</template>
