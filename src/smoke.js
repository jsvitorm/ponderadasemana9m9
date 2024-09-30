import http from 'k6/http';
import { check } from 'k6';

export let options = {
  vus: 5,   // 5 usuários simultâneos
  duration: '1m',  // Teste de 1 minuto
};

export default function () {
  let res = http.get('http://localhost:8080/');
  check(res, { 'status is 200': (r) => r.status === 200 });
}
