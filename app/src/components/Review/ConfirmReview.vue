<template>
<div class="h-52 w-60">
  <h1 class="text-center text-3xl">
    ยืนยันที่จะกดส่ง
  </h1>

  <div>
    <button @click="saveNewReview"
        class="p-3 mt-5 text-white bg-[#1B5EAF] border rounded-lg float-left">
      ใช่
    </button>
  </div>

  <div>
    <button @click="$router.back()"
        class="p-3 mt-5 text-white bg-[#BA1A1A] border rounded-lg float-right">
      ไม่
    </button>
  </div>

</div>
</template>

<script>
import { useRatingStore } from '@/stores/rating.js'
import { useReviewStore } from '@/stores/review.js'
export default {
  setup() {
    const review_store = useReviewStore()
    const rating_store = useRatingStore()
    return { review_store, rating_store }
  },
  data() {

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
    }
  }
}
</script>