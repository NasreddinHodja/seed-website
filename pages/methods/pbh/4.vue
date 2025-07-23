<script setup lang="ts">
import index from "@/content/methods/pbh/4";

const lang = useCookie<"pt" | "en">("lang", { default: () => "en" });

const content = computed(() => index[lang.value]);
</script>

<template>
  <LayoutsScrollablePost>
    <SharedScrollablePostHeader :title="content.title" langButton />

    <SharedFlyerImage :src="content.image.src" class="md:w-2/3 mx-auto" />

    <SharedPostDescription :paragraphs="[content.description]" />

    <SharedPieceList :works="content.pieces.works" />
  </LayoutsScrollablePost>
</template>
