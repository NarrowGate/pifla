
<template>
    
    <ul class='toDoList list-group"'>
        <item v-for="(item, index) in items" :key="index" :item="item"></item> 
    </ul>

</template>

<script>

    import Item from './Item.vue'

    export default {
        
        components: {
            Item
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