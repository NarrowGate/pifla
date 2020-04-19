
<template>

    <div>
        <div class="addContainer"></div>
        <add-item 
            :show-modal= "showAddItemModal"
            @clicked= "addItem"
            @cancelAdd = "showAddItemModal = false"
            @confirmAdd = "confirmAddItem" 
        >
        </add-item>

        <ul class='toDoList list-group"'>
            <li v-for="(item, key) of items" class="list-group-item" 
                :key=key>

                <input type="text" class="form-control" 
                    :value ="item"
                    readonly
                    @blur = "saveItem($event, key)"
                >

                <edit-btn @clicked="editItem"></edit-btn>
                
                <delete-btn 
                    :show-modal="showModal" 
                    @clicked="confirmDelete(key)"
                    @cancelDelete="showModal = false"
                    @confirmDelete = "deleteItem">
                </delete-btn>

            </li>
        </ul>

        <portal-target name="modals"></portal-target>

    </div>

</template>

<script>

    import EditBtn from "../components/common/EditBtn.vue"
    import DeleteBtn from "./DeleteList.vue"
    import AddItem from "./AddItem.vue"


    export default {
        
        components: {
            EditBtn,
            DeleteBtn,
            AddItem
        },

        data() {

            return {
                items : ['a', 'b', 'abdsdfs'],
                isEmpty: false,
                showModal: false,
                showAddItemModal: false           
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
            confirmDelete : function(itemKey) {

                this.deleteItemkey = itemKey;  
                this.showModal = true;

            },
            deleteItem : function(itemKey) {

                this.items.splice(this.deleteItemkey, 1);
                this.showModal = false;

            },            
            addItem : function() {

                this.showAddItemModal = true;

                console.log('please add item')
            },
            confirmAddItem: function(item) {
                console.log(item);
                this.showAddItemModal = false;
                this.items.push(item);
            }

        }

    }

</script>
