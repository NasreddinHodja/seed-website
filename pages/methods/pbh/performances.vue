<script setup lang="ts">
import performances from "@/content/methods/pbh/performances";

const lang = useCookie<"pt" | "en">("lang", { default: () => "en" });

const content = computed(() => performances[lang.value]);
</script>

<template>
  <SharedScrollablePost>
    <SharedLangButton />

    <h1>{{ content.title }}</h1>

    <div v-html="content.description" class="flex flex-col gap-6"></div>

    <h2>{{ content.pieces.title }}</h2>
    <SharedPieceList :works="content.pieces.works" />
  </SharedScrollablePost>
</template>
