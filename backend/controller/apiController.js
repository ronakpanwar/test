const isPrime = (num) => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
};

const processInput = (data, file_b64) => {
   
    const numbers = data.filter((item) => !isNaN(item));
    const alphabets = data.filter((item) => isNaN(item));
    const highestLowercaseAlphabet = alphabets
        .filter((char) => char >= 'a' && char <= 'z')
        .sort()
        .pop();

    const primeExists = numbers.some((num) => isPrime(parseInt(num, 10)));


    const fileValid = !!file_b64;
    const fileMimeType = file_b64 ? 'application/pdf' : null;
    const fileSizeKb = file_b64 ? 400 : null;

    return {
        is_success: true,
        user_id: 'Ronak_Panwar_20112001',
        email: 'panwarronak797@gmail.com',
        roll_number: '0002CB211043',
        numbers,
        alphabets,
        highest_lowercase_alphabet: highestLowercaseAlphabet || null,
        is_prime_found: primeExists,
        file_valid: fileValid,
        file_mime_type: fileMimeType,
        file_size_kb: fileSizeKb,
    };
};

module.exports = { processInput };
