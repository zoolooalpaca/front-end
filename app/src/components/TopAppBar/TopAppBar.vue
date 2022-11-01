<template>
    <div
      class="inline-flex items-center
      justify-start gap-2"
    >
        <button  @click="goBack" class="secondary-container w-8 h-8 rounded-full items-center">
          <div class="flex items-center justify-center">
            <span class="material-symbols-outlined">
              arrow_back
            </span>
          </div>
        </button>
        <p
          class="w-48 text-xl font-bold leading-7
          on-surface-text">
          {{ label }}
        </p>
    </div>
</template>

<script>
export default {
  props:['label'],

  methods: {
    goBack () {
      return this.$router.go(-1)
    },
  },
};
</script>

<style>
</style>
