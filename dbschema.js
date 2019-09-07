let db = {
  users: [
    {
      userId: "g9IynY5SzvMs8xse9jWfdMDKMy52",
      email: "ugur@mail.com",
      handle: "newmailaddress",
      createdAt: "2019-09-06T08:06:13.846Z",
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/meow-not.appspot.com/o/58420400946.jpg?alt=media",
      bio: "Hello My name is user, nice to meet you",
      website: "https://user.com",
      location: " London, UK",
      cats: {
        catname: "Tekir",
        catId: "e84y26y6e4y6e42ye46",
        catImageCount: 5,
        catImagesURLs: []
      }
    }
  ],
  screams: [
    {
      userHandle: "user",
      body: "This is a sample scream",
      createdAt: "2019-09-06T08:06:13.846Z",
      likeCount: 5,
      commentCount: 3,
      catCount: 2,
      order: 1
    }
  ],
  comments: [
    {
      userHandle: "user",
      screamId: "kdjsfgdksuufhgkdsufky",
      body: "nice one mate!",
      createdAt: "2019-03-15T10:59:52.798Z"
    }
  ]
};

const userDetails = {
  // Redux data
  credentials: {
    userId: "N43KJ5H43KJHREW4J5H3JWMERHB",
    email: "user@email.com",
    handle: "user",
    createdAt: "2019-03-15T10:59:52.798Z",
    imageUrl: "image/dsfsdkfghskdfgs/dgfdhfgdh",
    bio: "Hello, my name is user, nice to meet you",
    website: "https://user.com",
    location: "Lonodn, UK"
  },
  likes: [
    {
      userHandle: "user",
      screamId: "hh7O5oWfWucVzGbHH2pa"
    },
    {
      userHandle: "user",
      screamId: "3IOnFoQexRcofs5OhBXO"
    }
  ]
};