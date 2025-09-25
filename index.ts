import concurrently from 'concurrently';

concurrently([
  {
    command: 'npm run dev',
    cwd: 'packages/client',
    name: 'client',
    prefixColor: 'cyan',
  },
  {
    command: 'npm run dev',
    cwd: 'packages/server',
    name: 'server',
    prefixColor: 'green',
  },
]);
