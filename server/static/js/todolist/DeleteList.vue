<template>

    <delete-btn @clicked = "clicked">

        <modal 
            :show-modal="showModal"
            @no = "no"
            @yes = "yes"        
        >
            <p>Are you sure you want to delete this to do list?</p>        
        </modal>

    </delete-btn>


</template>

<script>

    import DeleteBtn from "../components/common/DeleteBtn.vue"
    import Modal from "../components/common/Modal.vue"

    export default {

        components : {
            DeleteBtn,
            Modal
        },

        props: ['showModal'],

        methods: {

            clicked : function(){
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
