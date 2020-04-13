<template>
    
    <portal to="modals" v-if="showModal">

        <div id="myModal" class="modal">

            <div class="modal-content">
                <span class="close" @click="close">&times;</span>
                <br>
                <p>Are you sure you want to delete</p>
                <br>
                <div class="container btnWrap">
                    <button type="button" class="btn btn-success" @click="ok">Confirm</button>
                    <button type="button" class="btn btn-danger" @click="close">Cancel</button>
                </div>

            </div>

        </div>

    </portal>


</template>

<script>

module.exports = {


    props: ['showModal'],

    created: function() {

        this.escapeHandler = (e) => {

            if(e.key === 'Escape' && this.showModal) {
                this.close();

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
        close: function() {
            this.$emit('close');
        },
        ok: function() {
            this.$emit('ok');
        }
    }


}

</script>

