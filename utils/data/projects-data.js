import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'StandUp Comdedian Web app',
        description: "I build a complete Web app for a Female comedian .With Admin dashboard and ticket Buying and Upload new shows details functionality",
        tools: ['Laravel','Php','Mysql'],
        role: 'Full Stack',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'Rapid Counsel (Lawyer Marketplace)',
        description: 'I have designed and developed a full-stack web app for Lawferm Marketplace, a plateform where lawyers find legal cases and users find legal support',
        tools: ['React js', 'Node js', 'Mongodb', 'Express js'],
        role: 'Full Stack Developer',
        code: 'http://kiarabenson.com/public/index.php',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'AI Powered Real Estate',
        description: 'My team built an AI-based real estate app using Replicate API and OpenAI. We used Express, Typescript, OpenAI, Replicate, Stripe, and Mongoose to develop the API. We utilized NextJS, Formik, TailwindCSS, and other npm libraries for the UI. We have trained multiple AI assistants using the latest GPT model and integrated Replicate API for image processing. We added role-based auth, subscription plans, Cron job scheduling, and payment integration with Stripe.',
        tools: ['React', 'Bootstrap', 'SCSS', 'Stripe', 'Express', 'TypeScript', 'MongoDB', 'Azure Blob', 'OpenAI API', 'Replicate AI', 'Cronjob', 'JWT'],
        code: '',
        role: 'Full Stack Developer',
        demo: '',
        image: realEstate,
    },
    {
        id: 4,
        name: 'Wilsco Distributors',
        description: "Wilsco distributor is a whole sale Ecommercce production website.",
        tools: ['Html', 'css', 'javascript', 'Core Php'],
        code: '',
        demo: '',
        image: ayla,
        role: 'Full Stack Developer',
    }
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