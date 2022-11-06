<template>
  <div class="m-3 flex-col">
    <button
        class="w-8 h-8 secondary-container rounded-full p-1 justify-center"
        @click="goBack">
              <span class="material-symbols-outlined">
                arrow_back
              </span>
    </button>
    <h1 class="mt-2 mb-5 text-3xl text-center"> รีวิว </h1>

    <div>
      <label for="name">การให้บริการ</label>
      <StarRating v-model="rating.count" class="flex justify-center"></StarRating>
    </div>

    <div>
      <label for="name">รสชาติอาหาร</label>
      <StarRating v-model="rating.count" class="flex justify-center"></StarRating>
    </div>

    <div>
      <label for="name">ความสะอาด</label>
      <StarRating v-model="rating.count" class="flex justify-center"></StarRating>
    </div>

    <div>
      <label for="name">ความรวดเร็ว/ความสะดวก</label>
      <StarRating v-model="rating.count" class="flex justify-center"></StarRating>
    </div>

    <div class="flex flex-col">
      <label>ข้อเสนอแนะ</label>
      <textarea name="" id="" cols="80" rows="10" v-model="review.feedback" type="text"
                class="text-color mt-3 border border-gray-700 rounded-lg bg-center"></textarea>
    </div>
  </div>

  <button @click="() => TogglePopup('buttonTrigger')"
          class="button-blue button-style float-right">ส่ง</button>
  <ConfirmReview
      v-if="popupTrigger.buttonTrigger" :TogglePopup="() => TogglePopup('buttonTrigger')">
    <h1 class="text-center text-color text-3xl">ยืนยันที่จะกดส่ง</h1>
    <div>
      <button @click="saveNewReview"
              class="button-blue button-style float-left">
        ใช่
      </button>
    </div>
  </ConfirmReview>
</template>

<script>
import StarRating from '@/components/Review/StarRating.vue';
import ConfirmReview from '@/components/Review/ConfirmReview.vue';
import {ref} from 'vue';
import {reviewAPI} from '@/services/api';
export default {
  setup() {
    const popupTrigger = ref({
      buttonTrigger: false,
    });

    const TogglePopup = (trigger) => {
      popupTrigger.value[trigger] = !popupTrigger.value[trigger];
    };

    return {popupTrigger, TogglePopup};
  },
  data() {
    return {
      review: {feedback: ''},
      rating: '',
      error: null,
      titles: [
        'การให้บริการ', 'รสชาติอาหาร', 'ความสะอาด', 'ความรวดเร็ว/ความสะดวก',
      ],
    };
  },
  components: {
    StarRating,
    ConfirmReview,
  },
  methods: {
    async saveNewReview() {
      try {
        this.error = null;
        const response = await reviewAPI.saveNew(this.review);
        if (response.status_code == 201) {
          console.log(response.data);
        }
        if (response.status_code == 200) {
          this.$router.push(`/management/dashboard`);
        }
      } catch (error) {
        console.log(error);
        console.log("ERRRR:: ", error.response.data)
        this.error = error.message;
      }
    },
    goBack() {
      this.$router.go(-1);
    },
  }
};
</script>

<style >
.button-blue {
  color: var(--md-sys-color-on-primary);
  background: var(--md-sys-color-primary);
  border-color: var(--md-sys-color-primary);
}

.text-color {
  color: var(--md-sys-color-on-primary-dark);
}

.button-style {
  margin-top: 20px;
  padding: 12px;
  border-radius: 8px;
}

.button-style:hover {
  box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1)
}
</style>
