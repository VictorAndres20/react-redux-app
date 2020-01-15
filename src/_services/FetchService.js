export const fetchRetrive = async (url, method, headers) => {
    return new Promise((resolve, reject) => {
        fetch(url, {
            method,
            headers,
        })
        .then(res => (res.json()))
        .then(data => resolve(data))
        .catch(err => reject(err));
    });
}

export const fetchBody = async (url, method, headers, body) => {
    return new Promise((resolve, reject) => {
        fetch(url, {
            method,
            headers,
            body: JSON.stringify(body)
        })
        .then(res => (res.json()))
        .then(data => resolve(data))
        .catch(err => reject(err));
    });
}