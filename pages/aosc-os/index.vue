<script setup>
const { tm } = useI18n();
const textValue = tm('aosc-os.index');

const route = useRoute();

const features = ref();

const highBrightnessControllerStore = useHighBrightnessControllerStore();

const navigationBorderlessList = [
  {
    hash: '#aosc-os-download',
    path: '/download'
  },
  {
    hash: '#features'
  },
  {
    path: '/aosc-os/relnote'
  },
  {
    path: '/aosc-os/requirements'
  },
  {
    hash: '#support'
  }
];

watch(
  () => highBrightnessControllerStore.obj[route.path],
  () => {
    switch (route.hash) {
      case '#features':
        highlightElement(features);
        break;
    }
  },
  {
    flush: 'post'
  }
);
const navigationList = mergedObjectArrays(
  textValue.navigationTextList,
  navigationBorderlessList
);

const docBorderlessList = [
  {
    url: '/aosc-os/right-for-me'
  },
  {
    url: '/aosc-os/requirements'
  },
  {
    url: '/aosc-os/isa'
  } /* TODO, support central
  , {
    title: '其他支持文档',
    url: '/'
  } */
];
const docList = mergedObjectArrays(textValue.docTextList, docBorderlessList);
</script>

<template>
  <div>
    <category-second :title="textValue.title1" />
    <div class="p-6">
      <p>
        {{ textValue.p1 }}
      </p>
      <div>
        <AccordionNavigation :navigation-list="navigationList" />
      </div>
      <div ref="bgImg" class="h-649.12">
        <img src="/aosc-os/aosc-os.jpg" class="w-full h-auto mt-2" alt="" />
      </div>
    </div>

    <category-second id="features" :title="textValue.title2" />
    <div ref="features" class="p-6">
      <app-h2>{{ textValue.subheading1 }}</app-h2>
      <p>{{ textValue.p2 }}</p>
      <app-h2>{{ textValue.subheading2 }}</app-h2>
      <p>{{ textValue.p3 }}</p>
      <app-h2>{{ textValue.subheading3 }}</app-h2>
      <p>{{ textValue.p4 }}</p>
      <app-h2>{{ textValue.subheading4 }}</app-h2>
      <p>{{ textValue.p5 }}</p>
      <app-h2>{{ textValue.subheading5 }}</app-h2>
      <p>{{ textValue.p6 }}</p>
    </div>
    <AppSupport :navigation-list="docList" />
  </div>
</template>

<style scoped></style>
./components/Header.vue
