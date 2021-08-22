<template>
    <div class="sidebarbtn">
        <button @click="clickSampleParentChildCommunicationPage">サンプル 親->子コンポーネント受け渡し</button>
        <button @click="clickSampleChildParentCommunicationPage">サンプル 子->親コンポーネント受け渡し</button>
        <button @click="clickSampleVifPage">サンプル v-if</button>
    </div>
</template>

<script>
    export default {
        data: function(){
            return {
                page: 'Main'
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
