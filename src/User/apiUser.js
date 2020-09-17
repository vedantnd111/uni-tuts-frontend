const { API } = require('../configure');

export const fetchStandard = () => {
    return fetch(`${API}/api/standards`, {
        method: 'GET'
    })
        .then(response => response.json())
        .catch(err => console.log(err));
};

export const fetchSubjectsByStandard = (standardId, userId, token) => {
    return fetch(`${API}/api/subject/${standardId}/${userId}`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
        .then(response => response.json())
        .catch(err => console.log(err))
};

export const fetchTopicsBySubject = (subjectId, userId, token) => {
    return fetch(`${API}/api/topic/${subjectId}/${userId}`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
        .then(response => response.json())
        .catch(err => console.log(err))
};
