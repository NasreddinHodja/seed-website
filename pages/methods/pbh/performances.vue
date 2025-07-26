<script setup lang="ts">
import performances from "@/content/methods/pbh/performances";

const lang = useCookie<"pt" | "en">("lang", { default: () => "en" });

const content = computed(() => performances[lang.value]);
</script>

<template>
  <LayoutsScrollablePost>
    <SharedPostHeader :title="content.title" langButton />

    <SharedPostDescription :paragraphs="[content.description]" />

    <SharedPieceList
      :works="content.pieces.works"
      :title="content.pieces.title"
    />
  </LayoutsScrollablePost>
</template>
