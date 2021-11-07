import Cookies from 'js-cookie';

export async function csrfFetch(url, options = {}) {
    // setting method to 'GET' if there is no method
    options.method = options.method || 'GET';
    // setting headers to empty obj in the event there is no headers
    options.headers = options.headers || {};

    if (options.method.toUpperCase() !== 'GET') {
        options.headers['Content-Type'] =
            options.headers['Content-Type'] || 'application/json';
        options.headers['XSRF-Token'] = Cookies.get('XSRF-TOKEN');
    }

    const res = await window.fetch(url, options);

    if (res.status >= 400) throw res;

    return res;
};

export function restoreCSRF() {
    return csrfFetch('/api/csrf/restore');
};
