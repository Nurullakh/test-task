<script setup lang="ts">
import type { Item } from '../types'

interface Props {
  item?: Item | null
}

defineProps<Props>()
</script>

<template>
  <div class="selected-single-panel">
    <div v-if="item" class="selected-single-panel__item">
      {{ item.name }}
    </div>
    <div v-else class="selected-single-panel__placeholder">
      Select item
    </div>
  </div>
</template>

<style scoped>
.selected-single-panel {
  background: linear-gradient(to bottom, #fafafa, #f5f5f5);
  border: 2px solid #e0e0e0;
  border-radius: 12px;
  padding: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.selected-single-panel__item {
  font-size: clamp(16px, 3vw, 24px);
  font-weight: 600;
  color: #333;
  text-align: center;
  word-break: break-word;
}

.selected-single-panel__placeholder {
  font-size: clamp(14px, 2.5vw, 18px);
  color: #bbb;
  text-align: center;
}

@media (min-width: 768px) {
  .selected-single-panel {
    padding: 12px;
  }
  
  .selected-single-panel__item {
    font-size: 20px;
  }
  
  .selected-single-panel__placeholder {
    font-size: 16px;
  }
}

@media (min-width: 1024px) {
  .selected-single-panel {
    padding: 14px;
  }
}
</style>

