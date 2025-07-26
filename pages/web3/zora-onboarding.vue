<script setup lang="ts">
import zoraOnboarding from "@/content/web3/zora-onboarding";

const content = zoraOnboarding.pt;
const parts = content.parts.map((part) => ({
  title: part.title,
  video: extractYTVideoID(part.video),
}));
</script>

<template>
  <LayoutsScrollablePost>
    <SharedScrollablePostHeader
      :title="content.title"
      :relatedLinks="content.links"
    />

    <div v-for="part in parts" class="flex w-full flex-col gap-10">
      <h2>{{ part.title }}</h2>

      <SharedYTLazyEmbed
        v-if="part.video"
        :video-id="part.video"
        class="w-full md:w-[700px] mx-auto"
      />
    </div>
  </LayoutsScrollablePost>
</template>
