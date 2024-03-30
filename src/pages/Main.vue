<template>
    <div class="main">
        <modal-wrapper
            v-if="modalVisibility"
            @save="saveData"
            @close="closeModal"
        ></modal-wrapper>
        <button @click="showModal">Начать</button>
        <saved-data
            :records="records"
        ></saved-data>
    </div>
</template>
<script>
import ModalWrapper from '@/components/ModalWrapper';
import SavedData from '@/components/SavedData';
export default {
    data() {
        return {
            records: [],
            modalVisibility: false,
        }
    },  
    components: {
        ModalWrapper,
        SavedData
    },
    methods: {
        saveData(data) {
            this.records.push({...data, id: `${+new Date()}`});
        },
        showModal() {
            this.modalVisibility = true;
        },
        closeModal() {
            this.modalVisibility = false;
        }
    }
}
</script>
<style>

.main {
    width: 100vw;
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;
}
    
</style>