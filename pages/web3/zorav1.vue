<script setup lang="ts">
import zorav1 from "@/content/web3/zorav1";

const content = zorav1.en;
</script>

<template>
  <SharedScrollablePost>
    <a :href="content.link" target="_blank" rel="noopener noreferrer">
      <h1>{{ content.title }}</h1>
    </a>

    <a
      :href="content.flyer.link"
      target="_blank"
      rel="noopener noreferrer"
      class="flex items-center justify-center mx-auto"
    >
      <SharedImageView :url="content.flyer.image" class="md:w-2/3" />
    </a>

    <div class="flex flex-col gap-10">
      <p
        v-for="paragraph in content.descriptionParagraphs"
        v-html="paragraph"
      ></p>
    </div>

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
  </SharedScrollablePost>
</template>
