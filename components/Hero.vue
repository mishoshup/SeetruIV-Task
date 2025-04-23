<template>
  <section
    class="relative h-[calc(100vh-100px)] max-h-[600px] min-h-[550px] w-full overflow-hidden bg-black"
  >
    <!-- Background Image -->
    <picture>
      <source srcset="/hero/bg-desktop.png" media="(min-width: 1024px)" />
      <source srcset="/hero/bg-tablet.png" media="(min-width: 640px)" />
      <NuxtImg
        src="/hero/bg.png"
        alt="Hero Background"
        fit="inside"
        height="100%"
        width="100%"
        class="absolute inset-0 h-full w-full object-cover"
        :placeholder="
          heroImage('/hero/bg.png', {
            h: auto,
            w: auto,
            f: 'png',
            blur: 2,
            q: 50,
          })
        "
        preload
      />
    </picture>

    <!-- Carousel Overlay -->
    <div class="absolute inset-0 z-10 flex items-center justify-center">
      <swiper
        :modules="[Navigation, Pagination, Mousewheel, Keyboard]"
        :navigation="{
          nextEl: '#next-button',
          prevEl: '#prev-button',
          disabledClass: 'swiper-button-disabled',
          hiddenClass: 'swiper-button-hidden',
        }"
        :pagination="true"
        :mousewheel="true"
        :keyboard="true"
        :loop="true"
        class="mySwiper h-full w-full"
      >
        <SwiperSlide v-for="(slide, index) in slides" :key="index">
          <div
            class="flex h-full flex-col items-start justify-center gap-[32px] px-[28px] text-white md:px-[64px] lg:px-[80px]"
          >
            <h1
              class="h-auto max-w-[318px] text-4xl font-bold md:max-w-[584px] md:text-[56px] lg:max-w-[672px] lg:leading-[64px]"
            >
              {{ slide.title }}
            </h1>
            <p
              class="h-auto max-w-[315px] text-[17px] leading-[32px] font-normal md:max-w-[584px] lg:max-w-[630px] lg:leading-[24px]"
            >
              {{ slide.text }}
            </p>
          </div>
        </SwiperSlide>
      </swiper>

      <!-- Custom Navigation Buttons at Bottom Center -->
      <div
        class="absolute z-30 bottom-6 flex w-full items-center justify-between px-4"
      >
        <button
          class="custom-prev rounded-full bg-white/20 px-4 py-2 text-white hover:bg-white/40"
          id="prev-button"
          aria-label="Previous Slide"
        >
          
        </button>
        <button
          class="custom-next rounded-full bg-white/20 px-4 py-2 text-white hover:bg-white/40"
          id="next-button"
          aria-label="Next Slide"
        >
          
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  import 'swiper/css';
  import 'swiper/css/pagination';
  import 'swiper/css/navigation';

  // import required modules
  import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

  const heroImage = useImage();

  const slides = [
    {
      title: 'Selamat Datang Ke Laman Web Rasmi MAIPs',
      text: 'Dapatkan maklumat terkini mengenai MAIPs. Bersama kita membina masyarakat yang sejahtera, berlandaskan syariat Islam.',
    },
    {
      title: 'Kemudahan Dalam Talian MAIPs',
      text: 'Akses kepada perkhidmatan zakat, bantuan, dan pendaftaran secara mudah dan cepat.',
    },
    {
      title: 'MAIPs Untuk Semua',
      text: 'Kami komited dalam menyampaikan kebajikan kepada seluruh masyarakat di negeri Perlis.',
    },
  ];
</script>

<style scoped>
  .swiper-button-next,
  .swiper-button-prev {
    color: white;
  }
</style>