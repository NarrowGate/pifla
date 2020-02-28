
<template>
    
<ul>
    <item></item> 
    <item></item> 
    <item></item> 
    <item></item> 
</ul>

</template>

<script>

    import item from './item.vue'

    export default {
        
        components: {
            item
        },

        data() {

            return {
                items : ['a', 'b', 'abdsdfs'],
                isEmpty: false,
                showModal: false,
                deleteItem: 0
            }

        },
        
        methods: {



        }

    }

</script>