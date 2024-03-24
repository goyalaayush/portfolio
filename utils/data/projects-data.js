import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'PicTalesHub',
        description: "•	Designed and built a complete MERN application, featuring CRUD operations, user authentication, picture posting, and content display. This enhanced user engagement and interaction.Engineered a robust and RESTful API using Express.js, resulting in significant improvement in API response times. Authored a MongoDB database schema to effectively store and manage posts, pictures, and user data, optimizing data organization and retrieval & Integrated secure user authentication and authorization features using JSON Web Token.",
        tools: ['React', 'MongoDB', 'Express', 'Tailwind', 'Node.js', 'Javascript', 'Multer', 'JWT', 'Bcrypt'],
        role: 'MERN Stack Developer',
        code: 'https://github.com/goyalaayush/BlogApp',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'Chat App',
        description: ' Engineered a dynamic web application facilitating real-time messaging for multiple users.Implemented admin notifications to promptly alert users about join and departure events in the chat.Developed user interface components using React.js and backend functionality with Node.js.Employed the Socket.IO library to achieve efficient, low-latency, bidirectional, and event-driven communication among users.',
        tools: ['ReactJs', 'Bootstrap', "SOCKET.IO", "Express", "Javascript", "Node.js"],
        role: 'Web App Developer',
        code: 'https://github.com/goyalaayush/chatapp',
        demo: '',
        image: travel,
    },

    {
        id: 3,
        name: 'Tic Tac Toe',
        description: "Welcome to Tic Tac Toe, a captivating web adaptation of the classic game designed with HTML, CSS, JavaScript, and Bootstrap. This rendition offers a sleek interface complemented by immersive sound effects, enhancing the gameplay experience with satisfying clicks for moves, celebratory tunes for victories, and congenial tones for draws. ",
        tools: ['HTML', 'CSS', 'Javascript'],
        code: 'https://github.com/goyalaayush/tictactoe',
        demo: 'https://goyalaayush.github.io/tictactoe/',
        image: ayla,
        role: '',
    },
    {
        id: 4,
        name: 'Esignature Pad',
        description: 'Welcome to our React eSignature project, a cutting-edge solution designed to simplify the process of signing documents digitally. Utilizing React, JavaScript, and CSS, alongside the powerful Tailwind CSS framework, our platform integrates seamlessly with essential libraries like pdf-lib, react-signature-pad, and file-saver. Users are greeted with an intuitive interface where they can effortlessly draw their signatures on a pristine whiteboard-style canvas, ensuring accuracy and authenticity with every stroke. Thanks to real-time preview capabilities, users can fine-tune their signatures before seamlessly integrating them into PDF documents.',
        tools: ['React', 'Tailwind', 'Javascript', 'pdf-lib', 'react-signature-pad', 'file-saver', 'Typescript'],
        code: '',
        role: '',
        demo: 'https://65ddd84b42f0d2114f1d6cc2--marvelous-otter-6b7241.netlify.app/',
        image: realEstate,
    },

    {
        id: 5,
        name: 'Weather App',
        description: 'Developed a weather App in which a user can fetch weather details of a particular region by providing the name of the region and can also get weather details of his current location',
        tools: ['HTML','CSS','Javascript','Bootstrap'],
        code: 'https://github.com/goyalaayush/weatherapp',
        role: '',
        demo: 'https://goyalaayush.github.io/weatherapp/',
        image: realEstate,
    },
 
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },