<script setup lang="ts">
import coreMembers from "~/content/about/core-members";

const content = coreMembers.en;
</script>

<template>
  <div
    class="flex flex-col w-screen gap-24 px-6 md:px-16 py-14 md:py-24 items-start md:items-center"
  >
    <div class="flex flex-col gap-6 md:gap-10 md:w-96">
      <div
        v-for="member in content.members"
        :key="member.name"
        class="shrink-0"
      >
        <SharedLink :url="member.link">
          <h2>{{ member.name }}</h2>
        </SharedLink>
      </div>
    </div>
    <div class="flex flex-col flex-wrap gap-10 md:w-96">
      <h1>{{ content.hallOfFame.title }}</h1>
      <div
        v-for="member in content.hallOfFame.members"
        :key="member.name"
        class="shrink-0"
      >
        <SharedLink :url="member.link">
          <h3>{{ member.name }}</h3>
        </SharedLink>
      </div>
    </div>
  </div>
</template>
