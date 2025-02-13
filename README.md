# @oiij/directives

Features:

- Bundle with [tsup](https://github.com/egoist/tsup)
- Test with [vitest](https://vitest.dev)

## Usage

```bash
pnpm add @oiij/directives
```

```ts
import { directive } from '@oiij/directives'
import { createVueApp } from 'vue'
import App from './App.vue'

createApp(App).use(directive).mount('#app')
```

## License

MIT
