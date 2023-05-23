// require('dotenv').config()
const DevelopersSkelton = require("./models/Developers");
const mongoose = require('mongoose');
const express = require('express');
const path = require("path");
const cors = require('cors');
const app = express();

// useage
app.use(cors());
app.use(express.json({ limit: '200mb' }));
app.use(express.static("./build"));
app.use(express.static("./uploads"));
app.use(express.urlencoded({ limit: '200mb', extended: true }));


const PORT = process.env.PORT || 8080;

if (process.env.NODE_ENV === "production") {
    app.use(express.static("build"));
    const path = require("path");
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
    })
}
app.listen(PORT, () => { console.log('server is running'); })


// app.listen(8080 || process.env.PORT)


// ------------------------.ENV CONFIG ------------------//

const MONGO_URI = process.env.MONGO_URI || 'mongodb+srv://admin:admin@cluster0.zylqsdb.mongodb.net/dksh?';


// -------------DB Connection----------------- //
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }, (err, connection) => {
    console.log(err || connection);
});


// -------------Server ----------------- //


// registration
app.get("/add", async (req, res) => {
    try {
        const userData = [
            {
                
                firstName: 'Hammad',
                lastName: 'Dogar',
                profileName: function () {
                    return `${this.firstName} ${this.lastName}`
                },
                hourlyRate: 50,
                avatar: 'https://avatars.githubusercontent.com/u/42932321?v=4',
                verified: true,
                description: 'UI/UX designer with 5 years of experience. Specializes in creating clean, modern interfaces',
                category: "Design",
                jobs: {
                    completed: 102,
                    cancelled: 7,
                    inProgress: 2
                },
                revneue: 234000,
                services: [
                    {
                        _id: 's_1',
                        title: "I will do UIUX for you mobile application or website in figma or xdk",
                        description: "Lorem ipsum dolor sit amet consectetur. Lacus urna ut at sed. Egestas diam sed venenatis egestas etiam. Neque eu vulputate libero morbi viverra. Ipsum vestibulum dictumst ornare nisl metus dignissim imperdiet tincidunt. Justo ac elementum odio rhoncus habitasse elit consequat mi. Tellus sagittis volutpat nisl vitae condimentum. Lacus in et metus ornare massa fames. Id diam morbi euismod sit. Orci tellus sapien purus ornare. Adipiscing adipiscing in aliquam ac adipiscing feugiat consequat habitant proin. Proin erat elementum pellentesque lorem proin. Nisl phasellus nibh elit sollicitudin et platea volutpat faucibus. Maecenas ultricies eget sagittis porttitor pellentesque nibh. Lorem purus sed viverra pellentesque. Habitasse libero blandit eu eget. Vitae etiam enim pellentesque pulvinar hendrerit fringilla justo. Faucibus sed arcu massa consectetur cursus. Molestie odio ut etiam egestas feugiat nec elit. Eu volutpat nunc nibh gravida habitant sit risus. Viverra ullamcorper orci lectus diam proin. Fringilla magna arcu id leo cum nec dis. Amet quis enim imperdiet et vestibulum sit eu purus. Id non viverra posuere id. Sit ipsum tellus enim mauris sit nibh fermentum. Eu a laoreet amet nulla. Convallis libero egestas pellentesque interdum hendrerit feugiat venenatis sapien. In tempus gravida pretium facilisi laoreet quisque dolor vulputate consectetur.",
                        comments: [
                            {
                                projectHeading: "Wedding website layout",
                                description: "Yevhen produced a wireframe, ui and design style guide for a custom e-commerce site. He did the work on time and with a great design eye. Nice design touch. Lorem ipsum dolor sit amet consectetur. Lacus urna ut at sed. Egestas diam sed venenatis egestas etiam. Neque eu vulputate libero morbi viverra. Ipsum vestibulum dictumst ornare nisl metus dignissim imperdiet tincidunt. Justo ac elementum odio rhoncus habitasse elit consequat mi. Tellus sagittis volutpat nisl vitae condimentum. Lacus in et metus ornare massa fames. Id diam morbi euismod sit. Orci tellus sapien purus ornare. Adipiscing adipiscing in aliquam ac adipiscing feugiat consequat habitant proin. Proin erat elementum pellentesque lorem proin. Nisl phasellus nibh elit sollicitudin et platea volutpat faucibus. Maecenas ultricies eget sagittis porttitor pellentesque nibh. Lorem purus sed viverra pellentesque. Habitasse libero blandit eu eget. Vitae etiam enim pellentesque pulvinar hendrerit fringilla justo. Faucibus sed arcu massa consectetur cursus. Molestie odio ut etiam egestas feugiat nec elit. Eu volutpat nunc nibh gravida habitant sit risus. Viverra ullamcorper orci lectus diam proin. Fringilla magna arcu id leo cum nec dis. Amet quis enim imperdiet et vestibulum sit eu purus. Id non viverra posuere id. Sit ipsum tellus enim mauris sit nibh fermentum. Eu a laoreet amet nulla. Convallis libero egestas pellentesque interdum hendrerit feugiat venenatis sapien. In tempus gravida pretium facilisi laoreet quisque dolor vulputate consectetur.",
                                commentDate: "March 12 2023",
                                rated: 5,
                                price: 234,
                            },
                            {
                                projectHeading: "React Naive Bug Fix",
                                description: "Yevhen produced a wireframe, ui and design style guide for a custom e-commerce site. He did the work on time and with a great design eye. Nice design touch. Lorem ipsum dolor sit amet consectetur. Lacus urna ut at sed. Egestas diam sed venenatis egestas etiam. Neque eu vulputate libero morbi viverra. Ipsum vestibulum dictumst ornare nisl metus dignissim imperdiet tincidunt. Justo ac elementum odio rhoncus habitasse elit consequat mi. Tellus sagittis volutpat nisl vitae condimentum. Lacus in et metus ornare massa fames. Id diam morbi euismod sit. Orci tellus sapien purus ornare. Adipiscing adipiscing in aliquam ac adipiscing feugiat consequat habitant proin. Proin erat elementum pellentesque lorem proin. Nisl phasellus nibh elit sollicitudin et platea volutpat faucibus. Maecenas ultricies eget sagittis porttitor pellentesque nibh. Lorem purus sed viverra pellentesque. Habitasse libero blandit eu eget. Vitae etiam enim pellentesque pulvinar hendrerit fringilla justo. Faucibus sed arcu massa consectetur cursus. Molestie odio ut etiam egestas feugiat nec elit. Eu volutpat nunc nibh gravida habitant sit risus. Viverra ullamcorper orci lectus diam proin. Fringilla magna arcu id leo cum nec dis. Amet quis enim imperdiet et vestibulum sit eu purus. Id non viverra posuere id. Sit ipsum tellus enim mauris sit nibh fermentum. Eu a laoreet amet nulla. Convallis libero egestas pellentesque interdum hendrerit feugiat venenatis sapien. In tempus gravida pretium facilisi laoreet quisque dolor vulputate consectetur.",
                                commentDate: "April 02 2022",
                                rated: 5,
                                price: 24,
                            },
        
                        ],
                        profile: [
                            'https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/portfolio-large-01-340x250.jpg',
                            'https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/portfolio-large-02-340x250.jpg',
                            'https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/portfolio-large-03-340x250.jpg',
                        ],
                    }
                ],
                comments: [
                    {
                        Heading: "Gift Giving Website",
                        title: "Yevhen produced a wireframe, ui and design style guide for a custom e-commerce site. He did the work on time and with a great design eye. Nice design touch",
                        date: "March 09, 2023 11:00 AM",
                        rated: 4,
                    },
                    {
                        Heading: "Design Four Startup Web UX/UI Screens and Logo",
                        title: "evhen, our designer, has done an outstanding job on this project. Not only did he bring his considerable design skills to the table, but he also collaborated effectively with the rest of the team, listening to feedback and incorporating suggestions to create a final product that exceeded our expectations. Yevhen's attention to detail, creativity, and professionalism were invaluable to the success of this project. We are fortunate to have such a talented and dedicated designer on our team.",
                        date: "March 09, 2023 11:00 AM",
                        rated: 5,
                    },
                ],
                specialization: ["UI Design", "Ux Design", "+3"],
                projectsThumbs: [
                    'https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/portfolio-large-01-340x250.jpg',
                    'https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/portfolio-large-02-340x250.jpg',
                    'https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/portfolio-large-03-340x250.jpg',
                ],
            },
        
            {
                
                firstName: 'John',
                lastName: 'Doe',
                hourlyRate: 30,
                avatar: "https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/final-home-1st.png",
                verified: true,
                description: 'UI/UX designer with 5 years of experience. Specializes in creating clean, modern interfaces',
                category: "Design",
                jobs: {
                    completed: 102,
                    cancelled: 7,
                    inProgress: 2
                },
                revneue: 234000,
                services: [
                    {
                        _id: 's_1',
                        title: "I will do UIUX for you mobile application or website in figma or xdk",
                        description: "Lorem ipsum dolor sit amet consectetur. Lacus urna ut at sed. Egestas diam sed venenatis egestas etiam. Neque eu vulputate libero morbi viverra. Ipsum vestibulum dictumst ornare nisl metus dignissim imperdiet tincidunt. Justo ac elementum odio rhoncus habitasse elit consequat mi. Tellus sagittis volutpat nisl vitae condimentum. Lacus in et metus ornare massa fames. Id diam morbi euismod sit. Orci tellus sapien purus ornare. Adipiscing adipiscing in aliquam ac adipiscing feugiat consequat habitant proin. Proin erat elementum pellentesque lorem proin. Nisl phasellus nibh elit sollicitudin et platea volutpat faucibus. Maecenas ultricies eget sagittis porttitor pellentesque nibh. Lorem purus sed viverra pellentesque. Habitasse libero blandit eu eget. Vitae etiam enim pellentesque pulvinar hendrerit fringilla justo. Faucibus sed arcu massa consectetur cursus. Molestie odio ut etiam egestas feugiat nec elit. Eu volutpat nunc nibh gravida habitant sit risus. Viverra ullamcorper orci lectus diam proin. Fringilla magna arcu id leo cum nec dis. Amet quis enim imperdiet et vestibulum sit eu purus. Id non viverra posuere id. Sit ipsum tellus enim mauris sit nibh fermentum. Eu a laoreet amet nulla. Convallis libero egestas pellentesque interdum hendrerit feugiat venenatis sapien. In tempus gravida pretium facilisi laoreet quisque dolor vulputate consectetur.",
                        comments: [
                            {
                                projectHeading: "Wedding website layout",
                                description: "Yevhen produced a wireframe, ui and design style guide for a custom e-commerce site. He did the work on time and with a great design eye. Nice design touch. Lorem ipsum dolor sit amet consectetur. Lacus urna ut at sed. Egestas diam sed venenatis egestas etiam. Neque eu vulputate libero morbi viverra. Ipsum vestibulum dictumst ornare nisl metus dignissim imperdiet tincidunt. Justo ac elementum odio rhoncus habitasse elit consequat mi. Tellus sagittis volutpat nisl vitae condimentum. Lacus in et metus ornare massa fames. Id diam morbi euismod sit. Orci tellus sapien purus ornare. Adipiscing adipiscing in aliquam ac adipiscing feugiat consequat habitant proin. Proin erat elementum pellentesque lorem proin. Nisl phasellus nibh elit sollicitudin et platea volutpat faucibus. Maecenas ultricies eget sagittis porttitor pellentesque nibh. Lorem purus sed viverra pellentesque. Habitasse libero blandit eu eget. Vitae etiam enim pellentesque pulvinar hendrerit fringilla justo. Faucibus sed arcu massa consectetur cursus. Molestie odio ut etiam egestas feugiat nec elit. Eu volutpat nunc nibh gravida habitant sit risus. Viverra ullamcorper orci lectus diam proin. Fringilla magna arcu id leo cum nec dis. Amet quis enim imperdiet et vestibulum sit eu purus. Id non viverra posuere id. Sit ipsum tellus enim mauris sit nibh fermentum. Eu a laoreet amet nulla. Convallis libero egestas pellentesque interdum hendrerit feugiat venenatis sapien. In tempus gravida pretium facilisi laoreet quisque dolor vulputate consectetur.",
                                commentDate: "March 12 2023",
                                rated: 5,
                                price: 234,
                            },
                            {
                                projectHeading: "React Naive Bug Fix",
                                description: "Yevhen produced a wireframe, ui and design style guide for a custom e-commerce site. He did the work on time and with a great design eye. Nice design touch. Lorem ipsum dolor sit amet consectetur. Lacus urna ut at sed. Egestas diam sed venenatis egestas etiam. Neque eu vulputate libero morbi viverra. Ipsum vestibulum dictumst ornare nisl metus dignissim imperdiet tincidunt. Justo ac elementum odio rhoncus habitasse elit consequat mi. Tellus sagittis volutpat nisl vitae condimentum. Lacus in et metus ornare massa fames. Id diam morbi euismod sit. Orci tellus sapien purus ornare. Adipiscing adipiscing in aliquam ac adipiscing feugiat consequat habitant proin. Proin erat elementum pellentesque lorem proin. Nisl phasellus nibh elit sollicitudin et platea volutpat faucibus. Maecenas ultricies eget sagittis porttitor pellentesque nibh. Lorem purus sed viverra pellentesque. Habitasse libero blandit eu eget. Vitae etiam enim pellentesque pulvinar hendrerit fringilla justo. Faucibus sed arcu massa consectetur cursus. Molestie odio ut etiam egestas feugiat nec elit. Eu volutpat nunc nibh gravida habitant sit risus. Viverra ullamcorper orci lectus diam proin. Fringilla magna arcu id leo cum nec dis. Amet quis enim imperdiet et vestibulum sit eu purus. Id non viverra posuere id. Sit ipsum tellus enim mauris sit nibh fermentum. Eu a laoreet amet nulla. Convallis libero egestas pellentesque interdum hendrerit feugiat venenatis sapien. In tempus gravida pretium facilisi laoreet quisque dolor vulputate consectetur.",
                                commentDate: "April 02 2022",
                                rated: 5,
                                price: 24,
                            }, {
                                projectHeading: "Wedding website layout",
                                description: "Yevhen produced a wireframe, ui and design style guide for a custom e-commerce site. He did the work on time and with a great design eye. Nice design touch. Lorem ipsum dolor sit amet consectetur. Lacus urna ut at sed. Egestas diam sed venenatis egestas etiam. Neque eu vulputate libero morbi viverra. Ipsum vestibulum dictumst ornare nisl metus dignissim imperdiet tincidunt. Justo ac elementum odio rhoncus habitasse elit consequat mi. Tellus sagittis volutpat nisl vitae condimentum. Lacus in et metus ornare massa fames. Id diam morbi euismod sit. Orci tellus sapien purus ornare. Adipiscing adipiscing in aliquam ac adipiscing feugiat consequat habitant proin. Proin erat elementum pellentesque lorem proin. Nisl phasellus nibh elit sollicitudin et platea volutpat faucibus. Maecenas ultricies eget sagittis porttitor pellentesque nibh. Lorem purus sed viverra pellentesque. Habitasse libero blandit eu eget. Vitae etiam enim pellentesque pulvinar hendrerit fringilla justo. Faucibus sed arcu massa consectetur cursus. Molestie odio ut etiam egestas feugiat nec elit. Eu volutpat nunc nibh gravida habitant sit risus. Viverra ullamcorper orci lectus diam proin. Fringilla magna arcu id leo cum nec dis. Amet quis enim imperdiet et vestibulum sit eu purus. Id non viverra posuere id. Sit ipsum tellus enim mauris sit nibh fermentum. Eu a laoreet amet nulla. Convallis libero egestas pellentesque interdum hendrerit feugiat venenatis sapien. In tempus gravida pretium facilisi laoreet quisque dolor vulputate consectetur.",
                                commentDate: "March 12 2023",
                                rated: 5,
                                price: 234,
                            },
                            {
                                projectHeading: "React Naive Bug Fix",
                                description: "Yevhen produced a wireframe, ui and design style guide for a custom e-commerce site. He did the work on time and with a great design eye. Nice design touch. Lorem ipsum dolor sit amet consectetur. Lacus urna ut at sed. Egestas diam sed venenatis egestas etiam. Neque eu vulputate libero morbi viverra. Ipsum vestibulum dictumst ornare nisl metus dignissim imperdiet tincidunt. Justo ac elementum odio rhoncus habitasse elit consequat mi. Tellus sagittis volutpat nisl vitae condimentum. Lacus in et metus ornare massa fames. Id diam morbi euismod sit. Orci tellus sapien purus ornare. Adipiscing adipiscing in aliquam ac adipiscing feugiat consequat habitant proin. Proin erat elementum pellentesque lorem proin. Nisl phasellus nibh elit sollicitudin et platea volutpat faucibus. Maecenas ultricies eget sagittis porttitor pellentesque nibh. Lorem purus sed viverra pellentesque. Habitasse libero blandit eu eget. Vitae etiam enim pellentesque pulvinar hendrerit fringilla justo. Faucibus sed arcu massa consectetur cursus. Molestie odio ut etiam egestas feugiat nec elit. Eu volutpat nunc nibh gravida habitant sit risus. Viverra ullamcorper orci lectus diam proin. Fringilla magna arcu id leo cum nec dis. Amet quis enim imperdiet et vestibulum sit eu purus. Id non viverra posuere id. Sit ipsum tellus enim mauris sit nibh fermentum. Eu a laoreet amet nulla. Convallis libero egestas pellentesque interdum hendrerit feugiat venenatis sapien. In tempus gravida pretium facilisi laoreet quisque dolor vulputate consectetur.",
                                commentDate: "April 02 2022",
                                rated: 5,
                                price: 24,
                            },
        
                        ],
                        profile: [
                            'https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/portfolio-large-04-340x250.jpg',
                            'https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/portfolio-large-05-340x250.jpg',
                            'https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/portfolio-large-06-340x250.jpg',
                        ],
                    }
                ],
                comments: [
                    {
                        Heading: "Gift Giving Website",
                        title: "Yevhen produced a wireframe, ui and design style guide for a custom e-commerce site. He did the work on time and with a great design eye. Nice design touch",
                        date: "March 09, 2023 11:00 AM",
                        rated: 4,
                    },
                    {
                        Heading: "Design Four Startup Web UX/UI Screens and Logo",
                        title: "evhen, our designer, has done an outstanding job on this project. Not only did he bring his considerable design skills to the table, but he also collaborated effectively with the rest of the team, listening to feedback and incorporating suggestions to create a final product that exceeded our expectations. Yevhen's attention to detail, creativity, and professionalism were invaluable to the success of this project. We are fortunate to have such a talented and dedicated designer on our team.",
                        date: "March 09, 2023 11:00 AM",
                        rated: 5,
                    }, {
                        Heading: "Gift Giving Website",
                        title: "Yevhen produced a wireframe, ui and design style guide for a custom e-commerce site. He did the work on time and with a great design eye. Nice design touch",
                        date: "March 09, 2023 11:00 AM",
                        rated: 4,
                    },
                    {
                        Heading: "Design Four Startup Web UX/UI Screens and Logo",
                        title: "evhen, our designer, has done an outstanding job on this project. Not only did he bring his considerable design skills to the table, but he also collaborated effectively with the rest of the team, listening to feedback and incorporating suggestions to create a final product that exceeded our expectations. Yevhen's attention to detail, creativity, and professionalism were invaluable to the success of this project. We are fortunate to have such a talented and dedicated designer on our team.",
                        date: "March 09, 2023 11:00 AM",
                        rated: 5,
                    },
                ],
                specialization: ["WEB 3.0", "PHP", "+2"],
                projectsThumbs: [
                    'https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/portfolio-large-04-340x250.jpg',
                    'https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/portfolio-large-05-340x250.jpg',
                    'https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/portfolio-large-06-340x250.jpg',
                ],
            },
        
        
            {
                
                firstName: 'Olivia',
                lastName: 'Morris',
                hourlyRate: 42,
                avatar: "https://c.ndtvimg.com/2021-01/tog763u_olivia-morris-instagram_625x300_29_January_21.jpg?im=Resize=(1230,900)",
                verified: true,
                description: 'UI/UX designer with 5 years of experience. Specializes in creating clean, modern interfaces',
                category: "Design",
                jobs: {
                    completed: 502,
                    cancelled: 7,
                    inProgress: 2
                },
                revneue: 594000,
                services: [
                    {
                        _id: 's_1',
                        title: "I will do UIUX for you mobile application or website in figma or xdk",
                        description: "Lorem ipsum dolor sit amet consectetur. Lacus urna ut at sed. Egestas diam sed venenatis egestas etiam. Neque eu vulputate libero morbi viverra. Ipsum vestibulum dictumst ornare nisl metus dignissim imperdiet tincidunt. Justo ac elementum odio rhoncus habitasse elit consequat mi. Tellus sagittis volutpat nisl vitae condimentum. Lacus in et metus ornare massa fames. Id diam morbi euismod sit. Orci tellus sapien purus ornare. Adipiscing adipiscing in aliquam ac adipiscing feugiat consequat habitant proin. Proin erat elementum pellentesque lorem proin. Nisl phasellus nibh elit sollicitudin et platea volutpat faucibus. Maecenas ultricies eget sagittis porttitor pellentesque nibh. Lorem purus sed viverra pellentesque. Habitasse libero blandit eu eget. Vitae etiam enim pellentesque pulvinar hendrerit fringilla justo. Faucibus sed arcu massa consectetur cursus. Molestie odio ut etiam egestas feugiat nec elit. Eu volutpat nunc nibh gravida habitant sit risus. Viverra ullamcorper orci lectus diam proin. Fringilla magna arcu id leo cum nec dis. Amet quis enim imperdiet et vestibulum sit eu purus. Id non viverra posuere id. Sit ipsum tellus enim mauris sit nibh fermentum. Eu a laoreet amet nulla. Convallis libero egestas pellentesque interdum hendrerit feugiat venenatis sapien. In tempus gravida pretium facilisi laoreet quisque dolor vulputate consectetur.",
                        comments: [
                            {
                                projectHeading: "React Naive Bug Fix",
                                description: "Yevhen produced a wireframe, ui and design style guide for a custom e-commerce site. He did the work on time and with a great design eye. Nice design touch. Lorem ipsum dolor sit amet consectetur. Lacus urna ut at sed. Egestas diam sed venenatis egestas etiam. Neque eu vulputate libero morbi viverra. Ipsum vestibulum dictumst ornare nisl metus dignissim imperdiet tincidunt. Justo ac elementum odio rhoncus habitasse elit consequat mi. Tellus sagittis volutpat nisl vitae condimentum. Lacus in et metus ornare massa fames. Id diam morbi euismod sit. Orci tellus sapien purus ornare. Adipiscing adipiscing in aliquam ac adipiscing feugiat consequat habitant proin. Proin erat elementum pellentesque lorem proin. Nisl phasellus nibh elit sollicitudin et platea volutpat faucibus. Maecenas ultricies eget sagittis porttitor pellentesque nibh. Lorem purus sed viverra pellentesque. Habitasse libero blandit eu eget. Vitae etiam enim pellentesque pulvinar hendrerit fringilla justo. Faucibus sed arcu massa consectetur cursus. Molestie odio ut etiam egestas feugiat nec elit. Eu volutpat nunc nibh gravida habitant sit risus. Viverra ullamcorper orci lectus diam proin. Fringilla magna arcu id leo cum nec dis. Amet quis enim imperdiet et vestibulum sit eu purus. Id non viverra posuere id. Sit ipsum tellus enim mauris sit nibh fermentum. Eu a laoreet amet nulla. Convallis libero egestas pellentesque interdum hendrerit feugiat venenatis sapien. In tempus gravida pretium facilisi laoreet quisque dolor vulputate consectetur.",
                                commentDate: "April 02 2022",
                                rated: 5,
                                price: 24,
                            },
                            {
                                projectHeading: "Wedding website layout",
                                description: "Yevhen produced a wireframe, ui and design style guide for a custom e-commerce site. He did the work on time and with a great design eye. Nice design touch. Lorem ipsum dolor sit amet consectetur. Lacus urna ut at sed. Egestas diam sed venenatis egestas etiam. Neque eu vulputate libero morbi viverra. Ipsum vestibulum dictumst ornare nisl metus dignissim imperdiet tincidunt. Justo ac elementum odio rhoncus habitasse elit consequat mi. Tellus sagittis volutpat nisl vitae condimentum. Lacus in et metus ornare massa fames. Id diam morbi euismod sit. Orci tellus sapien purus ornare. Adipiscing adipiscing in aliquam ac adipiscing feugiat consequat habitant proin. Proin erat elementum pellentesque lorem proin. Nisl phasellus nibh elit sollicitudin et platea volutpat faucibus. Maecenas ultricies eget sagittis porttitor pellentesque nibh. Lorem purus sed viverra pellentesque. Habitasse libero blandit eu eget. Vitae etiam enim pellentesque pulvinar hendrerit fringilla justo. Faucibus sed arcu massa consectetur cursus. Molestie odio ut etiam egestas feugiat nec elit. Eu volutpat nunc nibh gravida habitant sit risus. Viverra ullamcorper orci lectus diam proin. Fringilla magna arcu id leo cum nec dis. Amet quis enim imperdiet et vestibulum sit eu purus. Id non viverra posuere id. Sit ipsum tellus enim mauris sit nibh fermentum. Eu a laoreet amet nulla. Convallis libero egestas pellentesque interdum hendrerit feugiat venenatis sapien. In tempus gravida pretium facilisi laoreet quisque dolor vulputate consectetur.",
                                commentDate: "March 12 2023",
                                rated: 5,
                                price: 234,
                            },
                            {
                                projectHeading: "React Naive Bug Fix",
                                description: "Yevhen produced a wireframe, ui and design style guide for a custom e-commerce site. He did the work on time and with a great design eye. Nice design touch. Lorem ipsum dolor sit amet consectetur. Lacus urna ut at sed. Egestas diam sed venenatis egestas etiam. Neque eu vulputate libero morbi viverra. Ipsum vestibulum dictumst ornare nisl metus dignissim imperdiet tincidunt. Justo ac elementum odio rhoncus habitasse elit consequat mi. Tellus sagittis volutpat nisl vitae condimentum. Lacus in et metus ornare massa fames. Id diam morbi euismod sit. Orci tellus sapien purus ornare. Adipiscing adipiscing in aliquam ac adipiscing feugiat consequat habitant proin. Proin erat elementum pellentesque lorem proin. Nisl phasellus nibh elit sollicitudin et platea volutpat faucibus. Maecenas ultricies eget sagittis porttitor pellentesque nibh. Lorem purus sed viverra pellentesque. Habitasse libero blandit eu eget. Vitae etiam enim pellentesque pulvinar hendrerit fringilla justo. Faucibus sed arcu massa consectetur cursus. Molestie odio ut etiam egestas feugiat nec elit. Eu volutpat nunc nibh gravida habitant sit risus. Viverra ullamcorper orci lectus diam proin. Fringilla magna arcu id leo cum nec dis. Amet quis enim imperdiet et vestibulum sit eu purus. Id non viverra posuere id. Sit ipsum tellus enim mauris sit nibh fermentum. Eu a laoreet amet nulla. Convallis libero egestas pellentesque interdum hendrerit feugiat venenatis sapien. In tempus gravida pretium facilisi laoreet quisque dolor vulputate consectetur.",
                                commentDate: "April 02 2022",
                                rated: 5,
                                price: 24,
                            },
        
                        ],
                        profile: ['https://rainbowit.net/themes/inbio/wp-content/uploads/2021/09/marketing-young-cute-business-lady-striped-shirt-office-showing-raising-results-1-340x250.jpg',
                            'https://rainbowit.net/themes/inbio/wp-content/uploads/2021/09/pretty-curly-young-woman-writing-notes-startup-project-340x250.jpg',
                            'https://rainbowit.net/themes/inbio/wp-content/uploads/2021/09/road-sign-direction-perforated-paper-arrow-340x250.jpg',],
                    }
                ],
                comments: [
                    {
                        Heading: "Gift Giving Website",
                        title: "Yevhen produced a wireframe, ui and design style guide for a custom e-commerce site. He did the work on time and with a great design eye. Nice design touch",
                        date: "March 09, 2023 11:00 AM",
                        rated: 4,
                    },
                    {
                        Heading: "Design Four Startup Web UX/UI Screens and Logo",
                        title: "evhen, our designer, has done an outstanding job on this project. Not only did he bring his considerable design skills to the table, but he also collaborated effectively with the rest of the team, listening to feedback and incorporating suggestions to create a final product that exceeded our expectations. Yevhen's attention to detail, creativity, and professionalism were invaluable to the success of this project. We are fortunate to have such a talented and dedicated designer on our team.",
                        date: "March 09, 2023 11:00 AM",
                        rated: 5,
                    }, {
                        Heading: "Gift Giving Website",
                        title: "Yevhen produced a wireframe, ui and design style guide for a custom e-commerce site. He did the work on time and with a great design eye. Nice design touch",
                        date: "March 09, 2023 11:00 AM",
                        rated: 4,
                    },
                ],
                specialization: ["React js", "Node js", "NEXT js"],
                projectsThumbs: [
                    'https://rainbowit.net/themes/inbio/wp-content/uploads/2021/09/marketing-young-cute-business-lady-striped-shirt-office-showing-raising-results-1-340x250.jpg',
                    'https://rainbowit.net/themes/inbio/wp-content/uploads/2021/09/pretty-curly-young-woman-writing-notes-startup-project-340x250.jpg',
                    'https://rainbowit.net/themes/inbio/wp-content/uploads/2021/09/road-sign-direction-perforated-paper-arrow-340x250.jpg',
                ],
            },
        
        
            {
                
                firstName: 'Olivia',
                lastName: 'Morris',
                hourlyRate: 42,
                avatar: "https://c.ndtvimg.com/2021-01/tog763u_olivia-morris-instagram_625x300_29_January_21.jpg?im=Resize=(1230,900)",
                verified: true,
                description: 'Frontend developer with expertise in JavaScript and React. Passionate about creating responsive interfaces.',
                category: "interfaces",
                jobs: {
                    completed: 502,
                    cancelled: 7,
                    inProgress: 2
                },
                revneue: 994000,
                services: [
                    {
                        _id: 's_1',
                        title: "I will do UIUX for you mobile application or website in figma or xdk",
                        description: "Lorem ipsum dolor sit amet consectetur. Lacus urna ut at sed. Egestas diam sed venenatis egestas etiam. Neque eu vulputate libero morbi viverra. Ipsum vestibulum dictumst ornare nisl metus dignissim imperdiet tincidunt. Justo ac elementum odio rhoncus habitasse elit consequat mi. Tellus sagittis volutpat nisl vitae condimentum. Lacus in et metus ornare massa fames. Id diam morbi euismod sit. Orci tellus sapien purus ornare. Adipiscing adipiscing in aliquam ac adipiscing feugiat consequat habitant proin. Proin erat elementum pellentesque lorem proin. Nisl phasellus nibh elit sollicitudin et platea volutpat faucibus. Maecenas ultricies eget sagittis porttitor pellentesque nibh. Lorem purus sed viverra pellentesque. Habitasse libero blandit eu eget. Vitae etiam enim pellentesque pulvinar hendrerit fringilla justo. Faucibus sed arcu massa consectetur cursus. Molestie odio ut etiam egestas feugiat nec elit. Eu volutpat nunc nibh gravida habitant sit risus. Viverra ullamcorper orci lectus diam proin. Fringilla magna arcu id leo cum nec dis. Amet quis enim imperdiet et vestibulum sit eu purus. Id non viverra posuere id. Sit ipsum tellus enim mauris sit nibh fermentum. Eu a laoreet amet nulla. Convallis libero egestas pellentesque interdum hendrerit feugiat venenatis sapien. In tempus gravida pretium facilisi laoreet quisque dolor vulputate consectetur.",
                        comments: [
                            {
                                projectHeading: "React Naive Bug Fix",
                                description: "Yevhen produced a wireframe, ui and design style guide for a custom e-commerce site. He did the work on time and with a great design eye. Nice design touch. Lorem ipsum dolor sit amet consectetur. Lacus urna ut at sed. Egestas diam sed venenatis egestas etiam. Neque eu vulputate libero morbi viverra. Ipsum vestibulum dictumst ornare nisl metus dignissim imperdiet tincidunt. Justo ac elementum odio rhoncus habitasse elit consequat mi. Tellus sagittis volutpat nisl vitae condimentum. Lacus in et metus ornare massa fames. Id diam morbi euismod sit. Orci tellus sapien purus ornare. Adipiscing adipiscing in aliquam ac adipiscing feugiat consequat habitant proin. Proin erat elementum pellentesque lorem proin. Nisl phasellus nibh elit sollicitudin et platea volutpat faucibus. Maecenas ultricies eget sagittis porttitor pellentesque nibh. Lorem purus sed viverra pellentesque. Habitasse libero blandit eu eget. Vitae etiam enim pellentesque pulvinar hendrerit fringilla justo. Faucibus sed arcu massa consectetur cursus. Molestie odio ut etiam egestas feugiat nec elit. Eu volutpat nunc nibh gravida habitant sit risus. Viverra ullamcorper orci lectus diam proin. Fringilla magna arcu id leo cum nec dis. Amet quis enim imperdiet et vestibulum sit eu purus. Id non viverra posuere id. Sit ipsum tellus enim mauris sit nibh fermentum. Eu a laoreet amet nulla. Convallis libero egestas pellentesque interdum hendrerit feugiat venenatis sapien. In tempus gravida pretium facilisi laoreet quisque dolor vulputate consectetur.",
                                commentDate: "April 02 2022",
                                rated: 5,
                                price: 24,
                            },
                            {
                                projectHeading: "Wedding website layout",
                                description: "Yevhen produced a wireframe, ui and design style guide for a custom e-commerce site. He did the work on time and with a great design eye. Nice design touch. Lorem ipsum dolor sit amet consectetur. Lacus urna ut at sed. Egestas diam sed venenatis egestas etiam. Neque eu vulputate libero morbi viverra. Ipsum vestibulum dictumst ornare nisl metus dignissim imperdiet tincidunt. Justo ac elementum odio rhoncus habitasse elit consequat mi. Tellus sagittis volutpat nisl vitae condimentum. Lacus in et metus ornare massa fames. Id diam morbi euismod sit. Orci tellus sapien purus ornare. Adipiscing adipiscing in aliquam ac adipiscing feugiat consequat habitant proin. Proin erat elementum pellentesque lorem proin. Nisl phasellus nibh elit sollicitudin et platea volutpat faucibus. Maecenas ultricies eget sagittis porttitor pellentesque nibh. Lorem purus sed viverra pellentesque. Habitasse libero blandit eu eget. Vitae etiam enim pellentesque pulvinar hendrerit fringilla justo. Faucibus sed arcu massa consectetur cursus. Molestie odio ut etiam egestas feugiat nec elit. Eu volutpat nunc nibh gravida habitant sit risus. Viverra ullamcorper orci lectus diam proin. Fringilla magna arcu id leo cum nec dis. Amet quis enim imperdiet et vestibulum sit eu purus. Id non viverra posuere id. Sit ipsum tellus enim mauris sit nibh fermentum. Eu a laoreet amet nulla. Convallis libero egestas pellentesque interdum hendrerit feugiat venenatis sapien. In tempus gravida pretium facilisi laoreet quisque dolor vulputate consectetur.",
                                commentDate: "March 12 2023",
                                rated: 5,
                                price: 234,
                            },
                            {
                                projectHeading: "React Naive Bug Fix",
                                description: "Yevhen produced a wireframe, ui and design style guide for a custom e-commerce site. He did the work on time and with a great design eye. Nice design touch. Lorem ipsum dolor sit amet consectetur. Lacus urna ut at sed. Egestas diam sed venenatis egestas etiam. Neque eu vulputate libero morbi viverra. Ipsum vestibulum dictumst ornare nisl metus dignissim imperdiet tincidunt. Justo ac elementum odio rhoncus habitasse elit consequat mi. Tellus sagittis volutpat nisl vitae condimentum. Lacus in et metus ornare massa fames. Id diam morbi euismod sit. Orci tellus sapien purus ornare. Adipiscing adipiscing in aliquam ac adipiscing feugiat consequat habitant proin. Proin erat elementum pellentesque lorem proin. Nisl phasellus nibh elit sollicitudin et platea volutpat faucibus. Maecenas ultricies eget sagittis porttitor pellentesque nibh. Lorem purus sed viverra pellentesque. Habitasse libero blandit eu eget. Vitae etiam enim pellentesque pulvinar hendrerit fringilla justo. Faucibus sed arcu massa consectetur cursus. Molestie odio ut etiam egestas feugiat nec elit. Eu volutpat nunc nibh gravida habitant sit risus. Viverra ullamcorper orci lectus diam proin. Fringilla magna arcu id leo cum nec dis. Amet quis enim imperdiet et vestibulum sit eu purus. Id non viverra posuere id. Sit ipsum tellus enim mauris sit nibh fermentum. Eu a laoreet amet nulla. Convallis libero egestas pellentesque interdum hendrerit feugiat venenatis sapien. In tempus gravida pretium facilisi laoreet quisque dolor vulputate consectetur.",
                                commentDate: "April 02 2022",
                                rated: 5,
                                price: 24,
                            },
        
                        ],
                        profile: [
                            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWBG38F-lq5h1QfvSeC1TWMhAhHy0Q3v9CRw&usqp=CAU',
                            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpJX0Jo6LD9BdP5QKGsmhRPry5lRCOwU8NHg&usqp=CAU',
                            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjkt6-gO3HTEZZaMTQR37i0eTLSfxUbdK6AQ&usqp=CAU',
                        ],
                    }
                ],
                comments: [
                    {
                        Heading: "Gift Giving Website",
                        title: "Yevhen produced a wireframe, ui and design style guide for a custom e-commerce site. He did the work on time and with a great design eye. Nice design touch",
                        date: "March 09, 2023 11:00 AM",
                        rated: 4,
                    },
                    {
                        Heading: "Design Four Startup Web UX/UI Screens and Logo",
                        title: "evhen, our designer, has done an outstanding job on this project. Not only did he bring his considerable design skills to the table, but he also collaborated effectively with the rest of the team, listening to feedback and incorporating suggestions to create a final product that exceeded our expectations. Yevhen's attention to detail, creativity, and professionalism were invaluable to the success of this project. We are fortunate to have such a talented and dedicated designer on our team.",
                        date: "March 09, 2023 11:00 AM",
                        rated: 5,
                    }, {
                        Heading: "Gift Giving Website",
                        title: "Yevhen produced a wireframe, ui and design style guide for a custom e-commerce site. He did the work on time and with a great design eye. Nice design touch",
                        date: "March 09, 2023 11:00 AM",
                        rated: 4,
                    },
                ],
                specialization: ["ADOVE", "3d/2d", "Wire-Frams", "+1"],
                projectsThumbs: [
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWBG38F-lq5h1QfvSeC1TWMhAhHy0Q3v9CRw&usqp=CAU',
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpJX0Jo6LD9BdP5QKGsmhRPry5lRCOwU8NHg&usqp=CAU',
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjkt6-gO3HTEZZaMTQR37i0eTLSfxUbdK6AQ&usqp=CAU',
        
                ],
            },
            {
                
                firstName: 'Mark',
                lastName: 'Bells',
                hourlyRate: 10,
                avatar: "https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/final-home-1st.png",
                verified: true,
                description: 'I will build responsive websites using React. Specializes in creating clean, modern interfaces',
                category: "interfaces",
                jobs: {
                    completed: 102,
                    cancelled: 7,
                    inProgress: 2
                },
                revneue: 234000,
                services: [
                    {
                        _id: 's_1',
                        title: "I will do UIUX for you mobile application or website in figma or xdk",
                        description: "Lorem ipsum dolor sit amet consectetur. Lacus urna ut at sed. Egestas diam sed venenatis egestas etiam. Neque eu vulputate libero morbi viverra. Ipsum vestibulum dictumst ornare nisl metus dignissim imperdiet tincidunt. Justo ac elementum odio rhoncus habitasse elit consequat mi. Tellus sagittis volutpat nisl vitae condimentum. Lacus in et metus ornare massa fames. Id diam morbi euismod sit. Orci tellus sapien purus ornare. Adipiscing adipiscing in aliquam ac adipiscing feugiat consequat habitant proin. Proin erat elementum pellentesque lorem proin. Nisl phasellus nibh elit sollicitudin et platea volutpat faucibus. Maecenas ultricies eget sagittis porttitor pellentesque nibh. Lorem purus sed viverra pellentesque. Habitasse libero blandit eu eget. Vitae etiam enim pellentesque pulvinar hendrerit fringilla justo. Faucibus sed arcu massa consectetur cursus. Molestie odio ut etiam egestas feugiat nec elit. Eu volutpat nunc nibh gravida habitant sit risus. Viverra ullamcorper orci lectus diam proin. Fringilla magna arcu id leo cum nec dis. Amet quis enim imperdiet et vestibulum sit eu purus. Id non viverra posuere id. Sit ipsum tellus enim mauris sit nibh fermentum. Eu a laoreet amet nulla. Convallis libero egestas pellentesque interdum hendrerit feugiat venenatis sapien. In tempus gravida pretium facilisi laoreet quisque dolor vulputate consectetur.",
                        comments: [
                            {
                                projectHeading: "Wedding website layout",
                                description: "Yevhen produced a wireframe, ui and design style guide for a custom e-commerce site. He did the work on time and with a great design eye. Nice design touch. Lorem ipsum dolor sit amet consectetur. Lacus urna ut at sed. Egestas diam sed venenatis egestas etiam. Neque eu vulputate libero morbi viverra. Ipsum vestibulum dictumst ornare nisl metus dignissim imperdiet tincidunt. Justo ac elementum odio rhoncus habitasse elit consequat mi. Tellus sagittis volutpat nisl vitae condimentum. Lacus in et metus ornare massa fames. Id diam morbi euismod sit. Orci tellus sapien purus ornare. Adipiscing adipiscing in aliquam ac adipiscing feugiat consequat habitant proin. Proin erat elementum pellentesque lorem proin. Nisl phasellus nibh elit sollicitudin et platea volutpat faucibus. Maecenas ultricies eget sagittis porttitor pellentesque nibh. Lorem purus sed viverra pellentesque. Habitasse libero blandit eu eget. Vitae etiam enim pellentesque pulvinar hendrerit fringilla justo. Faucibus sed arcu massa consectetur cursus. Molestie odio ut etiam egestas feugiat nec elit. Eu volutpat nunc nibh gravida habitant sit risus. Viverra ullamcorper orci lectus diam proin. Fringilla magna arcu id leo cum nec dis. Amet quis enim imperdiet et vestibulum sit eu purus. Id non viverra posuere id. Sit ipsum tellus enim mauris sit nibh fermentum. Eu a laoreet amet nulla. Convallis libero egestas pellentesque interdum hendrerit feugiat venenatis sapien. In tempus gravida pretium facilisi laoreet quisque dolor vulputate consectetur.",
                                commentDate: "March 12 2023",
                                rated: 5,
                                price: 234,
                            },
                            {
                                projectHeading: "React Naive Bug Fix",
                                description: "Yevhen produced a wireframe, ui and design style guide for a custom e-commerce site. He did the work on time and with a great design eye. Nice design touch. Lorem ipsum dolor sit amet consectetur. Lacus urna ut at sed. Egestas diam sed venenatis egestas etiam. Neque eu vulputate libero morbi viverra. Ipsum vestibulum dictumst ornare nisl metus dignissim imperdiet tincidunt. Justo ac elementum odio rhoncus habitasse elit consequat mi. Tellus sagittis volutpat nisl vitae condimentum. Lacus in et metus ornare massa fames. Id diam morbi euismod sit. Orci tellus sapien purus ornare. Adipiscing adipiscing in aliquam ac adipiscing feugiat consequat habitant proin. Proin erat elementum pellentesque lorem proin. Nisl phasellus nibh elit sollicitudin et platea volutpat faucibus. Maecenas ultricies eget sagittis porttitor pellentesque nibh. Lorem purus sed viverra pellentesque. Habitasse libero blandit eu eget. Vitae etiam enim pellentesque pulvinar hendrerit fringilla justo. Faucibus sed arcu massa consectetur cursus. Molestie odio ut etiam egestas feugiat nec elit. Eu volutpat nunc nibh gravida habitant sit risus. Viverra ullamcorper orci lectus diam proin. Fringilla magna arcu id leo cum nec dis. Amet quis enim imperdiet et vestibulum sit eu purus. Id non viverra posuere id. Sit ipsum tellus enim mauris sit nibh fermentum. Eu a laoreet amet nulla. Convallis libero egestas pellentesque interdum hendrerit feugiat venenatis sapien. In tempus gravida pretium facilisi laoreet quisque dolor vulputate consectetur.",
                                commentDate: "April 02 2022",
                                rated: 5,
                                price: 24,
                            }, {
                                projectHeading: "Wedding website layout",
                                description: "Yevhen produced a wireframe, ui and design style guide for a custom e-commerce site. He did the work on time and with a great design eye. Nice design touch. Lorem ipsum dolor sit amet consectetur. Lacus urna ut at sed. Egestas diam sed venenatis egestas etiam. Neque eu vulputate libero morbi viverra. Ipsum vestibulum dictumst ornare nisl metus dignissim imperdiet tincidunt. Justo ac elementum odio rhoncus habitasse elit consequat mi. Tellus sagittis volutpat nisl vitae condimentum. Lacus in et metus ornare massa fames. Id diam morbi euismod sit. Orci tellus sapien purus ornare. Adipiscing adipiscing in aliquam ac adipiscing feugiat consequat habitant proin. Proin erat elementum pellentesque lorem proin. Nisl phasellus nibh elit sollicitudin et platea volutpat faucibus. Maecenas ultricies eget sagittis porttitor pellentesque nibh. Lorem purus sed viverra pellentesque. Habitasse libero blandit eu eget. Vitae etiam enim pellentesque pulvinar hendrerit fringilla justo. Faucibus sed arcu massa consectetur cursus. Molestie odio ut etiam egestas feugiat nec elit. Eu volutpat nunc nibh gravida habitant sit risus. Viverra ullamcorper orci lectus diam proin. Fringilla magna arcu id leo cum nec dis. Amet quis enim imperdiet et vestibulum sit eu purus. Id non viverra posuere id. Sit ipsum tellus enim mauris sit nibh fermentum. Eu a laoreet amet nulla. Convallis libero egestas pellentesque interdum hendrerit feugiat venenatis sapien. In tempus gravida pretium facilisi laoreet quisque dolor vulputate consectetur.",
                                commentDate: "March 12 2023",
                                rated: 5,
                                price: 234,
                            },
                            {
                                projectHeading: "React Naive Bug Fix",
                                description: "Yevhen produced a wireframe, ui and design style guide for a custom e-commerce site. He did the work on time and with a great design eye. Nice design touch. Lorem ipsum dolor sit amet consectetur. Lacus urna ut at sed. Egestas diam sed venenatis egestas etiam. Neque eu vulputate libero morbi viverra. Ipsum vestibulum dictumst ornare nisl metus dignissim imperdiet tincidunt. Justo ac elementum odio rhoncus habitasse elit consequat mi. Tellus sagittis volutpat nisl vitae condimentum. Lacus in et metus ornare massa fames. Id diam morbi euismod sit. Orci tellus sapien purus ornare. Adipiscing adipiscing in aliquam ac adipiscing feugiat consequat habitant proin. Proin erat elementum pellentesque lorem proin. Nisl phasellus nibh elit sollicitudin et platea volutpat faucibus. Maecenas ultricies eget sagittis porttitor pellentesque nibh. Lorem purus sed viverra pellentesque. Habitasse libero blandit eu eget. Vitae etiam enim pellentesque pulvinar hendrerit fringilla justo. Faucibus sed arcu massa consectetur cursus. Molestie odio ut etiam egestas feugiat nec elit. Eu volutpat nunc nibh gravida habitant sit risus. Viverra ullamcorper orci lectus diam proin. Fringilla magna arcu id leo cum nec dis. Amet quis enim imperdiet et vestibulum sit eu purus. Id non viverra posuere id. Sit ipsum tellus enim mauris sit nibh fermentum. Eu a laoreet amet nulla. Convallis libero egestas pellentesque interdum hendrerit feugiat venenatis sapien. In tempus gravida pretium facilisi laoreet quisque dolor vulputate consectetur.",
                                commentDate: "April 02 2022",
                                rated: 5,
                                price: 24,
                            },
        
                        ],
                        profile: [
                            'https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/portfolio-large-04-340x250.jpg',
                            'https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/portfolio-large-05-340x250.jpg',
                            'https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/portfolio-large-06-340x250.jpg',
                        ],
                    }
                ],
                comments: [
                    {
                        Heading: "Gift Giving Website",
                        title: "Yevhen produced a wireframe, ui and design style guide for a custom e-commerce site. He did the work on time and with a great design eye. Nice design touch",
                        date: "March 09, 2023 11:00 AM",
                        rated: 4,
                    },
                    {
                        Heading: "Design Four Startup Web UX/UI Screens and Logo",
                        title: "evhen, our designer, has done an outstanding job on this project. Not only did he bring his considerable design skills to the table, but he also collaborated effectively with the rest of the team, listening to feedback and incorporating suggestions to create a final product that exceeded our expectations. Yevhen's attention to detail, creativity, and professionalism were invaluable to the success of this project. We are fortunate to have such a talented and dedicated designer on our team.",
                        date: "March 09, 2023 11:00 AM",
                        rated: 5,
                    }, {
                        Heading: "Gift Giving Website",
                        title: "Yevhen produced a wireframe, ui and design style guide for a custom e-commerce site. He did the work on time and with a great design eye. Nice design touch",
                        date: "March 09, 2023 11:00 AM",
                        rated: 4,
                    },
                    {
                        Heading: "Design Four Startup Web UX/UI Screens and Logo",
                        title: "evhen, our designer, has done an outstanding job on this project. Not only did he bring his considerable design skills to the table, but he also collaborated effectively with the rest of the team, listening to feedback and incorporating suggestions to create a final product that exceeded our expectations. Yevhen's attention to detail, creativity, and professionalism were invaluable to the success of this project. We are fortunate to have such a talented and dedicated designer on our team.",
                        date: "March 09, 2023 11:00 AM",
                        rated: 5,
                    },
                ],
                specialization: ["WEB 3.0", "PHP", "+2"],
                projectsThumbs: [
                    'https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/portfolio-large-04-340x250.jpg',
                    'https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/portfolio-large-05-340x250.jpg',
                    'https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/portfolio-large-06-340x250.jpg',
                ],
            },
        ]


        const createdUsers = await DevelopersSkelton.create(userData);
        res.send({ success: true, message: 'User Registered' });

    } catch (error) {
        res.send({ success: false, message: error.message });
    }

});


app.get('/developers', async (req, res) => {
    try {
        const users = await DevelopersSkelton.find({});
        res.send({ success: true, users });
    } catch (error) {
        console.error('Error retrieving user data:', error);
        res.status(500).json({ message: 'Server Error' });
    }
});




app.get('/devloper/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const user = await DevelopersSkelton.findById(id);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.json(user);
    } catch (error) {
        console.error('Error retrieving user data:', error);
        res.status(500).json({ message: 'Server Error' });
    }
});
