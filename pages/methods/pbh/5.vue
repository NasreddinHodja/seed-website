<script setup lang="ts">
import index from "@/content/methods/pbh/5";

const lang = useCookie<"pt" | "en">("lang", { default: () => "en" });

const content = computed(() => index[lang.value]);
</script>

<template>
  <SharedScrollablePost>
    <SharedLangButton />

    <h1>{{ content.title }}</h1>

    <img :src="content.image" class="w-full md:w-2/3 mx-auto" />

    <div v-html="content.description" class="flex flex-col gap-6"></div>
  </SharedScrollablePost>
</template>
