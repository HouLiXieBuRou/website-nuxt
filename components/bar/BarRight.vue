<script setup>
const { tm } = useI18n();
const textValue = tm('BarRight');
const distroBorderlessList = [
  {
    img: '/distros/aosc-os.svg',
    downloadPath: '/download',
    downloadHash: '#aosc-os-download',
    relnotePath: '/aosc-os/relnote',
    relnoteHash: ''
  },
  {
    img: '/distros/afterglow.svg',
    downloadPath: '/download',
    downloadHash: '#afterglow-download',
    relnotePath: '/afterglow/relnote',
    relnoteHash: ''
  }
];

const distroList = mergedObjectArrays(
  distroBorderlessList,
  textValue.distroTextList
);

const commonLinkBorderlessList = [
  '/contact#main',
  'https://github.com/AOSC-Dev/aosc-os-abbs/issues/new?assignees=&labels=security&projects=&template=security-vulnerabilities-report.yml',
  'https://wiki.aosc.io/zh/developer/infrastructure/knowledge-base/00002-how-to-mirror/',
  '/crowdsourcing'
];
</script>

<template>
  <div class="bg-right-bar-bg w-[37.5%] flex flex-col">
    <AppLink href="/aosc-os/right-for-me">
      <img
        src="/jumbotron/minor1.svg"
        class="w-full imgScale1 cursor-pointer" />
    </AppLink>
    <AppLink href="https://bbs.aosc.io/">
      <img
        src="/jumbotron/minor2.svg"
        class="w-full imgScale1 cursor-pointer" />
    </AppLink>
    <div class="flex flex-col grow">
      <CategorySecond
        :title="textValue.title1"
        class="border-l border-solid border-content-main-bg" />
      <article
        class="pt-[1em] pb-[0.5em] pl-[1em] border-l theme-border-secondary">
        <div
          v-for="item in distroList"
          :key="item.title"
          class="flex items-center pb-[15px]">
          <div class="basis-[50px] mr-[20px] ml-[0.5em]">
            <img :src="item.img" alt="" class="w-full" />
          </div>
          <div class="flex-1 p-0">
            <div class="text-[14pt] font-semibold">
              {{ item.title }}
            </div>
            <div class="text-[12pt]">
              {{ item.description }}
            </div>
            <div class="text-[12pt]">
              <AppLink
                :to="{
                  path: item.downloadPath,
                  hash: item.downloadHash
                }"
                class="text-link mr-2"
                >{{ textValue.link1 }}</AppLink
              >
              <AppLink
                :to="{
                  path: item.relnotePath,
                  hash: item.relnoteHash
                }"
                >{{ textValue.link2 }}</AppLink
              >
            </div>
          </div>
        </div>
      </article>
      <CategorySecond :title="textValue.title2" />
      <div class="border-l theme-border-secondary flex flex-col flex-grow">
        <a
          v-for="(item, index) in textValue.commonLinkList"
          :key="item.title"
          :href="commonLinkBorderlessList[index]"
          class="hover:bg-leftbar-bg cursor-pointer flex flex-row justify-between items-center px-[1rem] h-[2rem] odd:bg-[#fefaf6] bg-white">
          <span>{{ item.title }}</span>
          <!-- <v-icon name="hi-solid-external-link" /> -->
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.imgScale1 {
  aspect-ratio: 96/55;
}
</style>
