<script setup lang="ts">
import zorav1 from "@/content/web3/zorav1";

const content = zorav1.en;
</script>

<template>
  <LayoutsScrollablePost>
    <SharedScrollablePostHeader
      :title="content.title"
      :mainLink="content.link"
    />

    <SharedFlyerImage
      :src="content.flyer.image"
      :link="content.flyer.link"
      class="md:w-2/3"
    />

    <SharedPostDescription :paragraphs="content.descriptionParagraphs" />

    <figure class="flex flex-col gap-4 md:w-2/3 m-auto">
      <video controls>
        <source :src="content.drLolliVideo.src" type="video/webm" />
      </video>
      <figcaption>
        <a
          :href="content.drLolliVideo.link"
          target="_blank"
          v-html="content.drLolliVideo.text"
        >
        </a>
      </figcaption>
    </figure>

    <a :href="content.seedHeart.link" target="_blank" class="w-full">
      <img :src="content.seedHeart.src" class="m-auto md:w-1/3" />
    </a>

    <div class="flex flex-col gap-14">
      <h2>{{ content.artists.title }}</h2>
      <SharedCreditsList :credits="content.artists.artists" />
    </div>

    <SharedPieceGallery :pieces="content.pieces" />
  </LayoutsScrollablePost>
</template>
