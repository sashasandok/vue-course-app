<template>
  <NuxtLoadingIndicator />
  <div>
    <Header></Header>
    <NuxtLayout><NuxtPage /></NuxtLayout>
  </div>
</template>

<script lang="ts" setup>
import Header from "@components/composites/Header.vue";
import { useCharacterStore } from "@stores/Character";

const characterStore = useCharacterStore();

useHead({
  title: 'Characters App',
});

onMounted(() => {
  const favouriteCharacters = JSON.parse(
    localStorage.getItem("favouriteCharactersList") as string
  );
  if (favouriteCharacters)
    characterStore.setFavouriteCharactersList(favouriteCharacters);
});
</script>
