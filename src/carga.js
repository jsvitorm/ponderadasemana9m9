import http from 'k6/http';
import { sleep, check } from 'k6';

export let options = {
  stages: [
    { duration: '30s', target: 10 }, // Sobe para 10 usuários em 30 segundos
    { duration: '1m', target: 50 },  // Mantém 50 usuários por 1 minuto
    { duration: '30s', target: 0 },  // Reduz para 0 usuários em 30 segundos
  ],
};

export default function () {
  let res = http.get('https://www.cruzeiro.com.br/');
  check(res, {
    'status foi 200': (r) => r.status === 200,
    'tempo de resposta foi menor que 500ms': (r) => r.timings.duration < 500,
  });
  sleep(1); // Simula o tempo de espera do usuário (1 segundo)
}
