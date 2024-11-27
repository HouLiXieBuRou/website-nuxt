<script setup lang="js">
const props = defineProps({
  ulValues: {
    type: Object,
    required: true
  },
  class: {
    type: String,
    default: 'list-disc'
  },
  myKey: {
    type: String,
    required: true
  }
});
</script>
<template>
  <ul :class="props.class">
    <li v-for="(item, index) in ulValues.li" :key="`${myKey}-li-${index}`">{{
      item
    }}</li>
  </ul>
</template>
