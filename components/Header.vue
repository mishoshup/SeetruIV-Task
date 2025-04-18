<template>
  <header class="bg-white shadow h-20 lg:h-32">
    <div class="flex items-center justify-between h-full">
      <!-- Left: Logo + Text -->
      <div class="flex items-center px-4 space-x-3">
        <NuxtImg src="/logo.svg" alt="Logo" class="h-12 w-auto" />

        <div class="leading-tight">
          <p class="text-[8.29px] font-bold text-gray-800">LAMAN WEB RASMI</p>
          <p class="text-sm text-right text-gray-800 leading-snug">
            مجلس أڭام اسلام دان عادت استڤيدات ملايو ڤرليس
          </p>
          <p class="text-[8.29px] font-bold text-gray-800">
            MAJLIS AGAMA ISLAM DAN ADAT ISTIADAT MELAYU PERLIS
          </p>
          <p class="text-[8.29px] text-gray-800 italic">
            Perlis Islamic Religious Custom and Malay Council
          </p>
        </div>
      </div>

      <!-- Right: Mobile Toggle Button with yellow bg -->
      <div class="bg-yellow-400 h-full flex items-center px-4 md:hidden">
        <button @click="toggleMenu">
          <Icon
            v-if="!isMenuOpen"
            name="heroicons:bars-3-20-solid"
            class="w-6 h-6 text-black"
          />
          <Icon
            v-else
            name="heroicons:x-mark-20-solid"
            class="w-6 h-6 text-black"
          />
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <nav v-if="isMenuOpen" class="bg-gray-100 md:hidden">
      <div class="px-4 py-4 flex flex-col space-y-4">
        <NuxtLink to="/" class="text-gray-600 hover:text-blue-600"
          >Home</NuxtLink
        >
        <NuxtLink to="/about" class="text-gray-600 hover:text-blue-600"
          >About</NuxtLink
        >
        <NuxtLink to="/contact" class="text-gray-600 hover:text-blue-600"
          >Contact</NuxtLink
        >
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
  import { ref } from 'vue';

  const isMenuOpen = ref(false);

  const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
  };
</script>
