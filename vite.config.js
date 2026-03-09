import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        picktheplot: resolve(__dirname, 'pick-the-plot.html'),
        dinorun: resolve(__dirname, 'dino-run.html'),
        rocketrun: resolve(__dirname, 'rocket-run.html'),
        hamsterhunt: resolve(__dirname, 'hamster-hunt.html'),
        reggieforest: resolve(__dirname, 'reggie-forest.html'),
        laserdefense: resolve(__dirname, 'laser-defense.html'),
      },
    },
  },
});
