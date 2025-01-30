<!DOCTYPE html>
<html>
    <head>
        <title>Vue.jsのサンプル</title>
        <script src="https://unpkg.com/vue@3.0.0/dist/vue.global.js"></script>
    </head>

    <body>
        <h1>Vue3</h1>
        <div id="app">
            <p>{{ message }}</p>
        </div>

        <script>
        const appdata = {
            data() {
                return {
                    message: "Hello Vue!",
                    count: 0
                };
            },
            mounted() {
                setInterval(() => {
                    this.count++;
                    this.message = 'Count: ' + this.count;
                }, 1000);
            }
        };

        Vue.createApp(appdata).mount('#app');
        </script>
    </body>
</html>