const credentials = {
    "anthony": {
        password: "password",
        points: 5
    },
    "ana": {
        password: "password",
        points: 6
    },
    "srujan": {
        password: "password",
        points: 4
    },
    "huan": {
        password: "password",
        points: 5
    },
    "jacob": {
        password: "password",
        points: 4
    },
    "vanessa": {
        password: "password",
        points: 6
    },
};

// Store the credentials in localStorage (if not already stored)
if (!localStorage.getItem('credentials')) {
    localStorage.setItem('credentials', JSON.stringify(credentials));
}
