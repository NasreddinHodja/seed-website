<script setup lang="ts">
import zorav2 from "@/content/web3/zorav2";
import zorav2Gallery from "@/content/web3/zorav2-gallery";

const lang = useCookie<"pt" | "en">("lang", { default: () => "en" });

const content = computed(() => zorav2[lang.value]);
const ytVideoId = extractYTVideoID(zorav2Gallery.en.video);
</script>

<template>
  <SharedScrollablePost>
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
      <SharedImageView
        :url="content.flyer.image"
        class="max-w-full md:w-2/3 m-auto"
      />
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

    <SharedYTLazyEmbed v-if="ytVideoId" :video-id="ytVideoId" />

    <SharedPictureGallery
      :pictures="zorav2Gallery.en.pictures"
      class="w-full"
    />
  </SharedScrollablePost>
</template>
