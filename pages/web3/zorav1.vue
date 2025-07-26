<script setup lang="ts">
import zorav1 from "@/content/web3/zorav1";

const content = zorav1.en;
</script>

<template>
  <LayoutsScrollablePost>
    <SharedPostHeader :title="content.title" :mainLink="content.link" />

    <SharedFlyerImage
      :src="content.flyer.image"
      :link="content.flyer.link"
      class="md:w-2/3 mx-auto"
    />

    <SharedPostDescription :paragraphs="content.descriptionParagraphs" />

    <SharedCaptionedFigure
      video
      :src="content.drLolliVideo.src"
      :caption="content.drLolliVideo.text"
      :link="content.drLolliVideo.link"
      class="md:w-2/3"
    />

    <SharedLink :url="content.seedHeart.link" class="m-auto md:w-1/3">
      <img :src="content.seedHeart.src" />
    </SharedLink>

    <div class="flex flex-col gap-14">
      <h2>{{ content.artists.title }}</h2>
      <SharedCreditsList :credits="content.artists.artists" />
    </div>

    <SharedPieceGallery :pieces="content.pieces" />
  </LayoutsScrollablePost>
</template>
