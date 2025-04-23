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
        :modules="[Navigation, Pagination, Keyboard]"
        :navigation="swiperNavigation"
        :pagination="true"
        :keyboard="true"
        :loop="true"
        class="heroSwiper h-full w-full"
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
        class="absolute bottom-6 z-40 flex w-full items-center justify-between px-4"
      >
        <UButton
          icon="i-lucide-chevron-left"
          size="xl"
          color="neutral"
          variant="outline"
          class="custom-prev border border-white bg-transparent"
        />
        <UButton
          icon="i-lucide-chevron-right"
          size="xl"
          color="neutral"
          variant="outline"
          class="custom-next border border-white bg-transparent"
        />
      </div>
    </div>
  </section>
  <div class="bg-primary-800 relative h-[44px] px-[18px]">
    <NewsTicker
      text="Waktu Operasi Kaunter MAIPs: (Isnin-Khamis) Pagi 08:30am- 01:00pm, Rehat 01:00pm-02:00pm, Petang 02:00pm- 04:30pm (Jumaat) Pagi 08:30am- 12:15pm, Rehat 12:15pm-02:45pm, Petang 02:45pm- 04:30pm (Sabtu dan Ahad tutup) | Wakaf Tunai MAIPs - Sumbangan anda boleh disalurkan ke akaun Bank Islam 09010010063983 | Iklan Tender MAIPs- Mohon Klick pada ruangan iklan untuk info lanjut | Dimaklumkan bahawa nombor talian MAIPs 04-9794439 tidak dapat digunakan sementara waktu bagi kerja-kerja pembaikan oleh TM. Nombor yang boleh dihubungi: 04-9772780, 04-9782784, 04-9772781, 04-9775779. Pelanggan juga boleh berhubung melalui PM di laman Facebook Majlis Agama Islam dan Adat Istiadat Melayu Perlis (MAIPs) atau e-mel korporat@maips.gov.my. Harap maklum."
    />
  </div>
</template>

<script setup lang="ts">
  import NewsTicker from '~/components/NewsTicker.vue';
  import { Swiper, SwiperSlide } from 'swiper/vue'; // Import Swiper Vue.js components
  import { Navigation, Pagination, Keyboard } from 'swiper/modules'; // import required swiper modules
  import 'swiper/css';
  import 'swiper/css/pagination';

  const heroImage = useImage();

  // Custom swiper confisg
  const swiperNavigation = ref({
    nextEl: '.custom-next',
    prevEl: '.custom-prev',
    disabledClass: 'swiper-button-disabled',
    hiddenClass: 'swiper-button-hidden',
  });

  // Swiper contents
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
