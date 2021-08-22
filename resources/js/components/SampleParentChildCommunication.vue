<template>
    <pre>
    //--- 親コンポーネント：MainComponent.vue ---
    //親コンポーネントで子コンポーネントタグにb-vindを入れて、子コンポーネントへデータを送る
    //v-bind:htitleの省略形　:htitle
    &lt;template&gt;
        &lt;main-header :htitle="page"&gt;&lt;/main-header&gt;
    &lt;/template&gt;

    //親コンポーネントのdataオプションでpageを作っておく
    &lt;script&gt;
        export default {
            data: function(){
                return {
                    page: 'Main'
                } 
            },
        }
    &lt;/script&gt;

    //--- 子コンポーネント：MainHeader.vue ---
    //子コンポーネントで親コンポーネントから受け取ったデータを表示
    &lt;template&gt;
        &lt;a class="navbar-brand" href="#"&gt;{{ htitle }}&lt;/a&gt;
    &lt;/template&gt;

    //子コンポーネントではpropsで親コンポーネントからデータを受け取る
    &lt;script&gt;
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
        }
    &lt;/script&gt;

    </pre>
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
