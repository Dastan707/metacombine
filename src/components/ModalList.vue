<template>
<q-dialog v-model="show">
    <q-card>
    <q-card-section>
        <div class="text-h6"></div>
    </q-card-section>

    <q-card-section class="q-pt-none">
        modal
    </q-card-section>

    <q-card-actions align="right">
        <q-btn flat label="Decline" color="primary" v-close-popup />
        <q-btn flat label="Close" color="primary" v-close-popup />
    </q-card-actions>
    </q-card>
</q-dialog>
</template>

<script>
export default {
  name: 'ModalList'
}
</script>

<style>

</style>
