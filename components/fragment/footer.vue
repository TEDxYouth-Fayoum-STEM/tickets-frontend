<template>
  <footer class="box mt-10 select-none p-2 px-5 pb-3 text-center">
    <div class="space-x-3 text-3xl">
      <a
        v-for="brand in brands"
        :key="brand.i"
        :href="setBrandLink(brand.link)"
        target="_blank"
      >
        <Icon
          :i="setBrandIcon(brand.i)"
          class="hover:opacity-75"
          :class="`${brand.c}`"
        />
      </a>
    </div>
    <div class="mt-1 lg:mt-2">
      <Marked t="TEDxYouth@FayoumSTEM" /> | <Marked :t="`© ${year}`" /> All
      Rights Reserved.
    </div>
  </footer>
</template>

<script lang="ts" setup>
const year = new Date().getFullYear();

const brands = [
  {
    i: "facebook-square",
    c: "text-brand-fb",
    link: "www.facebook.com/TEDxYouthFayoumSTEM"
  },
  {
    i: "instagram-square",
    c: "text-brand-ig",
    link: "www.instagram.com/tedxyouthfayoumstem"
  },
  {
    i: "twitter-square",
    c: "text-brand-tw",
    link: "twitter.com/TEDxFayoumSTEM"
  },
  {
    i: "linkedin",
    c: "text-brand-ln",
    link: "www.linkedin.com/company/tedxyouth-fayoumstem"
  }
];

function setBrandLink(link: string): string {
  return `https://${link}`;
}

function setBrandIcon(i: string): string {
  return `b ${i}`;
}
</script>
