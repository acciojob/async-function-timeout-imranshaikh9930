//your JS code here. If required.
const form = document.getElementsByTagName("form")[0]
const delayMessage = async (text, delayInSeconds) => {
    // Convert seconds to milliseconds for setTimeout
    const delayInMilliseconds = delayInSeconds * 1000;

    // Using Promise to simulate delay
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(text);
        }, delayInMilliseconds);
    });
};

// Function to handle button click
const handleClick = async (e) => {
    e.preventDefault();
        const textInput = document.getElementById('text').value;
    const delayInput = document.getElementById('delay').value;

    // Check if both inputs are provided
    if (textInput && delayInput) {
        try {
            const result = await delayMessage(textInput, delayInput);

            console.log(result)
            const p = document.createElement("p");
            p.textContent = result;
            form.appendChild(p);
            
        } catch (error) {
            console.error('Error:', error);
        }
    } else {
        alert('Please enter both text and delay.');
    }
};

document.querySelector("#btn").addEventListener("click",handleClick);