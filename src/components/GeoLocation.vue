<template></template>

<script>
import { onMounted, onUnmounted } from "@vue/runtime-core";
import { useGeolocation } from "./useGeolocation";

export function useGeolocation() {
  const coords = ref({ latitude: 0, longitude: 0 });
  const isSupported = "navigator" in window && "geolocation" in navigator;

  let watcher = null;
  onMounted(() => {
    is(isSupported);
    watcher = navigator.geolocation.watchPosition(
      (position) => (coords.value = position.coords)
    );
  });
  onUnmounted(() => {
    if (watcher) navigator.geolocation.clearWatch(watcher);
  });

  return { coords, isSupported };
}
</script>

<style></style>
