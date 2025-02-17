<template>
  <Layout>
    <router-link to="/single-select" exact-active-class="link-item-active" class="link-item mb-15"
      >单选题</router-link
    >
    <router-link to="/multi-select" exact-active-class="link-item-active" class="link-item mb-15"
      >多选题</router-link
    >
    <router-link to="/option-select" exact-active-class="link-item-active" class="link-item mb-15"
      >下拉选择</router-link
    >
    <router-link
      to="/single-pic-select"
      exact-active-class="link-item-active"
      class="link-item mb-15"
      >图片单选题</router-link
    >
    <router-link
      to="/multi-pic-select"
      exact-active-class="link-item-active"
      class="link-item mb-15"
      >图片多选题</router-link
    >
  </Layout>
</template>

<script setup lang="ts">
import Layout from './Layout.vue';
</script>

<style scoped lang="scss"></style>
