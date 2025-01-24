<script setup>
import { ref } from 'vue';
defineProps({
    items: {
        type: Array,
        required: true
    }
})
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

const thumbsSwiper = ref(null);

const setThumbsSwiper = (swiper) => {
    thumbsSwiper.value = swiper;
};
const modules = [FreeMode, Navigation, Thumbs]
</script>
<template>
    <swiper v-if="items" :spaceBetween="30" :centeredSlides="true" :autoplay="{
    delay: 5000,
    disableOnInteraction: false,
  }" :pagination="{
    clickable: true,
  }" :navigation="true" :modules="modules" @autoplayTimeLeft="onAutoplayTimeLeft" class="mySwiper .slide-content">
    <swiper-slide v-for="(item, index) in items" v-bind:key="index" class="swiper-slide">
    <img
      :src="item"
      alt="Ibraheem Abdulsalam Mobolaji"
      class=".rounded-circle img-fluid .shadow"
    />
    </swiper-slide>
    </swiper>
</template>
<style scoped>
.swiper {
    width: 100%;
    height: 100%;
}

.swiper-slide {
    text-align: center;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
}

.swiper-slide img {
    display: block;
    width: 100%;
    height: 80%;
    object-fit: cover;
}

.swiper {
    width: 100%;
    height: 300px;
    margin-left: auto;
    margin-right: auto;
}

.swiper-slide {
    background-size: cover;
    background-position: center;
}

.mySwiper {
    height: 20% !important;
    box-sizing: border-box;
    padding: 10px 0;
}

.mySwiper .swiper-slide {
    width: 25%;
    height: 100%;
    opacity: 0.4;
}

.mySwiper .swiper-slide-thumb-active {
    opacity: 1;
}
</style>