class Required {
    static validate(value) {
        if (value.length > 0) return null;
        return "Can not leave this blank";
    }
}

class Email {
    static validate(value) {
        if (value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) return null;
        return "Invalid Email Address";
    }
}

class PhoneNumber {
    static validate(value) {
        if (value.match(/((\+92)?(0092)?(92)?(0)?)(3)([0-9]{9})/)) return null;
        return "Invalid Phone Number";
    }
}

class CNIC {
    static validate(value) {
        if (value.match(/\d\d\d\d\d-?\d\d\d\d\d\d\d-?\d/)) return null;
        return "Invalid CNIC";
    }
}

const validate = (state) => {
    for (let key in state) {
        let error = null;
        for (let validator of state[key].validators) {
            let e = validator.validate(state[key].val);
            if (e) {
                error = e;
                break;
            }
        }
        state[key].error = error;
    }
    return state;
};

export { Required, CNIC, PhoneNumber, Email, validate };
