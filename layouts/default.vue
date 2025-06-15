<template>
  <div class="bg-black absolute -z-50">
    <div
      class="absolute z-0 h-screen w-screen flex flex-col text-white font-mono"
    >
      <div class="hidden lg:flex"><LayoutsDefaultHeader /></div>
      <div class="lg:hidden"><LayoutsMobileHeader /></div>

      <slot />
    </div>
  </div>
</template>
