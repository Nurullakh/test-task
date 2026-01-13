<script setup lang="ts">
import type { Item } from '../types'
import ItemCard from './ItemCard.vue'

interface Props {
  items?: Item[]
  maxCount?: number
}

withDefaults(defineProps<Props>(), {
  maxCount: 6
})
</script>

<template>
  <div class="selected-multi-panel">
    <div class="selected-multi-panel__grid">
      <ItemCard
        v-for="item in items"
        :key="item.id"
        :item="item"
        :selected="true"
        class="selected-multi-panel__item"
      />
    </div>
    <div class="selected-multi-panel__counter">
      {{ items?.length || 0 }} / {{ maxCount }}
    </div>
  </div>
</template>

<style scoped>
.selected-multi-panel {
  background: linear-gradient(to bottom, #fafafa, #f5f5f5);
  border: 2px solid #e0e0e0;
  border-radius: 12px;
  padding: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 8px;
}

.selected-multi-panel__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 1fr;
  gap: 8px;
  flex: 1;
}

.selected-multi-panel__item {
  min-height: 0;
  min-width: 0;
}

.selected-multi-panel__item :deep(.item-card) {
  cursor: default;
}

.selected-multi-panel__item :deep(.item-card:hover) {
  transform: none;
}

.selected-multi-panel__counter {
  font-size: 14px;
  font-weight: 600;
  color: #666;
  text-align: center;
  padding-top: 8px;
  border-top: 2px solid #e0e0e0;
  flex-shrink: 0;
}

@media (min-width: 480px) {
  .selected-multi-panel__grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 768px) {
  .selected-multi-panel {
    padding: 12px;
  }
  
  .selected-multi-panel__grid {
    gap: 8px;
  }
}

@media (min-width: 1024px) {
  .selected-multi-panel {
    padding: 14px;
  }
  
  .selected-multi-panel__grid {
    gap: 10px;
  }
}
</style>

