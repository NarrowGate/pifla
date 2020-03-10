
<template>
    
    <ul class='toDoList list-group"'>
        <item v-for="(item, index) in items" 
            :key="index"
            :index="index" 
            :item="item" 
            @editItem="editItem" 
            @deleteItem="deleteItem" 
            @saveItem="saveItem">
        </item> 
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
                showModal: false
            }

        },
        
        methods: {

            editItem : function(item) {

            },
            saveItem : function(item) {
                debugger;
                this.items[item.itemInd] = item.item;
            },            
            deleteItem : function(item) {

            }

        }

    }

</script>