function fetchUser() {
    return new Promise((resolve, reject) => {
        // Simulate random success or failure
        if (Math.random() > 0.8) {
            resolve("Your result...");
        } else {
            reject("Your error...");
        }
    })
}