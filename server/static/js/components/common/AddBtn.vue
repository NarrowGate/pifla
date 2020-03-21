
<template>

    <a class="actions" @click="addClicked">
        <i class="fa fa-plus" aria-hidden="true"></i>
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
            addClicked: function() {
                this.$emit('clicked');
            }
        }
    }
</script>