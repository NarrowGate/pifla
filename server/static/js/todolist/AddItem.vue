<template>

    <add-btn @clicked = "btnClicked">

        <modal 
            :show-modal="showModal"
            @no= "no"
            @yes= "yes"
        >

            <p>Please add item</p>        
            
        </modal>

    </add-btn>
 
</template>

<script>

    import AddBtn from "../components/common/AddBtn.vue"
    import Modal from "../components/common/Modal.vue"

    export default {

        components: {

            AddBtn,
            Modal

        },

        props:['showModal'],

        methods: {

            btnClicked: function() {
                this.$emit('clicked');
            },

            no: function() {
                this.$emit('cancelAdd')
            },

            yes: function() {
                this.$emit('confirmAdd')
            }  

        }

    }

</script>



