<script setup lang="ts">
import type { Item } from '../types'

interface Props {
  item: Item
  selected?: boolean
}

defineProps<Props>()
</script>

<template>
  <div :class="['item-card', { 'item-card--selected': selected }]">
    <span class="item-card__text">{{ item.name }}</span>
  </div>
</template>

<style scoped>
.item-card {
  width: 100%;
  height: 100%;
  border: 2px solid #e0e0e0;
  border-radius: 10px;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  user-select: none;
  padding: 8px;
  box-sizing: border-box;
}

.item-card__text {
  font-weight: 500;
  color: #333;
  font-size: 12px;
  text-align: center;
  word-break: break-word;
}

.item-card:hover {
  border-color: #bbb;
  transform: translateY(-2px) scale(1.02);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.item-card:active {
  transform: translateY(0) scale(0.98);
}

.item-card--selected {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-color: transparent;
  box-shadow: 0 4px 20px rgba(102, 126, 234, 0.4);
}

.item-card--selected .item-card__text {
  color: white;
}

@media (min-width: 768px) {
  .item-card {
    border-radius: 10px;
    padding: 8px;
  }
  
  .item-card__text {
    font-size: 13px;
  }
}

@media (min-width: 1024px) {
  .item-card__text {
    font-size: 14px;
  }
}
</style>
