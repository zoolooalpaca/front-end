<template>
    <button
        class="flex items-center justify-center w-28 h-28 bg-blue-100 rounded-2xl focus:outline-none focus:ring focus:ring-blue-500"
        v-if="table.available === true">
        <p class="text-base font-medium tracking-wide leading-normal text-gray-900">
            เลขโต๊ะ</p>
    </button>
    <button class="flex items-center justify-center w-28 h-28 bg-gray-300 rounded-2xl"
        v-else-if="table.available === false">
        <p class="text-base font-medium tracking-wide leading-normal text-gray-900">
            เลขโต๊ะ</p>
    </button>

</template>

<!-- v-if="table.available === true" bg-blue-100 -->
<!-- v-else bg-gray-100 -->

<script>
export default {
    data() {
        return {
            table: {
                available: false
            }
        }
    }
}
</script>
