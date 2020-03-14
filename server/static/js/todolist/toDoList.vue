
<template>
    
    <ul class='toDoList list-group"'>
        <li v-for="(item, key) of items" class="list-group-item" 
            :key=key>

            <input type="text" class="form-control" 
                :value ="item"
                readonly
                @blur = "saveItem($event, key)"
            >

            <edit-btn @clicked="editItem"></edit-btn>
            <delete-btn @clicked="deleteItem(key)"></delete-btn>

        </li>
    </ul>

</template>

<script>

    import EditBtn from "../components/common/EditBtn.vue"
    import DeleteBtn from "../components/common/DeleteBtn.vue"


    export default {
        
        components: {
            EditBtn,
            DeleteBtn
        },

        data() {

            return {
                items : ['a', 'b', 'abdsdfs'],
                isEmpty: false,
                showModal: false
            }

        },
        
        methods: {

            editItem : function(event) {
                event.target.closest('li').querySelector('input').removeAttribute('readonly');
            },
            saveItem : function(event, key) {

                this.items[key] =  event.target.value;
                event.target.closest('li').querySelector('input').readOnly = true;

            },            
            deleteItem : function(itemKey) {
                this.items.splice(itemKey, 1);
            }

        }

    }

</script>