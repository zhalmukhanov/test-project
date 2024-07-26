import { BottomBarTab, MainHeaderProps } from '@/shared/types'

export const defaultHeaderValues: Record<string, MainHeaderProps> = {
  feed: {
    title: 'Feed',
    links: {
      right: {
        name: 'Filter',
        link: '/feed'
      }
    }
  },
  post: {
    title: '',
    display: false
  },
  profile: {
    title: 'Profile',
    light: true,
    links: {
      left: {
        name: 'Settings',
        link: '/profile'
      },
      right: {
        name: 'Logout',
        link: '/login'
      }
    }
  }
}

export const bottomBarTabs: BottomBarTab[] = [
  {
    name: 'Feed',
    link: '/feed',
    order: 1
  },
  {
    name: 'Market',
    link: '/market',
    order: 2
  },
  {
    name: 'Content',
    link: '/content',
    order: 3
  },
  {
    name: 'Expenses',
    link: '/expenses',
    order: 4
  },
  {
    name: 'Profile',
    link: '/profile',
    order: 5
  }
]
