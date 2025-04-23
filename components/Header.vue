<template>
  <!-- TODO: Modularize some of the snippets into their own components -->

  <!-- Top Menu Dekstop -->
  <nav
    class="relative hidden items-center justify-between border-b bg-blue-50 px-[80px] shadow lg:flex"
  >
    <!-- Left Side: Social Links -->
    <div class="flex gap-[20px] py-4">
      <p class="text-grey-100 text-[14px] leading-[20px]">Ikuti kami di:</p>
      <div class="flex gap-[16px]">
        <NuxtLink to="https://www.facebook.com/pages/MAiPS/556377977719809/">
          <NuxtImg src="/header/iconFacebook.svg" class="h-auto w-[20px]" />
        </NuxtLink>
        <NuxtLink to="">
          <NuxtImg src="/header/iconInstagram.svg" class="h-auto w-[20px]" />
        </NuxtLink>
        <NuxtLink to="https://www.tiktok.com/@maips_official">
          <NuxtImg src="/header/iconTiktok.svg" class="h-auto w-[20px]" />
        </NuxtLink>
        <NuxtLink
          to="https://www.youtube.com/channel/UCYxTBkPaelis0mMTpb0vrDQ/featured"
        >
          <NuxtImg src="/header/iconYoutube.svg" class="h-auto w-[20px]" />
        </NuxtLink>
      </div>
    </div>

    <!-- Right Side: Icons + Language dropdown + Warga MAIPs -->
    <!-- TODO: Fix phone icon -->
    <div class="flex items-center gap-[20px]">
      <div class="flex items-center gap-[12px]">
        <NuxtLink to="">
          <!-- Not sure why but saved svg size is smaller than other icons.
          Thus the widht is 28px -->
          <NuxtImg src="/header/iconHelp.svg" class="h-auto w-[28px]" />
        </NuxtLink>
        <NuxtLink to="">
          <!-- Phone icon is broken -->
          <NuxtImg src="/header/iconPhone.svg" class="h-auto w-[20px]" />
        </NuxtLink>
        <NuxtLink to="">
          <NuxtImg src="/header/iconFeedback.svg" class="h-auto w-[20px]" />
        </NuxtLink>
        <NuxtLink to="">
          <NuxtImg src="/header/iconSitemap.svg" class="h-auto w-[20px]" />
        </NuxtLink>
      </div>

      <span aria-hidden="true" class="text-grey-100">|</span>

      <!-- Language Dropdown -->
      <div class="flex items-center gap-2">
        <NuxtImg src="/header/iconFlagMY.svg" class="h-auto w-[20px]" />
        <USelect
          v-model="value"
          variant="ghost"
          :items="items"
          :ui="{
            trailingIcon: 'w-10 h-auto',
            content: 'bg-blue-50 ring-1',
            base: 'focus:bg-transparent',
            item: 'text-black data-highlighted:text-white',
          }"
          class="text-grey-100 w-[70px] hover:cursor-pointer hover:bg-transparent focus:bg-transparent focus:text-black"
        />
      </div>

      <span aria-hidden="true" class="text-grey-100">|</span>

      <!-- Warga MAIPs Link -->
      <div class="text-blue flex items-center gap-[8px] px-[16px]">
        <NuxtImg src="/header/iconDoor.svg" class="h-auto w-[16px]" />
        <NuxtLink
          to="/warga-maips"
          class="text-[14px] leading-[16px] font-semibold hover:underline"
        >
          Warga MAIPs
        </NuxtLink>
      </div>
    </div>
  </nav>

  <header
    class="relative flex h-20 justify-between bg-white shadow lg:h-[133px]"
  >
    <!-- Left: Logo and Text -->
    <div
      class="flex items-center gap-[11.7px] px-[23.5px] md:gap-[13.5px] md:px-[64px] lg:gap-[24px] lg:px-[52px]"
    >
      <NuxtImg
        src="logo.svg"
        alt="Logo"
        sizes="20vw"
        class="sm:h-auto sm:w-auto lg:h-[93px]"
      />
      <div
        class="flex flex-col items-start gap-[2.2px] md:gap-[2.56px] lg:gap-[4px]"
      >
        <p
          class="text-[8.3px] leading-[12px] font-bold text-black md:text-[14px] md:leading-[1rem] lg:text-[15px]"
        >
          {{ text }}
        </p>
        <picture>
          <source srcset="/header/jawi.svg" media="(min-width: 1024px)" />
          <source srcset="/header/jawiTablet.svg" media="(min-width: 768px)" />
          <img
            src="/header/jawi.svg"
            alt="Jawi"
            class="h-[15.5px] md:h-[28px]"
          />
        </picture>
        <div class="flex flex-col md:hidden lg:flex lg:gap-[2px]">
          <p
            class="text-[8.3px] leading-[12px] font-bold text-black lg:text-[15px] lg:leading-[1rem]"
          >
            MAJLIS AGAMA ISLAM DAN ADAT ISTIADAT MELAYU PERLIS
          </p>
          <p
            class="text-[8px] leading-[8.8px] text-black italic lg:text-[16px] lg:leading-[1rem]"
          >
            Perlis Islamic Religious Custom and Malay Council
          </p>
        </div>
      </div>
    </div>

    <!-- Right: Hamburger Menu (mobile & tablet) -->
    <div class="bg-yellow flex w-[80px] items-center justify-center lg:hidden">
      <button @click="toggleMenu">
        <UIcon
          v-if="!isMenuOpen"
          mode="svg"
          name="heroicons:bars-3-20-solid"
          class="h-[24px] w-[24px] text-black"
        />
        <UIcon
          v-else
          mode="svg"
          name="heroicons:x-mark-20-solid"
          class="h-[24px] w-[24px] text-black"
        />
      </button>
    </div>

    <!-- Right: Zakat Button (desktop, using SVG) -->
    <div class="relative top-4 right-[95px] hidden lg:block">
      <NuxtLink to="/zakat" aria-label="Pakat-Pakat Mai Kita Berzakat">
        <NuxtImg
          src="/header/zakat-button.png"
          alt="Zakat Button"
          sizes="lg:240px"
          class="transition-scale h-auto w-auto max-w-[240px] object-contain transition-opacity hover:scale-105 hover:opacity-90"
          :placeholder="
            zakatButtonImg(`/header/zakat-button.png`, {
              h: 100,
              f: 'png',
              blur: 1,
              q: 50,
            })
          "
        />
      </NuxtLink>
    </div>
  </header>

  <!-- Kerawang below header -->
  <div class="relative right-0 hidden lg:block">
    <NuxtImg
      src="/header/kerawang.png"
      alt="Kerawang"
      class="h-auto w-screen object-contain"
      :placeholder="[auto, screen]"
    />
  </div>

  <!-- Hamburger Menu if open -->
  <nav v-if="isMenuOpen" class="bg-blue lg:hidden">
    <div class="flex flex-col space-y-4 px-4 py-4">
      <NuxtLink to="/" class="hover:text-yellow text-white">Utama</NuxtLink>
      <NuxtLink to="/tentang-maips" class="hover:text-yellow text-white"
        >Tentang MAIPs</NuxtLink
      >
      <NuxtLink to="/perkhidmatan" class="hover:text-yellow text-white"
        >Perkhidmatan</NuxtLink
      >
      <NuxtLink to="/berita-dan-media" class="hover:text-yellow text-white"
        >Berita & Media</NuxtLink
      >
      <NuxtLink to="/hubungi-kami" class="hover:text-yellow text-white"
        >Hubungi Kami</NuxtLink
      >
    </div>
  </nav>

  <!-- Desktop Menu -->
  <nav class="bg-blue relative hidden justify-start px-[80px] shadow lg:flex">
    <ul class="flex gap-10 py-4 text-sm font-medium text-white">
      <li>
        <NuxtLink to="/" class="hover:text-yellow transition-colors"
          >Utama</NuxtLink
        >
      </li>
      <li>
        <NuxtLink
          to="/tentang-maips"
          class="hover:text-yellow transition-colors"
          >Tentang MAIPs</NuxtLink
        >
      </li>
      <li>
        <NuxtLink to="/perkhidmatan" class="hover:text-yellow transition-colors"
          >Perkhidmatan</NuxtLink
        >
      </li>
      <li>
        <NuxtLink
          to="/berita-dan-media"
          class="hover:text-yellow transition-colors"
          >Berita & Media</NuxtLink
        >
      </li>
      <li>
        <NuxtLink to="/hubungi-kami" class="hover:text-yellow transition-colors"
          >Hubungi Kami</NuxtLink
        >
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
  import { NuxtImg } from '#components';
  import { ref, onMounted } from 'vue';
  import type { SelectItem } from '@nuxt/ui';

  // Zakat button placeholder
  const zakatButtonImg = useImage();

  // Language selector dropdown
  const items = ref([
    {
      label: 'BM',
      value: 'malay',
    },
    {
      label: 'EN',
      value: 'english',
    },
  ] satisfies SelectItem[]);

  // For changing header text
  const value = ref(items.value[0]?.value);

  const text = ref('LAMAN WEB RASMI');
  const updateText = () => {
    if (window.innerWidth >= 1024) {
      text.value = 'LAMAN WEB RASMI';
    } else if (window.innerWidth >= 640) {
      text.value = 'LAMAN RASMI MAIPs';
    } else {
      text.value = 'LAMAN WEB RASMI';
    }
  };

  onMounted(() => {
    updateText();
    window.addEventListener('resize', updateText);
  });

  // Toggle hamburger menu
  const isMenuOpen = ref(false);

  const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
  };
</script>
