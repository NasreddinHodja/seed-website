<script setup lang="ts">
import index from "@/content/methods/cyberia/index";

const content = index.en;
</script>

<template>
  <div
    class="w-full h-auto flex flex-col items-start justify-start px-6 md:px-16 gap-6 md:gap-10 pt-4 pb-14 md:pt-10"
  >
    <h1>{{ content.title }}</h1>

    <div class="flex flex-col lg:flex-row w-full gap-10 lg:gap-24">
      <div class="flex-1 flex flex-col gap-6">
        <div v-for="paragraph in content.descripton" :key="paragraph">
          <p v-html="paragraph"></p>
        </div>

        <div class="flex flex-row flex-wrap gap-4">
          <div
            v-for="event in content.events"
            class="text-xl font-bold text-black bg-white px-2"
          >
            <a
              v-if="!event.link.startsWith('/')"
              :href="event.link"
              target="_blank"
              rel="noopener noreferrer"
            >
              {{ event.label }}
            </a>
            <NuxtLink v-else :to="event.link">{{ event.label }}</NuxtLink>
          </div>
        </div>
      </div>

      <div
        class="flex-1 h-fit flex flex-col items-start gap-2 border-4 border-white"
      >
        <img :src="content.image.src" class="w-full max-w-[900px]" />
      </div>
    </div>
  </div>
</template>
