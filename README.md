
# Test Project
## Используемые технологии:
- Vue 3
- vue-router
- TypeScript
- Composition API
- Sass (SCSS)
- Pinia

## Installation

```
npm install
```

### Запуск пректа
```
npm run serve
```

## Documentation
### Layout системы проекта

#### Описание
В данном проекте была реализована **Layout-система**, которая позволяет динамически загружать компоненты макета на основе маршрутов. Это позволяет улучшить модульность и гибкость приложения, предоставляя возможность использовать различные макеты для различных маршрутов.

#### Структура системы
- `src/router/middleware/loadLayout.ts`: Модуль для загрузки компонентов макета.
- `src/router/index.ts`: Основная конфигурация маршрутизатора.
- `src/layouts/AppLayout.vue`: Основной компонент макета.
- `src/layouts/AppLayoutEmpty.vue`: Пример пустого макета.
- `src/shared/types/layouts.ts`: Типы.

#### Подробное описание файлов

### `src/router/middleware/loadLayout.ts`
Этот файл содержит middleware, который отвечает за загрузку компонентов макета на основе маршрута.

```typescript
import type { RouteLocationNormalized } from 'vue-router'
import { AppLayoutsEnum, AppLayoutToFileMap } from '@/shared/types'

export async function loadLayout(route: RouteLocationNormalized): Promise<void> {
  const { layout } = route.meta
  const normalizedLayoutName = layout || AppLayoutsEnum.default
  const fileName = AppLayoutToFileMap[normalizedLayoutName]
  const fileNameWithoutExtension = fileName.split('.vue')[0]

  const component = await import(`../../layouts/${fileNameWithoutExtension}.vue`)
  route.meta.layoutComponent = component.default
}
```

### `src/router/index.ts`
Этот файл содержит конфигурацию маршрутизатора и использование middleware для загрузки макетов.

```typescript
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { loadLayout } from './middleware/loadLayout'
import { AppLayoutsEnum } from '@/shared/types'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/empty',
    name: 'empty',
    component: () => import(/* webpackChunkName: "about" */ '../pages/EmptyPage.vue'),
    meta: {
      layout: AppLayoutsEnum.empty
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(loadLayout)

export default router
```

### `src/layouts/AppLayout.vue`
Этот файл содержит основной компонент макета, который динамически загружает компоненты макета на основе маршрута.

```vue
<script setup lang="ts">
import { useRoute } from 'vue-router'
const route = useRoute()
</script>

<template>
  <transition :name="'page'">
    <component :is="route.meta.layoutComponent">
      <slot />
    </component>
  </transition>
</template>

<style scoped>
</style>
```

### `src/layouts/AppLayoutEmpty.vue`
Этот файл содержит пример пустого макета.

```vue
<template>
  <main>
    <slot />
  </main>
</template>
```

### Типы и перечисления

#### `AppLayoutsEnum`
Перечисление возможных макетов.

```typescript
export enum AppLayoutsEnum {
  empty = 'empty'
}
```

#### `AppLayoutToFileMap`
Карта соответствия макетов и файлов компонентов.

```typescript
export const AppLayoutToFileMap: Record<AppLayoutsEnum, string> = {
  empty: 'AppLayoutEmpty.vue'
}
```

## `usePosts` composable

### Описание
`usePosts` — это composable, который предоставляет функциональность для работы с постами в приложении.

### Функции и переменные
- `usePostsStore`: Импортирует хранилище постов из `post-store`.
- `page`: Референс для отслеживания текущей страницы.
- `posts`: Референс для хранения массива постов.
- `getPosts`: Функция для получения постов с текущей страницы и добавления их в массив `posts`.
- `nextPage`: Функция для перехода на следующую страницу и получения постов с этой страницы.
- `newPosts`: Референс для хранения новых постов, полученных из хранилища.

### Использование

