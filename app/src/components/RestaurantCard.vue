<script setup lang="ts">
import { defineComponent, computed } from 'vue'
import type { PropType } from 'vue'
import type { Restaurant } from '@/types'

type PropTypes = {
  restaurant: Restaurant
}
const props = defineProps<PropTypes>()
// const emits= defineEmits(['delete-restaurant'])

const emits = defineEmits<{
  (e: 'delete-restaurant', restaurant: Restaurant): void
}>()

const statusColor = computed(() => {
  if (props.restaurant) {
    switch (props.restaurant.status) {
      case 'Want to Try':
        return 'is-warning'
      case 'Recommended':
        return 'is-success'
      case 'Do Not Recommend':
        return 'is-danger'
      default:
        return ''
    }
  }
})
const deleteRestaurant = () => {
  console.log('clicked')
  emits('delete-restaurant', props.restaurant)
}
</script>

<template>
  <article class="box">
    <div class="media">
      <aside class="media-left">
        <img src="https://placehold.jp/150x150.png" alt="" />
      </aside>
      <div class="media-content">
        <p class="title is-4 is-spaced mb-1">
          {{ restaurant.name }}
        </p>
        <p class="subtitle mb-2">
          <span class="tag" :class="statusColor">{{ restaurant.status }}</span>
        </p>
        <div class="content mb-2">
          {{ restaurant.address }}
        </div>
        <div>
          <button @click="deleteRestaurant" class="button is-small is-danger is-light">Delete</button>
        </div>
      </div>
    </div>
  </article>
</template>

<style></style>
