<script setup>
const { tm } = useI18n();
const textValue = tm('aosc-os.livekit.requirements');
const docBorderlessList = [
  {
    path: '/aosc-os/isa',
    hash: '#aoscOsIsaTableTitle'
  }
  /* TODO
  {
    title: '舒心畅玩：设备选购建议',
    path: '/aosc-os/better-devices'
  } */
];
const docList = mergedObjectArrays(textValue.docTextList, docBorderlessList);

const route = useRoute();

onMounted(() => {
  switch (route.hash) {
    case '#aoscOsRequirementsTitle':
      highlightElement(aoscOsRequirementsList);
      break;
  }
});
const aoscOsRequirementsList = ref();
</script>

<template>
  <div>
    <category-second id="aoscOsRequirementsTitle" :title="textValue.title1" />
    <div class="p-6">
      <p>
        {{ textValue.p1 }}
      </p>
      <table ref="aoscOsRequirementsList" class="mt-6">
        <caption class="text-[12pt] font-semibold">
          {{ textValue.table1.caption }}
        </caption>
        <thead>
          <tr>
            <th
              v-for="(item, index) in textValue.table1.th"
              :key="`aosc-os-livekit-require-1-th-${index}`"
              >{{ item }}</th
            >
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(item1, index1) in textValue.table1.tr"
            :key="`aosc-os-livekit-require-1-tr-${index1}`">
            <td
              v-for="(item2, index2) in item1"
              :key="`aosc-os-livekit-require-1-td-${index1}-${index2}`"
              >{{ item2 }}</td
            >
          </tr>
        </tbody>
      </table>
    </div>

    <category-second :title="textValue.title2" />
    <div class="pt-[1rem] pb-[2rem] px-[4rem]">
      <ul class="list-disc">
        <li
          v-for="(item, index) in textValue.ul1.li"
          :key="`aosc-os-livekit-requirem-1-li-${index}`"
          ><template v-if="index === 0"
            >{{ item[0]
            }}<AppLink
              :to="{
                path: '/aosc-os/isa',
                hash: '#aoscOsIsaTableTitle'
              }"
              >{{ item[1] }}</AppLink
            ></template
          ><template v-else>{{ item }}</template></li
        >
      </ul>
    </div>
    <AppSupport :navigation-list="docList" />
  </div>
</template>

<style scoped></style>
./components/Header.vue
