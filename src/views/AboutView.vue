<template>
  <div class="about">
    <large-content style="margin-top: 20px" :content="content"/>

    <main-header title="Sign Up" :links="headerLinks"/>

    <bottom-bar style="margin-top: 20px;" :tabs="bottomBarTabs" :active-tab="'/about'"/>

    <standard-button style="margin-top: 20px;">Sign Up</standard-button>

    <standard-input style="margin-left: 20px;" placeholder="Name"/>

    <password-input style="margin-top: 20px;" placeholder="Password"/>

    <search-input style="margin-left: 20px;" placeholder="Search"/>

    <standard-checkbox style="margin-top: 20px;" label="Text Here" />

    <segment-control style="margin-top: 20px" :tabs="segmentControlTabs"/>

    <small-content style="margin-top: 20px" :content="content"/>
  </div>
</template>
<script setup lang="ts">
import MainHeader from '@/components/ui/MainHeader.vue'
import BottomBar from '@/components/ui/BottomBar.vue'
import StandardButton from '@/components/ui/StandardButton.vue'
import StandardInput from '@/components/ui/StandardInput.vue'
import PasswordInput from '@/components/ui/PasswordInput.vue'
import SearchInput from '@/components/ui/SearchInput.vue'
import StandardCheckbox from '@/components/ui/StandardCheckbox.vue'
import SegmentControl from '@/components/ui/SegmentControl.vue'
import SmallContent from '@/components/ui/SmallContent.vue'

import { BottomBarTab, Content, MainHeaderLinks, SegmentControlTab } from '@/shared/types'
import LargeContent from '@/components/ui/LargeContent.vue'

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

const segmentControlTabs: SegmentControlTab[] = [
  {
    name: 'First Option',
    value: '1'
  },
  {
    name: 'Second Option',
    value: '2'
  }
]

const content: Content = {
  title: 'Title',
  text: 'Text',
  time: '2024-07-24T23:00:00.000Z'
}

</script>
