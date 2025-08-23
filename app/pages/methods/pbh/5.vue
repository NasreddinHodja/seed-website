<script setup lang="ts">
import index from "~~/content/methods/pbh/5";

const lang = useCookie<"pt" | "en">("lang", { default: () => "en" });

const content = computed(() => index[lang.value]);
</script>

<template>
  <LayoutsScrollablePost>
    <SharedPostHeader :title="content.title" lang-button />

    <SharedFlyerImage :src="content.image" class="md:w-2/3 mx-auto" />

    <SharedPostDescription :paragraphs="[content.description]" />
  </LayoutsScrollablePost>
</template>
