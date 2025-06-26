<script setup lang="ts">
import zorav2 from "@/content/web3/zorav2";

const lang = useCookie<"pt" | "en">("lang", { default: () => "en" });

const content = computed(() => zorav2[lang.value]);
</script>

<template>
  <div
    class="w-full flex flex-col items-start justify-center px-6 md:px-16 gap-10 md:gap-16 pt-4 pb-14 md:pt-16 overflow-auto"
  >
    <SharedLangButton />
    <a :href="content.link" target="_blank" rel="noopener noreferrer">
      <h1>{{ content.title }}</h1>
    </a>
    <div class="flex flex-col gap-6">
      <NuxtLink
        v-for="link in content.links"
        :to="link.to"
        class="bg-white text-black px-2 w-fit"
      >
        {{ link.label }}
      </NuxtLink>
    </div>
    <a
      :href="content.flyer.link"
      target="_blank"
      rel="noopener noreferrer"
      class="flex items-center justify-center w-full"
    >
      <img :src="content.flyer.image" class="md:w-2/3 m-auto" />
    </a>
    <div class="flex flex-col gap-10">
      <p
        v-for="paragraph in content.descriptionParagraphs"
        v-html="paragraph"
      ></p>
    </div>
    <div class="flex flex-col gap-14">
      <h2>{{ content.artists.title }}</h2>
      <SharedCreditsList :credits="content.artists.artists" />
    </div>
    <SharedPieceGallery :pieces="content.pieces" />
  </div>
</template>
