<template>
  <header class="bg-white shadow h-20 lg:h-32 flex justify-between">
    <!-- Left: Logo and Text -->
    <div class="flex gap-3 items-center px-4">
      <NuxtImg src="/logo.svg" alt="Logo" sizes="20vw" class="px-2" />
      <div class="flex flex-col items-start gap-[1.5px]">
        <p class="text-[8.3px] leading-[12px] font-bold text-black">
          LAMAN WEB RASMI
        </p>
        <NuxtImg src="/header/jawi.svg" alt="Jawi" class="h-[15.5px]" />
        <div>
          <p class="text-[8.3px] leading-[12px] font-bold text-black">
            MAJLIS AGAMA ISLAM DAN ADAT ISTIADAT MELAYU PERLIS
          </p>
          <p class="text-[8px] leading-[9px] italic text-black">
            Perlis Islamic Religious Custom and Malay Council
          </p>
        </div>
      </div>
    </div>

    <!-- Right: Yellow toggle area -->
    <div class="bg-yellow w-[80px] flex items-center justify-center md:hidden">
      <button @click="toggleMenu">
        <UIcon
          v-if="!isMenuOpen"
          mode="svg"
          name="heroicons:bars-3-20-solid"
          class="w-[24px] h-[24px] text-black"
        />
        <UIcon
          v-else
          mode="svg"
          name="heroicons:x-mark-20-solid"
          class="w-[24px] h-[24px] text-black"
        />
      </button>
    </div>
  </header>

  <!-- Mobile Menu -->
  <nav v-if="isMenuOpen" class="bg-gray-100 md:hidden">
    <div class="px-4 py-4 flex flex-col space-y-4">
      <NuxtLink to="/" class="text-gray-600 hover:text-blue-600">Home</NuxtLink>
      <NuxtLink to="/about" class="text-gray-600 hover:text-blue-600"
        >About</NuxtLink
      >
      <NuxtLink to="/contact" class="text-gray-600 hover:text-blue-600"
        >Contact</NuxtLink
      >
    </div>
  </nav>
</template>

<script setup lang="ts">
  import { NuxtImg } from '#components';
  import { ref } from 'vue';

  const isMenuOpen = ref(false);

  const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
  };
</script>
