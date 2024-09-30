import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  stages: [
    { duration: '2m', target: 100 },  // Aumenta para 100 usuários em 2 minutos
    { duration: '3m', target: 500 },  // Aumenta para 500 usuários
    { duration: '3m', target: 1000 }, // Aumenta para 1000 usuários
    { duration: '2m', target: 0 },    // Gradualmente para 0 usuários
  ],
};

export default function () {
  let res = http.get('http://localhost:8080/');
  check(res, { 'status is 200': (r) => r.status === 200 });
  sleep(1);
}
