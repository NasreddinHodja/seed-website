<script setup lang="ts">
import index from "~~/content/methods/pbh/1";

const lang = useCookie<"pt" | "en">("lang", { default: () => "en" });

const content = computed(() => index[lang.value]);
</script>

<template>
  <LayoutsScrollablePost>
    <SharedPostHeader :title="content.title" lang-button />

    <SharedCaptionedFigure
      :src="content.image.src"
      :caption="content.image.caption"
      class="w-full md:w-2/3 mx-auto"
      type="image"
    />

    <SharedPostDescription :paragraphs="content.description" />

    <SharedPieceList :works="content.pieces.works" />
  </LayoutsScrollablePost>
</template>
