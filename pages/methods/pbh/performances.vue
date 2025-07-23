<script setup lang="ts">
import performances from "@/content/methods/pbh/performances";

const lang = useCookie<"pt" | "en">("lang", { default: () => "en" });

const content = computed(() => performances[lang.value]);
</script>

<template>
  <LayoutsScrollablePost>
    <SharedScrollablePostHeader :title="content.title" langButton />

    <div v-html="content.description" class="flex flex-col gap-6"></div>

    <SharedPieceList
      :works="content.pieces.works"
      :title="content.pieces.title"
    />
  </LayoutsScrollablePost>
</template>
