import type { VueElement } from 'vue'
import type { AppLayoutsEnum } from './'

declare module 'vue-router' {
  interface RouteMeta {
    layout?: AppLayoutsEnum;
    layoutComponent?: VueElement;
  }
}
