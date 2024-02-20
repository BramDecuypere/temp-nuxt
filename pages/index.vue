<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { useAppStore } from "../stores/app";

const appStore = useAppStore();

const { theme } = storeToRefs(appStore);
</script>

<template>
  <div>
    <pre>{{ theme }}</pre>
  </div>
</template>
