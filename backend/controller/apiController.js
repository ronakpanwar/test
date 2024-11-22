const isPrime = (num) => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
};

const processInput = (data, file) => {
    // Extract numbers and alphabets from the input data
    const numbers = data.filter((item) => !isNaN(item));
    const alphabets = data.filter((item) => isNaN(item));
    const highestLowercaseAlphabet = alphabets
        .filter((char) => char >= 'a' && char <= 'z')
        .sort()
        .pop();

    // Check if there is a prime number in the input
    const primeExists = numbers.some((num) => isPrime(parseInt(num, 10)));

    // File processing (assume file is provided as Base64 with metadata)
    let fileValid = false;
    let fileMimeType = null;
    let fileSizeKb = 0;

    if (file) {
        try {
            const fileBuffer = Buffer.from(file.content, 'base64');
            fileSizeKb = fileBuffer.length / 1024;
            fileMimeType = file.mimeType;
            fileValid = true;
        } catch (err) {
            fileValid = false;
        }
    }

    // Return the response object
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
