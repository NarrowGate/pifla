
<template>

    <div class="theApp"> 
        {{someData}}
    </div>

</template>

<script>


    export default {

        data() {
            return {
                someData: '66666osksknjs[df'
            }
        },

        methods: {

            deleClicked() {
                //this.$emit('clicked');
                alert('del clicked');
            }

        }
    }
</script>