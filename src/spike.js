import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  stages: [
    { duration: '10s', target: 10 },   // Sobe para 10 usuários
    { duration: '10s', target: 1000 }, // Pula para 1000 usuários rapidamente
    { duration: '10s', target: 10 },   // Volta para 10 usuários
  ],
};

export default function () {
  let res = http.get('http://localhost:8080/');
  check(res, { 'status is 200': (r) => r.status === 200 });
  sleep(1);
}
