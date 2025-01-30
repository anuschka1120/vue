<!DOCTYPE html>
<html>
    <head>
        <title>Vue.jsのサンプル</title>
        <script src="https://unpkg.com/vue@3.0.0/dist/vue.global.js"></script>
    </head>
    <body>
        <h1>Vue3</h1>
        <div id="app">
            {{message}}
        </div>
        <script>
            const appdata = {
                DataTransfer(){
                    return{
                        message:"Hello Vue"
                    }
                }
            }

            Vue.createApp(appdata).mount('#app')
        </script>
    </body>
</html>