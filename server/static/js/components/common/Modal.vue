<template>
    

    <div id="myModal" class="modal" :class="{ blockOnModal : showModal }" @click="close">

        <div class="modal-content">
            <span class="close" @click="close">&times;</span>
            <p>Some text in the Mosdfsdal..</p>

            <div class="container btnWrap">
                <button type="button" class="btn btn-success">Confirm</button>
                <button type="button" class="btn btn-danger">Cancel</button>
            </div>

        </div>

    </div>


</template>

<script>

module.exports = {


    props: ['showModal'],

    data: function() {
        return {
            
        }
    },

    created: function() {

console.log('created');

        // const modal = document.getElementById("myModal");

        // window.onclick = function(event) {
        //     if (event.target == modal) {
        //         modal.style.display = "none";
        //         this.showModal = false;
        //     }
        // }

    },

    methods: {
        close: function() {
            this.$emit('close');
        }
    }


}

</script>

