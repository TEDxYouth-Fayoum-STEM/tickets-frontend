<template>
  <!-- Inspired by: https://flowbite.com/docs/components/card/#pricing-card -->
  <div class="flex flex-col items-center sm:max-w-lg md:w-auto lg:max-w-xl">
    <img class="w-auto rounded-t-lg" src="/ticket.jpeg" />
    <div class="mt-5">
      <div class="select-none">
        <h5 class="mb-1 text-xl font-medium text-primary-300 lg:mb-2">
          PERSEIDS TICKET
        </h5>
        <div class="flex items-baseline text-gray-900 dark:text-white">
          <span class="text-2xl font-semibold">L.E.</span>
          <span class="text-4xl font-extrabold tracking-tight">149</span>
        </div>
      </div>
      <ul
        role="list"
        class="mt-4 flex flex-wrap place-items-start gap-x-6 gap-y-3"
      >
        <li
          v-for="pack in ticketPackage"
          :key="pack.i"
          class="grid grid-flow-col content-center space-x-2 text-base"
        >
          <Icon :i="setSolidIcon(pack.i)" class="text-xl" />
          <span class="leading-tight text-gray-700 dark:text-gray-400">
            {{ pack.t }}
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
const ticketPackage = [
  { i: "clipboard-user", t: "Attendance" },
  {
    i: "box",
    t: "FayPackage (Bracelet, Note, Pen, Bag & Stickers)"
  },
  { i: "utensils", t: "Meals (Breakfast & Lunch)" },
  { i: "circle-check", t: "Access to all Booths" },
  { i: "mug-hot", t: "Access to all Catering & Beverage" },
  { i: "chalkboard", t: "Access to all Internships & Courses" },
  { i: "gift", t: "Access to all Giveaways & Offers " }
];

function setSolidIcon(i: string): string {
  return `s ${i}`;
}
</script>
