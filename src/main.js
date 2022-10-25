import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import WaveUI from 'wave-ui'
import 'wave-ui/dist/wave-ui.css'

const app = createApp(App)

/* Следующий коментарий - инструкция для eslint,
чтобы он не выводил ошибку. */
/* eslint-disable no-new */
new WaveUI(app, {
  // Some Wave UI options.
})

app.use(router).mount('#app')
