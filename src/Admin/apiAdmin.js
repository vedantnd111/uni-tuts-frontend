import { API } from '../configure';

export const addStandards = (userId, token, standard) => {
    return fetch(`${API}/api/standard/create/${userId}`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: standard
    })
        .then(Response => Response.json())
        .catch(err => console.log(err));
};

export const addSubjects = (userId, token, subject) => {
    return fetch(`${API}/api/subject/create/${userId}`, {
        method: 'POST',
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`
        },
        body: subject
    })
        .then(response => response.json())
        .catch(err => console.log(err))
};


export const addTopics = (userId, token, topic) => {
    return fetch(`${API}/api/topic/create/${userId}`, {
        method: 'POST',
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`
        },
        body: topic
    })
        .then(response => response.json())
        .catch(err => console.log(err))
};

export const readSubjectById = (subjectId, token) => {
    return fetch(`${API}/api/subject/${subjectId}`, {
        method: 'GET',
        Authorization: `Bearer ${token}`
    })
        .then(response => response.json())
        .catch(err => console.log(err))
};