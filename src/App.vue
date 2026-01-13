<script setup lang="ts">
import ItemsGrid from './components/ItemsGrid.vue'
import SelectedMultiPanel from './components/SelectedMultiPanel.vue'
import SelectedSinglePanel from './components/SelectedSinglePanel.vue'
import { useSelection, useSingleSelection } from './composables/useSelection'
import { userItems, choiceItems } from './data'

const { selected: userSelected, selectedItems: userSelectedItems, toggle: toggleUser } = useSelection(userItems, 6)
const { selected: choiceSelected, selectedItem: choiceSelectedItem, toggle: toggleChoice } = useSingleSelection(choiceItems)
</script>

<template>
  <div class="app">
    <div class="app__section app__section--top">
      <SelectedMultiPanel 
        :items="userSelectedItems" 
        :max-count="6" 
        class="app__panel"
      />
      <SelectedSinglePanel 
        :item="choiceSelectedItem" 
        class="app__panel"
      />
    </div>

    <div class="app__section app__section--bottom">
      <div class="app__block">
        <ItemsGrid 
          :items="userItems" 
          :selected="userSelected" 
          @select="toggleUser" 
        />
      </div>
      <div class="app__block">
        <ItemsGrid 
          :items="choiceItems" 
          :selected="choiceSelected ? [choiceSelected] : []" 
          @select="toggleChoice" 
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.app {
  width: 100vw;
  min-height: 100vh;
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 12px;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  background-attachment: fixed;
  box-sizing: border-box;
}

.app__section {
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
}

.app__section--top {
  min-height: 25vh;
}

.app__section--bottom {
  flex: 1;
  min-height: 50vh;
}

.app__panel {
  flex: 1;
  min-height: 100px;
}

.app__block {
  flex: 1;
  background: white;
  border: 2px solid #e0e0e0;
  border-radius: 12px;
  padding: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  min-height: 200px;
  display: flex;
  overflow: hidden;
}

@media (min-width: 768px) {
  .app {
    height: 100vh;
    height: 100dvh;
    gap: 12px;
    padding: 12px;
    overflow: hidden;
  }
  
  .app__section {
    flex-direction: row;
    gap: 12px;
  }
  
  .app__section--top {
    height: 22%;
    min-height: auto;
  }
  
  .app__section--bottom {
    height: calc(78% - 12px);
    min-height: auto;
  }
  
  .app__block {
    border-radius: 12px;
    padding: 12px;
    min-height: 0;
  }
  
  .app__panel {
    min-height: auto;
  }
}

@media (min-width: 1024px) {
  .app {
    gap: 14px;
    padding: 14px;
  }
  
  .app__section {
    gap: 14px;
  }
  
  .app__block {
    padding: 14px;
  }
  
  .app__section--bottom {
    height: calc(78% - 14px);
  }
}
</style>
