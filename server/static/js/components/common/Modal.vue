<template>
    
    <portal to="modals" v-if="showModal">

        <div id="myModal" class="modal">

            <div class="modal-content">
                <span class="close" @click="no">&times;</span>
                <br>
                <p>Are you sure you want to delete</p>
                <br>
                <div class="container btnWrap">
                    <button type="button" class="btn btn-success" @click="yes">Confirm</button>
                    <button type="button" class="btn btn-danger" @click="no">Cancel</button>
                </div>

            </div>

        </div>

    </portal>


</template>

<script>

export default {


    props: ['showModal'],

    created: function() {

        this.escapeHandler = (e) => {

            if(e.key === 'Escape' && this.showModal) {
                this.no();

            }

        }

        document.addEventListener('keydown', this.escapeHandler);

    },

    watch: {
        showModal: function() {    

            if(!this.showModal) {
                document.removeEventListener('keydown', this.escapeHandler)
            } else {
                document.addEventListener('keydown', this.escapeHandler);
            }

        }
    },

    methods: {
        no: function() {
            this.$emit('no');
        },
        yes: function() {
            this.$emit('yes');
        }
    }


}

</script>