```typescript
import { usePostsStore } from '@/stores/post-store'
import { ref } from 'vue'
import { Post } from '@/shared/types'

export const usePosts = () => {
  const store = usePostsStore()

  const page = ref<number>(1)
  const posts = ref<Post[]>([])

  const getPosts = () => {
    posts.value.push(...store.getPostByPage(page.value))
  }

  const nextPage = () => {
    if (page.value < store.maxPage) {
      page.value++
      getPosts()
    }
  }

  return {
    newPosts: store.newPosts(),
    posts,
    getPosts,
    nextPage
  }
}
```

### Подробное описание функций

#### `usePosts`
Этот хук инициализирует состояние и предоставляет функции для работы с постами.

#### `page`
Переменная `ref` для отслеживания текущей страницы. Начальное значение — 1.

#### `posts`
Переменная `ref` для хранения массива постов.

#### `getPosts`
Функция для получения постов с текущей страницы и добавления их в массив `posts`.

```typescript
const getPosts = () => {
  posts.value.push(...store.getPostByPage(page.value))
}
```

#### `nextPage`
Функция для перехода на следующую страницу и получения постов с этой страницы.

```typescript
const nextPage = () => {
  if (page.value < store.maxPage) {
    page.value++
    getPosts()
  }
}
```

### Возвращаемые значения
- `newPosts`: Новые посты, полученные из хранилища.
- `posts`: Массив постов.
- `getPosts`: Функция для получения постов.
- `nextPage`: Функция для перехода на следующую страницу и получения постов.

### Пример использования
```typescript
import { usePosts } from '@/composables/usePosts'

export default {
  setup() {
    const { newPosts, posts, getPosts, nextPage } = usePosts()

    // Инициализация получения постов при загрузке компонента
    getPosts()

    return {
      newPosts,
      posts,
      getPosts,
      nextPage
    }
  }
}
```

`usePosts` предоставляет удобный интерфейс для работы с постами, включая функции для получения постов и перехода на следующую страницу. Это делает управление постами в приложении более удобным и гибким.


## `useUserStore`
`useUserStore` — это Pinia store, который управляет данными пользователя и его постами. Хранилище предоставляет функции для получения постов и фотографий пользователя.

### Импортируемые модули и зависимости
- `defineStore` из `pinia`: для определения Pinia store.
- `posts`, `user` из `@/stores/values`: начальные значения постов и пользователя.
- `computed`, `ref` из `vue`: для создания реактивных данных и вычисляемых свойств.
- `Post`, `User` из `@/shared/types`: типы для постов и пользователей.

### Подробное описание свойств и методов

#### `allPosts`
Реактивная переменная, содержащая все посты.

```typescript
const allPosts = ref<Post[]>(posts)
```

#### `user`
Реактивная переменная, содержащая информацию о текущем пользователе.

```typescript
const user = ref<User>(userVal)
```

#### `userPosts`
Вычисляемое свойство, возвращающее массив постов текущего пользователя. Посты сортируются в случайном порядке и ограничиваются пятью постами.

```typescript
const userPosts = computed(() => {
  return allPosts.value
    .filter(post => post.authorId === user.value.id)
    .sort(() => Math.random() - 0.5)
    .slice(0, 5)
})
```

#### `userPhotos`
Вычисляемое свойство, возвращающее массив фотографий текущего пользователя. Фотографии сортируются в случайном порядке и ограничиваются тремя фотографиями.

```typescript
const userPhotos = computed(() => {
  return allPosts.value
    .filter(post => post.authorId === user.value.id)
    .sort(() => Math.random() - 0.5)
    .slice(0, 3)
})
```

### Возвращаемые значения
- `user`: Реактивная переменная, содержащая информацию о текущем пользователе.
- `userPosts`: Вычисляемое свойство, возвращающее массив постов текущего пользователя.
- `userPhotos`: Вычисляемое свойство, возвращающее массив фотографий текущего пользователя.

### Пример использования

