<script setup lang="ts">
import index from "@/content/methods/pbh/1";

const lang = useCookie<"pt" | "en">("lang", { default: () => "en" });

const content = computed(() => index[lang.value]);
</script>

<template>
  <LayoutsScrollablePost>
    <SharedPostHeader :title="content.title" langButton />

    <div class="w-full mx-auto flex flex-col gap-4">
      <SharedFlyerImage :src="content.image.src" class="md:w-2/3 mx-auto" />
      <h4>
        {{ content.image.caption }}
      </h4>
    </div>

    <SharedPostDescription :paragraphs="content.description" />

    <SharedPieceList :works="content.pieces.works" />
  </LayoutsScrollablePost>
</template>
