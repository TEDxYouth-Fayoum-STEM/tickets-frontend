<template>
  <div class="box flex flex-col items-center p-5 drop-shadow-md">
    <Title t="TICKETS ARE AVAILABLE!" class="text-center" />
    <FragmentTicketPackage class="mt-4 lg:mt-7" />
    <FragmentTicketInstructions class="mt-6" />
    <FragmentTicketForm class="mt-7 block w-full lg:mt-0" />
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "form",
  title: "Tickets"
});
</script>
