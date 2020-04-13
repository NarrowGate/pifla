
<template>

    <a class="actions" @click="deleClicked">
        <i class="fa fa-trash" aria-hidden="true"></i>

        <modal 
            :show-modal="showModal"
            @no = "no"
            @yes = "yes"
        
        ></modal>
    </a>

</template>

<script>
    import Modal from "./Modal.vue"


    export default {

        components: {
            Modal
        },

        props: ['showModal'],

        data: function() {
            return {
                someData: 'kkskskksks'
            }
        },
        methods: {
            deleClicked: function() {
                this.$emit('clicked');
            },

            no: function() {
                this.$emit('cancelDelete');
            },
            
            yes: function() {
                this.$emit('confirmDelete')
            }
        }
    }
</script>