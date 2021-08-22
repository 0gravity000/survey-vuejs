<template>
    <pre>
        //--- 子コンポーネント：MainLeftSidebar.vue ---
        //子コンポーネントでイベント発生させる
        //v-on:clickの省略形　@click
        &lt;template&gt;
            &lt;div class="sidebarbtn"&gt;
                &lt;button @click="clickSampleChildParentCommunicationPage"&gt;サンプル 子-&gt;親コンポーネント受け渡し&lt;/button&gt;
            &lt;/div&gt;
        &lt;/template&gt;

        //子コンポーネントで$emitして親コンポーネントにイベントを送る
        &lt;script&gt;
            export default {
                data: function(){
                    return {
                        page: 'Main'
                    } 
                },
                methods: {
                    clickSampleChildParentCommunicationPage(){
                        this.page = 'Sample Child-&gt;ParentCommunication';
                        this.$emit('clickedSamplePage', this.page);
                    },
                },
            }
        &lt;/script&gt;


        //--- 親コンポーネント：MainComponent.vue ---
        //子コンポーネントで$emitしたイベントを親コンポーネントで受け取る
        &lt;template&gt;
            &lt;main-left-sidebar 
                @clickedSamplePage="showSamplePage"
            &gt;
            &lt;/main-left-sidebar&gt;
        &lt;/template&gt;

        //親コンポーネントで受け取ったイベントに応じて処理を行う
        &lt;script&gt;
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
