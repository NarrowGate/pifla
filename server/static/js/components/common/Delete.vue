
<template>

    <a class="delete" :click="deleClicked">
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
                //this.$emit('clicked');
                alert('del clicked');
            }
        }
    }
</script>