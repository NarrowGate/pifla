
<template>

    <a class="actions" @click="clicked">
        <i class="fa fa-plus" aria-hidden="true"></i>
        <slot></slot>
    </a>

</template>

<script>

    export default {

        methods: {
            clicked: function() {
                this.$emit('clicked');
            }
        }

    }

</script>