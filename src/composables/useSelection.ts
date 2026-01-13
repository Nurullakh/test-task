import { ref, computed } from 'vue'
import type { Item } from '../types'

export const useSelection = (items: Item[], maxCount = 6) => {
  const selected = ref<number[]>([])

  const selectedItems = computed(() =>
    selected.value.map(id => items.find(item => item.id === id)!).filter(Boolean)
  )

  const toggle = (id: number) => {
    const index = selected.value.indexOf(id)
    if (index > -1) {
      selected.value.splice(index, 1)
    } else if (selected.value.length < maxCount) {
      selected.value.push(id)
    }
  }

  return { selected, selectedItems, toggle }
}

export const useSingleSelection = (items: Item[]) => {
  const selected = ref<number | null>(null)

  const selectedItem = computed(() =>
    selected.value ? items.find(item => item.id === selected.value) || null : null
  )

  const toggle = (id: number) => {
    selected.value = selected.value === id ? null : id
  }

  return { selected, selectedItem, toggle }
}

