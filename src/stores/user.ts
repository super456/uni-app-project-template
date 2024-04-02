// 用户信息
import { defineStore } from 'pinia'

/** 用户信息 */
type State = {
  userInfo: Record<string, unknown>
}

export const useUserStore = defineStore('user', {
  state: () => <State>({
    userInfo: {
      nickname: '这是一个自定义用户昵称',
    },
  }),
  getters: {
    getUserInfoName: (state) => state.userInfo.nickname,
  },
  actions: {
    // 获取用户信息
    async getUserInfo () {
    },
  },
})
