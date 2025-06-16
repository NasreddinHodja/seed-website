<script setup lang="ts">
import index from "@/content/methods/pbh/3";

const lang = useCookie<"pt" | "en">("lang", { default: () => "en" });

const content = computed(() => index[lang.value]);
</script>

<template>
  <div
    class="w-full flex flex-col items-start justify-center px-6 md:px-16 gap-10 md:gap-14 pt-4 pb-14 md:pt-14 overflow-scroll"
  >
    <SharedLangButton />

    <h1>{{ content.title }}</h1>

    <div class="flex w-full flex-col gap-10">
      <div v-html="content.descriptionFirst" class="flex flex-col gap-6"></div>

      <div
        class="flex flex-col mx-auto md:my-10 py-12 md:py-16 px-10 md:px-24 border-4 border-white gap-6 w-full md:w-auto"
      >
        <div class="flex flex-col md:flex-row gap-3">
          <span class="text-sm md:text-xl">{{
            content.loginScreen.userPrompt
          }}</span>
          <span class="text-sm md:text-xl">{{
            content.loginScreen.userValue
          }}</span>
        </div>

        <div class="flex flex-col md:flex-row gap-3">
          <span class="text-sm md:text-xl">{{
            content.loginScreen.passwordPrompt
          }}</span>
          <span class="text-sm md:text-xl">{{
            content.loginScreen.passwordValue
          }}</span>
        </div>
      </div>

      <div v-html="content.descriptionSecond" class="flex flex-col gap-6"></div>
    </div>

    <SharedPieceList :works="content.pieces.works" />
  </div>
</template>
