<template>
    <li class="list-group-item">
        <input type="text" class="form-control" readonly :value="item">

        <action-btn action="fa-edit"></action-btn>
        <action-btn action="fa-trash"></action-btn>

    </li>
</template>

<script>

    import ActionBtn from "../components/common/ActionBtn.vue"

    export default {

        components: {
            ActionBtn
        },

        data() {
            return {
                sdf: 'kskks'
            }
        },

        props:['item']

    }
</script>