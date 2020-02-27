



<template>

    <div class="theApp"> 
        {{someData}}
    </div>

</template>

<script>


    module.exports = {

        data: function() {
            return {
                someData: '66666osksknjs[df'
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