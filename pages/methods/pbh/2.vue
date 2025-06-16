<script setup lang="ts">
import index from "@/content/methods/pbh/2";

const lang = useCookie<"pt" | "en">("lang", { default: () => "en" });

const content = computed(() => index[lang.value]);
</script>

<template>
  <div
    class="w-full flex flex-col items-start justify-center px-6 md:px-16 gap-10 md:gap-14 pt-4 pb-14 md:pt-14 overflow-scroll"
  >
    <SharedLangButton />

    <h1>{{ content.title }}</h1>

    <div class="flex flex-col gap-10">
      <p v-for="paragraph in content.description" v-html="paragraph"></p>
    </div>

    <div class="w-fit mx-auto flex flex-col gap-4">
      <img :src="content.image.src" class="mx-auto" />
      <h4>
        {{ content.image.caption }}
      </h4>
    </div>

    <SharedPieceList :works="content.pieces.works" />
  </div>
</template>
