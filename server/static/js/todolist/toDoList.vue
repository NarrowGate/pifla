
<template>

    <div>
        <div class="addContainer"></div>
        <add-btn @clicked="addItem"></add-btn>
        <ul class='toDoList list-group"'>
            <li v-for="(item, key) of items" class="list-group-item" 
                :key=key>

                <input type="text" class="form-control" 
                    :value ="item"
                    readonly
                    @blur = "saveItem($event, key)"
                >

                <edit-btn @clicked="editItem"></edit-btn>
                <delete-btn @clicked="confirmDelete(key)"></delete-btn>

            </li>
        </ul>

            <modal 
                :show-modal="showModal" 
                @close = "showModal = false"
                @ok = "deleteItem"
                >
            </modal>

        <portal-target name="modals"></portal-target>
    </div>

</template>

<script>

    import EditBtn from "../components/common/EditBtn.vue"
    import DeleteBtn from "../components/common/DeleteBtn.vue"
    import AddBtn from "../components/common/AddBtn.vue"
    import Modal from "../components/common/Modal.vue"


    export default {
        
        components: {
            EditBtn,
            DeleteBtn,
            AddBtn,
            Modal
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
            confirmDelete : function(itemKey) {

                this.deleteItemkey = itemKey;  
                this.showModal = true;

            },
            deleteItem : function(itemKey) {

                this.items.splice(this.deleteItemkey, 1);
                this.showModal = false;

            },            
            addItem : function(itemKey) {
            }

        }

    }

</script>
