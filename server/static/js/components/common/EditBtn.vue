
<template>

    <a class="actions" @click="editClicked">
        <i class="fa fa-edit" aria-hidden="true"></i>
    </a>

</template>

<script>
    module.exports = {

        data: function() {
            return {
                someData: 'kkskskksks'
            }
        },
        methods: {
            editClicked: function(item) {
                this.$emit('clicked');
            }
        }
    }
</script>