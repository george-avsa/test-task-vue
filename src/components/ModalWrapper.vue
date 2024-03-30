<template>
    <div class="modal">
        <div class="modal__bg" @click="hideModal"></div>
        <form class="modal__content" @submit.prevent @click="stopBubble">
            <input type="text" name="firstName" placeholder="Имя" v-model="form.name">
            <input type="text" name="lastName" placeholder="Фамилия" v-model="form.fullname">
            <input type="text" name="city" placeholder="Город" v-model="form.country">
            <input type="text" name="street" placeholder="Улица" v-model="form.address">
            <button class="button" @click="saveData">Отправить</button>
        </form>
    </div>
</template>
<script>
export default {
    data() {
        return {
            form: {
                name: '',
                fullname: '',
                country: '',
                address: '',
            }
        }
    },
    methods: {
        saveData() {
            this.$emit('save', this.form);
            this.$emit('close');
            this.form = {
                name: '',
                fullname: '',
                country: '',
                address: '',
            }
        },
        hideModal(e) {
            this.$emit('close');
        },
    }
}
</script>
<style>
.modal {
    position: relative;
    width: 100vw;
    height: 100vh;

    position: fixed;
    top: 0;
    left: 0;
    z-index: 5;
    
    display: flex;
    align-items: center;
    justify-content: center;
}

.modal--visible {
    display: flex;
}

.modal__content {
    position: relative;
    z-index: 5;
    box-sizing: border-box;
    padding: 40px;

    width: 90%;
    max-width: 100%;

    background-color: white;
    border-radius: 30px;

    display: flex;
    flex-wrap: wrap;
    column-gap: 10px;
    row-gap: 10px;
}

.modal__bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    z-index: 3;
    opacity: .3;
}

input {
    width: calc(50% - 13px);

    @media screen and (max-width: 500px) {
        width: 100%;
    }
}

button {
    display: block;
    padding: 0 10px;
}
</style>