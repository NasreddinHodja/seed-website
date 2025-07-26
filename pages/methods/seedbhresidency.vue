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
  <LayoutsScrollablePost>
    <SharedScrollablePostHeader :title="content.title" />

    <SharedFlyerImage
      :link="content.flyer.link"
      :src="content.flyer.src"
      class="md:max-w-[500px] mx-auto"
    />

    <div v-if="videoId" class="flex flex-col items-end mx-auto gap-2">
      <SharedYTLazyEmbed
        :video-id="videoId"
        class="w-full md:w-[700px] mx-auto"
      />
      <SharedLink :url="content.video.link" class="bg-white text-black px-2">
        {{ content.video.label }}
      </SharedLink>
    </div>

    <SharedPostDescription :paragraphs="content.description" />

    <div v-for="credit in credits" class="flex flex-col gap-10">
      <h2>{{ credit.title }}</h2>
      <SharedCreditsList :names="credit.members" />
    </div>

    <SharedPictureGallery :pictures="content.gallery" class="w-full" />
  </LayoutsScrollablePost>
</template>
