<template>
    
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
            this.$emit('save', this.form),
            this.form = {
                name: '',
                fullname: '',
                country: '',
                address: '',
            }
        }
    }
}
</script>
<style>

</style>