<script setup>
const { tm } = useI18n();
const textValue = tm('afterglow.isa');

const docBorderlessList = [
  { path: '/afterglow/requirements', hash: '#afterLowRequirementsTitle' }
];

const docList = mergedObjectArrays(textValue.docTextList, docBorderlessList);

const route = useRoute();

onMounted(() => {
  switch (route.hash) {
    case '#afterLowIsaTitle':
      highlightElement(afterLowIsaList);
      break;
  }
});

const afterLowIsaList = ref();
</script>

<template>
  <div>
    <category-second id="afterLowIsaTitle" :title="textValue.title1" />
    <div class="p-6">
      <p>
        {{ textValue.p1 }}
      </p>
      <AppTableIsa
        ref="afterLowIsaList"
        my-key="afterlow-isa-1"
        :table-value="textValue.table1" />
    </div>
    <div class="p-6 mb-[1rem]">
      <p> {{ textValue.p2 }} </p>
      <p>{{ textValue.p3 }}</p>
    </div>
    <AppSupport :navigation-list="docList" />
  </div>
</template>

<style scoped></style>
./components/Header.vue
