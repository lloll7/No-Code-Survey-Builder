<!--
 * @Author: lloll7 Linzylloll@outlook.com
 * @Date: 2025-02-21 16:21:11
 * @LastEditors: lloll7 Linzylloll@outlook.com
 * @LastEditTime: 2025-02-22 15:59:23
 * @FilePath: \wenjuan\src\components\SurveyComs\Common\PicItem.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div @click.stop>
    <div class="container mb-10">
      <!-- 添加图片 -->
      <div class="top flex justify-content-center align-items-center">
        <el-upload
          class="avatar-uploader"
          action="/api/upload"
          name="image"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
        >
          <img v-if="imageUrl" :src="imageUrl" class="avatar" />
          <div v-else>
            <el-icon><Upload /></el-icon>
            添加图片
          </div>
        </el-upload>
      </div>
      <!-- 图片标题和描述 -->
      <div
        class="bottom flex justify-content-center align-items-center flex-direction-column font-weight-500"
      >
        <div class="item">{{ picTitle }}</div>
        <div class="desc mt-5 mb-5">{{ picDesc }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, inject } from 'vue';
import { Upload } from '@element-plus/icons-vue';
import { ElMessage } from 'element-plus';
import type { UploadProps } from 'element-plus';

const props = defineProps({
  picTitle: {
    type: String,
    default: '',
  },
  picDesc: {
    type: String,
    default: '',
  },
  value: {
    type: String,
    default: '',
  },
  index: {
    type: Number,
    default: 0,
  },
});

const getLink = inject('getLink');

const imageUrl = ref('');

const handleAvatarSuccess: UploadProps['onSuccess'] = async (response) => {
  // 图片上传成功的操作
  //   imageUrl.value = URL.createObjectURL(uploadFile.raw!);
  // console.log(response, '2222');
  if (getLink) {
    getLink({
      index: props.index,
      link: response.imageUrl,
    });
  }
};
const beforeAvatarUpload: UploadProps['beforeUpload'] = (rawFile) => {
  if (rawFile.size / 1024 / 1024 > 2) {
    ElMessage.error('图片大小不要超过2MB!');
    return false;
  }
  return true;
};
</script>

<style scoped lang="scss">
.container {
  width: 200px;
  height: 300px;
  border: 1px solid var(--font-color-lightest);
  border-radius: var(--border-radius-md);
  color: var(--font-color-light);
  > .top {
    width: 100%;
    height: 200px;
    background-color: var(--font-color-lightest);
  }
  > .bottom {
    height: 100px;
    font-size: var(--font-size-lg);
    > .desc {
      font-size: var(--font-size-base);
      color: var(--font-color-light);
    }
  }
}
.avatar {
  width: 200px;
  height: 200px;
  object-fit: contain;
}
</style>
