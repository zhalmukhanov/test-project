import type { RouteLocationNormalized } from 'vue-router'
import { AppLayoutsEnum, AppLayoutToFileMap } from '@/shared/types'

export async function loadLayout (route: RouteLocationNormalized): Promise<void> {
  const { layout } = route.meta
  const normalizedLayoutName = layout || AppLayoutsEnum.default
  const fileName = AppLayoutToFileMap[normalizedLayoutName]
  const fileNameWithoutExtension = fileName.split('.vue')[0]

  const component = await import(`../../layouts/${fileNameWithoutExtension}.vue`)
  route.meta.layoutComponent = component.default
}
