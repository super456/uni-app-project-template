<!-- 我的 -->
<template>
  <CusPageLayout>
    <template #header>
      用户昵称：{{ userInfo.nickname }}
    </template>
    <template #container>
      内容
    </template>
    <template #footer>
      底部
    </template>
  </CusPageLayout>
</template>

<script lang="ts" setup>
import { useUserStore } from '@/stores'
const { userInfo } = storeToRefs(useUserStore())

</script>

<style lang="scss" scoped>
</style>
