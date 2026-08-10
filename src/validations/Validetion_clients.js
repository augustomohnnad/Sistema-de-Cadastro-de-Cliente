const validateClient = (name_clients, email, nif) => {

    if (!name_clients || name_clients.trim() === '' || name_clients.length <= 4 ) {
        throw new Error('Name is required or at least 4 characters');
    }

    if (!email || email.trim() === '' || email.indexOf("@") == -1) {
        throw new Error('Email is required or invalid.');
    }

    if (!nif || nif.trim() === '' || nif.length < 9) {
        throw new Error('NIF is required or NIF cannot be less than 9 digits');
    }

    return true;
};

module.exports = validateClient;