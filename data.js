// Initialize with dummy data
export const articles = [
    new Date().getTime()/1000-3601,
    {
        id: 1,
        title: "The Evolution of Asymmetric Encryption",
        published: "Nov 17, 2018",
        description: "The evolution of asymmetric encryption explained in detail.",
        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        content: "A keyless asymmetric encryption scheme is a method of encrypting data using a public key and a private key. The public key is used to encrypt data, while the private key is used to decrypt data. The private key is kept secret, while the public key is shared with anyone who needs to decrypt the data.",
    },
    {
        id: 2,
        title: "The Evolution of Fungible Tokens",
        published: "March 18, 2021",
        description: "The evolution of fungible tokens explained in detail.",
        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        content: "Fungible tokens are tokens that can be transferred to other parties. They are not restricted to a single owner, and can be transferred to multiple parties.",
    },
    {
        id: 3,
        title: "The Downfall of the Blockchain",
        published: "May 1, 2020",
        description: "The tragic downfall of the blockchain that is not secure.",
        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        content: "The blockchain is a distributed ledger, which means that it is not possible to verify the integrity of the data. This means that it is not possible to prevent a malicious actor from modifying the data.",
    },
];

export const apiKey = process.env.NEWS_API_KEY;