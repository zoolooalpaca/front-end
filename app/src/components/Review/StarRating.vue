<template>
  <div>
    <label class="star-rating_star" v-for="rating in ratings"
           v-bind:class="{'is-selected': ((value >= rating) && value != null), 'is-disabled': disabled}"
           v-on:click="set(rating)" v-on:mouseover="star_over(rating)" v-on:mouseout="star_out">
      <input class="star-rating star-rating_checkbox" type="radio" :value="rating" :name="name"
             v-model="value" :disabled="disabled">★
    </label>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tem_value: null,
      value: null,
      ratings: [1,2,3,4,5],
      disabled: false
    }
  },
  methods: {
    star_over(index) {
      var self = this;
      if (!this.disabled) {
        this.tem_value = this.value;
        return this.value = index;
      }
    },
    star_out(){
      if(!this.disabled){
        this.value = this.tem_value
      }
    },
    set(value){
      if (!this.disabled) {
        this.tem_value = value;
        return this.value = value;
      }
    }
  }
}
</script>

<style>
.star-rating_star {
   display: inline-block;
   padding: 9px;
   vertical-align: middle;
   line-height: 1;
   font-size: 3em;
   color: #ABABAB;
   transition: color .2s ease-out;
}

.star-rating_star:hover {
   cursor: pointer;
}

.is-selected {
   color: #FFD700;
}

.is-disabled:hover {
   cursor: default;
}

.star-rating_checkbox {
  position: absolute;
  overflow: hidden;
  clip: rect(0 0 0 0);
  height: 1px; width: 1px;
  margin: -1px; padding: 0; border: 0;
}
</style>