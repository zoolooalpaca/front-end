<template>
  <div class="m-3 block">
    <h1 class="text-3xl text-center">รีวิว</h1>

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

    <ConfirmReview></ConfirmReview>
    <div>
      <router-link to="ConfirmReview"
                   class="block p-3 mt-5 text-white text-center bg-[#1B5EAF] border rounded-3xl max-h-16 w-16 float-right"> ส่ง
      </router-link>
    </div>
  </div>
</template>

<script>
import StarRating from "@/components/Review/StarRating.vue"
import ConfirmReview from "@/components/Review/ConfirmReview.vue"
import { useRatingStore } from '@/stores/rating.js'
import { useReviewStore } from '@/stores/review.js'
export default {
  setup() {
    const review_store = useReviewStore()
    const rating_store = useRatingStore()
    const popupTrigger = ref({
      buttonTrigger: false,
      timedTrigger: false
    })
    return { review_store, rating_store, popupTrigger }
  },
  data(){
    return{
      review: '',
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
          this.$router.push(`/review/${review_id}`)
        }
        if (rating_id){
          this.$router.push(`/rating/${rating_id}`)
        }
      }catch (error){
        console.log(error)
        this.error = error.message
      }
    },
    callConfirmReview(){
      return this.$router.go(ConfirmReview)
    }
  }
}
</script>

<style>

</style>