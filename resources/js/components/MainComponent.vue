<template>
    <div class="container pt-1">
        <div class="row">
            <div class="col">
                <!-- Navbar -->
                <main-header :htitle="page"></main-header>
            </div>  <!-- col -->
        </div>  <!-- row -->
        <div class="row">
            <div class="col-3">
                <!-- Left Sidebar -->
                <main-left-sidebar 
                    @clickedSamplePage="showSamplePage"
                >
                </main-left-sidebar>
            </div>  <!-- col -->
            <div class="col">
                <!-- content -->
                <main-content v-if="page === 'Main'"></main-content>
                <sample-parent-child-communication v-if="page === 'サンプル 親->子コンポーネント受け渡し'"></sample-parent-child-communication>
                <sample-child-parent-communication v-if="page === 'サンプル 子->親コンポーネント受け渡し'"></sample-child-parent-communication>
                <sample-vif v-if="page === 'Sample v-if'"></sample-vif>
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
