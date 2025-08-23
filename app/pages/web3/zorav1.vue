<script setup lang="ts">
import zorav1 from "~~/content/web3/zorav1";

const content = zorav1.en;
</script>

<template>
  <LayoutsScrollablePost>
    <SharedPostHeader :title="content.title" :main-link="content.link" />

    <SharedFlyerImage
      :src="content.flyer.image"
      :link="content.flyer.link"
      class="md:w-2/3 mx-auto"
    />

    <SharedPostDescription :paragraphs="content.descriptionParagraphs" />

    <SharedCaptionedFigure
      :src="content.drLolliVideo.src"
      :caption="content.drLolliVideo.text"
      :link="content.drLolliVideo.link"
      type="video"
      class="md:w-2/3"
    />

    <SharedLink :url="content.seedHeart.link" class="m-auto md:w-1/3">
      <img :src="content.seedHeart.src" />
    </SharedLink>

    <SharedCreditsSection
      :credits="[
        { title: content.artists.title, names: content.artists.artists },
      ]"
    />

    <SharedPieceGallery :pieces="content.pieces" />
  </LayoutsScrollablePost>
</template>
