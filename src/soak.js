import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  vus: 50, // 50 usuários simultâneos
  duration: '12h', // Teste rodando por 12 horas
};

export default function () {
  let res = http.get('http://localhost:8080/');
  check(res, { 'status is 200': (r) => r.status === 200 });
  sleep(1); // Simula o tempo de espera entre as interações dos usuários
}
