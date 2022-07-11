<template>
  <v-app-bar fixed app>
    <v-toolbar-title v-text="title" />
  </v-app-bar>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
      default: '',
    },
  },
}
</script>