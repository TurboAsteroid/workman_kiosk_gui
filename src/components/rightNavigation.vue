<template>
  <v-card
      class="mx-auto"
      max-width="400"
      tile
      color="deep-orange darken-1"
  >
    <v-list-item @click="$emit('selected', 1)">
      <v-list-item-content>
        <v-list-item-title>Single-line item</v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-list-item two-line @click="$emit('selected', 2)">
      <v-list-item-content>
        <v-list-item-title>Two-line item</v-list-item-title>
        <v-list-item-subtitle>Secondary text</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-list-item three-line @click="$emit('selected', 3)">
      <v-list-item-content>
        <v-list-item-title>Three-line item</v-list-item-title>
        <v-list-item-subtitle>
          Secondary line text Lorem ipsum dolor sit amet,
        </v-list-item-subtitle>
        <v-list-item-subtitle>
          consectetur adipiscing elit.
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </v-card>
</template>

<script>
export default {
  name: 'rightNavigation',
  props: {
    url: String
  }
}
</script>
<style scoped>
</style>
