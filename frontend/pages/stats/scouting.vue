<template>
    <div id="scouting-container">

        <h1>Scouting Reports</h1>

        <div class="report">
            <h2 class="report-title">REPORT #1</h2>
        </div>

        <div class="report">
            <h2 class="report-title">REPORT #2</h2>
        </div>

        <div class="report">
            <h2 class="report-title">REPORT #3</h2>
        </div>

        <NavBar/>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    #scouting-container {
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
        }
    }

    .report {
        color: white;
        margin: 15px 0;
        background-color: rgba(0, 0, 0, 0.5);
        padding: 20px;
        cursor: pointer;
        box-shadow: 0px 0px 6px 2px rgba(255,255,255,0.62);
        transition: all 0.3s ease;
    }

    .report:hover {
        color: black;
        background-color: #ffffffac;
        -webkit-box-shadow: 0px 0px 14px 6px rgba(255,255,255,0.62);
        -moz-box-shadow: 0px 0px 14px 6px rgba(255,255,255,0.62);
        box-shadow: 0px 0px 14px 6px rgba(255,255,255,0.62);
    }
</style>