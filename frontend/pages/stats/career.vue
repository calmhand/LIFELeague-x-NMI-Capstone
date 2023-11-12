<template>
    <div id="career-container">
        <h1>Career Statistics</h1>
        <div id="stat-container">
            <div class="career-stat">
                <h2 class="stat-title">2-PT FIELD GOALS</h2>
            </div>

            <div class="career-stat">
                <h2 class="stat-title">3-PT FIELD GOALS</h2>
            </div>

            <div class="career-stat">
                <h2 class="stat-title">FREE THROWS</h2>
            </div>

            <div class="career-stat">
                <h2 class="stat-title">ASSISTS</h2>
            </div>

            <div class="career-stat">
                <h2 class="stat-title">REBOUNDING</h2>
            </div>

            <div class="career-stat">
                <h2 class="stat-title">STEALS</h2>
            </div>

            <div class="career-stat">
                <h2 class="stat-title">BLOCKS</h2>
            </div>

            <div class="career-stat">
                <h2 class="stat-title">TURNOVERS</h2>
            </div>

            <div class="career-stat">
                <h2 class="stat-title">MINUTES PLAYED</h2>
            </div>
        </div>
        <NavBar/>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    #career-container {
        min-height: 100vh;
        font-family: "termina-regular";
        padding: 50px;
        background-color: black;
        background-image: url("@/assets/images/LIFELeagueBanner.png");
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        
        h1 {
            color: white;
            font-family: "termina-bold";
            text-align: center;
        }
    }

    #stat-container {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
    }

    .career-stat {
        color: white;
        margin: 15px;
        background-color: rgba(0, 0, 0, 0.5);
        padding: 20px;
        width: 25%;
        text-align: center;
        cursor: pointer;
        box-shadow: 0px 0px 6px 2px rgba(255,255,255,0.62);
        transition: all 0.3s ease;
    }

    .career-stat:hover {
        color: black;
        background-color: #ffffffac;
        -webkit-box-shadow: 0px 0px 14px 6px rgba(255,255,255,0.62);
        -moz-box-shadow: 0px 0px 14px 6px rgba(255,255,255,0.62);
        box-shadow: 0px 0px 14px 6px rgba(255,255,255,0.62);
    }
</style>