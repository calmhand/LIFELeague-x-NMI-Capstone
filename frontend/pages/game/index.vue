<template >
    <div id="game-menu-container">
        <div id="stage-descriptor">
            <div id=stage-content>
                <h1> {{ currentHeader }} </h1>
                <p> {{ currentDesc }} </p>
            </div>
        </div>
        <div id="stage-select">
            <button id="stage-one-btn" @mouseover="setContent(stageOne)" class="stage-btn">STAGE ONE</button>
            <button id="stage-two-btn" v-if="stageTwo.available" @mouseover="setContent(stageTwo)" class="stage-btn">STAGE TWO</button>
            <button id="stage-three-btn" v-if="stageThree.available" @mouseover="setContent(stageThree)" class="stage-btn">STAGE THREE</button>
            <button id="stage-one-btn" v-if="!stageThree.available" class="stage-btn">LOCKED</button>
        </div>
        <NavBar />
    </div>
</template>
<script>
export default {
    setup() {},
    data() {
        return {
            stageOne: {
                header: "A NEW PATH",
                desc: "BEGIN YOUR JOURNEY THROUGH THE LEAGUE AND DISCOVER WHAT'S POSSIBLE IN PROFESSIONAL ATHLETICS.",
                available: true,
            },
            stageTwo: {
                header: "OVERCOMING CHALLENGES",
                desc: "...",
                available: false,
            },
            stageThree: {
                header: "OVERCOMING CHALLENGES",
                desc: "...",
                available: false,
            },
            currentHeader: "",
            currentDesc: ""
        }
    },
    methods: {
        setContent(content) {
            this.currentHeader = content.header
            this.currentDesc = content.desc
        },
    },
    mounted() {
        this.setContent(this.stageOne)
    }
}
</script>
<style lang="scss">
    #game-menu-container {
        min-height: 100vh;
        display: flex;
        font-family: "termina-regular";
        background-color: rgba(0, 0, 0, 0.615);
        background-image: url('@/assets/images/LIFELeagueUGA.jpg');
        background-size: cover;
        background-position: center;
        transition: all 0.3s ease;
        color: white;
    }

    #stage-descriptor {
        display: flex;
        flex: 60%;
        padding: 20px;
        align-items: center;
        justify-content: center;

        h1 {font-family: "termina-bold";}
    }

    #stage-content {
        background-color: #000000df;
        padding: 15px;
        transition: all 0.3s ease;
    }

    #stage-select {
        display: flex;
        flex: 40%;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 20px;
    }

    .stage-btn {
        all: unset;
        cursor: pointer;
        width: 80%;
        font-family: "termina-bold";
        font-size: 24px;
        color: white;
        background-color: #000000df;
        margin: 10px 0;
        padding: 25px;
        text-align: center;
        transition: all 0.3s ease;
    }

    .stage-btn:hover {
        color: black;
        background-color: #ffffffac;
        -webkit-box-shadow: 0px 0px 14px 6px rgba(255,255,255,0.62);
        -moz-box-shadow: 0px 0px 14px 6px rgba(255,255,255,0.62);
        box-shadow: 0px 0px 14px 6px rgba(255,255,255,0.62);
    }
</style>