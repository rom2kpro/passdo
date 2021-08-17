<template>
    <div class="card text-white">
        <img src="https://salt.tikicdn.com/ts/banner/32/fd/db/5185d1c6fdb752e74568ccb3a85e49ab.jpg" class="card-img" alt="...">
        <div class="card-img-overlay">
            <div class="overlay"></div>
            <div class="text">
                <h5 class="card-title">NOW OPEN FOR ONLINE ORDERS</h5>
                <h1 class="card-text">Chỗ này để chạy quảng cáo</h1>
                <button type="button" class="btn btn-secondary btn-lg">Shop now</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.card-img-overlay{
    width: 50%;
    padding: 0;
}
.overlay{
    background-color: white;
    width: 100%;
    height: 100%;
    position: absolute;
    opacity: .85;
}
.text{
    padding: 10%;
}
.card-title,
.card-text,
.btn{
    position: relative;
    z-index: 200;
}

.card-title{
    color: #C53417;
    font-weight: 600;
}

.card-text{
    font-size: 3rem;
    color: black;
}
.btn{
    background-color: black;
}
</style>