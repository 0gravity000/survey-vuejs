<template>
    <ul class="list-group">
    <button class="list-group-item" @click="clickSampleVifPage">Sample v-if</button>
    <li class="list-group-item">A second item</li>
    <li class="list-group-item">A third item</li>
    <li class="list-group-item">A fourth item</li>
    <li class="list-group-item">And a fifth one</li>
    </ul>
</template>

<script>
    export default {
        data: function(){
            return {
                page: 'main'
            } 
        },
        methods: {
            clickSampleVifPage(){
                this.page = 'sample v-if';
                this.$emit('clickedSampleVifPage', this.page);
            }
        },
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
