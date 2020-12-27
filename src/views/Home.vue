<template>
  <div class="home">
    <div class="score">
      <div class="scorePad">
        <span class="firstPad">{{first}}</span>
        <span>:</span>
        <span class="secondPad">{{second}}</span>
      </div>

    </div>
    <div class="func">
      <div class="first">
        <button class="add" @click="add1">+</button>
        <button class="sub" @click="sub1">-</button>
      </div>
      <div class="second">
        <button class="add" @click="add2">+</button>
        <button class="sub" @click="sub2">-</button>
      </div>
      <div class="center">
        <button class="reset" @click="reset">重置</button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data() {
      return {
        count1: 0,
        count2: 0
      }

  },
  computed: {
     first() {
      return this.count1<= 9? this.count1.toString() .padStart(2,'0'): this.count1.toString()
    },
    second() {
      return this.count2<= 9? this.count2.toString() .padStart(2,'0'): this.count2.toString()
    },

  },
  methods: {
     add1() {
        this.count1++
     },
     sub1() {
       if (this.count1 == 0) return
       this.count1--
     },
     add2() {
       this.count2++
     },
     sub2() {
       if (this.count2 == 0) return
       this.count2--
     },
     reset() {
       this.count1 = 0;
       this.count2 = 0;
     }
  }

}
</script>
<style lang="less">
 .score {
   width: 100%;
   text-align: center;
   font-size: 300px;
   margin: 0 auto;
   .scorePad {
     position:relative;
     width: 100%;
     min-width: 1024px;

   }
 }
 .sub,.add {
   width: 100%;
   width: 295px;
   font-size:30px;
   display: inline-block;
 }
 .first {
    position: relative;
   .add {
     top: 0;
     left: 31rem;
     position: absolute;
   }
   .sub {
     top: 3rem;
     left: 31rem;
     position: absolute;
   }
 }
 .second {
    position: relative;
   .add {
     top: 0;
     left: 70rem;
     position: absolute;
   }
   .sub {
     top: 3rem;
     left: 70rem;
     position: absolute;
   }
 }
 .center {
   position: relative;
   .reset {
     font-size:30px;
     position: absolute;
     top: 1rem;
     left: 57rem;

   }
 }

</style>