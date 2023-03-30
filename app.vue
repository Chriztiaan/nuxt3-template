<template>
   <v-app>
    <v-main>
      <v-expansion-panels>
      <v-expansion-panel
        title="Item"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      ></v-expansion-panel>
    </v-expansion-panels>
    <v-btn color="red" :icon="mdiAccount"></v-btn>
    <!-- Markup shared across all pages, ex: NavBar -->
    <NuxtPage />
  </v-main>
  </v-app>
</template>


<script setup>
import { mdiAccount } from '@mdi/js'
  
</script>