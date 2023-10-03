<script>
    import AppNavbar from "../components/AppNavbar.vue";
    export default {
        name: 'AboutPage',
        components: {
            AppNavbar
        }
    }
</script>


<template>

    <app-navbar />
    <div class="about-page">
        <h1>About Us</h1>
        <div class="about-text">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec condimentum, leo vel pellentesque
                luctus, lectus eros hendrerit leo, quis vehicula mauris tortor nec nisl. Nulla facilisi. Sed id leo
                nec est aliquet pharetra. Suspendisse potenti. Nulla facilisi. Duis vestibulum diam vel metus iaculis,
                sed tempus enim efficitur. Curabitur volutpat tincidunt mi et fermentum. Vivamus nec velit nec sem
                pretium ullamcorper at et arcu.</p>

            <p>Fusce et nibh auctor, pellentesque metus sit amet, dictum urna. Pellentesque habitant morbi tristique
                senectus et netus et malesuada fames ac turpis egestas. Mauris ut enim nec felis rutrum euismod a et
                sem. Vestibulum efficitur felis justo, eget pharetra neque auctor in. Morbi ut lacus lectus. Nulla
                sollicitudin urna felis, at efficitur lacus tincidunt a. Sed eu lacus sapien. Nullam a luctus ipsum.</p>
        </div>
        <div class="card-container">
            <div class="card">
                <div class="card-header">
                    <img src="../assets/2038263.png" alt="Amenities" class="card-image">
                    <h3>Amenities</h3>
                </div>
                <div class="card-body">
                    <h2>All services below are free</h2>
                    <p>Wi-fi</p>
                    <p>Breakfast</p>
                    <p>Gym</p>
                    <p>Spa</p>
                    <div class="d-grid gap-2">
                        <button type="button" class="btn btn-lg btn-outline-dark btn-block">Make A Reservation</button>
                    </div>
                </div>
            </div>

            <div class="card">
                <div class="card-header">
                    <img src="../assets/swimming-pool-icon-png-3.png" alt="Pool" class="card-image">
                    <h3>Pool</h3>
                </div>
                <div class="card-body">
                    <h2>Benefits</h2>
                    <p>Olympic size</p>
                    <p>Free Bar</p>
                    <p>Kid's area</p>
                    <div class="d-grid gap-2">
                        <button type="button" class="btn btn-lg btn-outline-dark btn-block">Make A Reservation</button>
                    </div>
                </div>
            </div>

            <div class="card">
                <div class="card-header">
                    <img src="../assets/100445.png" alt="Rooms" class="card-image">
                    <h3>Rooms</h3>
                </div>
                <div class="card-body">
                    <h2>Benefits</h2>
                    <p>Smart TVs</p>
                    <p>Air conditioner</p>
                    <p>24/7 Room service</p>
                    <p>View to pool</p>
                    <div class="d-grid gap-2">
                        <button type="button" class="btn btn-lg btn-outline-dark btn-block">Make A Reservation</button>
                    </div>
                </div>
            </div>
        </div>


    </div>
</template>

<style scoped>
    .about-page {
        text-align: center;
        /* background-color: #f2f2f2; */
        padding: 50px 0;
        margin:20px;
    }

    h1 {
        color: #333;
        margin-bottom: 30px;
    }

    .card-container {
        display: flex;
        justify-content: center;
        gap: 20px;
        margin-bottom: 30px;
        margin-top:50px;
    }

    .card {
        width: 300px;
        border: 1px solid #ccc;
        border-radius: 10px;
        overflow: hidden;
    }

    .card-header {
        position: relative;
    }

    .card-header h3 {
        margin: 0;
        padding: 10px;
        background-color: #333;
        color: #fff;
        font-size: 18px;
    }

    .card-image {
        width: 100px;
        height: auto;
        object-fit: cover;
    }

    .card-body {
        padding: 20px;
    }

    .card-body h2 {
        font-size: 18px;
        margin-top: 0;
    }

    .card-body p {
        margin-bottom: 5px;
    }

    .btn {
        margin-top: 10px;
    }

    .about-text {
        max-width: 800px;
        margin: 0 auto;
        text-align: justify;
        line-height: 1.5;
        color: #333;
    }
</style>