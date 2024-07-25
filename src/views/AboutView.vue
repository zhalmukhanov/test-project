<template>
  <div class="about">
    <main-header text="Sign Up" :links="headerLinks"/>

    <bottom-bar style="margin-top: 20px;" :tabs="bottomBarTabs" :active-tab="'/about'"/>

    <standart-button style="margin-top: 20px;">Sign Up</standart-button>

    <standart-input style="margin-left: 20px;" placeholder="Name"/>

    <password-input style="margin-top: 20px;" placeholder="Password"/>

    <search-input style="margin-left: 20px;" placeholder="Search"/>
  </div>
</template>
<script setup lang="ts">
import MainHeader from '@/components/ui/MainHeader.vue'
import BottomBar from '@/components/ui/BottomBar.vue'
import StandartButton from '@/components/ui/StandartButton.vue'
import StandartInput from '@/components/ui/StandartInput.vue'

import { BottomBarTab, MainHeaderLinks } from '@/shared/types/ui'
import PasswordInput from '@/components/ui/PasswordInput.vue'
import SearchInput from '@/components/ui/SearchInput.vue'

const headerLinks: MainHeaderLinks = {
  right: {
    name: 'right',
    link: '/'
  },
  left: {
    name: 'left',
    link: '/about'
  }
}

const bottomBarTabs: BottomBarTab[] = [
  {
    name: 'Content',
    link: '/',
    order: 1
  },
  {
    name: 'Feed',
    link: '/',
    order: 2
  },
  {
    name: 'Profile',
    link: '/',
    order: 3
  },
  {
    name: 'Settings',
    link: '/',
    order: 4
  },
  {
    name: 'About',
    link: '/about',
    order: 5
  }
]

</script>
