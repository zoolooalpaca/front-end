<template>
<div class="popup">
  <div class="popup-inner border rounded-lg">
    <slot/>
    <button @click="TogglePopup()"
            class="button-color button-style float-right">
      ไม่
    </button>
  </div>
</div>
</template>

<script>
import {useRatingStore} from '@/stores/rating.js';
import {useReviewStore} from '@/stores/review.js';
export default {
  setup() {
    const review_store = useReviewStore();
    const rating_store = useRatingStore();
    return {review_store, rating_store};
  },
  data() {

  },
  methods: {
    async saveNewReview() {
      try {
        this.error = null;
        const review_id = await this.review_store.save(this.review);
        const rating_id = await this.rating_store.save(this.rating);
        if (review_id) {
          this.$router.push(`/review/${review_id}`);
        }
        if (rating_id) {
          this.$router.push(`/rating/${rating_id}`);
        }
      } catch (error) {
        console.log(error);
        this.error = error.message;
      }
    },
  },
  props: ['TogglePopup'],
};
</script>

<style>
.popup {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 99;

  display: flex;
  align-items: center;
  justify-content: center;
}

.popup-inner {
  background: #FFFFFF;
  padding: 32px;
}

.button-color {
  color: var(--md-sys-color-on-primary);
  background: var(--md-sys-color-error);
  border-color: var(--md-sys-color-primary);
}

.button-style {
  margin-top: 20px;
  padding: 12px;
  border-radius: 8px;
}

.button-style:hover{
  box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1)
}
</style>
