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
    <SharedPostHeader :title="content.title" />

    <SharedFlyerImage
      :link="content.flyer.link"
      :src="content.flyer.src"
      class="md:max-w-[500px] mx-auto"
    />

    <SharedCaptionedFigure
      v-if="videoId"
      :src="videoId"
      :link="{ url: content.video.link, label: content.video.label }"
      type="youtube"
      class="md:w-2/3"
    />

    <SharedPostDescription :paragraphs="content.description" />

    <SharedCreditsSection
      :credits="credits.map((c) => ({ title: c.title, names: c.members }))"
    />

    <SharedPictureGallery :pictures="content.gallery" class="w-full" />
  </LayoutsScrollablePost>
</template>
