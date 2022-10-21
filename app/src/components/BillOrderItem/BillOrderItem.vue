<template>
    <div class="inline-flex space-x-4 items-center justify-start p-4 bg-gray-300 bg-opacity-20 rounded-3xl"
        style="width: 636px; height: 72px;">
        <p class="text-2xl font-medium leading-loose">{{ amount }}</p>
        <p class="text-2xl font-medium leading-loose">x</p>
        <p class="text-2xl font-medium leading-loose">{{ name }}</p>
        <p class="flex-1 text-2xl font-medium leading-loose text-right">฿{{ price * amount }}</p>
        <div class="inline-flex flex-col items-center justify-center w-10">
            <div class="inline-flex items-center justify-center flex-1">
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            amount: 2,
            name: 'ชื่อสินค้า',
            price: 100,
        };
    },
};
</script>

<style>
svg {
    color: red
}
</style>