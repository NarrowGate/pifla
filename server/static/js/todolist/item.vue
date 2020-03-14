<template>
    <li class="list-group-item">

        <input type="text" class="form-control" 
            :readonly="!isEdit" 
            :value="item"
            :ind="index" 
            @blur="saveItem"
            >

        <edit-btn @click="editItem"></edit-btn>
        <!-- <delete-btn @clicked="deleteItem"></delete-btn> -->
        <div @click="editItem">dfsdfs</div>

    </li>
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
                sdf: 'kskks',
                isEdit: false
            }
        },

        props:['item', 'index'],

        methods: {

            // editItem: function(item) {
            //     this.isEdit = true;
            //     this.$emit('editItem', this.item);
            // },

            // saveItem: function() {

            //     if(!this.isEdit)  return;

            //     this.isEdit = false;
            //     this.$emit('saveItem', { item: this.item, itemInd: this.index});
            // },

            // deleteItem: function() {
            //     this.$emit('deleteItem', this.item);
            // }
            
            editItem : function(item) {
                alert('lls');
            },

            saveItem: function() {

                if(!this.isEdit)  return;

                this.isEdit = false;
                this.$emit('saveItem', { item: this.item, itemInd: this.index});
            },            

        }


    }
</script>