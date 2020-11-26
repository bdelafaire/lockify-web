export const get = async (path: string) => {
    const response = await fetch(`/api/${path}`, {
        method: 'GET',
    })
    return await response.json()
}

export const post = async (path: string, body = {}) => {
    const response = await fetch(`/api/${path}`, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json'
        },
    })
    return await response.json()
}

export const put = async (path: string, body = {}) => {
    const response = await fetch(`/api/${path}`, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json'
        },
    })
    return await response.json()
}

export const patch = async (path: string, body = {}) => {
    const response = await fetch(`/api/${path}`, {
        method: 'PATCH',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json'
        },
    })
    return await response.json()
}

export const deleteRequest = async (path: string, body = {}) => {
    const response = await fetch(`/api/${path}`, {
        method: 'DELETE',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json'
        },
    })
    return await response.json()
}