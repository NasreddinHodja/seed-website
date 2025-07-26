<script setup lang="ts">
import zorav2 from "@/content/web3/zorav2";
import zorav2Gallery from "@/content/web3/zorav2-gallery";

const lang = useCookie<"pt" | "en">("lang", { default: () => "en" });

const content = computed(() => zorav2[lang.value]);
const ytVideoId = extractYTVideoID(zorav2Gallery.en.video);
</script>

<template>
  <LayoutsScrollablePost>
    <SharedPostHeader
      :title="content.title"
      :mainLink="content.link"
      :relatedLinks="content.links"
      langButton
    />

    <SharedFlyerImage
      :link="content.flyer.link"
      :src="content.flyer.image"
      class="mx-auto md:w-2/3"
    />

    <SharedPostDescription :paragraphs="content.descriptionParagraphs" />

    <SharedPieceGallery :pieces="content.pieces" />

    <SharedCreditsSection
      :credits="[
        { title: content.artists.title, names: content.artists.artists },
      ]"
    />

    <SharedYTLazyEmbed v-if="ytVideoId" :video-id="ytVideoId" />

    <SharedPictureGallery
      :pictures="zorav2Gallery.en.pictures"
      class="w-full"
    />
  </LayoutsScrollablePost>
</template>
