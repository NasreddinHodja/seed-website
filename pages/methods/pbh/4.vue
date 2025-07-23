<script setup lang="ts">
import index from "@/content/methods/pbh/4";

const lang = useCookie<"pt" | "en">("lang", { default: () => "en" });

const content = computed(() => index[lang.value]);
</script>

<template>
  <LayoutsScrollablePost>
    <SharedLangButton />

    <h1>{{ content.title }}</h1>

    <img :src="content.image.src" class="mx-auto md:w-2/3" />

    <div v-html="content.description" class="flex flex-col gap-6"></div>

    <SharedPieceList :works="content.pieces.works" />
  </LayoutsScrollablePost>
</template>
