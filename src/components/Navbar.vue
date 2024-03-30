<template>
    <nav>
        <span class="link-button" @click="$router.push('/')">Главная</span>
        <span class="link-button" @click="$router.push('/contacts')">Конакты</span>
    </nav>
</template>
<script>
export default {
    
}
</script>
<style>
    nav {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        padding: 20px 20px;

        z-index: 10;

        background-color: rgb(159, 159, 159);


        display: flex;
        align-items: center;
        justify-content: flex-end;

        column-gap: 20px;
    }

    .link-button {
        cursor: pointer;
    }
</style>