<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">{{ htitle }}</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
            </ul>
            </div>
        </div>
    </nav>

</template>

<script>
    export default {
        props: {
            htitle: {
            type: String,
            required: true
            }
        },
        /*
        data: function(){
            return {
                htitle: ''
            } 
        },
        */        
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
