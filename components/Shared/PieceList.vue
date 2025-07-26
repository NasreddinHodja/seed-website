<script setup lang="ts">
defineProps<{
  title?: string;
  works: {
    artist: string;
    pieces: {
      name: string;
      type: string;
      date: string;
      src: string;
    }[];
  }[];
}>();
</script>

<template>
  <div class="flex flex-col w-screen-md gap-12">
    <h2 v-if="title">{{ title }}</h2>
    <div class="flex flex-col w-screen-md gap-12">
      <div v-for="work in works" class="flex flex-col gap-4">
        <span class="italic font-semibold text-2xl">{{ work.artist }}</span>
        <SharedLink
          v-for="piece in work.pieces"
          :url="piece.src"
          class="flex flex-row flex-wrap gap-2 items-center"
        >
          <span class="text-lg">- {{ piece.name }}</span>
          <span>({{ piece.date }})</span>
          <span v-if="piece.type === 'mp4'" class="bg-video text-black px-2"
            >MP4</span
          >
          <span
            v-else-if="piece.type === 'mov'"
            class="bg-video text-black px-2"
            >MOV</span
          >
          <span
            v-else-if="piece.type === 'video'"
            class="bg-video text-black px-2"
            >MOV</span
          >
          <span v-else-if="piece.type === 'jpg'" class="bg-img text-black px-2"
            >JPG</span
          >
          <span v-else-if="piece.type === 'png'" class="bg-img text-black px-2"
            >PNG</span
          >
          <span v-else-if="piece.type === 'gif'" class="bg-img text-black px-2"
            >GIF</span
          >
          <span
            v-else-if="piece.type === 'model'"
            class="bg-installation text-black px-2"
            >MODEL</span
          >
          <span
            v-else-if="piece.type === 'web'"
            class="bg-performance text-black px-2"
            >WEB</span
          >
          <span v-else-if="piece.type === 'txt'" class="bg-txt text-black px-2"
            >TXT</span
          >
          <span v-else-if="piece.type === 'zip'" class="bg-dir text-black px-2"
            >ZIP</span
          >
          <span v-else-if="piece.type === 'rar'" class="bg-dir text-black px-2"
            >RAR</span
          >
          <span v-else-if="piece.type === 'pdf'" class="bg-pdf text-black px-2"
            >PDF</span
          >
          <span
            v-else-if="piece.type === 'mp3'"
            class="bg-audio text-black px-2"
            >MP3</span
          >
          <span
            v-else-if="piece.type === 'installation'"
            class="bg-performance text-black px-2"
            >INSTALLATION</span
          >
        </SharedLink>
      </div>
    </div>
  </div>
</template>
