<script setup>
const route = useRoute();

const features = ref();

const highBrightnessControllerStore = useHighBrightnessControllerStore();

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

const { tm } = useI18n();
const textValue = tm('afterglow.index');

const navigationBorderlessList = [
  {
    path: '/download',
    hash: '#afterglow-download'
  },
  {
    hash: '#features'
  },
  {
    path: '/afterglow/relnote'
  },
  {
    path: '/afterglow/requirements'
  },
  {
    hash: '#support'
  }
];

const navigationList = mergedObjectArrays(
  textValue.navigationTextList,
  navigationBorderlessList
);

const docBorderlessList = [
  {
    path: '/afterglow/requirements'
  },
  {
    path: '/afterglow/isa'
  }
];

const docList = mergedObjectArrays(textValue.docTextList, docBorderlessList);
</script>

<template>
  <div>
    <CategorySecond :title="textValue.title1" />
    <div class="p-6">
      <p class="mb-[1.5rem]">
        {{ textValue.p1 }}
      </p>
      <div>
        <AccordionNavigation :navigation-list="navigationList" />
      </div>
      <div id="bgImg" ref="bgImg">
        <img src="/afterglow/afterglow.jpg" class="w-full h-auto mt-2" alt="" />
      </div>
    </div>

    <CategorySecond :title="textValue.title2" />
    <div ref="features" class="p-6">
      <AppH2>{{ textValue.subheading1 }}</AppH2>
      <p>{{ textValue.p2 }}</p>
      <AppH2>{{ textValue.subheading2 }}</AppH2>
      <p>{{ textValue.p3 }}</p>
      <AppH2>{{ textValue.subheading3 }}</AppH2>
      <p>{{ textValue.p4 }}</p>
    </div>

    <AppSupport :navigation-list="docList" />
  </div>
</template>

<style scoped>
.features:nth-of-type(1) {
  margin-top: 0;
}
#bgImg {
  aspect-ratio: 4/3;
}
</style>
./components/Header.vue
