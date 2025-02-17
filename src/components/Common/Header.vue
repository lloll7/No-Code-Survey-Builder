<template>
  <div class="header-container flex self-start align-items-center border-box">
    <!-- 分为三部分 -->
    <div class="left flex justify-content-center align-items-center">
      <el-button :icon="ArrowLeft" size="middle" circle @click="goHome" />
    </div>
    <div class="center flex align-items-center space-between pl-15 pr-15"></div>
    <div class="right flex justify-content-center align-items-center">
      <el-avatar :size="50" :src="avatar" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ArrowLeft } from '@element-plus/icons-vue';
import { useRouter } from 'vue-router';
import { ref } from 'vue';

const router = useRouter();

const avatar = ref(
  'https://ts1.cn.mm.bing.net/th/id/R-C.3f3613f0b1096ff34190f00e6799c579?rik=8vNALg5%2fp6wlUA&riu=http%3a%2f%2fwww.gx8899.com%2fuploads%2fallimg%2f160527%2f3-16052G55545-50.gif&ehk=GNokoHFKQ0o72UlItORUGDly7BRP4Qxs0jT5MCflFug%3d&risl=&pid=ImgRaw&r=0',
);

const goHome = () => {
  router.push('/'); // 跳转到首页
};
</script>

<style scoped lang="scss">
.header-container {
  width: 100%;
  height: 50px;
  border-bottom: 1px solid var(--border-color);
  .left {
    width: 60px;
    height: 100%;
  }
  .center {
    flex: 1;
    height: 100%;
    border-left: 1px solid var(--border-color);
    border-right: 1px solid var(--border-color);
  }
  .right {
    width: 80px;
    height: 100%;
  }
}
</style>
