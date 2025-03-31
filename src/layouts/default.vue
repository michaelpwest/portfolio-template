<template>
  <v-app>
    <NuxtPage />
  </v-app>
</template>

<script>
import { Details } from '../portfolio';

// eslint-disable-next-line no-undef
useSeoMeta({
  title: () => Details.seo.title,
  description: () => Details.seo.description,
});
</script>

<style lang="scss">
@use '@/assets/styles/variables' as *;
@use '@/assets/styles/styles';
@font-face {
  font-family: 'Nunito';
  src: url('/assets/fonts/Nunito.ttf');
}
</style>
