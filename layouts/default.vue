<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk) =>
    titleChunk ? `${titleChunk} - S.E.E.D.` : "S.E.E.D.",
  meta: [
    { property: "og:title", content: "S.E.E.D." },
    { property: "og:description", content: "S.E.E.D. art collective" },
    { property: "og:image", content: r2Url("images", "seed.png") },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:image", content: r2Url("images", "seed.png") },
  ],
});
</script>

<template>
  <div class="h-screen-dynamic w-screen">
    <div class="fixed inset-0 -z-50 w-full h-full bg-black"></div>

    <div class="relative z-0 h-full w-full flex flex-col text-white font-mono">
      <div class="hidden lg:flex">
        <LayoutsDefaultHeader />
      </div>
      <div class="lg:hidden">
        <LayoutsMobileHeader />
      </div>

      <main class="w-full h-full flex-1 overflow-y-auto">
        <slot />
      </main>
    </div>
  </div>
</template>
