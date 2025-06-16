<script setup lang="ts">
import performances from "@/content/methods/pbh/performances";

const lang = useCookie<"pt" | "en">("lang", { default: () => "en" });

const content = computed(() => performances[lang.value]);
</script>

<template>
  <div
    class="w-full flex flex-col items-start justify-center px-6 md:px-16 gap-10 md:gap-14 pt-4 pb-14 md:pt-14 overflow-scroll"
  >
    <SharedLangButton />

    <h1>{{ content.title }}</h1>

    <div v-html="content.description" class="flex flex-col gap-6"></div>

    <SharedPieceList :entries="content.pieces.works" />
  </div>
</template>
