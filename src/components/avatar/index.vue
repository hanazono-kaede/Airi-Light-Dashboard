<script lang="ts">
import { defineComponent, onMounted, ref, watch } from "vue";

export default defineComponent({
  props: {
    size: {
      type: Number,
      default: 50
    },
    src: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const loaded = ref(false);

    const preloadImage = () => {
      if (!props.src) {
        return;
      }
      const $$ = new Image();
      $$.src = props.src;

      $$.addEventListener("load", (e) => {
        loaded.value = true;
      });
    };
    onMounted(() => {
      preloadImage();
    });

    watch(
      () => props.src,
      () => {
        preloadImage();
      }
    );

    return {
      loaded
    };
  }
});
</script>

<template>
  <div class="avatar" :style="{ height: `${size}px`, width: `${size}px` }">
    <img :src="src" alt="" :style="{ display: loaded ? '' : 'none' }" />
    <div class="sr-only">一个头像</div>
  </div>
</template>

<style lang="postcss">
.avatar {
  @apply bg-transparent relative inline-block select-none overflow-hidden rounded-full;
}
.avatar img {
  @apply h-full max-w-full rounded-full;

  animation: scale 0.5s ease-out;
}
@keyframes scale {
  0% {
    opacity: 0%;
  }
  to {
    opacity: 100%;
  }
}
</style>
