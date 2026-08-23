const getAge = (birthDate) => {
    const today = new Date();
    const hasHadBirthdayThisYear =
        today.getMonth() > birthDate.getMonth() ||
        (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate());

    return today.getFullYear() - birthDate.getFullYear() - (hasHadBirthdayThisYear ? 0 : 1);
};

export default getAge;
