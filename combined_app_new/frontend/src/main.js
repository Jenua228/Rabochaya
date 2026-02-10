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
ModuleRegistry.registerModules([
  ClientSideRowModelModule,
  RowGroupingModule
]);
// Стили
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

// Импорты AG Grid для Vue 3 и версии 35.x
import { AgGridVue } from 'ag-grid-vue3';

const app = createApp(App)

app.use(createPinia())
app.use(i18n)
app.component('AgGridVue', AgGridVue);

app.mount('#app')