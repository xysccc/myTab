<template>
  <div id="index" class="bg-gradient h-screen text-white">
    <!-- 背景图 -->
    <img
      src="../assets/images/wyyBgc.jpg"
      alt="cover"
      class="fixed -z-10 h-full w-full object-cover"
    />
    <!-- 主体区域 -->
    <main id="main" class="flex h-full flex-col justify-center">
      <!-- 第一屏 -->
      <div class="info p-6 text-lg sm:w-1/3 sm:text-base">
        <!-- 头像 -->
        <img src="../assets/images/head.jpg" alt="" class="m-auto w-3/5 rounded-full" />
        <!-- 个签 -->
        <div class="sentenceBox Frosted mt-10 flex justify-between rounded px-3 py-6">
          <svg class="icon text-xl" aria-hidden="true">
            <use xlink:href="#icon-baojiaquotation2"></use>
          </svg>
          <span class="px-3">一定要有所失才有所得吗</span>

          <svg class="icon self-end text-xl" aria-hidden="true">
            <use xlink:href="#icon-baojiaquotation"></use>
          </svg>
        </div>
        <!-- 社交 -->
        <div class="socialInteraction mt-6 flex justify-between px-10 text-2xl">
          <a
            href="http://wpa.qq.com/msgrd?v=3&amp;uin=949516815&amp;site=qq&amp;menu=yes"
            class="link"
            id="qq"
            target="_blank"
          >
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
      <!-- 展开按钮 -->
      <div class="more Frosted mx-auto mt-4 rounded px-7 py-3 sm:hidden">
        <svg class="icon text-2xl font-semibold" aria-hidden="true">
          <use xlink:href="#icon-zhankai"></use>
        </svg>
      </div>
    </main>
  </div>
  <NuxtLayout name="footer" />
</template>
