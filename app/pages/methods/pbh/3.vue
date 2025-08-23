<script setup lang="ts">
import index from "~~/content/methods/pbh/3";

const lang = useCookie<"pt" | "en">("lang", { default: () => "en" });

const content = computed(() => index[lang.value]);
</script>

<template>
  <LayoutsScrollablePost>
    <SharedPostHeader :title="content.title" lang-button />

    <SharedFlyerImage :src="content.image" class="md:w-2/3 mx-auto" />

    <div class="flex w-full flex-col gap-10">
      <div class="flex flex-col gap-6" v-html="content.descriptionFirst"></div>

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

      <div class="flex flex-col gap-6" v-html="content.descriptionSecond"></div>
    </div>

    <SharedPieceList :works="content.pieces.works" />
  </LayoutsScrollablePost>
</template>
