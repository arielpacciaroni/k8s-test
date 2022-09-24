import { str, envsafe, port, url } from 'envsafe';

export const env = envsafe({
  NODE_ENV: str({
    default: 'development',
    choices: ['development', 'production'],
  }),
  PORT: port({
    devDefault: 4000,
    desc: 'The port the app is running on',
    example: 4000,
  })
});