// noinspection NpmUsedModulesInstalled
import plugin from 'tailwindcss/plugin';
import tailwindForms from '@tailwindcss/forms';

export default {
  plugins: [
      tailwindForms,
      plugin(({ addComponents }) => {
        addComponents({
          '.border-gradient': {
            'border': '1px solid',
            'border-image-slice': '1',
            'border-image-source': 'var(--gradient)',
          },
          '.bg-gradient': {
            'background-image': 'var(--gradient)',
          }
        });
      }),
  ],
  fontFamily: {
    'sans': ['Imprima'],
    'serif': ['"Playfair Display"'],
    'mono': ['"Fira Code Freeze"'],
  },
}
