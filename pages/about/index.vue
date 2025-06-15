<script setup lang="ts">
import index from "@/content/about/index";

const content = index.en;
</script>
<template>
  <div class="flex items-center justify-center">
    <SharedVideoBackground :src="r2Url('videos', 'seed.mp4')" />

    <div
      class="flex flex-col xl:grid xl:grid-cols-2 gap-10 px-6 md:px-16 py-10 md:py-16"
    >
      <div class="flex flex-col gap-10">
        <div class="flex flex-col gap-4">
          <a
            :href="content.whoAreWe.link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h1 class="bg-black w-fit">{{ content.whoAreWe.title }}</h1></a
          >
          <p class="bg-black text-xl">
            {{ content.whoAreWe.text }}
          </p>
        </div>

        <div class="flex flex-col gap-4">
          <NuxtLink :to="content.coreMembers.link">
            <h1 class="bg-black w-fit">{{ content.coreMembers.title }}</h1>
          </NuxtLink>
        </div>

        <div class="flex flex-col gap-4">
          <h1 class="bg-black w-fit">{{ content.contactUs.label }}</h1>
          <div class="flex flex-col gap-0.5 bg-black">
            <div
              v-for="contact in content.contactUs.links"
              class="font-header text-neutral-300"
            >
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
      </div>
      <div class="flex flex-col gap-4">
        <div class="flex flex-col gap-4">
          <h1 class="bg-black">{{ content.seedPhilosophy.title }}</h1>
          <p class="bg-black text-xl">
            {{ content.seedPhilosophy.text }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
