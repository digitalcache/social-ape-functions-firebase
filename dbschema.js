let db = {
    screams: [
        {
            userHandle: 'user',
            body: 'this is scream body',
            createdAt : "2021-05-11T18:14:39.062Z",
            likeCount: 5,
            commentCount: 2,
        }
    ],
    users: [
        {
            userId: 'asd23qasdasd12dad',
            email: 'charles.doley@gmail.com',
            handle: 'user',
            createdAt: '2021-05-11T18:14:39.062Z',
            imageURL: 'https://image.com',
            bio: 'Hola, Como estas.',
            website: 'https://yser.com',
            location: 'London , UK'
        }
    ],
    comments: [
        {
            userHandle: "user",
            screamId : "asda23qead",
            body: "nice one mater!",
            createdAt: "asd123 1231"
        }
    ]
};


const userDetails = {
    
    credentials: {
        userId: 'asd23qasdasd12dad',
        email: 'charles.doley@gmail.com',
        handle: 'user',
        createdAt: '2021-05-11T18:14:39.062Z',
        imageURL: 'https://image.com',
        bio: 'Hola, Como estas.',
        website: 'https://yser.com',
        location: 'London , UK'
    },
    likes: [
        {
            userHandle: "user",
            screamId: "sadasd213asd"
        },
        {
            userHandle: "user",
            screamId: "asdasdda"
        }
    ]
};