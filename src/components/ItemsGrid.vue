<script setup lang="ts">
import type { Item } from '../types'
import ItemCard from './ItemCard.vue'

interface Props {
  items: Item[]
  selected: number[]
  columns?: number
}

const props = withDefaults(defineProps<Props>(), {
  columns: 4
})

defineEmits<{
  select: [id: number]
}>()
</script>

<template>
  <div class="items-grid">
    <ItemCard
      v-for="item in items"
      :key="item.id"
      :item="item"
      :selected="selected.includes(item.id)"
      class="items-grid__item"
      @click="$emit('select', item.id)"
    />
  </div>
</template>

<style scoped>
.items-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: minmax(80px, 1fr);
  gap: 8px;
  height: 100%;
  width: 100%;
}

.items-grid__item {
  min-height: 0;
  min-width: 0;
}

@media (min-width: 480px) {
  .items-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 768px) {
  .items-grid {
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: 1fr;
    gap: 10px;
  }
}

@media (min-width: 1024px) {
  .items-grid {
    gap: 12px;
  }
}
</style>
