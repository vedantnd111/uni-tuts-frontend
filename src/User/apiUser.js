const { API } = require('../configure');

export const fetchStandard = () => {
    return fetch(`${API}/api/standards`, {
        method: 'GET'
    })
        .then(response => response.json())
        .catch(err => console.log(err));
};

export const fetchSubjectsByStandard = (standardId) => {
    return fetch(`${API}/api/subject/${standardId}`, {
        method: 'GET'
    })
        .then(response => response.json())
        .catch(err => console.log(err))
};

export const fetchTopicsBySubject = (subjectId) => {
    return fetch(`${API}/api/topic/${subjectId}`, {
        method: 'GET'
    })
        .then(response => response.json())
        .catch(err => console.log(err))
};
