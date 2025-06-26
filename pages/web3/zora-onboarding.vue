<script setup lang="ts">
import zoraOnboarding from "@/content/web3/zora-onboarding";

const content = zoraOnboarding.pt;
</script>

<template>
  <div
    class="w-full h-auto flex flex-col items-start justify-center px-6 md:px-16 gap-10 md:gap-16 pt-4 pb-14 md:pt-16 overflow-auto"
  >
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
    <div v-for="part in content.parts" class="flex w-full flex-col gap-10">
      <h2>{{ part.title }}</h2>
      <iframe
        :src="part.video"
        class="w-full h-[350px] md:w-1/2 md:h-[400px] m-auto"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  </div>
</template>
