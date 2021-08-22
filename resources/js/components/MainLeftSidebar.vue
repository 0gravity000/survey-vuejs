<template>
    <ul class="list-group">
    <button class="list-group-item" @click="clickSampleVifPage">Sample v-if</button>
    <button class="list-group-item" @click="clickSampleParentChildCommunicationPage">Sample Parent->ChildCommunication</button>
    <button class="list-group-item" @click="clickSampleChildParentCommunicationPage">Sample Child->ParentCommunication</button>
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
                this.page = 'Sample v-if';
                this.$emit('clickedSamplePage', this.page);
            },
            clickSampleParentChildCommunicationPage(){
                this.page = 'Sample Parent->ChildCommunication';
                this.$emit('clickedSamplePage', this.page);
            },
            clickSampleChildParentCommunicationPage(){
                this.page = 'Sample Child->ParentCommunication';
                this.$emit('clickedSamplePage', this.page);
            },
        },
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
