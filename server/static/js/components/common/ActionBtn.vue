
<template>

    <a class="actions">
        <i class="fa" :class="action" aria-hidden="true"></i>
    </a>

</template>

<script>
    module.exports = {

        props: ['action'],

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