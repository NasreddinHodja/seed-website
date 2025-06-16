<sript setup lang="ts">
useHead({
  titleTemplate: (titleChunk) =>
    titleChunk ? `${titleChunk} - My Site` : "My Site",
  meta: [
    { property: "og:title", content: "S.E.E.D." },
    { property: "og:description", content: "S.E.E.D. art collective" },
    { property: "og:image", content: r2Url("images", "seed.png") },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:image", content: r2Url("images", "seed.png") },
  ],
});
</sript>

<template>
  <div class="fixed inset-0 -z-50 bg-black"></div>
  <div
    class="relative z-0 h-screen w-screen min-h-screen flex flex-col text-white font-mono"
  >
    <div class="hidden lg:flex">
      <LayoutsDefaultHeader />
    </div>
    <div class="lg:hidden">
      <LayoutsMobileHeader />
    </div>

    <main class="flex-1 overflow-y-auto">
      <slot />
    </main>
  </div>
</template>
