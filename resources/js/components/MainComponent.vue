<template>
    <div class="container pt-1">
        <div class="row">
            <div class="col">
                <main-header :htitle="page"></main-header>
            </div>  <!-- col -->
        </div>  <!-- row -->
        <div class="row">
            <div class="col-3">
                <main-left-sidebar 
                    @clickedSamplePage="showSamplePage"
                >
                </main-left-sidebar>
            </div>  <!-- col -->
            <div class="col">
                <main-content v-if="page === 'Main'"></main-content>
                <sample-vif v-if="page === 'Sample v-if'"></sample-vif>
                <sample-parent-child-communication v-if="page === 'Sample Parent->ChildCommunication'"></sample-parent-child-communication>
                <sample-child-parent-communication v-if="page === 'Sample Child->ParentCommunication'"></sample-child-parent-communication>

            </div>  <!-- col -->
        </div>  <!-- row -->
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
            showSamplePage(page){
                this.page = page;
                //alert(page);
            },
        },        
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
