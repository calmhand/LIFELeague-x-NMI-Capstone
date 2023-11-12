<template>
    <div id="skill-bar">
        <button class="skill-adjust" id="sub-btn">-</button>
        <span id="progress-bar"></span>
        <button class="skill-adjust" id="add-btn">+</button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            points : 5
        }
    }
}
</script>
<style lang="scss" scoped>
    #skill-bar {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 20px 0;
    }

    #progress-bar {
        width: 100%;
        padding: 25px;
        margin: 0 25px;
        background-color: rgba(255, 255, 255, 0.376);
    }

    .skill-adjust {
        all: unset;
        color: white;
        font-family: "termina-bold";
        font-size: 50px;
        cursor: pointer;
        transition: all 0.3s ease;
    }

    .skill-adjust:hover {
        opacity: 0.7;
    }
</style>