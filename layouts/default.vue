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
