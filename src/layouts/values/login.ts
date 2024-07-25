import { MainHeaderProps } from '@/shared/types'

export const headerValues: Record<string, MainHeaderProps> = {
  login: {
    title: 'Log In'
  },
  signup: {
    title: 'Sign Up',
    links: {
      right: {
        name: 'Login',
        link: '/login'
      }
    }
  }
}
