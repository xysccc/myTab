<template>
  <div id="index" class="bg-gradient h-screen text-white">
    <!-- 背景图 -->
    <img
      src="../assets/images/wyyBgc.jpg"
      alt="cover"
      class="fixed -z-10 h-full w-full object-cover"
    />
    <!-- 主体区域 -->
    <main
      id="main"
      class="flex h-full w-full flex-col items-center justify-center text-center sm:flex-row"
    >
      <!-- 第一屏 -->
      <div :class="[{ hidden: isUnfold }, 'info p-6  text-xl sm:block sm:w-1/3 sm:text-base']">
        <div class="flex items-center">
          <!-- 头像 -->
          <img src="../assets/images/head.jpg" alt="" class="m-auto w-3/5 rounded-full sm:w-1/3" />
          <!-- 域名 -->
          <div class="hidden flex-1 font-domainName text-7xl sm:block">xysccc.cn</div>
        </div>
        <!-- 个签 -->
        <div class="sentenceBox Frosted mt-10 flex justify-between rounded px-3 py-6 sm:min-w-max">
          <svg class="icon text-xl" aria-hidden="true">
            <use xlink:href="#icon-baojiaquotation2"></use>
          </svg>
          <div class="my-4">
            <span class="text-left font-domainName text-2xl">Hello I'm Xysccc!</span><br />
            梦想是成为前端糕手
          </div>
          <svg class="icon self-end text-xl" aria-hidden="true">
            <use xlink:href="#icon-baojiaquotation"></use>
          </svg>
        </div>
        <!-- 社交 -->
        <div class="socialInteraction mt-6 flex justify-between px-10 text-2xl sm:w-64 sm:pl-4">
          <a href="https://tenapi.cn/v2/qqcard?qq=949516815" class="link" id="qq" target="_blank">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-qq"></use>
            </svg>
          </a>
          <a
            href="http://wpa.qq.com/msgrd?v=3&amp;uin=1205529635&amp;site=qq&amp;menu=yes"
            class="link"
            id="qq"
            target="_blank"
          >
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-wechat"></use>
            </svg>
          </a>
          <a
            href="http://wpa.qq.com/msgrd?v=3&amp;uin=1205529635&amp;site=qq&amp;menu=yes"
            class="link"
            id="qq"
            target="_blank"
          >
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-douyin"></use>
            </svg>
          </a>
          <a
            href="http://wpa.qq.com/msgrd?v=3&amp;uin=1205529635&amp;site=qq&amp;menu=yes"
            class="link"
            id="qq"
            target="_blank"
          >
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-github"></use>
            </svg>
          </a>
        </div>
      </div>
      <!-- 第二屏 -->
      <div :class="[{ hidden: !isUnfold }, 'info-2 p-6 sm:ml-28 sm:block sm:w-2/5']">
        <!-- 域名 -->
        <div class="font-domainName text-7xl sm:hidden">xysccc.cn</div>
        <!-- 随机一言 -->
        <div class="sentenceBox Frosted mt-10 rounded px-5 py-8 text-start">
          没有什么过不去，只是再也回不去。<br />
          <div class="mt-3 text-end text-sm font-bold">
            -「&nbsp;<span class="text-base">网络</span>&nbsp;」
          </div>
        </div>
        <!-- Tab区域 -->
        <div
          class="myTab mt-8 grid grid-cols-3 grid-rows-2 items-center gap-3 text-sm sm:gap-6 sm:text-lg"
        >
          <div
            class="Frosted flex flex-col items-center justify-center rounded px-5 py-5 sm:m-0 sm:flex-row sm:px-0 lg:py-8"
          >
            <svg class="icon text-2xl sm:mx-2" aria-hidden="true">
              <use xlink:href="#icon-ego-blog"></use>
            </svg>
            <span class="sm:hidden xl:inline">我的博客</span>
          </div>
          <div
            class="Frosted flex flex-col items-center justify-center rounded px-5 py-5 sm:m-0 sm:flex-row sm:px-0 lg:py-8"
          >
            <svg class="icon text-2xl sm:mx-2" aria-hidden="true">
              <use xlink:href="#icon-daimashili"></use>
            </svg>
            <span class="sm:hidden xl:inline">我的示例</span>
          </div>
          <div
            class="Frosted flex flex-col items-center justify-center rounded px-5 py-5 sm:m-0 sm:flex-row sm:px-0 lg:py-8"
          >
            <svg class="icon text-2xl sm:mx-2" aria-hidden="true">
              <use xlink:href="#icon-biji"></use>
            </svg>
            <span class="sm:hidden xl:inline">我的笔记</span>
          </div>
          <div
            class="Frosted flex flex-col items-center justify-center rounded px-5 py-5 sm:m-0 sm:flex-row sm:px-0 lg:py-8"
          >
            <svg class="icon text-2xl sm:mx-2" aria-hidden="true">
              <use xlink:href="#icon-tuku2"></use>
            </svg>
            <span class="sm:hidden xl:inline">我的图床</span>
          </div>
          <div
            class="Frosted flex flex-col items-center justify-center rounded px-5 py-5 sm:m-0 sm:flex-row sm:px-0 lg:py-8"
          >
            <svg class="icon text-2xl sm:mx-2" aria-hidden="true">
              <use xlink:href="#icon-shouye"></use>
            </svg>
            <span class="sm:hidden xl:inline">关于我</span>
          </div>
        </div>
      </div>
    </main>
    <!-- 展开按钮 -->
    <div
      class="more Frosted fixed bottom-32 left-1/2 -translate-x-1/2 rounded px-7 py-3 sm:hidden"
      @click="isUnfold = !isUnfold"
    >
      <svg class="icon text-2xl font-semibold" aria-hidden="true" v-if="!isUnfold">
        <use xlink:href="#icon-zhankai"></use>
      </svg>
      <svg class="icon text-2xl font-semibold" aria-hidden="true" v-else>
        <use xlink:href="#icon-cuowu"></use>
      </svg>
    </div>
  </div>
  <NuxtLayout name="footer" />
</template>
<script setup lang="ts">
const isUnfold = ref(false)
</script>
