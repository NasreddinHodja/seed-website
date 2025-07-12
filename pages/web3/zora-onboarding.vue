<script setup lang="ts">
import zoraOnboarding from "@/content/web3/zora-onboarding";

const content = zoraOnboarding.pt;
const parts = content.parts.map((part) => ({
  title: part.title,
  video: extractYTVideoID(part.video),
}));
</script>

<template>
  <SharedScrollablePost>
    <h1>{{ content.title }}</h1>
    <div class="flex flex-col gap-6">
      <a
        v-for="link in content.links"
        :href="link.url"
        target="_blank"
        rel="noopener noreferrer"
        class="bg-white text-black text-xl px-2 w-fit"
      >
        >{{ link.label }}
      </a>
    </div>
    <div v-for="part in parts" class="flex w-full flex-col gap-10">
      <h2>{{ part.title }}</h2>

      <SharedYTLazyEmbed
        v-if="part.video"
        :video-id="part.video"
        class="w-full md:w-[700px] mx-auto"
      />
    </div>
  </SharedScrollablePost>
</template>
