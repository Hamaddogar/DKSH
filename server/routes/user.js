const express = require('express');
const DevelopersSkelton = require('../models/Developers');
const JobsSkelton = require('../models/Jobs');

const userRouter = express.Router();

userRouter.get('/user', async (req, res) => {
    try {
        const users = await DevelopersSkelton.find({});
        res.send({ success: true, users });
    } catch (error) {
        console.error('Error retrieving user data:', error);
        res.status(500).json({ message: 'Server Error' });
    }
});

userRouter.get('/jobs', async (req, res) => {
    const jobList = [
        {
            title: "Melinda Kian",
            subTitle: "Experienced UI/UX Designer",
            description: "I am a highly skilled UI/UX designer with a passion for creating visually appealing and user-friendly interfaces. With several years of experience in the industry, I have successfully completed numerous design projects for clients across various domains. I strive to deliver exceptional design solutions that align with client goals and exceed user expectations. Let's collaborate to bring your ideas to life!",
            skills: ["UI design", "UX design", "App design", "iOS", "Prototyping"],
            applications: 7,
            rating: 4.8,
            portfolio: getRandomItemsFromArray(arrayImg, 4),
            price: 1300,
            mainCategory: "Interfaces",
            hourlyRate: 75,
        },
        {
            title: "John Doe",
            subTitle: "Full Stack Developer",
            description: "I am a versatile full stack developer proficient in modern web technologies such as HTML, CSS, JavaScript, and frameworks like React and Node.js. With a strong foundation in both front-end and back-end development, I have successfully delivered scalable and responsive web applications. I am passionate about writing clean and maintainable code while ensuring optimal performance. Let's work together to build innovative and robust web solutions!",
            skills: ["HTML", "CSS", "JavaScript", "React", "Node.js", "RESTful APIs"],
            applications: 12,
            rating: 4.6,
            portfolio: getRandomItemsFromArray(arrayImg, 4),
            price: 1500,
            mainCategory: "Branding",
            hourlyRate: 100,
        },
        {
            title: "Sarah Thompson",
            subTitle: "Creative Illustrator",
            description: "As a passionate illustrator, I bring ideas to life through captivating visuals and artistic illustrations. With expertise in digital and traditional mediums, I have worked on various projects ranging from children's books to editorial illustrations. I love adding a touch of creativity to every project and delivering unique and engaging artwork. Let's collaborate to create stunning illustrations that leave a lasting impression!",
            skills: ["Digital Illustration", "Character Design", "Storyboarding", "Adobe Illustrator", "Traditional Art"],
            applications: 4,
            rating: 4.9,
            portfolio: getRandomItemsFromArray(arrayImg, 4),
            price: 1200,
            mainCategory: "Illustration",
            hourlyRate: 80,
        },
        {
            title: "Mike Johnson",
            subTitle: "Graphic Designer",
            description: "With a keen eye for aesthetics and attention to detail, I specialize in creating visually stunning graphics that communicate your brand's message effectively. Whether it's logo design, marketing materials, or social media graphics, I ensure a seamless blend of creativity and strategy. Let's work together to enhance your brand's visual identity and make a lasting impact!",
            skills: ["Logo Design", "Brand Identity", "Print Design", "Adobe Photoshop", "Adobe Illustrator"],
            applications: 9,
            rating: 4.7,
            portfolio: getRandomItemsFromArray(arrayImg, 4),
            price: 1100,
            mainCategory: "Graphics",
            hourlyRate: 70,
        },
        {
            title: "Emily Scott",
            subTitle: "3D Artist",
            description: "As a skilled 3D artist, I specialize in creating realistic and immersive 3D models and visualizations. From architectural renders to product modeling, I bring ideas to life in a three-dimensional space. With expertise in software like Blender and Maya, I deliver high-quality and detail-oriented 3D assets. Let's collaborate to transform your concepts into stunning 3D visuals!",
            skills: ["3D Modeling", "Texturing", "Lighting", "Rendering", "Blender", "Maya"],
            applications: 6,
            rating: 4.5,
            portfolio: getRandomItemsFromArray(arrayImg, 4),
            price: 1400,
            mainCategory: "3D",
            hourlyRate: 90,
        },
        {
            title: "David Martinez",
            subTitle: "Motion Graphics Designer",
            description: "With expertise in motion graphics and animation, I create captivating visual experiences that engage and inspire audiences. From logo animations to explainer videos, I bring concepts to life through seamless motion and dynamic storytelling. I combine technical skills with a strong sense of design to deliver impactful and memorable motion graphics. Let's collaborate on your next motion project!",
            skills: ["Motion Graphics", "Animation", "Video Editing", "Adobe After Effects", "Cinema 4D"],
            applications: 10,
            rating: 4.8,
            portfolio: getRandomItemsFromArray(arrayImg, 4),
            price: 1600,
            mainCategory: "Animation",
            hourlyRate: 110,
        },
        {
            title: "Rachel Taylor",
            subTitle: "Digital Marketing Specialist",
            description: "I am a results-driven digital marketing specialist with a focus on driving growth and increasing brand visibility. Through strategic planning and execution of marketing campaigns, I help businesses achieve their online objectives. From SEO optimization to social media marketing, I leverage data-driven insights to deliver measurable results. Let's work together to elevate your digital presence!",
            skills: ["Digital Marketing Strategy", "SEO", "Social Media Marketing", "Content Marketing", "Google Analytics"],
            applications: 8,
            rating: 4.6,
            portfolio: getRandomItemsFromArray(arrayImg, 4),
            price: 1250,
            mainCategory: "Marketing",
            hourlyRate: 85,
        },
        {
            title: "Sophie Baker",
            subTitle: "Front-end Developer",
            description: "As a front-end developer, I specialize in creating intuitive and responsive user interfaces. With a strong command of HTML, CSS, and JavaScript frameworks like React, I build interactive web applications that deliver seamless user experiences. I am passionate about clean code, performance optimization, and staying up-to-date with the latest web technologies. Let's collaborate to bring your web projects to life!",
            skills: ["HTML", "CSS", "JavaScript", "React", "Responsive Design", "Front-end Development"],
            applications: 5,
            rating: 4.7,
            portfolio: getRandomItemsFromArray(arrayImg, 4),
            price: 1350,
            mainCategory: "3D",
            hourlyRate: 95,
        },
        {
            title: "Oliver Lewis",
            subTitle: "Back-end Developer",
            description: "I am a dedicated back-end developer with expertise in server-side programming and database management. With proficiency in languages like Node.js and frameworks like Express, I build robust and scalable web applications. I am experienced in API development, database optimization, and ensuring application security. Let's collaborate to create powerful and efficient back-end solutions!",
            skills: ["Node.js", "Express", "RESTful APIs", "Database Management", "Server-side Programming"],
            applications: 3,
            rating: 4.9,
            portfolio: getRandomItemsFromArray(arrayImg, 4),
            price: 1400,
            mainCategory: "3D",
            hourlyRate: 100,
        },
        {
            title: "Emma Roberts",
            subTitle: "UI/UX Designer",
            description: "With a passion for user-centric design, I create intuitive and visually appealing user interfaces. Through extensive research and prototyping, I ensure seamless user experiences that meet both business and user goals. I have a keen eye for aesthetics and a deep understanding of user psychology. Let's collaborate to design exceptional digital experiences!",
            skills: ["UI Design", "UX Design", "Wireframing", "Prototyping", "User Research"],
            applications: 7,
            rating: 4.6,
            portfolio: getRandomItemsFromArray(arrayImg, 4),
            price: 1250,
            mainCategory: "Interfaces",
            hourlyRate: 85,
        },
        {
            title: "Max Turner",
            subTitle: "Digital Illustrator",
            description: "As a digital illustrator, I specialize in creating vibrant and imaginative artwork. With expertise in digital painting and illustration software, I bring characters and scenes to life with rich colors and attention to detail. I have experience in creating illustrations for books, games, and animations. Let's collaborate to create visually stunning illustrations that capture the essence of your ideas!",
            skills: ["Digital Illustration", "Character Design", "Concept Art", "Adobe Photoshop", "Corel Painter"],
            applications: 6,
            rating: 4.7,
            portfolio: getRandomItemsFromArray(arrayImg, 4),
            price: 1200,
            mainCategory: "Illustration",
            hourlyRate: 80,
        },
        {
            title: "William Davis",
            subTitle: "Graphic Designer",
            description: "I am a creative graphic designer with a passion for creating visually appealing and impactful designs. With expertise in Adobe Creative Suite, I craft unique and memorable designs for branding, marketing materials, and print media. I am committed to delivering design solutions that effectively communicate your brand's message and resonate with your target audience. Let's collaborate to elevate your visual identity!",
            skills: ["Logo Design", "Brand Identity", "Print Design", "Adobe Illustrator", "Adobe Photoshop"],
            applications: 5,
            rating: 4.8,
            portfolio: getRandomItemsFromArray(arrayImg, 4),
            price: 1150,
            mainCategory: "Graphics",
            hourlyRate: 75,
        },
        {
            title: "Sophia Anderson",
            subTitle: "3D Modeler",
            description: "I am a skilled 3D modeler specializing in creating realistic and detailed 3D assets. With expertise in software like Autodesk Maya and ZBrush, I bring objects and characters to life in the digital realm. Whether it's for gaming, animation, or architectural visualization, I strive to deliver top-quality 3D models that meet client specifications. Let's collaborate to transform your ideas into stunning 3D visuals!",
            skills: ["3D Modeling", "Texturing", "Digital Sculpting", "Autodesk Maya", "ZBrush"],
            applications: 3,
            rating: 4.9,
            portfolio: getRandomItemsFromArray(arrayImg, 4),
            price: 1350,
            mainCategory: "3D",
            hourlyRate: 90,
        },
        {
            title: "Daniel Wright",
            subTitle: "Motion Graphics Artist",
            description: "As a motion graphics artist, I combine my passion for design and animation to create visually stunning and engaging motion graphics. With expertise in software like Adobe After Effects and Cinema 4D, I bring concepts to life through captivating visual effects and smooth animations. Whether it's for commercials, explainer videos, or title sequences, I deliver high-quality motion graphics that leave a lasting impression.",
            skills: ["Motion Graphics", "Animation", "Visual Effects", "Adobe After Effects", "Cinema 4D"],
            applications: 4,
            rating: 4.7,
            portfolio: getRandomItemsFromArray(arrayImg, 4),
            price: 1450,
            mainCategory: "Animation",
            hourlyRate: 100,
        },
        {
            title: "Isabella Martin",
            subTitle: "Digital Marketing Strategist",
            description: "I am a digital marketing strategist specializing in developing data-driven marketing strategies to drive business growth. With expertise in SEO, social media marketing, and content marketing, I help businesses enhance their online presence and reach their target audience. By analyzing data and trends, I create customized marketing plans that deliver measurable results. Let's collaborate to elevate your digital marketing efforts!",
            skills: ["Digital Marketing Strategy", "SEO", "Social Media Marketing", "Content Marketing", "Google Analytics"],
            applications: 7,
            rating: 4.8,
            portfolio: getRandomItemsFromArray(arrayImg, 4),
            price: 1200,
            mainCategory: "Marketing",
            hourlyRate: 80,
        }
    ];
    try {
        const user = await JobsSkelton.find({});
        res.json({ success: true, list: jobList });

    } catch (error) {
        console.error('Error retrieving user data:', error);
        res.status(500).json({ message: 'Server Error' });
    }
});



module.exports = userRouter;
