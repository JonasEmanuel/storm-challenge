<template>
    <div>
        <div class="spinner"><div></div><div></div><div></div><div></div></div>
    </div>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
.spinner {
    display: inline-block;
    position: relative;
    width: 64px;
    height: 64px;

    div {
        box-sizing: border-box;
        display: block;
        position: absolute;
        width: 30px;
        height: 30px;
        margin: 6px;
        border: 3px solid #378bab;
        border-radius: 50%;
        animation: spinner 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
        border-color: #378bab transparent transparent transparent;
    }

    div:nth-child(1) {
        animation-delay: -0.45s;
    }

    div:nth-child(2) {
        animation-delay: -0.3s;
    }

    div:nth-child(3) {
        animation-delay: -0.15s;
    }
}

@keyframes spinner {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

</style>