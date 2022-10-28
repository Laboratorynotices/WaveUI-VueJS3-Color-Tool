<template>
    <w-app id="app" row>
        <aside>
            <NavStandardLayout />
        </aside>
        <w-flex column>
            <HeaderStandardLayout />
            <MainStandardLayout />
            <FooterStandardLayout />
        </w-flex>
        <ScrollToTopButton />
    </w-app>
</template>

<script setup>
import NavStandardLayout from '@/layouts/NavStandardLayout.vue'
import HeaderStandardLayout from '@/layouts/HeaderStandardLayout.vue'
import MainStandardLayout from '@/layouts/MainStandardLayout.vue'
import FooterStandardLayout from '@/layouts/FooterStandardLayout.vue'

import ScrollToTopButton from '@/components/ScrollToTopButton.vue'
</script>

<style>
/* Demo styles - can be discarded. */
.w-app {padding: 4px;background-color: #fffeed;}
header, footer, aside {
  margin: 4px;
  padding: 12px;
  text-transform: uppercase;
  color: #666;
  border: 1px solid rgba(0, 0, 0, 0.07);
}
header, footer {background-color: #e9f8fe;min-height: 60px;}
aside {background-color: #fef2ff;}
</style>