```typescript
import { useUserStore } from '@/stores/user-store'

export default {
  setup() {
    const userStore = useUserStore()

    return {
      user: userStore.user,
      userPosts: userStore.userPosts,
      userPhotos: userStore.userPhotos
    }
  }
}
```

### Структура проекта

Проект имеет следующую структуру директорий и файлов:

#### Корневая структура

```plaintext
src
├── assets
├── components
│   ├── profile
│   │   ├── ProfilePhoto.vue
│   │   └── ProfilePosts.vue
│   └── ui
│       ├── BottomBar.vue
│       ├── LargeContent.vue
│       ├── MainHeader.vue
│       ├── PasswordInput.vue
│       ├── SearchInput.vue
│       ├── SegmentControl.vue
│       ├── SmallContent.vue
│       ├── StandardButton.vue
│       ├── StandardCheckbox.vue
│       └── StandardInput.vue
├── composables
│   └── posts.ts
├── layouts
│   ├── values
│   ├── AppLayout.vue
│   ├── AppLayoutDefault.vue
│   ├── AppLayoutEmpty.vue
│   └── AppLayoutLogin.vue
├── pages
│   ├── FeedPage.vue
│   ├── LoginPage.vue
│   ├── NotFoundPage.vue
│   ├── PostContentPage.vue
│   ├── ProfilePage.vue
│   └── SignupPage.vue
├── router
│   ├── middleware
│   │   └── loadLayout.ts
│   └── index.ts
├── shared
│   ├── helpers
│   │   ├── index.ts
│   │   └── time.ts
│   └── types
│       ├── index.ts
│       ├── layouts.ts
│       ├── post.ts
│       ├── router.ts
│       ├── ui.ts
│       └── user.ts
├── stores
│   └── values
│   ├── post-store.ts
│   └── user-store.ts
├── App.vue
└── main.ts
```

### Описание директорий и файлов

#### `assets`
Директория для хранения статических ресурсов, таких как изображения, шрифты и т.д.

#### `components`
Компоненты Vue, разделенные на логические группы:
- `profile`: Компоненты, связанные с профилем пользователя (например, `ProfilePhoto.vue`, `ProfilePosts.vue`).
- `ui`: Общие UI компоненты, используемые в различных частях приложения (например, `BottomBar.vue`, `LargeContent.vue`, `MainHeader.vue` и т.д.).

#### `composables`
Директория для хранения композиционных функций, использующих Composition API (например, `posts.ts`).

#### `layouts`
Компоненты макетов, которые определяют структуру страницы:
- `values`: Вспомогательные файлы для макетов.
- `AppLayout.vue`: основной макет приложения. Этот макет может быть использован для обертки других макетов или страниц, предоставляя единообразную структуру.
- `AppLayoutDefault.vue`, `AppLayoutEmpty.vue`, `AppLayoutLogin.vue`: Различные макеты страниц.

#### `pages`
Страницы приложения, каждая из которых представляет отдельный маршрут (например, `FeedPage.vue`, `LoginPage.vue`, `NotFoundPage.vue`, `PostContentPage.vue`, `ProfilePage.vue`, `SignupPage.vue`).

#### `router`
Конфигурация маршрутизатора:
- `middleware`: Промежуточные обработчики для маршрутов (например, `loadLayout.ts`).
- `index.ts`: Основная конфигурация маршрутизатора.

#### `shared`
Общие модули и типы, используемые в различных частях приложения:
- `helpers`: Вспомогательные функции (например, `time.ts`).
- `types`: Определения типов TypeScript (например, `layouts.ts`, `post.ts`, `router.ts`, `ui.ts`, `user.ts`).

#### `stores`
Хранилища (store) для управления состоянием приложения:
- `values`: Начальные значения для хранилищ
- `post-store.ts`, `user-store.ts` store файлы.

#### `App.vue`
Основной компонент приложения Vue.

#### `main.ts`
Точка входа в приложение, где происходит инициализация Vue и подключение маршрутизатора и хранилищ.
