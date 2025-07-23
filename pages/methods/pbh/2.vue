<script setup lang="ts">
import index from "@/content/methods/pbh/2";

const lang = useCookie<"pt" | "en">("lang", { default: () => "en" });

const content = computed(() => index[lang.value]);
</script>

<template>
  <LayoutsScrollablePost>
    <SharedLangButton />

    <h1>{{ content.title }}</h1>

    <div class="flex flex-col gap-10">
      <p v-for="paragraph in content.description" v-html="paragraph"></p>
    </div>

    <div class="w-fit mx-auto flex flex-col gap-4">
      <img :src="content.image.src" class="mx-auto md:w-2/3" />
      <h4>
        {{ content.image.caption }}
      </h4>
    </div>

    <SharedPieceList :works="content.pieces.works" />
  </LayoutsScrollablePost>
</template>
