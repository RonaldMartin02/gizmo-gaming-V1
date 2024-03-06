
const firstNames = [
    'John',
    'Jane',
    'Jack',
    'Jill',
    'Joe',
    'Ralph',
    'Rick',
    'Rachel',
    'Randy',
    'Rita',
    'Robert',
    'Roberta',
    'Riley',
    'Rachael',
    'Rachelle',
    'Renee',
    'Rita',
    'Ricky',
    'Ricardo',
    'Ramon',
    'Raul',
    'Rosa',
    'Rose',
    'Rosie',
    'Ruth',
    'Roxanne',
    'Rene',
    'Rebecca',
    'Rebekah',
    'Regina',
    'Hamburglar',
    'Ronald',
    'Grimace',
    'Mayor McCheese',
    'Officer Big Mac',
    'Birdie the Early Bird',
    'The Fry Kids',
    'Uncle O\'Grimacey',
    'Ron',
  ];

const lastNames = [
    'Smith',
    'Johnson',
    'Williams',
    'Brown',
    'Jones',
    'Garcia',
    'Miller',
];

const Games = [
    'Fortnite',
    'League of Legends',
    'Call of Duty',
    'World of Warcraft',
    'Apex Legends',
]

const comments = [
    'This @#$%^&* sucks!',
    'this is the best thing ever!',
    'I love this!',
    'I hate this!',
    'I am indifferent about this!',
]

const emails = [
    '@gmail.com',
    '@yahoo.com',
    '@hotmail.com',
    '@aol.com',
    '@outlook.com',
    '@icloud.com',
    '@sbcglobal.net',
]
const postTitle = [
    'My first build',
    'My second build',
    'My third build',
    'My fourth build',
    'My fifth build',
]
const postBody = [
    'This is my first build and I am so excited to share it with you all!',
    'This is my second build and I am so excited to share it with you all!',
    'This is my third build and I am so excited to share it with you all!',
    'This is my fourth build and I am so excited to share it with you all!',
]
const buildGenre = [
    'FPS',
    'MMO',
    'MOBA',
    'Battle Royale',
    'RPG',
]


const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
const FullName = () => `${getRandomArrItem(firstNames)} ${getRandomArrItem(lastNames)}`;
const getRandomUsername = () => {
    return `${ FullName() + Math.floor(Math.random() * 100)}`;
}
const getRandomEmail = () => {
    return getRandomArrItem(emails);

}

const getRandomComments = (int) => {
    const results = [];
  for (let i = 0; i < int; i++) {
    results.push(
    getRandomArrItem(comments),
    );
  }
  return results;
}

const getRandomFriendsList = (int) => {
    const results = [];
    for (let i = 0; i < int; i++) {
        results.push(
          getRandomUsername()
        );
    }
    return results;
  }
module.exports = { getRandomUsername, getRandomThoughts, getRandomComments, getRandomEmail, getRandomFriendsList };