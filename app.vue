<script lang="ts" setup>
const route = useRoute();

useHead({
  title: `${route.meta.title} | TEDxYouth@FayoumSTEM`
});
</script>

<template>
  <Html>
    <Head>
      <meta charset="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1,
      max-scale=1, user-scalable=0"
      />
      <link rel="favicon" href="/favicon.ico" />
    </Head>
    <Body class="">
      <div
        class="txt flex min-h-screen w-screen flex-col bg-light dark:bg-dark"
      >
        <FragmentHeader />
        <NuxtLayout>
          <NuxtPage />
        </NuxtLayout>
        <div class="grow"></div>
        <FragmentFooter />
      </div>
    </Body>
  </Html>
</template>
