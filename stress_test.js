import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
    scenarios: {
        small_stress: {
            executor: 'constant-vus',
            exec: 'api',
            vus: 50,
            duration: '30s',
            },
        load_test: {
            executor: 'ramping-vus',
            exec: 'api',
            startTime: '30s',
            stages: [
                { duration: '30s', target: 100 },
                { duration: '1m30s', target: 900 },
                { duration: '30s', target: 100}
            ]
        },
        spike_test: {
            executor: 'ramping-vus',
            exec: 'api',
            startTime: '3m',
            stages: [
                { duration: '30s', target: 100 },
                { duration: '10s', target: 900},
                { duration: '2m', target: 900 },
                { duration: '30s', target: 100}
            ]
        }
    },
    thresholds: {
        'http_req_duration': ['p(99)<1500']
    },
}

export function  api() {
    const res = http.get('https://dev.holidaysherpa.de');
    check( res, { succesfullRequest:  (r) =>  r.status === 200 })
    sleep(1);
}