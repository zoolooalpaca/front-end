<template>
  <div class="m-3 block">
    <h1 class="text-3xl text-center"> รีวิว </h1>

    <div>
      <label for="name">การให้บริการ</label>
      <StarRating v-model="rating.count"></StarRating>
    </div>

    <div>
      <label for="name">รสชาติอาหาร</label>
      <StarRating v-model="rating.count"></StarRating>
    </div>

    <div>
      <label for="name">ความสะอาด</label>
      <StarRating v-model="rating.count"></StarRating>
    </div>

    <div>
      <label for="name">ความรวดเร็ว/ความสะดวก</label>
      <StarRating v-model="rating.count"></StarRating>
    </div>

    <div class="flex flex-col">
      <label>ข้อเสนอแนะ</label>
      <textarea name="" id="" cols="80" rows="10" v-model="review.feedback" type="text"
                class="mt-3 border border-gray-700 rounded-lg bg-center"></textarea>
    </div>

    <button @click="() => TogglePopup('buttonTrigger')"
            class="p-3 mt-5 text-white bg-[#1B5EAF] border rounded-lg float-right">ส่ง</button>
    <ConfirmReview
        v-if="popupTrigger.buttonTrigger" :TogglePopup="() => TogglePopup('buttonTrigger')">
      <h1 class="text-center text-3xl">ยืนยันที่จะกดส่ง</h1>
      <div>
        <button @click="saveNewReview"
                class="p-3 mt-5 text-white bg-[#1B5EAF] border rounded-lg float-left">
          ใช่
        </button>
      </div>
    </ConfirmReview>
  </div>
</template>

<script>
import StarRating from "@/components/Review/StarRating.vue"
import ConfirmReview from "@/components/Review/ConfirmReview.vue"
import { ref } from 'vue';
import { useRatingStore } from '@/stores/rating.js'
import { useReviewStore } from '@/stores/review.js'
export default {
  setup() {
    const review_store = useReviewStore()
    const rating_store = useRatingStore()
    const popupTrigger = ref({
      buttonTrigger: false
    })

    const TogglePopup = (trigger) => {
      popupTrigger.value[trigger] = !popupTrigger.value[trigger]
    }

    return { review_store, rating_store, popupTrigger, TogglePopup }
  },
  data(){
    return{
      review: {feedback: ''},
      rating: '',
      error: null
    }
  },
  components: {
    StarRating,
    ConfirmReview
  },
  methods: {
    async saveNewReview() {
      try {
        this.error = null
        const review_id = await this.review_store.save(this.review)
        const rating_id = await this.rating_store.save(this.rating)
        if (review_id){
          this.$router.push(`/allReview/${review_id}`)
        }
        if (rating_id){
          this.$router.push(`/allReview/${rating_id}`)
        }
      }catch (error){
        console.log(error)
        this.error = error.message
      }
    }
  }
}
</script>

<style>

</style>