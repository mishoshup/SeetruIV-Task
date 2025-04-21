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
        height="100"
        width="100"
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

    <!-- Overlay Content -->
    <div
      class="absolute inset-0 z-10 flex flex-col items-start justify-center gap-[32px] px-[28px] text-white md:px-[64px] lg:px-[80px]"
    >
      <h1
        class="h-auto max-w-[318px] text-4xl font-bold md:max-w-[584px] md:text-[56px] lg:max-w-[672px] lg:leading-[64px]"
      >
        Selamat Datang Ke Laman Web Rasmi MAIPs
      </h1>
      <!-- Made max-w-[315px] to match figma, max-w-[318px] breaks it -->
      <p
        class="h-auto max-w-[315px] text-[17px] leading-[32px] font-normal md:max-w-[584px] lg:max-w-[630px] lg:leading-[24px]"
      >
        Dapatkan maklumat terkini mengenai MAIPs. Bersama kita membina
        masyarakat yang sejahtera, berlandaskan syariat Islam.
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
  // Hero Image placeholder
  const heroImage = useImage();
</script>
