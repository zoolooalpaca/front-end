<template>
  <div class="m-5">
    <h1 class="text-3xl text-center">รีวิว</h1>

    <div>
      <label for="name">การให้บริการ</label>
      <StarRating></StarRating>
    </div>

    <div>
      <label>รสชาติอาหาร</label>
      <StarRating></StarRating>
    </div>

    <div>
      <label>ความสะอาด</label>
      <StarRating></StarRating>
    </div>

    <div>
      <label>ความรวดเร็ว/ความสะดวก</label>
      <StarRating></StarRating>
    </div>

    <div>
      <label>ข้อเสนอแนะ</label>
      <textarea name="" id="" cols="30" rows="10" v-model="review.feedback"></textarea>
    </div>

    <div>
      <button @click="saveNewReview"
              class="p-4 text-white bg-blue-900 border rounded">ส่ง</button>
    </div>

  </div>
</template>

<script>
import StarRating from "@/components/StarRating.vue"
import { useRatingStore } from '@/stores/rating.js'
import { useReviewStore } from '@/stores/review.js'
export default {
  setup() {
    const review_store = useReviewStore()
    const rating_store = useRatingStore()
    return { review_store, rating_store }
  },
  data(){
    return{
      review: '',
      error: null
    }
  },
  components: {
    StarRating
  },
  methods: {
    async saveNewReview() {
      try {
        this.error = null
        const review_id = this.review_store.save(this.review)
        if (review_id){

        }
      }catch (error){
        console.log(error)
        this.error = error.message
      }
    }
  }
}
</script>