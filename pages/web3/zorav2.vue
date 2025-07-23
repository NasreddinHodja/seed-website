<script setup lang="ts">
import zorav2 from "@/content/web3/zorav2";
import zorav2Gallery from "@/content/web3/zorav2-gallery";

const lang = useCookie<"pt" | "en">("lang", { default: () => "en" });

const content = computed(() => zorav2[lang.value]);
const ytVideoId = extractYTVideoID(zorav2Gallery.en.video);
</script>

<template>
  <LayoutsScrollablePost>
    <SharedScrollablePostHeader
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

    <div class="flex flex-col gap-14">
      <h2>{{ content.artists.title }}</h2>
      <SharedCreditsList :credits="content.artists.artists" />
    </div>

    <SharedYTLazyEmbed v-if="ytVideoId" :video-id="ytVideoId" />

    <SharedPictureGallery
      :pictures="zorav2Gallery.en.pictures"
      class="w-full"
    />
  </LayoutsScrollablePost>
</template>
