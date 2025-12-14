
/**
 * Applies "Bionic Reading" style formatting to text.
 * Bolds the first few characters of each word to guide the eye.
 * 
 * @param {string} text - The raw text to process.
 * @returns {string} - The HTML string with bold tags, or React nodes if modified (returning string for dangerous dangerouslySetInnerHTML or keeping logical separation).
 * 
 * Actually, to keep it React-friendly, we'll return an array of nodes or a component helper.
 * But purely for text processing, let's process word by word.
 */
export const applyBionicReading = (text) => {
    if (!text) return "";

    return text.split(' ').map((word, index) => {
        const length = word.length;
        let boldLength = 1;

        if (length > 3) boldLength = 2;
        if (length > 6) boldLength = 3;
        if (length > 9) boldLength = 4;

        // Handle punctuation attached to the word? 
        // For simplicity, we just bold the prefix. A more robust regex approach is better but this is MVP.

        const prefix = word.substring(0, boldLength);
        const suffix = word.substring(boldLength);

        return (
            <span key={index}>
                <span className="font-bold">{prefix}</span>
                {suffix}{' '}
            </span>
        );
    });
};
