import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  stages: [
    { duration: '1m', target: 50 },  // 50 usuários em 1 minuto
    { duration: '1m', target: 100 }, // 100 usuários em 1 minuto
    { duration: '1m', target: 200 }, // 200 usuários em 1 minuto
    { duration: '1m', target: 500 }, // 500 usuários em 1 minuto
    { duration: '1m', target: 1000 }, // 1000 usuários em 1 minuto
  ],
};

export default function () {
  let res = http.get('http://localhost:8080/');
  check(res, { 'status is 200': (r) => r.status === 200 });
  sleep(1);
}
