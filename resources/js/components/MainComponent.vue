<template>
    <div class="container pt-1">
        <div class="row">
            <div class="col">
                <main-header :htitle="page"></main-header>
            </div>  <!-- col -->
        </div>  <!-- row -->
        <div class="row">
            <div class="col-3">
                <main-left-sidebar @clickedSampleVifPage="showSampleVifPage"></main-left-sidebar>
            </div>  <!-- col -->
            <div class="col">
                <main-content v-if="page === 'main'"></main-content>

                <sample-vif  v-if="page === 'sample v-if'"></sample-vif>

            </div>  <!-- col -->
        </div>  <!-- row -->
    </div>
</template>

<script>
    export default {
        data: function(){
            return {
                page: 'main'
            } 
        },
        methods: {
            showSampleVifPage(page){
                this.page = page;
                //alert(page);
            }
        },        
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
