<template>
    <li class="list-group-item">
        <input type="text" class="form-control" readonly :value="item">
        <span class="actions">
            <i class="fa fa-pencil" aria-hidden="true"></i>
        </span>
        <span class="actions">
            <i class="fa fa-trash" aria-hidden="true"></i>
        </span>
    </li>
</template>

<script>
    export default {

        data() {
            return {
                sdf: 'kskks'
            }
        },

        props:['item']

    }
</script>