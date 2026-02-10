import { createApp } from 'vue'
import App from './App.vue'
import i18n from './i18n'
import './styles/main.css'
// import 'ag-grid-community/styles/ag-grid.css'
// import 'ag-grid-community/styles/ag-theme-alpine.css'
import { createPinia } from 'pinia'

// import 'ag-grid-enterprise';
import { ModuleRegistry } from 'ag-grid-community';
import { ClientSideRowModelModule } from 'ag-grid-community';
import { RowGroupingModule } from '@ag-grid-enterprise/row-grouping';
import { MenuModule } from '@ag-grid-enterprise/menu';
import { SetFilterModule } from '@ag-grid-enterprise/set-filter';
import { ColumnsToolPanelModule } from '@ag-grid-enterprise/column-tool-panel';
import { FiltersToolPanelModule } from '@ag-grid-enterprise/filter-tool-panel';
import { SideBarModule } from '@ag-grid-enterprise/side-bar';
ModuleRegistry.registerModules([
  ClientSideRowModelModule,
  RowGroupingModule,
  MenuModule, 
  SetFilterModule, 
  ColumnsToolPanelModule, 
  FiltersToolPanelModule,
  SideBarModule
]);
// Стили
import 'ag-grid-enterprise/styles/ag-grid.css';
import 'ag-grid-enterprise/styles/ag-theme-alpine.css';

// Импорты AG Grid для Vue 3 и версии 35.x
import { AgGridVue } from 'ag-grid-vue3';

const app = createApp(App)

app.use(createPinia())
app.use(i18n)
app.component('AgGridVue', AgGridVue);

app.mount('#app')