
<template>

    <a class="actions" @click="deleClicked">
        <i class="fa fa-trash" aria-hidden="true"></i>
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
            deleClicked: function() {
                this.$emit('clicked');
            }
        }
    }
</script>