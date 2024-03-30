<template>
    <div class="saved-data">
        <p v-for="(record, index) in records" :key="record.id">
            <strong>{{ index + 1 }}.</strong> {{ JSON.stringify(record).replaceAll(',', ', ') }}
        </p>
    </div>
</template>
<script>
export default {
    props: {
        records: {
            type: Array,
            required: true,
        }
    }
}
</script>
<style>

.saved-data {
    position: fixed;
    top: 0;
    left: 0;
    width: 300px;
    background-color: rgba(236, 236, 236, .4);
    height: 100vh;

    padding: 20px;

    padding-top: 80px;
    
    overflow-y: scroll;
    
    @media screen and (max-width: 1000px) {
        padding-top: 0px;
        height: unset;
        height: 300px;
        top: unset;
        bottom: 0;
        width: 100%;
    }
}   

.saved-data p:not(:first-child) {
    margin-top: 10px;
}
</style>