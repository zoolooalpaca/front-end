<template>
  <div
    class="inline-flex flex-col space-y-4 items-center justify-center bg-white"
    style="width: 1032px; height: 526px"
  >
    <div
      class="flex flex-col space-y-4 items-start justify-start"
      style="width: 1032px; height: 88px"
    >
      <p class="text-3xl leading-10 text-black">รับลูกค้าใหม่</p>
      <p class="text-2xl font-medium leading-loose text-black">เลือกโต๊ะ</p>
    </div>
    <div
      class="
        overflow-y-auto
        flex flex-row
        space-y-4
        p-2
        items-start
        justify-start
      "
      style="width: 744px; height: 422px"
    >
      <div
        class="grid grid-cols-5 gap-4 items-start justify-between"
        style="width: 744px; height: 130px"
      >
        <button
          class="
            flex
            items-center
            justify-center
            w-28
            h-28
            bg-blue-100
            rounded-2xl
            focus:outline-none focus:ring focus:ring-blue-500
          "
          v-for="table in 20"
          :key="table"
        >
          <p
            class="
              text-base
              font-medium
              tracking-wide
              leading-normal
              text-gray-900
            "
          >
            {{ table }}
          </p>
        </button>
      </div>
    </div>
  </div>
</template>

<!-- v-if="table.available === true" bg-blue-100 -->
<!-- v-else bg-gray-100 -->

<script>
</script>
