<script setup lang="ts">
import index from "@/content/methods/pbh/5";

const lang = useCookie<"pt" | "en">("lang", { default: () => "en" });

const content = computed(() => index[lang.value]);
</script>

<template>
  <div
    class="w-full flex flex-col items-start justify-center px-6 md:px-16 gap-10 md:gap-14 pt-4 pb-14 md:pt-14 overflow-auto"
  >
    <SharedLangButton />

    <h1>{{ content.title }}</h1>

    <img :src="content.image" class="w-full md:w-1/2 mx-auto" />

    <div v-html="content.description" class="flex flex-col gap-6"></div>
  </div>
</template>
