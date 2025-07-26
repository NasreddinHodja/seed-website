<script setup lang="ts">
import index from "@/content/methods/pbh/2";

const lang = useCookie<"pt" | "en">("lang", { default: () => "en" });

const content = computed(() => index[lang.value]);
</script>

<template>
  <LayoutsScrollablePost>
    <SharedPostHeader :title="content.title" langButton />

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
