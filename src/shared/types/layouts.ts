export enum AppLayoutsEnum {
  default = 'default',
  login = 'login',
  empty = 'empty'
}

export const AppLayoutToFileMap: Record<AppLayoutsEnum, string> = {
  default: 'AppLayoutDefault.vue',
  login: 'AppLayoutLogin.vue',
  empty: 'AppLayoutEmpty.vue'
}
