
export const required = (value) => {
    if(value) {
        return undefined;
    }
    return 'Field is required';
}

export const maxLengthCreator = (maxLength) => {
    return (value) => {
        if(value && value.length > maxLength) {
            return `Max length id ${maxLength} symbols`;
        }
        return undefined;
    }
}
