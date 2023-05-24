const userData = [
    // 'Interfaces'
    {
        firstName: 'Hammad',
        mainCategory: 'Interfaces',
        proTallent: false,
        availableToWork: true,
        lastName: 'Shafiq',
        hourlyRate: 95,
        avatar: 'https://avatars.githubusercontent.com/u/42932321?v=4',
        verified: true,
        description: 'Experienced Full Stack Web Developer adept at building apps from scratch. ',
        category: "Full Stack developer",
        jobs: {
            completed: 102,
            cancelled: 7,
            inProgress: 2
        },
        revneue: 234000,
        services: [
            {
                _id: 's_1',
                title: " i will Your Full Stack Developer React || Node js ",
                description: "",
                comments: [
                    {
                        projectHeading: "Post Textile ",
                        description: "PoshTextiles American base company i built the logistics management system akin to Microsoft Business Dynamics. As a Full Stack Developer, I played a key role in utilizing JavaScript extensively, accounting for 99.9% of the project. Leveraging Microsoft APIs, I seamlessly integrated data to facilitate the global export of cloth by PoshTextiles. My system efficiently manages warehouse operations, encompassing shipment creation, checking, picking, packing, and shipping. By integrating FedEx, UPS, and STAMP shipping company APIs, I streamlined the shipping process. The system includes live address validation and supports printing of labels. Additionally, I implemented payment integration between two companies involved in the process.",
                        commentDate: "March 12 2023",
                        rated: 5,
                        price: 23000,
                    },
                    {
                        projectHeading: " Digtal Flow ",
                        description: "Digital Media based in New York .From frontend to Full Stack Project Lead, my journey in digital media has been a captivating adventure. I started by crafting visually appealing interfaces and grew into seamlessly integrating frontend and backend technologies. As a team member and leader, I delivered exceptional results for clients, combining cutting-edge technologies and fostering innovation. With unwavering commitment and a passion for excellence, I continue to push boundaries and create captivating digital experiences.",
                        commentDate: "April 02 2022",
                        rated: 5,
                        price: 60000,
                    },

                ],
                profile: [
                    'https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/293240721/original/6891870e69ea2793c44105520881aa0556da1f9b.png',
                    'https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/250604452/original/789892c3543a3199c6f38b416ca1f42bf92a5039.png',
                    'https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/267148774/original/ddf545f98b847c3cd66c9afe1cf0b680148237f1.png',
                ],
            }
        ],
        comments: [
            {
                Heading: "Post Textile App",
                title: "Muhammad Hamad is working on our logistics management system as Full stack developer . He make custom frontend app pure in JavaScript now is working on backend that will be soon live. He always full fill his commitment . I always paid him advance . I never realized I did mistake 100% recommended",
                date: "Jul 03, 2023 12:00 AM",
                rated: 5,
            },
            {
                Heading: "stock",
                title: "I've had the pleasure of working with Muhammad, as remote Full Stack developer, for the past three years. He consistently displays professionalism, excellent coding skills, effective communication, and honesty. Muhammad's passion for his work goes beyond financial motivations, driving him to strive for perfection.Highly recommended",
                date: "Jan 14, 2022 11:00 AM",
                rated: 5,
            },
        ],
        specialization: ["Full Stack devloper", "web developer", "ReactJs"],
        projectsThumbs: [
            'https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/portfolio-large-01-340x250.jpg',
            'https://fiverr-res.cloudinary.com/images/t_medium7,q_auto,f_auto,q_auto,f_auto/gigs/150311157/original/b2cffba150592f0c20aece34ffefa82869c3237d/develop-a-web-app-with-react-js-node-js.jpeg',
            'https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/portfolio-large-03-340x250.jpg',
        ],
        commentCount: function () {
            return this.comments.length
        },
        ratingCount: function () {
            return this.comments.reduce((a, b) => a + b.rated, 0) / this.commentCount()
        },
    },
    // 1 finish 
    {
        firstName: 'Clive ',
        mainCategory: 'Interfaces',
        proTallent: false,
        availableToWork: true,
        lastName: 'B',
        hourlyRate: 78,
        avatar: "https://www.upwork.com/profile-portraits/c1vLZ8iVLN2bcmwEFyXQEVnwpSYjzef47L2ZVaXcTUc_IeTA8Pfn-ZxYt4z2qJO5j7",
        verified: true,
        description: 'With over 3 years of industry experience, I am a seasoned UI/UX designer who specializes in crafting clean, modern interfaces ',
        category: "Design",
        jobs: {
            completed: 78,
            cancelled: 3,
            inProgress: 7
        },
        revneue: 78000,
        services: [
            {
                _id: 's_1',
                title: "I will do UIUX for you mobile application or website in figma or xdk",
                description: "Are you looking to elevate your digital presence with captivating and intuitive interfaces? Look no further! With over 5 years of industry experience, I am a seasoned UI/UX designer who specializes in crafting clean, modern interfaces that leave a lasting impression. I have a passion for creating designs that seamlessly blend aesthetics with functionality, ensuring a delightful user experience at every interaction. By staying up-to-date with the latest design trends and best practices, I bring fresh and innovative ideas to the table, breathing life into your brand and product. From concept to completion, I meticulously analyze user needs and behavior to develop visually stunning interfaces that are both visually appealing and easy to navigate. Through a user-centered design approach, I strive to understand your target audience and align their goals with your business objectives, resulting in a harmonious fusion of form and function. With a keen eye for detail, I meticulously craft each element, from typography and color palettes to iconography and layout, creating a cohesive and immersive experience that captivates users and enhances their engagement. I believe in the power of simplicity and elegance, ensuring that every interface I design not only looks great but also functions flawlessly across devices and platforms. Collaboration is at the heart of my process. I work closely with clients, stakeholders, and development teams, valuing open communication and feedback to ensure that your vision is translated into a remarkable reality. I am proficient in industry-standard design tools and methodologies, allowing me to deliver high-quality, pixel-perfect designs on time and within budget. If you're ready to take your digital presence to new heights and leave a lasting impact on your audience, let's connect. Together, we can create an attractive and user-centric interface that sets you apart from the competition and drives meaningful results.",
                comments: [
                    {
                        projectHeading: "Need Graphic Designer for Tech Company Ads and Banners",
                        description: "Clive really did a magnificent job in hearing and understanding my vision and bringing it to life. This website was already in progress which can be a barrier to some designers, as many of the proposals I received wanted to completely scrap my ideas and start fresh. Clive took what I already had and enhanced it in so many ways, while still adding his own personal design touches. He has such an eye for seamless and elegant design, it makes the viewer feel your website rather than just viewing it. Amazing work.",
                        commentDate: "March 12 2023",
                        rated: 5,
                        price: 4500,
                    },
                    {
                        projectHeading: "Ongoing Graphic Design Support",
                        description: "2nd project down with us, and he has been fantastic for building out our landing pages",
                        commentDate: "April 02 2022",
                        rated: 5,
                        price: 3700,
                    }, {
                        projectHeading: "Design Four Startup Web UX/UI Screens and Logo",
                        description: "Really great work from civil. Her colour balances are great, and communication and responsiveness on point. Will be working with her again for sure",
                        commentDate: "March 12 2023",
                        rated: 5,
                        price: 234,
                    },
                    {
                        projectHeading: "Designer to build direct-to-consumer banner ads in Bannersnack",
                        description: "Deep understanding of the aesthetics, pacing, and legibility required for digital marketing design. Clive exceeds expectations and is skilled in clean & efficient motion graphics",
                        commentDate: "April 02 2022",
                        rated: 4.6,
                        price: 1200,
                    },

                ],
                profile: [
                    'https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/portfolio-large-04-340x250.jpg',
                    'https://www.upwork.com/att/download/portfolio/persons/uid/1173403296888061952/profile/projects/files/1253575602255597568',
                    'https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/portfolio-large-06-340x250.jpg',
                ],
            }
        ],
        comments: [
            {
                Heading: "Ongoing Graphic Design Support",
                title: "I highly recommend Clive for any graphic design needs! He provided exceptional support for our email designs, graphic design templates, and brand development. His attention to detail and prompt communication made the design process seamless. His expertise and responsiveness truly exceeded our expectation",
                date: "Feb 09, 2021 10:00 PM",
                rated: 5,
            },
            {
                Heading: "Design Four Startup Web UX/UI Screens and Logo",
                title: "Really great work from civil. Her colour balances are great, and communication and responsiveness on point. Will be working with her again for sure",
                date: "July  03, 2022 8:00 AM",
                rated: 5,
            }, {
                Heading: "Need Graphic Designer for Tech Company Ads and Banners",
                title: "Clive really did a magnificent job in hearing and understanding my vision and bringing it to life. This website was already in progress which can be a barrier to some designers, as many of the proposals I received wanted to completely scrap my ideas and start fresh. Clive took what I already had and enhanced it in so many ways, while still adding his own personal design touches. He has such an eye for seamless and elegant design, it makes the viewer feel your website rather than just viewing it. Amazing work.",
                date: "November  09, 2023 08:00 AM",
                rated: 4,
            },
            {
                Heading: "Designer to build direct-to-consumer banner ads in Bannersnack",
                title: "Deep understanding of the aesthetics, pacing, and legibility required for digital marketing design. Clive exceeds expectations and is skilled in clean & efficient motion graphics",
                date: "March 09, 2023 11:00 AM",
                rated: 4.6,
            },
        ],
        specialization: ["Ux Designer", "Expert Adobe", "Graphics"],
        projectsThumbs: [
            'https://www.upwork.com/att/download/portfolio/persons/uid/1173403296888061952/profile/projects/files/1182948041536147456',
            'https://www.upwork.com/att/download/portfolio/persons/uid/1173403296888061952/profile/projects/files/1253575602255597568',
            'https://www.upwork.com/att/download/portfolio/persons/uid/1173403296888061952/profile/projects/files/7e75af82-e218-4ebf-a1c2-f79532618921',
        ],
    },
    // finish 2

    {
        firstName: 'Tetiana ',
        mainCategory: 'Interfaces',
        proTallent: false,
        availableToWork: true,
        lastName: 'F',
        hourlyRate: 42,
        avatar: "https://www.upwork.com/profile-portraits/c11fTnFoBJwtpJYdKXH6MbigGzO65YJV9Ik_B-dT6ach09WYXFTwhUvMaVUCXmHU3v",
        verified: true,
        description: 'Web Designer with wide experience in graphic design, UI / UX and media/print design.',
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
                title: "Web designer & Graphic Designer | Elementor Develope",
                description: "Hi, there! I'm a Web Designer with wide experience in graphic design, UI / UX and media/print design. I help you connect with your ideal audience with modern, simple, and concise design and trendy ideas. For you I offer: - Optimal terms of performance of works; - Strict adherence to the terms of reference for the project; - Adaptation for mobile devices and tablets; - An individual approach to every client. For my part, I guarantee compliance with deadlines, individual approach, politeness, and pleasant cooperation. As a result, you will receive models that will be fully prepared for the work of the layout designer. Feel free to ask questions, I am always happy to chat with you.",
                comments: [
                    {
                        projectHeading: "UI/UX Designer Required",
                        description: "Really great work from Tetiana. Her colour balances are great, and communication and responsiveness on point. Will be working with her again for sure",
                        commentDate: "April 02 2022",
                        rated: 5,
                        price: 1900,
                    },
                    {
                        projectHeading: "Top notch UI/UX designer needed",
                        description: "Tetiana is a nice person to work with.",
                        commentDate: "March 12 2023",
                        rated: 5,
                        price: 900,
                    },
                    {
                        projectHeading: "Design and Development website Figma + Elementor",
                        description: "Tetiana did an excellent job with a quick turn around.",
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
                Heading: "UI/UX Designer Required",
                title: "Really great work from Tetiana. Her colour balances are great, and communication and responsiveness on point. Will be working with her again for sure",
                date: "March 09, 2023 11:00 AM",
                rated: 4,
            },
            {
                Heading: "Top notch UI/UX designer needed",
                title: "Tetiana is a nice person to work with",
                date: "March 09, 2023 11:00 AM",
                rated: 5,
            }, {
                Heading: "Design and Development website Figma + Elementor",
                title: "Tetiana did an excellent job with a quick turn around.",
                date: "March 09, 2023 11:00 AM",
                rated: 4,
            },
        ],
        specialization: ["web Designer", "Ux Designer", "Graphics"],
        projectsThumbs: [
            'https://rainbowit.net/themes/inbio/wp-content/uploads/2021/09/marketing-young-cute-business-lady-striped-shirt-office-showing-raising-results-1-340x250.jpg',
            'https://rainbowit.net/themes/inbio/wp-content/uploads/2021/09/pretty-curly-young-woman-writing-notes-startup-project-340x250.jpg',
            'https://rainbowit.net/themes/inbio/wp-content/uploads/2021/09/road-sign-direction-perforated-paper-arrow-340x250.jpg',
        ],
    },

    // finsih 3
    {
        firstName: 'Ruslan ',
        mainCategory: 'Interfaces',
        proTallent: false,
        availableToWork: true,
        lastName: 'Morris',
        hourlyRate: 102,
        avatar: "https://www.upwork.com/profile-portraits/c15smPrEC9DIIcRV8Dznmo4uJfF4UxNogezl5phAKMKGV2JdOhoob9EUukFtElSFuM",
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
                title: "I will be your Frontend Developer in React js ",
                description: "Experienced web developer with higher technical education with a degree in Information Management Systems and Technologies. I have over 5 years of commercial experience in the front-end development area and 2 years in back-end development and I am always looking to expand my skillset and grow. My main focus is Web applications, UI/UX, sites layout, and landing pages development with an emphasis to use the React.js library. Also in my job, I use WordPress CMS. Career highlights: ✅ Web developer with over 7 years of professional experience in developing and supporting various commercial websites and applications. ✅ Good understanding of modern web development technologies, approaches, and the industry in general. ✅ Have experience working in large teams and with complex products. ✅ Have developed dozens of websites and landing pages, that attract hundreds of new users and help my clients grow their business.  Strong communication skills",
                comments: [
                    {
                        projectHeading: "Top-Notch React.js Developer",
                        description: "Ruslan is a great value addition to any front-end team. He has got leadership and a great understanding and knowledge of front-end development. We are all thankful for his contribution to our project. Will work with him always and will always recommend him. Thank you Ruslan.. it was such a pleasure working with you.",
                        commentDate: "April 02 2022",
                        rated: 5,
                        price: 15212,
                    },
                    {
                        projectHeading: "front-end developer",
                        description: "Very deadline oriented person. Provide pixel perfect coding in very short time period.This was a test paid task. We are going to hire Ruslan for our next project.",
                        commentDate: "March 12 2023",
                        rated: 4.8,
                        price: 23400,
                    },
                    {
                        projectHeading: "Set Selection on Textarea using Javascript",
                        description: "Ruslan was able to complete the job as specified. Good freelancer",
                        commentDate: "April 02 2022",
                        rated: 4.7,
                        price: 2489,
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
                Heading: "Top-Notch React.js Developer",
                title: "Ruslan is a great value addition to any front-end team. He has got leadership and a great understanding and knowledge of front-end development. We are all thankful for his contribution to our project. Will work with him always and will always recommend him. Thank you Ruslan.. it was such a pleasure working with you",
                date: "March 09, 2023 11:00 AM",
                rated: 4,
            },
            {
                Heading: "front-end developer",
                title: "Very deadline oriented person. Provide pixel perfect coding in very short time period.This was a test paid task. We are going to hire Ruslan for our next project..",
                date: "March 09, 2023 11:00 AM",
                rated: 5,
            }, {
                Heading: "Set Selection on Textarea using Javascript",
                title: "Ruslan was able to complete the job as specified. Good freelancer",
                date: "March 09, 2023 11:00 AM",
                rated: 4,
            },
        ],
        specialization: ["React JS", "Web Developer", "web Designer ",],
        projectsThumbs: [
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWBG38F-lq5h1QfvSeC1TWMhAhHy0Q3v9CRw&usqp=CAU',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpJX0Jo6LD9BdP5QKGsmhRPry5lRCOwU8NHg&usqp=CAU',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjkt6-gO3HTEZZaMTQR37i0eTLSfxUbdK6AQ&usqp=CAU',

        ],
    },
    // finsh4 
    {
        firstName: 'Sebastian',
        mainCategory: 'Interfaces',
        proTallent: false,
        availableToWork: true,
        lastName: 'Bells',
        hourlyRate: 98,
        avatar: "https://www.upwork.com/profile-portraits/c1i5Qwe91IMwQxFIfH2ynJ5QIsM4tJeBN8SNqNLV2vTR6kvXVPN65BAkW7w2BY0-kH",
        verified: true,
        description: ' i am  Full Stack developer  with experties in Frontend and backend Technalogy',
        category: "interfaces",
        jobs: {
            completed: 102,
            cancelled: 7,
            inProgress: 2
        },
        revneue: 78000,
        services: [
            {
                _id: 's_1',
                title: "I will  be Full Stack Developer ",
                description: "Welcome to my profile, My name is Sebastian, and I'm a professional software engineer with three years of experience, I have worked on many interesting projects with both big and small companies, and I have helped local businesses to automate their services during the pandemic. As a lead developer, I've mentored interns, and taught them how to turn their projects into well-tested and easily maintainable software. I am passionate about learning as much as I can , even during my free time and sharing my experience with others. I have worked with many frameworks/libraries but I discovered React to be my favourite. On server side I love using modern technologies like GraphQL, Docker, Varnish and etc",

                comments: [
                    {
                        projectHeading: "Fullstack Javascript Developer",
                        description: "It was a pleasure to work with Sebastian. He demonstrated excellent communication skills throughout the project, and his coding skills were top-notch. He delivered high-quality work on time and was always responsive to our feedback. We highly recommend Sebastian and look forward to working with him again in the future",
                        commentDate: "March 12 2023",
                        rated: 5,
                        price: 2500,
                    },
                    {
                        projectHeading: "Need a quick fix on my final project",
                        description: "Quick, Easly Explained. A well put together gentleman ready to assist beginners. Totally recommend! Saved me from failing my exam",
                        commentDate: "April 02 2022",
                        rated: 4.5,
                        price: 4000,
                    }, {
                        projectHeading: "Expert React Developers- Fulltime - Long Term",
                        description: "great work and amazing outcome",
                        commentDate: "March 12 2023",
                        rated: 5,
                        price: 7500,
                    },
                    {
                        projectHeading: "ReactJS Developer who wants to build the next big thing",
                        description: "Thinks beyond the task, great team player, super skilled developer and always open to learning something new. You simply can't go wrong with this guy",
                        commentDate: "April 02 2022",
                        rated: 5,
                        price: 8000,
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
        specialization: ["Full Stack developer", "Node JS", "React Js"],
        projectsThumbs: [
            'https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/portfolio-large-04-340x250.jpg',
            'https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/portfolio-large-05-340x250.jpg',
            'https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/portfolio-large-06-340x250.jpg',
        ],
    },

    //finish5

    {
        firstName: 'Domonkos ',
        mainCategory: 'Interfaces',
        proTallent: false,
        availableToWork: true,
        lastName: 'Bells',
        hourlyRate: 98,
        avatar: "https://www.upwork.com/profile-portraits/c13IjCH8alEKNMH_fnm_Dj3Delfzl469xVBQjWX30ZsNEY8IYI8WcPnNkj746t-Iwr",
        verified: true,
        description: 'Unity Specialist and C# Expert for 10+ years in the game and software industry.   ',
        category: "interfaces",
        jobs: {
            completed: 102,
            cancelled: 7,
            inProgress: 2
        },
        revneue: 56000,
        services: [
            {
                _id: 's_1',
                title: "Expert Unity Developer ",
                description: "Hello! Unity Specialist and C# Expert for 10+ years in the game and software industry. My goal is to create outstanding product for you the way you've imagined! Contact me if you are looking for: -Reliable and loyal developer -Clean, stable and usable product -Experienced Development Lead or Developer -Producer, Project Manager or Consultant I'm best at: -Project management from ground up -C# and Unity development and workflow -Game play Development -Graphics URP/HDRP/Deferred/Forward (lightning, shaders, post process effects) -Optimization (code and assets too) -Bug fixing and Debugging even in live products as firefighter -Time and resource management (leading teams and providing reliable schedule) -Networking solutions -Documentation My experiences are coming from working with multiple high profile companies, with project types ranging from PC Steam Games, AR and VR Games, Business to Business Applications. Have a nice day and Looking forward working with you!",

                comments: [
                    {
                        projectHeading: "Game coding - create PBR maps and UV mapping from image",
                        description: "As a technical artist, Domonkos is highly skilled, at both the tech and communication sides. He has played an important role in our growing team, for a number of challenging projects. He also offered highly valuable advices in approaching product development. I definetely want to work with him again in upcoming Unity projects",
                        commentDate: "March 12 2023",
                        rated: 5,
                        price: 2500,
                    },
                    {
                        projectHeading: "Looking for a senior Unity developer for educational games",
                        description: "Domonkos is a great Unity developer. He knows his stuff. Great communication too",
                        commentDate: "April 02 2022",
                        rated: 4.5,
                        price: 4000,
                    }, {
                        projectHeading: "Fix issues found in firebase",
                        description: "Amazing person with amazing skills",
                        commentDate: "March 12 2023",
                        rated: 5,
                        price: 7500,
                    },
                    {
                        projectHeading: "Unity Developer",
                        description: "Great to work with. Has deep knowledge in Unity and is committed to putting out high quality code while working efficiently. Maintained good communication throughout the project, and met all requirements successfully ",
                        commentDate: "April 02 2022",
                        rated: 5,
                        price: 8000,
                    },

                ],
                profile: [
                    'https://www.upwork.com/att/download/portfolio/persons/uid/650319826375020544/profile/projects/files/f5cdb152-abe3-4143-a559-20f89a61d6ab',
                    'https://www.upwork.com/att/download/portfolio/persons/uid/650319826375020544/profile/projects/files/92fb0dac-0810-47a8-9414-872f358467ac',
                    'https://www.upwork.com/att/download/portfolio/persons/uid/650319826375020544/profile/projects/files/953678690184065024',
                ],
            }
        ],
        comments: [
            {
                Heading: "Game coding - create PBR maps and UV mapping from image",
                title: "As a technical artist, Domonkos is highly skilled, at both the tech and communication sides. He has played an important role in our growing team, for a number of challenging projects. He also offered highly valuable advices in approaching product development. I definetely want to work with him again in upcoming Unity projects",
                date: "March 09, 2023 11:00 AM",
                rated: 4,
            },
            {
                Heading: "Looking for a senior Unity developer for educational games",
                title: "Domonkos is a great Unity developer. He knows his stuff. Great communication too.",
                date: "March 09, 2023 11:00 AM",
                rated: 5,
            }, {
                Heading: "Fix issues found in firebase",
                title: "Amazing person with amazing skills",
                date: "March 09, 2023 11:00 AM",
                rated: 4,
            },
            {
                Heading: "Unity Developer",
                title: "Great to work with. Has deep knowledge in Unity and is committed to putting out high quality code while working efficiently. Maintained good communication throughout the project, and met all requirements successfully",
                date: "March 09, 2023 11:00 AM",
                rated: 5,
            },
        ],
        specialization: ["Animation", "3D", "Expert Unity"],
        projectsThumbs: [
            'https://www.upwork.com/att/download/portfolio/persons/uid/650319826375020544/profile/projects/files/f5cdb152-abe3-4143-a559-20f89a61d6ab',
            'https://www.upwork.com/att/download/portfolio/persons/uid/650319826375020544/profile/projects/files/92fb0dac-0810-47a8-9414-872f358467ac',
            'https://www.upwork.com/att/download/portfolio/persons/uid/650319826375020544/profile/projects/files/953678690184065024',
        ],
    },
    // finish6 
    {
        firstName: 'Umar ',
        mainCategory: 'Interfaces',
        proTallent: false,
        availableToWork: true,
        lastName: ' .B',
        hourlyRate: 98,
        avatar: "https://www.upwork.com/profile-portraits/c1QAd-sSC3s6b36s3SfyztFIBLBAF_UZOwKUWpIdht351wGIdHzx2exaZZfQQhyFpG",
        verified: true,
        description: 'Unity Development | 2D / 3D / PC / Android / iOS / WebGL   ',
        category: "interfaces",
        jobs: {
            completed: 102,
            cancelled: 7,
            inProgress: 2
        },
        revneue: 200000,
        services: [
            {
                _id: 's_1',
                title: "Expert Unity Developer ",
                description: "Unity Development expert with 12+ years of experience, specializing in NFT blockchain games using CryptoCurrency wallet with excellent skills in Software Architecture for Large/Medium Games, Core Game Development, and Backend-Frontend interaction. 🔥TOP FIVE HIGHEST RATED Unity and HIGHEST EARNING (158,000+ USD)My experience as a Unity Developer (Versions 5.3.2 - 2021) is extensive and diverse, I methodically identify the project requirements, and decide on the best architecture using a vast variety of techniques and strategies. I have solved numerous show-stopping performance problems, as well as often re-engineered immensely complex designs and code, providing significantly improved performance on handheld devices and providing an overall better gaming experience. As an Expert Unity Developer, I possess an innate ability to engineer games employing AAA Industry Standard Best Practices and to design mutable and modular code/systems resulting in decoupled components interacting with each other fluidly - these are totally Reusable ♻️, totally Scalable ⚖️ and totally Beautiful ✨",

                comments: [
                    {
                        projectHeading: "Publish Unity/Firebase game to iOS and Google App Store",
                        description: "Very professional and communicative. It's a pleasure working with Umar and his team. I can highly recommend them",
                        commentDate: "March 12 2023",
                        rated: 5,
                        price: 2500,
                    },
                    {
                        projectHeading: "Accessible Chess Game",
                        description: "Umar is a wizard. Even if the specs aren't that detailed, he will break down the tasks and deliver every time. Personal favorite: The  when he gives that, you can be sure a feature is stable! Quick to understand code. Quick to ask the right questions. 11/10",
                        commentDate: "April 02 2022",
                        rated: 4.5,
                        price: 4000,
                    }, {
                        projectHeading: "Upgrading an existing Unity 2018 based app to Unity 2020",
                        description: "Amazing person with amazing skills",
                        commentDate: "March 12 2023",
                        rated: 5,
                        price: 7500,
                    },
                    {
                        projectHeading: "Developer for setting up IAP, Ads and publishing",
                        description: "This developer is the best and most honest of the many developers I have ever seen. He did his best to fix parts that had been spoiled by an agency in the past. Although this follow-up development is quite inconvenient, he got the job done with integrity and perfection. Work was fast, and there was no problem with communication. The period of working with him was always looking forward to and a pleasant experience. I would like to continue working with him. ",
                        commentDate: "April 02 2022",
                        rated: 5,
                        price: 8000,
                    },

                ],
                profile: [
                    'https://www.upwork.com/att/download/portfolio/persons/uid/650319826375020544/profile/projects/files/f5cdb152-abe3-4143-a559-20f89a61d6ab',
                    'https://www.upwork.com/att/download/portfolio/persons/uid/650319826375020544/profile/projects/files/92fb0dac-0810-47a8-9414-872f358467ac',
                    'https://www.upwork.com/att/download/portfolio/persons/uid/650319826375020544/profile/projects/files/953678690184065024',
                ],
            }
        ],
        comments: [
            {
                Heading: "Publish Unity/Firebase game to iOS and Google App Store",
                title: "As a technical artist, Domonkos is highly skilled, at both the tech and communication sides. He has played an important role in our growing team, for a number of challenging projects. He also offered highly valuable advices in approaching product development. I definetely want to work with him again in upcoming Unity projects",
                date: "March 09, 2023 11:00 AM",
                rated: 4,
            },
            {
                Heading: "Accessible Chess Game",
                title: "Umar is a wizard. Even if the specs aren't that detailed, he will break down the tasks and deliver every time. Personal favorite: The  when he gives that, you can be sure a feature is stable! Quick to understand code. Quick to ask the right questions. 11/10",
                date: "March 09, 2023 11:00 AM",
                rated: 5,
            }, {
                Heading: "Upgrading an existing Unity 2018 based app to Unity 2020",
                title: "Amazing person with amazing skills",
                date: "March 09, 2023 11:00 AM",
                rated: 4,
            },
            {
                Heading: "Developer for setting up IAP, Ads and publishing",
                title: "This developer is the best and most honest of the many developers I have ever seen. He did his best to fix parts that had been spoiled by an agency in the past. Although this follow-up development is quite inconvenient, he got the job done with integrity and perfection. Work was fast, and there was no problem with communication. The period of working with him was always looking forward to and a pleasant experience. I would like to continue working with him",
                date: "March 09, 2023 11:00 AM",
                rated: 5,
            },
        ],
        specialization: ["Animation", "3D", "Expert Unity"],
        projectsThumbs: [
            'https://www.upwork.com/att/download/portfolio/persons/uid/650319826375020544/profile/projects/files/f5cdb152-abe3-4143-a559-20f89a61d6ab',
            'https://www.upwork.com/att/download/portfolio/persons/uid/650319826375020544/profile/projects/files/92fb0dac-0810-47a8-9414-872f358467ac',
            'https://www.upwork.com/att/download/portfolio/persons/uid/650319826375020544/profile/projects/files/953678690184065024',
        ],
    },






























































    // Branding
    {
        firstName: 'Hammad',
        mainCategory: 'Branding',
        proTallent: false,
        availableToWork: true,
        lastName: 'Shafiq',
        hourlyRate: 95,
        avatar: 'https://avatars.githubusercontent.com/u/42932321?v=4',
        verified: true,
        description: 'Experienced Full Stack Web Developer adept at building apps from scratch. ',
        category: "Full Stack developer",
        jobs: {
            completed: 102,
            cancelled: 7,
            inProgress: 2
        },
        revneue: 234000,
        services: [
            {
                _id: 's_1',
                title: " i will Your Full Stack Developer React || Node js ",
                description: "",
                comments: [
                    {
                        projectHeading: "Post Textile ",
                        description: "PoshTextiles American base company i built the logistics management system akin to Microsoft Business Dynamics. As a Full Stack Developer, I played a key role in utilizing JavaScript extensively, accounting for 99.9% of the project. Leveraging Microsoft APIs, I seamlessly integrated data to facilitate the global export of cloth by PoshTextiles. My system efficiently manages warehouse operations, encompassing shipment creation, checking, picking, packing, and shipping. By integrating FedEx, UPS, and STAMP shipping company APIs, I streamlined the shipping process. The system includes live address validation and supports printing of labels. Additionally, I implemented payment integration between two companies involved in the process.",
                        commentDate: "March 12 2023",
                        rated: 5,
                        price: 23000,
                    },
                    {
                        projectHeading: " Digtal Flow ",
                        description: "Digital Media based in New York .From frontend to Full Stack Project Lead, my journey in digital media has been a captivating adventure. I started by crafting visually appealing interfaces and grew into seamlessly integrating frontend and backend technologies. As a team member and leader, I delivered exceptional results for clients, combining cutting-edge technologies and fostering innovation. With unwavering commitment and a passion for excellence, I continue to push boundaries and create captivating digital experiences.",
                        commentDate: "April 02 2022",
                        rated: 5,
                        price: 60000,
                    },

                ],
                profile: [
                    'https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/293240721/original/6891870e69ea2793c44105520881aa0556da1f9b.png',
                    'https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/250604452/original/789892c3543a3199c6f38b416ca1f42bf92a5039.png',
                    'https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/267148774/original/ddf545f98b847c3cd66c9afe1cf0b680148237f1.png',
                ],
            }
        ],
        comments: [
            {
                Heading: "Post Textile App",
                title: "Muhammad Hamad is working on our logistics management system as Full stack developer . He make custom frontend app pure in JavaScript now is working on backend that will be soon live. He always full fill his commitment . I always paid him advance . I never realized I did mistake 100% recommended",
                date: "Jul 03, 2023 12:00 AM",
                rated: 5,
            },
            {
                Heading: "stock",
                title: "I've had the pleasure of working with Muhammad, as remote Full Stack developer, for the past three years. He consistently displays professionalism, excellent coding skills, effective communication, and honesty. Muhammad's passion for his work goes beyond financial motivations, driving him to strive for perfection.Highly recommended",
                date: "Jan 14, 2022 11:00 AM",
                rated: 5,
            },
        ],
        specialization: ["Full Stack devloper", "web developer", "ReactJs"],
        projectsThumbs: [
            'https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/portfolio-large-01-340x250.jpg',
            'https://fiverr-res.cloudinary.com/images/t_medium7,q_auto,f_auto,q_auto,f_auto/gigs/150311157/original/b2cffba150592f0c20aece34ffefa82869c3237d/develop-a-web-app-with-react-js-node-js.jpeg',
            'https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/portfolio-large-03-340x250.jpg',
        ],
        commentCount: function () {
            return this.comments.length
        },
        ratingCount: function () {
            return this.comments.reduce((a, b) => a + b.rated, 0) / this.commentCount()
        },
    },
    // 1 finish 
    {
        firstName: 'Clive ',
        mainCategory: 'Branding',
        proTallent: false,
        availableToWork: true,
        lastName: 'B',
        hourlyRate: 78,
        avatar: "https://www.upwork.com/profile-portraits/c1vLZ8iVLN2bcmwEFyXQEVnwpSYjzef47L2ZVaXcTUc_IeTA8Pfn-ZxYt4z2qJO5j7",
        verified: true,
        description: 'With over 3 years of industry experience, I am a seasoned UI/UX designer who specializes in crafting clean, modern interfaces ',
        category: "Design",
        jobs: {
            completed: 78,
            cancelled: 3,
            inProgress: 7
        },
        revneue: 78000,
        services: [
            {
                _id: 's_1',
                title: "I will do UIUX for you mobile application or website in figma or xdk",
                description: "Are you looking to elevate your digital presence with captivating and intuitive interfaces? Look no further! With over 5 years of industry experience, I am a seasoned UI/UX designer who specializes in crafting clean, modern interfaces that leave a lasting impression. I have a passion for creating designs that seamlessly blend aesthetics with functionality, ensuring a delightful user experience at every interaction. By staying up-to-date with the latest design trends and best practices, I bring fresh and innovative ideas to the table, breathing life into your brand and product. From concept to completion, I meticulously analyze user needs and behavior to develop visually stunning interfaces that are both visually appealing and easy to navigate. Through a user-centered design approach, I strive to understand your target audience and align their goals with your business objectives, resulting in a harmonious fusion of form and function. With a keen eye for detail, I meticulously craft each element, from typography and color palettes to iconography and layout, creating a cohesive and immersive experience that captivates users and enhances their engagement. I believe in the power of simplicity and elegance, ensuring that every interface I design not only looks great but also functions flawlessly across devices and platforms. Collaboration is at the heart of my process. I work closely with clients, stakeholders, and development teams, valuing open communication and feedback to ensure that your vision is translated into a remarkable reality. I am proficient in industry-standard design tools and methodologies, allowing me to deliver high-quality, pixel-perfect designs on time and within budget. If you're ready to take your digital presence to new heights and leave a lasting impact on your audience, let's connect. Together, we can create an attractive and user-centric interface that sets you apart from the competition and drives meaningful results.",
                comments: [
                    {
                        projectHeading: "Need Graphic Designer for Tech Company Ads and Banners",
                        description: "Clive really did a magnificent job in hearing and understanding my vision and bringing it to life. This website was already in progress which can be a barrier to some designers, as many of the proposals I received wanted to completely scrap my ideas and start fresh. Clive took what I already had and enhanced it in so many ways, while still adding his own personal design touches. He has such an eye for seamless and elegant design, it makes the viewer feel your website rather than just viewing it. Amazing work.",
                        commentDate: "March 12 2023",
                        rated: 5,
                        price: 4500,
                    },
                    {
                        projectHeading: "Ongoing Graphic Design Support",
                        description: "2nd project down with us, and he has been fantastic for building out our landing pages",
                        commentDate: "April 02 2022",
                        rated: 5,
                        price: 3700,
                    }, {
                        projectHeading: "Design Four Startup Web UX/UI Screens and Logo",
                        description: "Really great work from civil. Her colour balances are great, and communication and responsiveness on point. Will be working with her again for sure",
                        commentDate: "March 12 2023",
                        rated: 5,
                        price: 234,
                    },
                    {
                        projectHeading: "Designer to build direct-to-consumer banner ads in Bannersnack",
                        description: "Deep understanding of the aesthetics, pacing, and legibility required for digital marketing design. Clive exceeds expectations and is skilled in clean & efficient motion graphics",
                        commentDate: "April 02 2022",
                        rated: 4.6,
                        price: 1200,
                    },

                ],
                profile: [
                    'https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/portfolio-large-04-340x250.jpg',
                    'https://www.upwork.com/att/download/portfolio/persons/uid/1173403296888061952/profile/projects/files/1253575602255597568',
                    'https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/portfolio-large-06-340x250.jpg',
                ],
            }
        ],
        comments: [
            {
                Heading: "Ongoing Graphic Design Support",
                title: "I highly recommend Clive for any graphic design needs! He provided exceptional support for our email designs, graphic design templates, and brand development. His attention to detail and prompt communication made the design process seamless. His expertise and responsiveness truly exceeded our expectation",
                date: "Feb 09, 2021 10:00 PM",
                rated: 5,
            },
            {
                Heading: "Design Four Startup Web UX/UI Screens and Logo",
                title: "Really great work from civil. Her colour balances are great, and communication and responsiveness on point. Will be working with her again for sure",
                date: "July  03, 2022 8:00 AM",
                rated: 5,
            }, {
                Heading: "Need Graphic Designer for Tech Company Ads and Banners",
                title: "Clive really did a magnificent job in hearing and understanding my vision and bringing it to life. This website was already in progress which can be a barrier to some designers, as many of the proposals I received wanted to completely scrap my ideas and start fresh. Clive took what I already had and enhanced it in so many ways, while still adding his own personal design touches. He has such an eye for seamless and elegant design, it makes the viewer feel your website rather than just viewing it. Amazing work.",
                date: "November  09, 2023 08:00 AM",
                rated: 4,
            },
            {
                Heading: "Designer to build direct-to-consumer banner ads in Bannersnack",
                title: "Deep understanding of the aesthetics, pacing, and legibility required for digital marketing design. Clive exceeds expectations and is skilled in clean & efficient motion graphics",
                date: "March 09, 2023 11:00 AM",
                rated: 4.6,
            },
        ],
        specialization: ["Ux Designer", "Expert Adobe", "Graphics"],
        projectsThumbs: [
            'https://www.upwork.com/att/download/portfolio/persons/uid/1173403296888061952/profile/projects/files/1182948041536147456',
            'https://www.upwork.com/att/download/portfolio/persons/uid/1173403296888061952/profile/projects/files/1253575602255597568',
            'https://www.upwork.com/att/download/portfolio/persons/uid/1173403296888061952/profile/projects/files/7e75af82-e218-4ebf-a1c2-f79532618921',
        ],
    },
    // finish 2

    {
        firstName: 'Tetiana ',
        mainCategory: 'Branding',
        proTallent: false,
        availableToWork: true,
        lastName: 'F',
        hourlyRate: 42,
        avatar: "https://www.upwork.com/profile-portraits/c11fTnFoBJwtpJYdKXH6MbigGzO65YJV9Ik_B-dT6ach09WYXFTwhUvMaVUCXmHU3v",
        verified: true,
        description: 'Web Designer with wide experience in graphic design, UI / UX and media/print design.',
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
                title: "Web designer & Graphic Designer | Elementor Develope",
                description: "Hi, there! I'm a Web Designer with wide experience in graphic design, UI / UX and media/print design. I help you connect with your ideal audience with modern, simple, and concise design and trendy ideas. For you I offer: - Optimal terms of performance of works; - Strict adherence to the terms of reference for the project; - Adaptation for mobile devices and tablets; - An individual approach to every client. For my part, I guarantee compliance with deadlines, individual approach, politeness, and pleasant cooperation. As a result, you will receive models that will be fully prepared for the work of the layout designer. Feel free to ask questions, I am always happy to chat with you.",
                comments: [
                    {
                        projectHeading: "UI/UX Designer Required",
                        description: "Really great work from Tetiana. Her colour balances are great, and communication and responsiveness on point. Will be working with her again for sure",
                        commentDate: "April 02 2022",
                        rated: 5,
                        price: 1900,
                    },
                    {
                        projectHeading: "Top notch UI/UX designer needed",
                        description: "Tetiana is a nice person to work with.",
                        commentDate: "March 12 2023",
                        rated: 5,
                        price: 900,
                    },
                    {
                        projectHeading: "Design and Development website Figma + Elementor",
                        description: "Tetiana did an excellent job with a quick turn around.",
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
                Heading: "UI/UX Designer Required",
                title: "Really great work from Tetiana. Her colour balances are great, and communication and responsiveness on point. Will be working with her again for sure",
                date: "March 09, 2023 11:00 AM",
                rated: 4,
            },
            {
                Heading: "Top notch UI/UX designer needed",
                title: "Tetiana is a nice person to work with",
                date: "March 09, 2023 11:00 AM",
                rated: 5,
            }, {
                Heading: "Design and Development website Figma + Elementor",
                title: "Tetiana did an excellent job with a quick turn around.",
                date: "March 09, 2023 11:00 AM",
                rated: 4,
            },
        ],
        specialization: ["web Designer", "Ux Designer", "Graphics"],
        projectsThumbs: [
            'https://rainbowit.net/themes/inbio/wp-content/uploads/2021/09/marketing-young-cute-business-lady-striped-shirt-office-showing-raising-results-1-340x250.jpg',
            'https://rainbowit.net/themes/inbio/wp-content/uploads/2021/09/pretty-curly-young-woman-writing-notes-startup-project-340x250.jpg',
            'https://rainbowit.net/themes/inbio/wp-content/uploads/2021/09/road-sign-direction-perforated-paper-arrow-340x250.jpg',
        ],
    },

    // finsih 3
    {
        firstName: 'Ruslan ',
        mainCategory: 'Branding',
        proTallent: false,
        availableToWork: true,
        lastName: 'Morris',
        hourlyRate: 102,
        avatar: "https://www.upwork.com/profile-portraits/c15smPrEC9DIIcRV8Dznmo4uJfF4UxNogezl5phAKMKGV2JdOhoob9EUukFtElSFuM",
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
                title: "I will be your Frontend Developer in React js ",
                description: "Experienced web developer with higher technical education with a degree in Information Management Systems and Technologies. I have over 5 years of commercial experience in the front-end development area and 2 years in back-end development and I am always looking to expand my skillset and grow. My main focus is Web applications, UI/UX, sites layout, and landing pages development with an emphasis to use the React.js library. Also in my job, I use WordPress CMS. Career highlights: ✅ Web developer with over 7 years of professional experience in developing and supporting various commercial websites and applications. ✅ Good understanding of modern web development technologies, approaches, and the industry in general. ✅ Have experience working in large teams and with complex products. ✅ Have developed dozens of websites and landing pages, that attract hundreds of new users and help my clients grow their business.  Strong communication skills",
                comments: [
                    {
                        projectHeading: "Top-Notch React.js Developer",
                        description: "Ruslan is a great value addition to any front-end team. He has got leadership and a great understanding and knowledge of front-end development. We are all thankful for his contribution to our project. Will work with him always and will always recommend him. Thank you Ruslan.. it was such a pleasure working with you.",
                        commentDate: "April 02 2022",
                        rated: 5,
                        price: 15212,
                    },
                    {
                        projectHeading: "front-end developer",
                        description: "Very deadline oriented person. Provide pixel perfect coding in very short time period.This was a test paid task. We are going to hire Ruslan for our next project.",
                        commentDate: "March 12 2023",
                        rated: 4.8,
                        price: 23400,
                    },
                    {
                        projectHeading: "Set Selection on Textarea using Javascript",
                        description: "Ruslan was able to complete the job as specified. Good freelancer",
                        commentDate: "April 02 2022",
                        rated: 4.7,
                        price: 2489,
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
                Heading: "Top-Notch React.js Developer",
                title: "Ruslan is a great value addition to any front-end team. He has got leadership and a great understanding and knowledge of front-end development. We are all thankful for his contribution to our project. Will work with him always and will always recommend him. Thank you Ruslan.. it was such a pleasure working with you",
                date: "March 09, 2023 11:00 AM",
                rated: 4,
            },
            {
                Heading: "front-end developer",
                title: "Very deadline oriented person. Provide pixel perfect coding in very short time period.This was a test paid task. We are going to hire Ruslan for our next project..",
                date: "March 09, 2023 11:00 AM",
                rated: 5,
            }, {
                Heading: "Set Selection on Textarea using Javascript",
                title: "Ruslan was able to complete the job as specified. Good freelancer",
                date: "March 09, 2023 11:00 AM",
                rated: 4,
            },
        ],
        specialization: ["React JS", "Web Developer", "web Designer ",],
        projectsThumbs: [
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWBG38F-lq5h1QfvSeC1TWMhAhHy0Q3v9CRw&usqp=CAU',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpJX0Jo6LD9BdP5QKGsmhRPry5lRCOwU8NHg&usqp=CAU',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjkt6-gO3HTEZZaMTQR37i0eTLSfxUbdK6AQ&usqp=CAU',

        ],
    },
    // finsh4 
    {
        firstName: 'Sebastian',
        mainCategory: 'Branding',
        proTallent: false,
        availableToWork: true,
        lastName: 'Bells',
        hourlyRate: 98,
        avatar: "https://www.upwork.com/profile-portraits/c1i5Qwe91IMwQxFIfH2ynJ5QIsM4tJeBN8SNqNLV2vTR6kvXVPN65BAkW7w2BY0-kH",
        verified: true,
        description: ' i am  Full Stack developer  with experties in Frontend and backend Technalogy',
        category: "interfaces",
        jobs: {
            completed: 102,
            cancelled: 7,
            inProgress: 2
        },
        revneue: 78000,
        services: [
            {
                _id: 's_1',
                title: "I will  be Full Stack Developer ",
                description: "Welcome to my profile, My name is Sebastian, and I'm a professional software engineer with three years of experience, I have worked on many interesting projects with both big and small companies, and I have helped local businesses to automate their services during the pandemic. As a lead developer, I've mentored interns, and taught them how to turn their projects into well-tested and easily maintainable software. I am passionate about learning as much as I can , even during my free time and sharing my experience with others. I have worked with many frameworks/libraries but I discovered React to be my favourite. On server side I love using modern technologies like GraphQL, Docker, Varnish and etc",

                comments: [
                    {
                        projectHeading: "Fullstack Javascript Developer",
                        description: "It was a pleasure to work with Sebastian. He demonstrated excellent communication skills throughout the project, and his coding skills were top-notch. He delivered high-quality work on time and was always responsive to our feedback. We highly recommend Sebastian and look forward to working with him again in the future",
                        commentDate: "March 12 2023",
                        rated: 5,
                        price: 2500,
                    },
                    {
                        projectHeading: "Need a quick fix on my final project",
                        description: "Quick, Easly Explained. A well put together gentleman ready to assist beginners. Totally recommend! Saved me from failing my exam",
                        commentDate: "April 02 2022",
                        rated: 4.5,
                        price: 4000,
                    }, {
                        projectHeading: "Expert React Developers- Fulltime - Long Term",
                        description: "great work and amazing outcome",
                        commentDate: "March 12 2023",
                        rated: 5,
                        price: 7500,
                    },
                    {
                        projectHeading: "ReactJS Developer who wants to build the next big thing",
                        description: "Thinks beyond the task, great team player, super skilled developer and always open to learning something new. You simply can't go wrong with this guy",
                        commentDate: "April 02 2022",
                        rated: 5,
                        price: 8000,
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
        specialization: ["Full Stack developer", "Node JS", "React Js"],
        projectsThumbs: [
            'https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/portfolio-large-04-340x250.jpg',
            'https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/portfolio-large-05-340x250.jpg',
            'https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/portfolio-large-06-340x250.jpg',
        ],
    },

    //finish5

    {
        firstName: 'Domonkos ',
        mainCategory: 'Branding',
        proTallent: false,
        availableToWork: true,
        lastName: 'Bells',
        hourlyRate: 98,
        avatar: "https://www.upwork.com/profile-portraits/c13IjCH8alEKNMH_fnm_Dj3Delfzl469xVBQjWX30ZsNEY8IYI8WcPnNkj746t-Iwr",
        verified: true,
        description: 'Unity Specialist and C# Expert for 10+ years in the game and software industry.   ',
        category: "interfaces",
        jobs: {
            completed: 102,
            cancelled: 7,
            inProgress: 2
        },
        revneue: 56000,
        services: [
            {
                _id: 's_1',
                title: "Expert Unity Developer ",
                description: "Hello! Unity Specialist and C# Expert for 10+ years in the game and software industry. My goal is to create outstanding product for you the way you've imagined! Contact me if you are looking for: -Reliable and loyal developer -Clean, stable and usable product -Experienced Development Lead or Developer -Producer, Project Manager or Consultant I'm best at: -Project management from ground up -C# and Unity development and workflow -Game play Development -Graphics URP/HDRP/Deferred/Forward (lightning, shaders, post process effects) -Optimization (code and assets too) -Bug fixing and Debugging even in live products as firefighter -Time and resource management (leading teams and providing reliable schedule) -Networking solutions -Documentation My experiences are coming from working with multiple high profile companies, with project types ranging from PC Steam Games, AR and VR Games, Business to Business Applications. Have a nice day and Looking forward working with you!",

                comments: [
                    {
                        projectHeading: "Game coding - create PBR maps and UV mapping from image",
                        description: "As a technical artist, Domonkos is highly skilled, at both the tech and communication sides. He has played an important role in our growing team, for a number of challenging projects. He also offered highly valuable advices in approaching product development. I definetely want to work with him again in upcoming Unity projects",
                        commentDate: "March 12 2023",
                        rated: 5,
                        price: 2500,
                    },
                    {
                        projectHeading: "Looking for a senior Unity developer for educational games",
                        description: "Domonkos is a great Unity developer. He knows his stuff. Great communication too",
                        commentDate: "April 02 2022",
                        rated: 4.5,
                        price: 4000,
                    }, {
                        projectHeading: "Fix issues found in firebase",
                        description: "Amazing person with amazing skills",
                        commentDate: "March 12 2023",
                        rated: 5,
                        price: 7500,
                    },
                    {
                        projectHeading: "Unity Developer",
                        description: "Great to work with. Has deep knowledge in Unity and is committed to putting out high quality code while working efficiently. Maintained good communication throughout the project, and met all requirements successfully ",
                        commentDate: "April 02 2022",
                        rated: 5,
                        price: 8000,
                    },

                ],
                profile: [
                    'https://www.upwork.com/att/download/portfolio/persons/uid/650319826375020544/profile/projects/files/f5cdb152-abe3-4143-a559-20f89a61d6ab',
                    'https://www.upwork.com/att/download/portfolio/persons/uid/650319826375020544/profile/projects/files/92fb0dac-0810-47a8-9414-872f358467ac',
                    'https://www.upwork.com/att/download/portfolio/persons/uid/650319826375020544/profile/projects/files/953678690184065024',
                ],
            }
        ],
        comments: [
            {
                Heading: "Game coding - create PBR maps and UV mapping from image",
                title: "As a technical artist, Domonkos is highly skilled, at both the tech and communication sides. He has played an important role in our growing team, for a number of challenging projects. He also offered highly valuable advices in approaching product development. I definetely want to work with him again in upcoming Unity projects",
                date: "March 09, 2023 11:00 AM",
                rated: 4,
            },
            {
                Heading: "Looking for a senior Unity developer for educational games",
                title: "Domonkos is a great Unity developer. He knows his stuff. Great communication too.",
                date: "March 09, 2023 11:00 AM",
                rated: 5,
            }, {
                Heading: "Fix issues found in firebase",
                title: "Amazing person with amazing skills",
                date: "March 09, 2023 11:00 AM",
                rated: 4,
            },
            {
                Heading: "Unity Developer",
                title: "Great to work with. Has deep knowledge in Unity and is committed to putting out high quality code while working efficiently. Maintained good communication throughout the project, and met all requirements successfully",
                date: "March 09, 2023 11:00 AM",
                rated: 5,
            },
        ],
        specialization: ["Animation", "3D", "Expert Unity"],
        projectsThumbs: [
            'https://www.upwork.com/att/download/portfolio/persons/uid/650319826375020544/profile/projects/files/f5cdb152-abe3-4143-a559-20f89a61d6ab',
            'https://www.upwork.com/att/download/portfolio/persons/uid/650319826375020544/profile/projects/files/92fb0dac-0810-47a8-9414-872f358467ac',
            'https://www.upwork.com/att/download/portfolio/persons/uid/650319826375020544/profile/projects/files/953678690184065024',
        ],
    },
    // finish6 
    {
        firstName: 'Umar ',
        mainCategory: 'Branding',
        proTallent: false,
        availableToWork: true,
        lastName: ' .B',
        hourlyRate: 98,
        avatar: "https://www.upwork.com/profile-portraits/c1QAd-sSC3s6b36s3SfyztFIBLBAF_UZOwKUWpIdht351wGIdHzx2exaZZfQQhyFpG",
        verified: true,
        description: 'Unity Development | 2D / 3D / PC / Android / iOS / WebGL   ',
        category: "interfaces",
        jobs: {
            completed: 102,
            cancelled: 7,
            inProgress: 2
        },
        revneue: 200000,
        services: [
            {
                _id: 's_1',
                title: "Expert Unity Developer ",
                description: "Unity Development expert with 12+ years of experience, specializing in NFT blockchain games using CryptoCurrency wallet with excellent skills in Software Architecture for Large/Medium Games, Core Game Development, and Backend-Frontend interaction. 🔥TOP FIVE HIGHEST RATED Unity and HIGHEST EARNING (158,000+ USD)My experience as a Unity Developer (Versions 5.3.2 - 2021) is extensive and diverse, I methodically identify the project requirements, and decide on the best architecture using a vast variety of techniques and strategies. I have solved numerous show-stopping performance problems, as well as often re-engineered immensely complex designs and code, providing significantly improved performance on handheld devices and providing an overall better gaming experience. As an Expert Unity Developer, I possess an innate ability to engineer games employing AAA Industry Standard Best Practices and to design mutable and modular code/systems resulting in decoupled components interacting with each other fluidly - these are totally Reusable ♻️, totally Scalable ⚖️ and totally Beautiful ✨",

                comments: [
                    {
                        projectHeading: "Publish Unity/Firebase game to iOS and Google App Store",
                        description: "Very professional and communicative. It's a pleasure working with Umar and his team. I can highly recommend them",
                        commentDate: "March 12 2023",
                        rated: 5,
                        price: 2500,
                    },
                    {
                        projectHeading: "Accessible Chess Game",
                        description: "Umar is a wizard. Even if the specs aren't that detailed, he will break down the tasks and deliver every time. Personal favorite: The  when he gives that, you can be sure a feature is stable! Quick to understand code. Quick to ask the right questions. 11/10",
                        commentDate: "April 02 2022",
                        rated: 4.5,
                        price: 4000,
                    }, {
                        projectHeading: "Upgrading an existing Unity 2018 based app to Unity 2020",
                        description: "Amazing person with amazing skills",
                        commentDate: "March 12 2023",
                        rated: 5,
                        price: 7500,
                    },
                    {
                        projectHeading: "Developer for setting up IAP, Ads and publishing",
                        description: "This developer is the best and most honest of the many developers I have ever seen. He did his best to fix parts that had been spoiled by an agency in the past. Although this follow-up development is quite inconvenient, he got the job done with integrity and perfection. Work was fast, and there was no problem with communication. The period of working with him was always looking forward to and a pleasant experience. I would like to continue working with him. ",
                        commentDate: "April 02 2022",
                        rated: 5,
                        price: 8000,
                    },

                ],
                profile: [
                    'https://www.upwork.com/att/download/portfolio/persons/uid/650319826375020544/profile/projects/files/f5cdb152-abe3-4143-a559-20f89a61d6ab',
                    'https://www.upwork.com/att/download/portfolio/persons/uid/650319826375020544/profile/projects/files/92fb0dac-0810-47a8-9414-872f358467ac',
                    'https://www.upwork.com/att/download/portfolio/persons/uid/650319826375020544/profile/projects/files/953678690184065024',
                ],
            }
        ],
        comments: [
            {
                Heading: "Publish Unity/Firebase game to iOS and Google App Store",
                title: "As a technical artist, Domonkos is highly skilled, at both the tech and communication sides. He has played an important role in our growing team, for a number of challenging projects. He also offered highly valuable advices in approaching product development. I definetely want to work with him again in upcoming Unity projects",
                date: "March 09, 2023 11:00 AM",
                rated: 4,
            },
            {
                Heading: "Accessible Chess Game",
                title: "Umar is a wizard. Even if the specs aren't that detailed, he will break down the tasks and deliver every time. Personal favorite: The  when he gives that, you can be sure a feature is stable! Quick to understand code. Quick to ask the right questions. 11/10",
                date: "March 09, 2023 11:00 AM",
                rated: 5,
            }, {
                Heading: "Upgrading an existing Unity 2018 based app to Unity 2020",
                title: "Amazing person with amazing skills",
                date: "March 09, 2023 11:00 AM",
                rated: 4,
            },
            {
                Heading: "Developer for setting up IAP, Ads and publishing",
                title: "This developer is the best and most honest of the many developers I have ever seen. He did his best to fix parts that had been spoiled by an agency in the past. Although this follow-up development is quite inconvenient, he got the job done with integrity and perfection. Work was fast, and there was no problem with communication. The period of working with him was always looking forward to and a pleasant experience. I would like to continue working with him",
                date: "March 09, 2023 11:00 AM",
                rated: 5,
            },
        ],
        specialization: ["Animation", "3D", "Expert Unity"],
        projectsThumbs: [
            'https://www.upwork.com/att/download/portfolio/persons/uid/650319826375020544/profile/projects/files/f5cdb152-abe3-4143-a559-20f89a61d6ab',
            'https://www.upwork.com/att/download/portfolio/persons/uid/650319826375020544/profile/projects/files/92fb0dac-0810-47a8-9414-872f358467ac',
            'https://www.upwork.com/att/download/portfolio/persons/uid/650319826375020544/profile/projects/files/953678690184065024',
        ],
    },

























    // 'Illustration'
    {
        firstName: 'Hammad',
        mainCategory: 'Illustration',
        proTallent: false,
        availableToWork: true,
        lastName: 'Shafiq',
        hourlyRate: 95,
        avatar: 'https://avatars.githubusercontent.com/u/42932321?v=4',
        verified: true,
        description: 'Experienced Full Stack Web Developer adept at building apps from scratch. ',
        category: "Full Stack developer",
        jobs: {
            completed: 102,
            cancelled: 7,
            inProgress: 2
        },
        revneue: 234000,
        services: [
            {
                _id: 's_1',
                title: " i will Your Full Stack Developer React || Node js ",
                description: "",
                comments: [
                    {
                        projectHeading: "Post Textile ",
                        description: "PoshTextiles American base company i built the logistics management system akin to Microsoft Business Dynamics. As a Full Stack Developer, I played a key role in utilizing JavaScript extensively, accounting for 99.9% of the project. Leveraging Microsoft APIs, I seamlessly integrated data to facilitate the global export of cloth by PoshTextiles. My system efficiently manages warehouse operations, encompassing shipment creation, checking, picking, packing, and shipping. By integrating FedEx, UPS, and STAMP shipping company APIs, I streamlined the shipping process. The system includes live address validation and supports printing of labels. Additionally, I implemented payment integration between two companies involved in the process.",
                        commentDate: "March 12 2023",
                        rated: 5,
                        price: 23000,
                    },
                    {
                        projectHeading: " Digtal Flow ",
                        description: "Digital Media based in New York .From frontend to Full Stack Project Lead, my journey in digital media has been a captivating adventure. I started by crafting visually appealing interfaces and grew into seamlessly integrating frontend and backend technologies. As a team member and leader, I delivered exceptional results for clients, combining cutting-edge technologies and fostering innovation. With unwavering commitment and a passion for excellence, I continue to push boundaries and create captivating digital experiences.",
                        commentDate: "April 02 2022",
                        rated: 5,
                        price: 60000,
                    },

                ],
                profile: [
                    'https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/293240721/original/6891870e69ea2793c44105520881aa0556da1f9b.png',
                    'https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/250604452/original/789892c3543a3199c6f38b416ca1f42bf92a5039.png',
                    'https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/267148774/original/ddf545f98b847c3cd66c9afe1cf0b680148237f1.png',
                ],
            }
        ],
        comments: [
            {
                Heading: "Post Textile App",
                title: "Muhammad Hamad is working on our logistics management system as Full stack developer . He make custom frontend app pure in JavaScript now is working on backend that will be soon live. He always full fill his commitment . I always paid him advance . I never realized I did mistake 100% recommended",
                date: "Jul 03, 2023 12:00 AM",
                rated: 5,
            },
            {
                Heading: "stock",
                title: "I've had the pleasure of working with Muhammad, as remote Full Stack developer, for the past three years. He consistently displays professionalism, excellent coding skills, effective communication, and honesty. Muhammad's passion for his work goes beyond financial motivations, driving him to strive for perfection.Highly recommended",
                date: "Jan 14, 2022 11:00 AM",
                rated: 5,
            },
        ],
        specialization: ["Full Stack devloper", "web developer", "ReactJs"],
        projectsThumbs: [
            'https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/portfolio-large-01-340x250.jpg',
            'https://fiverr-res.cloudinary.com/images/t_medium7,q_auto,f_auto,q_auto,f_auto/gigs/150311157/original/b2cffba150592f0c20aece34ffefa82869c3237d/develop-a-web-app-with-react-js-node-js.jpeg',
            'https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/portfolio-large-03-340x250.jpg',
        ],
        commentCount: function () {
            return this.comments.length
        },
        ratingCount: function () {
            return this.comments.reduce((a, b) => a + b.rated, 0) / this.commentCount()
        },
    },
    // 1 finish 
    {
        firstName: 'Clive ',
        mainCategory: 'Illustration',
        proTallent: false,
        availableToWork: true,
        lastName: 'B',
        hourlyRate: 78,
        avatar: "https://www.upwork.com/profile-portraits/c1vLZ8iVLN2bcmwEFyXQEVnwpSYjzef47L2ZVaXcTUc_IeTA8Pfn-ZxYt4z2qJO5j7",
        verified: true,
        description: 'With over 3 years of industry experience, I am a seasoned UI/UX designer who specializes in crafting clean, modern interfaces ',
        category: "Design",
        jobs: {
            completed: 78,
            cancelled: 3,
            inProgress: 7
        },
        revneue: 78000,
        services: [
            {
                _id: 's_1',
                title: "I will do UIUX for you mobile application or website in figma or xdk",
                description: "Are you looking to elevate your digital presence with captivating and intuitive interfaces? Look no further! With over 5 years of industry experience, I am a seasoned UI/UX designer who specializes in crafting clean, modern interfaces that leave a lasting impression. I have a passion for creating designs that seamlessly blend aesthetics with functionality, ensuring a delightful user experience at every interaction. By staying up-to-date with the latest design trends and best practices, I bring fresh and innovative ideas to the table, breathing life into your brand and product. From concept to completion, I meticulously analyze user needs and behavior to develop visually stunning interfaces that are both visually appealing and easy to navigate. Through a user-centered design approach, I strive to understand your target audience and align their goals with your business objectives, resulting in a harmonious fusion of form and function. With a keen eye for detail, I meticulously craft each element, from typography and color palettes to iconography and layout, creating a cohesive and immersive experience that captivates users and enhances their engagement. I believe in the power of simplicity and elegance, ensuring that every interface I design not only looks great but also functions flawlessly across devices and platforms. Collaboration is at the heart of my process. I work closely with clients, stakeholders, and development teams, valuing open communication and feedback to ensure that your vision is translated into a remarkable reality. I am proficient in industry-standard design tools and methodologies, allowing me to deliver high-quality, pixel-perfect designs on time and within budget. If you're ready to take your digital presence to new heights and leave a lasting impact on your audience, let's connect. Together, we can create an attractive and user-centric interface that sets you apart from the competition and drives meaningful results.",
                comments: [
                    {
                        projectHeading: "Need Graphic Designer for Tech Company Ads and Banners",
                        description: "Clive really did a magnificent job in hearing and understanding my vision and bringing it to life. This website was already in progress which can be a barrier to some designers, as many of the proposals I received wanted to completely scrap my ideas and start fresh. Clive took what I already had and enhanced it in so many ways, while still adding his own personal design touches. He has such an eye for seamless and elegant design, it makes the viewer feel your website rather than just viewing it. Amazing work.",
                        commentDate: "March 12 2023",
                        rated: 5,
                        price: 4500,
                    },
                    {
                        projectHeading: "Ongoing Graphic Design Support",
                        description: "2nd project down with us, and he has been fantastic for building out our landing pages",
                        commentDate: "April 02 2022",
                        rated: 5,
                        price: 3700,
                    }, {
                        projectHeading: "Design Four Startup Web UX/UI Screens and Logo",
                        description: "Really great work from civil. Her colour balances are great, and communication and responsiveness on point. Will be working with her again for sure",
                        commentDate: "March 12 2023",
                        rated: 5,
                        price: 234,
                    },
                    {
                        projectHeading: "Designer to build direct-to-consumer banner ads in Bannersnack",
                        description: "Deep understanding of the aesthetics, pacing, and legibility required for digital marketing design. Clive exceeds expectations and is skilled in clean & efficient motion graphics",
                        commentDate: "April 02 2022",
                        rated: 4.6,
                        price: 1200,
                    },

                ],
                profile: [
                    'https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/portfolio-large-04-340x250.jpg',
                    'https://www.upwork.com/att/download/portfolio/persons/uid/1173403296888061952/profile/projects/files/1253575602255597568',
                    'https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/portfolio-large-06-340x250.jpg',
                ],
            }
        ],
        comments: [
            {
                Heading: "Ongoing Graphic Design Support",
                title: "I highly recommend Clive for any graphic design needs! He provided exceptional support for our email designs, graphic design templates, and brand development. His attention to detail and prompt communication made the design process seamless. His expertise and responsiveness truly exceeded our expectation",
                date: "Feb 09, 2021 10:00 PM",
                rated: 5,
            },
            {
                Heading: "Design Four Startup Web UX/UI Screens and Logo",
                title: "Really great work from civil. Her colour balances are great, and communication and responsiveness on point. Will be working with her again for sure",
                date: "July  03, 2022 8:00 AM",
                rated: 5,
            }, {
                Heading: "Need Graphic Designer for Tech Company Ads and Banners",
                title: "Clive really did a magnificent job in hearing and understanding my vision and bringing it to life. This website was already in progress which can be a barrier to some designers, as many of the proposals I received wanted to completely scrap my ideas and start fresh. Clive took what I already had and enhanced it in so many ways, while still adding his own personal design touches. He has such an eye for seamless and elegant design, it makes the viewer feel your website rather than just viewing it. Amazing work.",
                date: "November  09, 2023 08:00 AM",
                rated: 4,
            },
            {
                Heading: "Designer to build direct-to-consumer banner ads in Bannersnack",
                title: "Deep understanding of the aesthetics, pacing, and legibility required for digital marketing design. Clive exceeds expectations and is skilled in clean & efficient motion graphics",
                date: "March 09, 2023 11:00 AM",
                rated: 4.6,
            },
        ],
        specialization: ["Ux Designer", "Expert Adobe", "Graphics"],
        projectsThumbs: [
            'https://www.upwork.com/att/download/portfolio/persons/uid/1173403296888061952/profile/projects/files/1182948041536147456',
            'https://www.upwork.com/att/download/portfolio/persons/uid/1173403296888061952/profile/projects/files/1253575602255597568',
            'https://www.upwork.com/att/download/portfolio/persons/uid/1173403296888061952/profile/projects/files/7e75af82-e218-4ebf-a1c2-f79532618921',
        ],
    },
    // finish 2

    {
        firstName: 'Tetiana ',
        mainCategory: 'Illustration',
        proTallent: false,
        availableToWork: true,
        lastName: 'F',
        hourlyRate: 42,
        avatar: "https://www.upwork.com/profile-portraits/c11fTnFoBJwtpJYdKXH6MbigGzO65YJV9Ik_B-dT6ach09WYXFTwhUvMaVUCXmHU3v",
        verified: true,
        description: 'Web Designer with wide experience in graphic design, UI / UX and media/print design.',
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
                title: "Web designer & Graphic Designer | Elementor Develope",
                description: "Hi, there! I'm a Web Designer with wide experience in graphic design, UI / UX and media/print design. I help you connect with your ideal audience with modern, simple, and concise design and trendy ideas. For you I offer: - Optimal terms of performance of works; - Strict adherence to the terms of reference for the project; - Adaptation for mobile devices and tablets; - An individual approach to every client. For my part, I guarantee compliance with deadlines, individual approach, politeness, and pleasant cooperation. As a result, you will receive models that will be fully prepared for the work of the layout designer. Feel free to ask questions, I am always happy to chat with you.",
                comments: [
                    {
                        projectHeading: "UI/UX Designer Required",
                        description: "Really great work from Tetiana. Her colour balances are great, and communication and responsiveness on point. Will be working with her again for sure",
                        commentDate: "April 02 2022",
                        rated: 5,
                        price: 1900,
                    },
                    {
                        projectHeading: "Top notch UI/UX designer needed",
                        description: "Tetiana is a nice person to work with.",
                        commentDate: "March 12 2023",
                        rated: 5,
                        price: 900,
                    },
                    {
                        projectHeading: "Design and Development website Figma + Elementor",
                        description: "Tetiana did an excellent job with a quick turn around.",
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
                Heading: "UI/UX Designer Required",
                title: "Really great work from Tetiana. Her colour balances are great, and communication and responsiveness on point. Will be working with her again for sure",
                date: "March 09, 2023 11:00 AM",
                rated: 4,
            },
            {
                Heading: "Top notch UI/UX designer needed",
                title: "Tetiana is a nice person to work with",
                date: "March 09, 2023 11:00 AM",
                rated: 5,
            }, {
                Heading: "Design and Development website Figma + Elementor",
                title: "Tetiana did an excellent job with a quick turn around.",
                date: "March 09, 2023 11:00 AM",
                rated: 4,
            },
        ],
        specialization: ["web Designer", "Ux Designer", "Graphics"],
        projectsThumbs: [
            'https://rainbowit.net/themes/inbio/wp-content/uploads/2021/09/marketing-young-cute-business-lady-striped-shirt-office-showing-raising-results-1-340x250.jpg',
            'https://rainbowit.net/themes/inbio/wp-content/uploads/2021/09/pretty-curly-young-woman-writing-notes-startup-project-340x250.jpg',
            'https://rainbowit.net/themes/inbio/wp-content/uploads/2021/09/road-sign-direction-perforated-paper-arrow-340x250.jpg',
        ],
    },

    // finsih 3
    {
        firstName: 'Ruslan ',
        mainCategory: 'Illustration',
        proTallent: false,
        availableToWork: true,
        lastName: 'Morris',
        hourlyRate: 102,
        avatar: "https://www.upwork.com/profile-portraits/c15smPrEC9DIIcRV8Dznmo4uJfF4UxNogezl5phAKMKGV2JdOhoob9EUukFtElSFuM",
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
                title: "I will be your Frontend Developer in React js ",
                description: "Experienced web developer with higher technical education with a degree in Information Management Systems and Technologies. I have over 5 years of commercial experience in the front-end development area and 2 years in back-end development and I am always looking to expand my skillset and grow. My main focus is Web applications, UI/UX, sites layout, and landing pages development with an emphasis to use the React.js library. Also in my job, I use WordPress CMS. Career highlights: ✅ Web developer with over 7 years of professional experience in developing and supporting various commercial websites and applications. ✅ Good understanding of modern web development technologies, approaches, and the industry in general. ✅ Have experience working in large teams and with complex products. ✅ Have developed dozens of websites and landing pages, that attract hundreds of new users and help my clients grow their business.  Strong communication skills",
                comments: [
                    {
                        projectHeading: "Top-Notch React.js Developer",
                        description: "Ruslan is a great value addition to any front-end team. He has got leadership and a great understanding and knowledge of front-end development. We are all thankful for his contribution to our project. Will work with him always and will always recommend him. Thank you Ruslan.. it was such a pleasure working with you.",
                        commentDate: "April 02 2022",
                        rated: 5,
                        price: 15212,
                    },
                    {
                        projectHeading: "front-end developer",
                        description: "Very deadline oriented person. Provide pixel perfect coding in very short time period.This was a test paid task. We are going to hire Ruslan for our next project.",
                        commentDate: "March 12 2023",
                        rated: 4.8,
                        price: 23400,
                    },
                    {
                        projectHeading: "Set Selection on Textarea using Javascript",
                        description: "Ruslan was able to complete the job as specified. Good freelancer",
                        commentDate: "April 02 2022",
                        rated: 4.7,
                        price: 2489,
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
                Heading: "Top-Notch React.js Developer",
                title: "Ruslan is a great value addition to any front-end team. He has got leadership and a great understanding and knowledge of front-end development. We are all thankful for his contribution to our project. Will work with him always and will always recommend him. Thank you Ruslan.. it was such a pleasure working with you",
                date: "March 09, 2023 11:00 AM",
                rated: 4,
            },
            {
                Heading: "front-end developer",
                title: "Very deadline oriented person. Provide pixel perfect coding in very short time period.This was a test paid task. We are going to hire Ruslan for our next project..",
                date: "March 09, 2023 11:00 AM",
                rated: 5,
            }, {
                Heading: "Set Selection on Textarea using Javascript",
                title: "Ruslan was able to complete the job as specified. Good freelancer",
                date: "March 09, 2023 11:00 AM",
                rated: 4,
            },
        ],
        specialization: ["React JS", "Web Developer", "web Designer ",],
        projectsThumbs: [
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWBG38F-lq5h1QfvSeC1TWMhAhHy0Q3v9CRw&usqp=CAU',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpJX0Jo6LD9BdP5QKGsmhRPry5lRCOwU8NHg&usqp=CAU',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjkt6-gO3HTEZZaMTQR37i0eTLSfxUbdK6AQ&usqp=CAU',

        ],
    },
    // finsh4 
    {
        firstName: 'Sebastian',
        mainCategory: 'Illustration',
        proTallent: false,
        availableToWork: true,
        lastName: 'Bells',
        hourlyRate: 98,
        avatar: "https://www.upwork.com/profile-portraits/c1i5Qwe91IMwQxFIfH2ynJ5QIsM4tJeBN8SNqNLV2vTR6kvXVPN65BAkW7w2BY0-kH",
        verified: true,
        description: ' i am  Full Stack developer  with experties in Frontend and backend Technalogy',
        category: "interfaces",
        jobs: {
            completed: 102,
            cancelled: 7,
            inProgress: 2
        },
        revneue: 78000,
        services: [
            {
                _id: 's_1',
                title: "I will  be Full Stack Developer ",
                description: "Welcome to my profile, My name is Sebastian, and I'm a professional software engineer with three years of experience, I have worked on many interesting projects with both big and small companies, and I have helped local businesses to automate their services during the pandemic. As a lead developer, I've mentored interns, and taught them how to turn their projects into well-tested and easily maintainable software. I am passionate about learning as much as I can , even during my free time and sharing my experience with others. I have worked with many frameworks/libraries but I discovered React to be my favourite. On server side I love using modern technologies like GraphQL, Docker, Varnish and etc",

                comments: [
                    {
                        projectHeading: "Fullstack Javascript Developer",
                        description: "It was a pleasure to work with Sebastian. He demonstrated excellent communication skills throughout the project, and his coding skills were top-notch. He delivered high-quality work on time and was always responsive to our feedback. We highly recommend Sebastian and look forward to working with him again in the future",
                        commentDate: "March 12 2023",
                        rated: 5,
                        price: 2500,
                    },
                    {
                        projectHeading: "Need a quick fix on my final project",
                        description: "Quick, Easly Explained. A well put together gentleman ready to assist beginners. Totally recommend! Saved me from failing my exam",
                        commentDate: "April 02 2022",
                        rated: 4.5,
                        price: 4000,
                    }, {
                        projectHeading: "Expert React Developers- Fulltime - Long Term",
                        description: "great work and amazing outcome",
                        commentDate: "March 12 2023",
                        rated: 5,
                        price: 7500,
                    },
                    {
                        projectHeading: "ReactJS Developer who wants to build the next big thing",
                        description: "Thinks beyond the task, great team player, super skilled developer and always open to learning something new. You simply can't go wrong with this guy",
                        commentDate: "April 02 2022",
                        rated: 5,
                        price: 8000,
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
        specialization: ["Full Stack developer", "Node JS", "React Js"],
        projectsThumbs: [
            'https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/portfolio-large-04-340x250.jpg',
            'https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/portfolio-large-05-340x250.jpg',
            'https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/portfolio-large-06-340x250.jpg',
        ],
    },

    //finish5

    {
        firstName: 'Domonkos ',
        mainCategory: 'Illustration',
        proTallent: false,
        availableToWork: true,
        lastName: 'Bells',
        hourlyRate: 98,
        avatar: "https://www.upwork.com/profile-portraits/c13IjCH8alEKNMH_fnm_Dj3Delfzl469xVBQjWX30ZsNEY8IYI8WcPnNkj746t-Iwr",
        verified: true,
        description: 'Unity Specialist and C# Expert for 10+ years in the game and software industry.   ',
        category: "interfaces",
        jobs: {
            completed: 102,
            cancelled: 7,
            inProgress: 2
        },
        revneue: 56000,
        services: [
            {
                _id: 's_1',
                title: "Expert Unity Developer ",
                description: "Hello! Unity Specialist and C# Expert for 10+ years in the game and software industry. My goal is to create outstanding product for you the way you've imagined! Contact me if you are looking for: -Reliable and loyal developer -Clean, stable and usable product -Experienced Development Lead or Developer -Producer, Project Manager or Consultant I'm best at: -Project management from ground up -C# and Unity development and workflow -Game play Development -Graphics URP/HDRP/Deferred/Forward (lightning, shaders, post process effects) -Optimization (code and assets too) -Bug fixing and Debugging even in live products as firefighter -Time and resource management (leading teams and providing reliable schedule) -Networking solutions -Documentation My experiences are coming from working with multiple high profile companies, with project types ranging from PC Steam Games, AR and VR Games, Business to Business Applications. Have a nice day and Looking forward working with you!",

                comments: [
                    {
                        projectHeading: "Game coding - create PBR maps and UV mapping from image",
                        description: "As a technical artist, Domonkos is highly skilled, at both the tech and communication sides. He has played an important role in our growing team, for a number of challenging projects. He also offered highly valuable advices in approaching product development. I definetely want to work with him again in upcoming Unity projects",
                        commentDate: "March 12 2023",
                        rated: 5,
                        price: 2500,
                    },
                    {
                        projectHeading: "Looking for a senior Unity developer for educational games",
                        description: "Domonkos is a great Unity developer. He knows his stuff. Great communication too",
                        commentDate: "April 02 2022",
                        rated: 4.5,
                        price: 4000,
                    }, {
                        projectHeading: "Fix issues found in firebase",
                        description: "Amazing person with amazing skills",
                        commentDate: "March 12 2023",
                        rated: 5,
                        price: 7500,
                    },
                    {
                        projectHeading: "Unity Developer",
                        description: "Great to work with. Has deep knowledge in Unity and is committed to putting out high quality code while working efficiently. Maintained good communication throughout the project, and met all requirements successfully ",
                        commentDate: "April 02 2022",
                        rated: 5,
                        price: 8000,
                    },

                ],
                profile: [
                    'https://www.upwork.com/att/download/portfolio/persons/uid/650319826375020544/profile/projects/files/f5cdb152-abe3-4143-a559-20f89a61d6ab',
                    'https://www.upwork.com/att/download/portfolio/persons/uid/650319826375020544/profile/projects/files/92fb0dac-0810-47a8-9414-872f358467ac',
                    'https://www.upwork.com/att/download/portfolio/persons/uid/650319826375020544/profile/projects/files/953678690184065024',
                ],
            }
        ],
        comments: [
            {
                Heading: "Game coding - create PBR maps and UV mapping from image",
                title: "As a technical artist, Domonkos is highly skilled, at both the tech and communication sides. He has played an important role in our growing team, for a number of challenging projects. He also offered highly valuable advices in approaching product development. I definetely want to work with him again in upcoming Unity projects",
                date: "March 09, 2023 11:00 AM",
                rated: 4,
            },
            {
                Heading: "Looking for a senior Unity developer for educational games",
                title: "Domonkos is a great Unity developer. He knows his stuff. Great communication too.",
                date: "March 09, 2023 11:00 AM",
                rated: 5,
            }, {
                Heading: "Fix issues found in firebase",
                title: "Amazing person with amazing skills",
                date: "March 09, 2023 11:00 AM",
                rated: 4,
            },
            {
                Heading: "Unity Developer",
                title: "Great to work with. Has deep knowledge in Unity and is committed to putting out high quality code while working efficiently. Maintained good communication throughout the project, and met all requirements successfully",
                date: "March 09, 2023 11:00 AM",
                rated: 5,
            },
        ],
        specialization: ["Animation", "3D", "Expert Unity"],
        projectsThumbs: [
            'https://www.upwork.com/att/download/portfolio/persons/uid/650319826375020544/profile/projects/files/f5cdb152-abe3-4143-a559-20f89a61d6ab',
            'https://www.upwork.com/att/download/portfolio/persons/uid/650319826375020544/profile/projects/files/92fb0dac-0810-47a8-9414-872f358467ac',
            'https://www.upwork.com/att/download/portfolio/persons/uid/650319826375020544/profile/projects/files/953678690184065024',
        ],
    },
    // finish6 
    {
        firstName: 'Umar ',
        mainCategory: 'Illustration',
        proTallent: false,
        availableToWork: true,
        lastName: ' .B',
        hourlyRate: 98,
        avatar: "https://www.upwork.com/profile-portraits/c1QAd-sSC3s6b36s3SfyztFIBLBAF_UZOwKUWpIdht351wGIdHzx2exaZZfQQhyFpG",
        verified: true,
        description: 'Unity Development | 2D / 3D / PC / Android / iOS / WebGL   ',
        category: "interfaces",
        jobs: {
            completed: 102,
            cancelled: 7,
            inProgress: 2
        },
        revneue: 200000,
        services: [
            {
                _id: 's_1',
                title: "Expert Unity Developer ",
                description: "Unity Development expert with 12+ years of experience, specializing in NFT blockchain games using CryptoCurrency wallet with excellent skills in Software Architecture for Large/Medium Games, Core Game Development, and Backend-Frontend interaction. 🔥TOP FIVE HIGHEST RATED Unity and HIGHEST EARNING (158,000+ USD)My experience as a Unity Developer (Versions 5.3.2 - 2021) is extensive and diverse, I methodically identify the project requirements, and decide on the best architecture using a vast variety of techniques and strategies. I have solved numerous show-stopping performance problems, as well as often re-engineered immensely complex designs and code, providing significantly improved performance on handheld devices and providing an overall better gaming experience. As an Expert Unity Developer, I possess an innate ability to engineer games employing AAA Industry Standard Best Practices and to design mutable and modular code/systems resulting in decoupled components interacting with each other fluidly - these are totally Reusable ♻️, totally Scalable ⚖️ and totally Beautiful ✨",

                comments: [
                    {
                        projectHeading: "Publish Unity/Firebase game to iOS and Google App Store",
                        description: "Very professional and communicative. It's a pleasure working with Umar and his team. I can highly recommend them",
                        commentDate: "March 12 2023",
                        rated: 5,
                        price: 2500,
                    },
                    {
                        projectHeading: "Accessible Chess Game",
                        description: "Umar is a wizard. Even if the specs aren't that detailed, he will break down the tasks and deliver every time. Personal favorite: The  when he gives that, you can be sure a feature is stable! Quick to understand code. Quick to ask the right questions. 11/10",
                        commentDate: "April 02 2022",
                        rated: 4.5,
                        price: 4000,
                    }, {
                        projectHeading: "Upgrading an existing Unity 2018 based app to Unity 2020",
                        description: "Amazing person with amazing skills",
                        commentDate: "March 12 2023",
                        rated: 5,
                        price: 7500,
                    },
                    {
                        projectHeading: "Developer for setting up IAP, Ads and publishing",
                        description: "This developer is the best and most honest of the many developers I have ever seen. He did his best to fix parts that had been spoiled by an agency in the past. Although this follow-up development is quite inconvenient, he got the job done with integrity and perfection. Work was fast, and there was no problem with communication. The period of working with him was always looking forward to and a pleasant experience. I would like to continue working with him. ",
                        commentDate: "April 02 2022",
                        rated: 5,
                        price: 8000,
                    },

                ],
                profile: [
                    'https://www.upwork.com/att/download/portfolio/persons/uid/650319826375020544/profile/projects/files/f5cdb152-abe3-4143-a559-20f89a61d6ab',
                    'https://www.upwork.com/att/download/portfolio/persons/uid/650319826375020544/profile/projects/files/92fb0dac-0810-47a8-9414-872f358467ac',
                    'https://www.upwork.com/att/download/portfolio/persons/uid/650319826375020544/profile/projects/files/953678690184065024',
                ],
            }
        ],
        comments: [
            {
                Heading: "Publish Unity/Firebase game to iOS and Google App Store",
                title: "As a technical artist, Domonkos is highly skilled, at both the tech and communication sides. He has played an important role in our growing team, for a number of challenging projects. He also offered highly valuable advices in approaching product development. I definetely want to work with him again in upcoming Unity projects",
                date: "March 09, 2023 11:00 AM",
                rated: 4,
            },
            {
                Heading: "Accessible Chess Game",
                title: "Umar is a wizard. Even if the specs aren't that detailed, he will break down the tasks and deliver every time. Personal favorite: The  when he gives that, you can be sure a feature is stable! Quick to understand code. Quick to ask the right questions. 11/10",
                date: "March 09, 2023 11:00 AM",
                rated: 5,
            }, {
                Heading: "Upgrading an existing Unity 2018 based app to Unity 2020",
                title: "Amazing person with amazing skills",
                date: "March 09, 2023 11:00 AM",
                rated: 4,
            },
            {
                Heading: "Developer for setting up IAP, Ads and publishing",
                title: "This developer is the best and most honest of the many developers I have ever seen. He did his best to fix parts that had been spoiled by an agency in the past. Although this follow-up development is quite inconvenient, he got the job done with integrity and perfection. Work was fast, and there was no problem with communication. The period of working with him was always looking forward to and a pleasant experience. I would like to continue working with him",
                date: "March 09, 2023 11:00 AM",
                rated: 5,
            },
        ],
        specialization: ["Animation", "3D", "Expert Unity"],
        projectsThumbs: [
            'https://www.upwork.com/att/download/portfolio/persons/uid/650319826375020544/profile/projects/files/f5cdb152-abe3-4143-a559-20f89a61d6ab',
            'https://www.upwork.com/att/download/portfolio/persons/uid/650319826375020544/profile/projects/files/92fb0dac-0810-47a8-9414-872f358467ac',
            'https://www.upwork.com/att/download/portfolio/persons/uid/650319826375020544/profile/projects/files/953678690184065024',
        ],
    },







    // Graphics

    {
        firstName: 'Hammad',
        mainCategory: 'Graphics',
        proTallent: false,
        availableToWork: true,
        lastName: 'Shafiq',
        hourlyRate: 95,
        avatar: 'https://avatars.githubusercontent.com/u/42932321?v=4',
        verified: true,
        description: 'Experienced Full Stack Web Developer adept at building apps from scratch. ',
        category: "Full Stack developer",
        jobs: {
            completed: 102,
            cancelled: 7,
            inProgress: 2
        },
        revneue: 234000,
        services: [
            {
                _id: 's_1',
                title: " i will Your Full Stack Developer React || Node js ",
                description: "",
                comments: [
                    {
                        projectHeading: "Post Textile ",
                        description: "PoshTextiles American base company i built the logistics management system akin to Microsoft Business Dynamics. As a Full Stack Developer, I played a key role in utilizing JavaScript extensively, accounting for 99.9% of the project. Leveraging Microsoft APIs, I seamlessly integrated data to facilitate the global export of cloth by PoshTextiles. My system efficiently manages warehouse operations, encompassing shipment creation, checking, picking, packing, and shipping. By integrating FedEx, UPS, and STAMP shipping company APIs, I streamlined the shipping process. The system includes live address validation and supports printing of labels. Additionally, I implemented payment integration between two companies involved in the process.",
                        commentDate: "March 12 2023",
                        rated: 5,
                        price: 23000,
                    },
                    {
                        projectHeading: " Digtal Flow ",
                        description: "Digital Media based in New York .From frontend to Full Stack Project Lead, my journey in digital media has been a captivating adventure. I started by crafting visually appealing interfaces and grew into seamlessly integrating frontend and backend technologies. As a team member and leader, I delivered exceptional results for clients, combining cutting-edge technologies and fostering innovation. With unwavering commitment and a passion for excellence, I continue to push boundaries and create captivating digital experiences.",
                        commentDate: "April 02 2022",
                        rated: 5,
                        price: 60000,
                    },

                ],
                profile: [
                    'https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/293240721/original/6891870e69ea2793c44105520881aa0556da1f9b.png',
                    'https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/250604452/original/789892c3543a3199c6f38b416ca1f42bf92a5039.png',
                    'https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/267148774/original/ddf545f98b847c3cd66c9afe1cf0b680148237f1.png',
                ],
            }
        ],
        comments: [
            {
                Heading: "Post Textile App",
                title: "Muhammad Hamad is working on our logistics management system as Full stack developer . He make custom frontend app pure in JavaScript now is working on backend that will be soon live. He always full fill his commitment . I always paid him advance . I never realized I did mistake 100% recommended",
                date: "Jul 03, 2023 12:00 AM",
                rated: 5,
            },
            {
                Heading: "stock",
                title: "I've had the pleasure of working with Muhammad, as remote Full Stack developer, for the past three years. He consistently displays professionalism, excellent coding skills, effective communication, and honesty. Muhammad's passion for his work goes beyond financial motivations, driving him to strive for perfection.Highly recommended",
                date: "Jan 14, 2022 11:00 AM",
                rated: 5,
            },
        ],
        specialization: ["Full Stack devloper", "web developer", "ReactJs"],
        projectsThumbs: [
            'https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/portfolio-large-01-340x250.jpg',
            'https://fiverr-res.cloudinary.com/images/t_medium7,q_auto,f_auto,q_auto,f_auto/gigs/150311157/original/b2cffba150592f0c20aece34ffefa82869c3237d/develop-a-web-app-with-react-js-node-js.jpeg',
            'https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/portfolio-large-03-340x250.jpg',
        ],
        commentCount: function () {
            return this.comments.length
        },
        ratingCount: function () {
            return this.comments.reduce((a, b) => a + b.rated, 0) / this.commentCount()
        },
    },
    // 1 finish 
    {
        firstName: 'Clive ',
        mainCategory: 'Graphics',
        proTallent: false,
        availableToWork: true,
        lastName: 'B',
        hourlyRate: 78,
        avatar: "https://www.upwork.com/profile-portraits/c1vLZ8iVLN2bcmwEFyXQEVnwpSYjzef47L2ZVaXcTUc_IeTA8Pfn-ZxYt4z2qJO5j7",
        verified: true,
        description: 'With over 3 years of industry experience, I am a seasoned UI/UX designer who specializes in crafting clean, modern interfaces ',
        category: "Design",
        jobs: {
            completed: 78,
            cancelled: 3,
            inProgress: 7
        },
        revneue: 78000,
        services: [
            {
                _id: 's_1',
                title: "I will do UIUX for you mobile application or website in figma or xdk",
                description: "Are you looking to elevate your digital presence with captivating and intuitive interfaces? Look no further! With over 5 years of industry experience, I am a seasoned UI/UX designer who specializes in crafting clean, modern interfaces that leave a lasting impression. I have a passion for creating designs that seamlessly blend aesthetics with functionality, ensuring a delightful user experience at every interaction. By staying up-to-date with the latest design trends and best practices, I bring fresh and innovative ideas to the table, breathing life into your brand and product. From concept to completion, I meticulously analyze user needs and behavior to develop visually stunning interfaces that are both visually appealing and easy to navigate. Through a user-centered design approach, I strive to understand your target audience and align their goals with your business objectives, resulting in a harmonious fusion of form and function. With a keen eye for detail, I meticulously craft each element, from typography and color palettes to iconography and layout, creating a cohesive and immersive experience that captivates users and enhances their engagement. I believe in the power of simplicity and elegance, ensuring that every interface I design not only looks great but also functions flawlessly across devices and platforms. Collaboration is at the heart of my process. I work closely with clients, stakeholders, and development teams, valuing open communication and feedback to ensure that your vision is translated into a remarkable reality. I am proficient in industry-standard design tools and methodologies, allowing me to deliver high-quality, pixel-perfect designs on time and within budget. If you're ready to take your digital presence to new heights and leave a lasting impact on your audience, let's connect. Together, we can create an attractive and user-centric interface that sets you apart from the competition and drives meaningful results.",
                comments: [
                    {
                        projectHeading: "Need Graphic Designer for Tech Company Ads and Banners",
                        description: "Clive really did a magnificent job in hearing and understanding my vision and bringing it to life. This website was already in progress which can be a barrier to some designers, as many of the proposals I received wanted to completely scrap my ideas and start fresh. Clive took what I already had and enhanced it in so many ways, while still adding his own personal design touches. He has such an eye for seamless and elegant design, it makes the viewer feel your website rather than just viewing it. Amazing work.",
                        commentDate: "March 12 2023",
                        rated: 5,
                        price: 4500,
                    },
                    {
                        projectHeading: "Ongoing Graphic Design Support",
                        description: "2nd project down with us, and he has been fantastic for building out our landing pages",
                        commentDate: "April 02 2022",
                        rated: 5,
                        price: 3700,
                    }, {
                        projectHeading: "Design Four Startup Web UX/UI Screens and Logo",
                        description: "Really great work from civil. Her colour balances are great, and communication and responsiveness on point. Will be working with her again for sure",
                        commentDate: "March 12 2023",
                        rated: 5,
                        price: 234,
                    },
                    {
                        projectHeading: "Designer to build direct-to-consumer banner ads in Bannersnack",
                        description: "Deep understanding of the aesthetics, pacing, and legibility required for digital marketing design. Clive exceeds expectations and is skilled in clean & efficient motion graphics",
                        commentDate: "April 02 2022",
                        rated: 4.6,
                        price: 1200,
                    },

                ],
                profile: [
                    'https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/portfolio-large-04-340x250.jpg',
                    'https://www.upwork.com/att/download/portfolio/persons/uid/1173403296888061952/profile/projects/files/1253575602255597568',
                    'https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/portfolio-large-06-340x250.jpg',
                ],
            }
        ],
        comments: [
            {
                Heading: "Ongoing Graphic Design Support",
                title: "I highly recommend Clive for any graphic design needs! He provided exceptional support for our email designs, graphic design templates, and brand development. His attention to detail and prompt communication made the design process seamless. His expertise and responsiveness truly exceeded our expectation",
                date: "Feb 09, 2021 10:00 PM",
                rated: 5,
            },
            {
                Heading: "Design Four Startup Web UX/UI Screens and Logo",
                title: "Really great work from civil. Her colour balances are great, and communication and responsiveness on point. Will be working with her again for sure",
                date: "July  03, 2022 8:00 AM",
                rated: 5,
            }, {
                Heading: "Need Graphic Designer for Tech Company Ads and Banners",
                title: "Clive really did a magnificent job in hearing and understanding my vision and bringing it to life. This website was already in progress which can be a barrier to some designers, as many of the proposals I received wanted to completely scrap my ideas and start fresh. Clive took what I already had and enhanced it in so many ways, while still adding his own personal design touches. He has such an eye for seamless and elegant design, it makes the viewer feel your website rather than just viewing it. Amazing work.",
                date: "November  09, 2023 08:00 AM",
                rated: 4,
            },
            {
                Heading: "Designer to build direct-to-consumer banner ads in Bannersnack",
                title: "Deep understanding of the aesthetics, pacing, and legibility required for digital marketing design. Clive exceeds expectations and is skilled in clean & efficient motion graphics",
                date: "March 09, 2023 11:00 AM",
                rated: 4.6,
            },
        ],
        specialization: ["Ux Designer", "Expert Adobe", "Graphics"],
        projectsThumbs: [
            'https://www.upwork.com/att/download/portfolio/persons/uid/1173403296888061952/profile/projects/files/1182948041536147456',
            'https://www.upwork.com/att/download/portfolio/persons/uid/1173403296888061952/profile/projects/files/1253575602255597568',
            'https://www.upwork.com/att/download/portfolio/persons/uid/1173403296888061952/profile/projects/files/7e75af82-e218-4ebf-a1c2-f79532618921',
        ],
    },
    // finish 2

    {
        firstName: 'Tetiana ',
        mainCategory: 'Graphics',
        proTallent: false,
        availableToWork: true,
        lastName: 'F',
        hourlyRate: 42,
        avatar: "https://www.upwork.com/profile-portraits/c11fTnFoBJwtpJYdKXH6MbigGzO65YJV9Ik_B-dT6ach09WYXFTwhUvMaVUCXmHU3v",
        verified: true,
        description: 'Web Designer with wide experience in graphic design, UI / UX and media/print design.',
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
                title: "Web designer & Graphic Designer | Elementor Develope",
                description: "Hi, there! I'm a Web Designer with wide experience in graphic design, UI / UX and media/print design. I help you connect with your ideal audience with modern, simple, and concise design and trendy ideas. For you I offer: - Optimal terms of performance of works; - Strict adherence to the terms of reference for the project; - Adaptation for mobile devices and tablets; - An individual approach to every client. For my part, I guarantee compliance with deadlines, individual approach, politeness, and pleasant cooperation. As a result, you will receive models that will be fully prepared for the work of the layout designer. Feel free to ask questions, I am always happy to chat with you.",
                comments: [
                    {
                        projectHeading: "UI/UX Designer Required",
                        description: "Really great work from Tetiana. Her colour balances are great, and communication and responsiveness on point. Will be working with her again for sure",
                        commentDate: "April 02 2022",
                        rated: 5,
                        price: 1900,
                    },
                    {
                        projectHeading: "Top notch UI/UX designer needed",
                        description: "Tetiana is a nice person to work with.",
                        commentDate: "March 12 2023",
                        rated: 5,
                        price: 900,
                    },
                    {
                        projectHeading: "Design and Development website Figma + Elementor",
                        description: "Tetiana did an excellent job with a quick turn around.",
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
                Heading: "UI/UX Designer Required",
                title: "Really great work from Tetiana. Her colour balances are great, and communication and responsiveness on point. Will be working with her again for sure",
                date: "March 09, 2023 11:00 AM",
                rated: 4,
            },
            {
                Heading: "Top notch UI/UX designer needed",
                title: "Tetiana is a nice person to work with",
                date: "March 09, 2023 11:00 AM",
                rated: 5,
            }, {
                Heading: "Design and Development website Figma + Elementor",
                title: "Tetiana did an excellent job with a quick turn around.",
                date: "March 09, 2023 11:00 AM",
                rated: 4,
            },
        ],
        specialization: ["web Designer", "Ux Designer", "Graphics"],
        projectsThumbs: [
            'https://rainbowit.net/themes/inbio/wp-content/uploads/2021/09/marketing-young-cute-business-lady-striped-shirt-office-showing-raising-results-1-340x250.jpg',
            'https://rainbowit.net/themes/inbio/wp-content/uploads/2021/09/pretty-curly-young-woman-writing-notes-startup-project-340x250.jpg',
            'https://rainbowit.net/themes/inbio/wp-content/uploads/2021/09/road-sign-direction-perforated-paper-arrow-340x250.jpg',
        ],
    },

    // finsih 3
    {
        firstName: 'Ruslan ',
        mainCategory: 'Graphics',
        proTallent: false,
        availableToWork: true,
        lastName: 'Morris',
        hourlyRate: 102,
        avatar: "https://www.upwork.com/profile-portraits/c15smPrEC9DIIcRV8Dznmo4uJfF4UxNogezl5phAKMKGV2JdOhoob9EUukFtElSFuM",
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
                title: "I will be your Frontend Developer in React js ",
                description: "Experienced web developer with higher technical education with a degree in Information Management Systems and Technologies. I have over 5 years of commercial experience in the front-end development area and 2 years in back-end development and I am always looking to expand my skillset and grow. My main focus is Web applications, UI/UX, sites layout, and landing pages development with an emphasis to use the React.js library. Also in my job, I use WordPress CMS. Career highlights: ✅ Web developer with over 7 years of professional experience in developing and supporting various commercial websites and applications. ✅ Good understanding of modern web development technologies, approaches, and the industry in general. ✅ Have experience working in large teams and with complex products. ✅ Have developed dozens of websites and landing pages, that attract hundreds of new users and help my clients grow their business.  Strong communication skills",
                comments: [
                    {
                        projectHeading: "Top-Notch React.js Developer",
                        description: "Ruslan is a great value addition to any front-end team. He has got leadership and a great understanding and knowledge of front-end development. We are all thankful for his contribution to our project. Will work with him always and will always recommend him. Thank you Ruslan.. it was such a pleasure working with you.",
                        commentDate: "April 02 2022",
                        rated: 5,
                        price: 15212,
                    },
                    {
                        projectHeading: "front-end developer",
                        description: "Very deadline oriented person. Provide pixel perfect coding in very short time period.This was a test paid task. We are going to hire Ruslan for our next project.",
                        commentDate: "March 12 2023",
                        rated: 4.8,
                        price: 23400,
                    },
                    {
                        projectHeading: "Set Selection on Textarea using Javascript",
                        description: "Ruslan was able to complete the job as specified. Good freelancer",
                        commentDate: "April 02 2022",
                        rated: 4.7,
                        price: 2489,
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
                Heading: "Top-Notch React.js Developer",
                title: "Ruslan is a great value addition to any front-end team. He has got leadership and a great understanding and knowledge of front-end development. We are all thankful for his contribution to our project. Will work with him always and will always recommend him. Thank you Ruslan.. it was such a pleasure working with you",
                date: "March 09, 2023 11:00 AM",
                rated: 4,
            },
            {
                Heading: "front-end developer",
                title: "Very deadline oriented person. Provide pixel perfect coding in very short time period.This was a test paid task. We are going to hire Ruslan for our next project..",
                date: "March 09, 2023 11:00 AM",
                rated: 5,
            }, {
                Heading: "Set Selection on Textarea using Javascript",
                title: "Ruslan was able to complete the job as specified. Good freelancer",
                date: "March 09, 2023 11:00 AM",
                rated: 4,
            },
        ],
        specialization: ["React JS", "Web Developer", "web Designer ",],
        projectsThumbs: [
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWBG38F-lq5h1QfvSeC1TWMhAhHy0Q3v9CRw&usqp=CAU',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpJX0Jo6LD9BdP5QKGsmhRPry5lRCOwU8NHg&usqp=CAU',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjkt6-gO3HTEZZaMTQR37i0eTLSfxUbdK6AQ&usqp=CAU',

        ],
    },
    // finsh4 
    {
        firstName: 'Sebastian',
        mainCategory: 'Graphics',
        proTallent: false,
        availableToWork: true,
        lastName: 'Bells',
        hourlyRate: 98,
        avatar: "https://www.upwork.com/profile-portraits/c1i5Qwe91IMwQxFIfH2ynJ5QIsM4tJeBN8SNqNLV2vTR6kvXVPN65BAkW7w2BY0-kH",
        verified: true,
        description: ' i am  Full Stack developer  with experties in Frontend and backend Technalogy',
        category: "interfaces",
        jobs: {
            completed: 102,
            cancelled: 7,
            inProgress: 2
        },
        revneue: 78000,
        services: [
            {
                _id: 's_1',
                title: "I will  be Full Stack Developer ",
                description: "Welcome to my profile, My name is Sebastian, and I'm a professional software engineer with three years of experience, I have worked on many interesting projects with both big and small companies, and I have helped local businesses to automate their services during the pandemic. As a lead developer, I've mentored interns, and taught them how to turn their projects into well-tested and easily maintainable software. I am passionate about learning as much as I can , even during my free time and sharing my experience with others. I have worked with many frameworks/libraries but I discovered React to be my favourite. On server side I love using modern technologies like GraphQL, Docker, Varnish and etc",

                comments: [
                    {
                        projectHeading: "Fullstack Javascript Developer",
                        description: "It was a pleasure to work with Sebastian. He demonstrated excellent communication skills throughout the project, and his coding skills were top-notch. He delivered high-quality work on time and was always responsive to our feedback. We highly recommend Sebastian and look forward to working with him again in the future",
                        commentDate: "March 12 2023",
                        rated: 5,
                        price: 2500,
                    },
                    {
                        projectHeading: "Need a quick fix on my final project",
                        description: "Quick, Easly Explained. A well put together gentleman ready to assist beginners. Totally recommend! Saved me from failing my exam",
                        commentDate: "April 02 2022",
                        rated: 4.5,
                        price: 4000,
                    }, {
                        projectHeading: "Expert React Developers- Fulltime - Long Term",
                        description: "great work and amazing outcome",
                        commentDate: "March 12 2023",
                        rated: 5,
                        price: 7500,
                    },
                    {
                        projectHeading: "ReactJS Developer who wants to build the next big thing",
                        description: "Thinks beyond the task, great team player, super skilled developer and always open to learning something new. You simply can't go wrong with this guy",
                        commentDate: "April 02 2022",
                        rated: 5,
                        price: 8000,
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
        specialization: ["Full Stack developer", "Node JS", "React Js"],
        projectsThumbs: [
            'https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/portfolio-large-04-340x250.jpg',
            'https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/portfolio-large-05-340x250.jpg',
            'https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/portfolio-large-06-340x250.jpg',
        ],
    },

    //finish5

    {
        firstName: 'Domonkos ',
        mainCategory: 'Graphics',
        proTallent: false,
        availableToWork: true,
        lastName: 'Bells',
        hourlyRate: 98,
        avatar: "https://www.upwork.com/profile-portraits/c13IjCH8alEKNMH_fnm_Dj3Delfzl469xVBQjWX30ZsNEY8IYI8WcPnNkj746t-Iwr",
        verified: true,
        description: 'Unity Specialist and C# Expert for 10+ years in the game and software industry.   ',
        category: "interfaces",
        jobs: {
            completed: 102,
            cancelled: 7,
            inProgress: 2
        },
        revneue: 56000,
        services: [
            {
                _id: 's_1',
                title: "Expert Unity Developer ",
                description: "Hello! Unity Specialist and C# Expert for 10+ years in the game and software industry. My goal is to create outstanding product for you the way you've imagined! Contact me if you are looking for: -Reliable and loyal developer -Clean, stable and usable product -Experienced Development Lead or Developer -Producer, Project Manager or Consultant I'm best at: -Project management from ground up -C# and Unity development and workflow -Game play Development -Graphics URP/HDRP/Deferred/Forward (lightning, shaders, post process effects) -Optimization (code and assets too) -Bug fixing and Debugging even in live products as firefighter -Time and resource management (leading teams and providing reliable schedule) -Networking solutions -Documentation My experiences are coming from working with multiple high profile companies, with project types ranging from PC Steam Games, AR and VR Games, Business to Business Applications. Have a nice day and Looking forward working with you!",

                comments: [
                    {
                        projectHeading: "Game coding - create PBR maps and UV mapping from image",
                        description: "As a technical artist, Domonkos is highly skilled, at both the tech and communication sides. He has played an important role in our growing team, for a number of challenging projects. He also offered highly valuable advices in approaching product development. I definetely want to work with him again in upcoming Unity projects",
                        commentDate: "March 12 2023",
                        rated: 5,
                        price: 2500,
                    },
                    {
                        projectHeading: "Looking for a senior Unity developer for educational games",
                        description: "Domonkos is a great Unity developer. He knows his stuff. Great communication too",
                        commentDate: "April 02 2022",
                        rated: 4.5,
                        price: 4000,
                    }, {
                        projectHeading: "Fix issues found in firebase",
                        description: "Amazing person with amazing skills",
                        commentDate: "March 12 2023",
                        rated: 5,
                        price: 7500,
                    },
                    {
                        projectHeading: "Unity Developer",
                        description: "Great to work with. Has deep knowledge in Unity and is committed to putting out high quality code while working efficiently. Maintained good communication throughout the project, and met all requirements successfully ",
                        commentDate: "April 02 2022",
                        rated: 5,
                        price: 8000,
                    },

                ],
                profile: [
                    'https://www.upwork.com/att/download/portfolio/persons/uid/650319826375020544/profile/projects/files/f5cdb152-abe3-4143-a559-20f89a61d6ab',
                    'https://www.upwork.com/att/download/portfolio/persons/uid/650319826375020544/profile/projects/files/92fb0dac-0810-47a8-9414-872f358467ac',
                    'https://www.upwork.com/att/download/portfolio/persons/uid/650319826375020544/profile/projects/files/953678690184065024',
                ],
            }
        ],
        comments: [
            {
                Heading: "Game coding - create PBR maps and UV mapping from image",
                title: "As a technical artist, Domonkos is highly skilled, at both the tech and communication sides. He has played an important role in our growing team, for a number of challenging projects. He also offered highly valuable advices in approaching product development. I definetely want to work with him again in upcoming Unity projects",
                date: "March 09, 2023 11:00 AM",
                rated: 4,
            },
            {
                Heading: "Looking for a senior Unity developer for educational games",
                title: "Domonkos is a great Unity developer. He knows his stuff. Great communication too.",
                date: "March 09, 2023 11:00 AM",
                rated: 5,
            }, {
                Heading: "Fix issues found in firebase",
                title: "Amazing person with amazing skills",
                date: "March 09, 2023 11:00 AM",
                rated: 4,
            },
            {
                Heading: "Unity Developer",
                title: "Great to work with. Has deep knowledge in Unity and is committed to putting out high quality code while working efficiently. Maintained good communication throughout the project, and met all requirements successfully",
                date: "March 09, 2023 11:00 AM",
                rated: 5,
            },
        ],
        specialization: ["Animation", "3D", "Expert Unity"],
        projectsThumbs: [
            'https://www.upwork.com/att/download/portfolio/persons/uid/650319826375020544/profile/projects/files/f5cdb152-abe3-4143-a559-20f89a61d6ab',
            'https://www.upwork.com/att/download/portfolio/persons/uid/650319826375020544/profile/projects/files/92fb0dac-0810-47a8-9414-872f358467ac',
            'https://www.upwork.com/att/download/portfolio/persons/uid/650319826375020544/profile/projects/files/953678690184065024',
        ],
    },
    // finish6 
    {
        firstName: 'Umar ',
        mainCategory: 'Graphics',
        proTallent: false,
        availableToWork: true,
        lastName: ' .B',
        hourlyRate: 98,
        avatar: "https://www.upwork.com/profile-portraits/c1QAd-sSC3s6b36s3SfyztFIBLBAF_UZOwKUWpIdht351wGIdHzx2exaZZfQQhyFpG",
        verified: true,
        description: 'Unity Development | 2D / 3D / PC / Android / iOS / WebGL   ',
        category: "interfaces",
        jobs: {
            completed: 102,
            cancelled: 7,
            inProgress: 2
        },
        revneue: 200000,
        services: [
            {
                _id: 's_1',
                title: "Expert Unity Developer ",
                description: "Unity Development expert with 12+ years of experience, specializing in NFT blockchain games using CryptoCurrency wallet with excellent skills in Software Architecture for Large/Medium Games, Core Game Development, and Backend-Frontend interaction. 🔥TOP FIVE HIGHEST RATED Unity and HIGHEST EARNING (158,000+ USD)My experience as a Unity Developer (Versions 5.3.2 - 2021) is extensive and diverse, I methodically identify the project requirements, and decide on the best architecture using a vast variety of techniques and strategies. I have solved numerous show-stopping performance problems, as well as often re-engineered immensely complex designs and code, providing significantly improved performance on handheld devices and providing an overall better gaming experience. As an Expert Unity Developer, I possess an innate ability to engineer games employing AAA Industry Standard Best Practices and to design mutable and modular code/systems resulting in decoupled components interacting with each other fluidly - these are totally Reusable ♻️, totally Scalable ⚖️ and totally Beautiful ✨",

                comments: [
                    {
                        projectHeading: "Publish Unity/Firebase game to iOS and Google App Store",
                        description: "Very professional and communicative. It's a pleasure working with Umar and his team. I can highly recommend them",
                        commentDate: "March 12 2023",
                        rated: 5,
                        price: 2500,
                    },
                    {
                        projectHeading: "Accessible Chess Game",
                        description: "Umar is a wizard. Even if the specs aren't that detailed, he will break down the tasks and deliver every time. Personal favorite: The  when he gives that, you can be sure a feature is stable! Quick to understand code. Quick to ask the right questions. 11/10",
                        commentDate: "April 02 2022",
                        rated: 4.5,
                        price: 4000,
                    }, {
                        projectHeading: "Upgrading an existing Unity 2018 based app to Unity 2020",
                        description: "Amazing person with amazing skills",
                        commentDate: "March 12 2023",
                        rated: 5,
                        price: 7500,
                    },
                    {
                        projectHeading: "Developer for setting up IAP, Ads and publishing",
                        description: "This developer is the best and most honest of the many developers I have ever seen. He did his best to fix parts that had been spoiled by an agency in the past. Although this follow-up development is quite inconvenient, he got the job done with integrity and perfection. Work was fast, and there was no problem with communication. The period of working with him was always looking forward to and a pleasant experience. I would like to continue working with him. ",
                        commentDate: "April 02 2022",
                        rated: 5,
                        price: 8000,
                    },

                ],
                profile: [
                    'https://www.upwork.com/att/download/portfolio/persons/uid/650319826375020544/profile/projects/files/f5cdb152-abe3-4143-a559-20f89a61d6ab',
                    'https://www.upwork.com/att/download/portfolio/persons/uid/650319826375020544/profile/projects/files/92fb0dac-0810-47a8-9414-872f358467ac',
                    'https://www.upwork.com/att/download/portfolio/persons/uid/650319826375020544/profile/projects/files/953678690184065024',
                ],
            }
        ],
        comments: [
            {
                Heading: "Publish Unity/Firebase game to iOS and Google App Store",
                title: "As a technical artist, Domonkos is highly skilled, at both the tech and communication sides. He has played an important role in our growing team, for a number of challenging projects. He also offered highly valuable advices in approaching product development. I definetely want to work with him again in upcoming Unity projects",
                date: "March 09, 2023 11:00 AM",
                rated: 4,
            },
            {
                Heading: "Accessible Chess Game",
                title: "Umar is a wizard. Even if the specs aren't that detailed, he will break down the tasks and deliver every time. Personal favorite: The  when he gives that, you can be sure a feature is stable! Quick to understand code. Quick to ask the right questions. 11/10",
                date: "March 09, 2023 11:00 AM",
                rated: 5,
            }, {
                Heading: "Upgrading an existing Unity 2018 based app to Unity 2020",
                title: "Amazing person with amazing skills",
                date: "March 09, 2023 11:00 AM",
                rated: 4,
            },
            {
                Heading: "Developer for setting up IAP, Ads and publishing",
                title: "This developer is the best and most honest of the many developers I have ever seen. He did his best to fix parts that had been spoiled by an agency in the past. Although this follow-up development is quite inconvenient, he got the job done with integrity and perfection. Work was fast, and there was no problem with communication. The period of working with him was always looking forward to and a pleasant experience. I would like to continue working with him",
                date: "March 09, 2023 11:00 AM",
                rated: 5,
            },
        ],
        specialization: ["Animation", "3D", "Expert Unity"],
        projectsThumbs: [
            'https://www.upwork.com/att/download/portfolio/persons/uid/650319826375020544/profile/projects/files/f5cdb152-abe3-4143-a559-20f89a61d6ab',
            'https://www.upwork.com/att/download/portfolio/persons/uid/650319826375020544/profile/projects/files/92fb0dac-0810-47a8-9414-872f358467ac',
            'https://www.upwork.com/att/download/portfolio/persons/uid/650319826375020544/profile/projects/files/953678690184065024',
        ],
    },











    // 3D

    {
        firstName: 'Hammad',
        mainCategory: '3D',
        proTallent: false,
        availableToWork: true,
        lastName: 'Shafiq',
        hourlyRate: 95,
        avatar: 'https://avatars.githubusercontent.com/u/42932321?v=4',
        verified: true,
        description: 'Experienced Full Stack Web Developer adept at building apps from scratch. ',
        category: "Full Stack developer",
        jobs: {
            completed: 102,
            cancelled: 7,
            inProgress: 2
        },
        revneue: 234000,
        services: [
            {
                _id: 's_1',
                title: " i will Your Full Stack Developer React || Node js ",
                description: "",
                comments: [
                    {
                        projectHeading: "Post Textile ",
                        description: "PoshTextiles American base company i built the logistics management system akin to Microsoft Business Dynamics. As a Full Stack Developer, I played a key role in utilizing JavaScript extensively, accounting for 99.9% of the project. Leveraging Microsoft APIs, I seamlessly integrated data to facilitate the global export of cloth by PoshTextiles. My system efficiently manages warehouse operations, encompassing shipment creation, checking, picking, packing, and shipping. By integrating FedEx, UPS, and STAMP shipping company APIs, I streamlined the shipping process. The system includes live address validation and supports printing of labels. Additionally, I implemented payment integration between two companies involved in the process.",
                        commentDate: "March 12 2023",
                        rated: 5,
                        price: 23000,
                    },
                    {
                        projectHeading: " Digtal Flow ",
                        description: "Digital Media based in New York .From frontend to Full Stack Project Lead, my journey in digital media has been a captivating adventure. I started by crafting visually appealing interfaces and grew into seamlessly integrating frontend and backend technologies. As a team member and leader, I delivered exceptional results for clients, combining cutting-edge technologies and fostering innovation. With unwavering commitment and a passion for excellence, I continue to push boundaries and create captivating digital experiences.",
                        commentDate: "April 02 2022",
                        rated: 5,
                        price: 60000,
                    },

                ],
                profile: [
                    'https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/293240721/original/6891870e69ea2793c44105520881aa0556da1f9b.png',
                    'https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/250604452/original/789892c3543a3199c6f38b416ca1f42bf92a5039.png',
                    'https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/267148774/original/ddf545f98b847c3cd66c9afe1cf0b680148237f1.png',
                ],
            }
        ],
        comments: [
            {
                Heading: "Post Textile App",
                title: "Muhammad Hamad is working on our logistics management system as Full stack developer . He make custom frontend app pure in JavaScript now is working on backend that will be soon live. He always full fill his commitment . I always paid him advance . I never realized I did mistake 100% recommended",
                date: "Jul 03, 2023 12:00 AM",
                rated: 5,
            },
            {
                Heading: "stock",
                title: "I've had the pleasure of working with Muhammad, as remote Full Stack developer, for the past three years. He consistently displays professionalism, excellent coding skills, effective communication, and honesty. Muhammad's passion for his work goes beyond financial motivations, driving him to strive for perfection.Highly recommended",
                date: "Jan 14, 2022 11:00 AM",
                rated: 5,
            },
        ],
        specialization: ["Full Stack devloper", "web developer", "ReactJs"],
        projectsThumbs: [
            'https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/portfolio-large-01-340x250.jpg',
            'https://fiverr-res.cloudinary.com/images/t_medium7,q_auto,f_auto,q_auto,f_auto/gigs/150311157/original/b2cffba150592f0c20aece34ffefa82869c3237d/develop-a-web-app-with-react-js-node-js.jpeg',
            'https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/portfolio-large-03-340x250.jpg',
        ],
        commentCount: function () {
            return this.comments.length
        },
        ratingCount: function () {
            return this.comments.reduce((a, b) => a + b.rated, 0) / this.commentCount()
        },
    },
    // 1 finish 
    {
        firstName: 'Clive ',
        mainCategory: '3D',
        proTallent: false,
        availableToWork: true,
        lastName: 'B',
        hourlyRate: 78,
        avatar: "https://www.upwork.com/profile-portraits/c1vLZ8iVLN2bcmwEFyXQEVnwpSYjzef47L2ZVaXcTUc_IeTA8Pfn-ZxYt4z2qJO5j7",
        verified: true,
        description: 'With over 3 years of industry experience, I am a seasoned UI/UX designer who specializes in crafting clean, modern interfaces ',
        category: "Design",
        jobs: {
            completed: 78,
            cancelled: 3,
            inProgress: 7
        },
        revneue: 78000,
        services: [
            {
                _id: 's_1',
                title: "I will do UIUX for you mobile application or website in figma or xdk",
                description: "Are you looking to elevate your digital presence with captivating and intuitive interfaces? Look no further! With over 5 years of industry experience, I am a seasoned UI/UX designer who specializes in crafting clean, modern interfaces that leave a lasting impression. I have a passion for creating designs that seamlessly blend aesthetics with functionality, ensuring a delightful user experience at every interaction. By staying up-to-date with the latest design trends and best practices, I bring fresh and innovative ideas to the table, breathing life into your brand and product. From concept to completion, I meticulously analyze user needs and behavior to develop visually stunning interfaces that are both visually appealing and easy to navigate. Through a user-centered design approach, I strive to understand your target audience and align their goals with your business objectives, resulting in a harmonious fusion of form and function. With a keen eye for detail, I meticulously craft each element, from typography and color palettes to iconography and layout, creating a cohesive and immersive experience that captivates users and enhances their engagement. I believe in the power of simplicity and elegance, ensuring that every interface I design not only looks great but also functions flawlessly across devices and platforms. Collaboration is at the heart of my process. I work closely with clients, stakeholders, and development teams, valuing open communication and feedback to ensure that your vision is translated into a remarkable reality. I am proficient in industry-standard design tools and methodologies, allowing me to deliver high-quality, pixel-perfect designs on time and within budget. If you're ready to take your digital presence to new heights and leave a lasting impact on your audience, let's connect. Together, we can create an attractive and user-centric interface that sets you apart from the competition and drives meaningful results.",
                comments: [
                    {
                        projectHeading: "Need Graphic Designer for Tech Company Ads and Banners",
                        description: "Clive really did a magnificent job in hearing and understanding my vision and bringing it to life. This website was already in progress which can be a barrier to some designers, as many of the proposals I received wanted to completely scrap my ideas and start fresh. Clive took what I already had and enhanced it in so many ways, while still adding his own personal design touches. He has such an eye for seamless and elegant design, it makes the viewer feel your website rather than just viewing it. Amazing work.",
                        commentDate: "March 12 2023",
                        rated: 5,
                        price: 4500,
                    },
                    {
                        projectHeading: "Ongoing Graphic Design Support",
                        description: "2nd project down with us, and he has been fantastic for building out our landing pages",
                        commentDate: "April 02 2022",
                        rated: 5,
                        price: 3700,
                    }, {
                        projectHeading: "Design Four Startup Web UX/UI Screens and Logo",
                        description: "Really great work from civil. Her colour balances are great, and communication and responsiveness on point. Will be working with her again for sure",
                        commentDate: "March 12 2023",
                        rated: 5,
                        price: 234,
                    },
                    {
                        projectHeading: "Designer to build direct-to-consumer banner ads in Bannersnack",
                        description: "Deep understanding of the aesthetics, pacing, and legibility required for digital marketing design. Clive exceeds expectations and is skilled in clean & efficient motion graphics",
                        commentDate: "April 02 2022",
                        rated: 4.6,
                        price: 1200,
                    },

                ],
                profile: [
                    'https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/portfolio-large-04-340x250.jpg',
                    'https://www.upwork.com/att/download/portfolio/persons/uid/1173403296888061952/profile/projects/files/1253575602255597568',
                    'https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/portfolio-large-06-340x250.jpg',
                ],
            }
        ],
        comments: [
            {
                Heading: "Ongoing Graphic Design Support",
                title: "I highly recommend Clive for any graphic design needs! He provided exceptional support for our email designs, graphic design templates, and brand development. His attention to detail and prompt communication made the design process seamless. His expertise and responsiveness truly exceeded our expectation",
                date: "Feb 09, 2021 10:00 PM",
                rated: 5,
            },
            {
                Heading: "Design Four Startup Web UX/UI Screens and Logo",
                title: "Really great work from civil. Her colour balances are great, and communication and responsiveness on point. Will be working with her again for sure",
                date: "July  03, 2022 8:00 AM",
                rated: 5,
            }, {
                Heading: "Need Graphic Designer for Tech Company Ads and Banners",
                title: "Clive really did a magnificent job in hearing and understanding my vision and bringing it to life. This website was already in progress which can be a barrier to some designers, as many of the proposals I received wanted to completely scrap my ideas and start fresh. Clive took what I already had and enhanced it in so many ways, while still adding his own personal design touches. He has such an eye for seamless and elegant design, it makes the viewer feel your website rather than just viewing it. Amazing work.",
                date: "November  09, 2023 08:00 AM",
                rated: 4,
            },
            {
                Heading: "Designer to build direct-to-consumer banner ads in Bannersnack",
                title: "Deep understanding of the aesthetics, pacing, and legibility required for digital marketing design. Clive exceeds expectations and is skilled in clean & efficient motion graphics",
                date: "March 09, 2023 11:00 AM",
                rated: 4.6,
            },
        ],
        specialization: ["Ux Designer", "Expert Adobe", "Graphics"],
        projectsThumbs: [
            'https://www.upwork.com/att/download/portfolio/persons/uid/1173403296888061952/profile/projects/files/1182948041536147456',
            'https://www.upwork.com/att/download/portfolio/persons/uid/1173403296888061952/profile/projects/files/1253575602255597568',
            'https://www.upwork.com/att/download/portfolio/persons/uid/1173403296888061952/profile/projects/files/7e75af82-e218-4ebf-a1c2-f79532618921',
        ],
    },
    // finish 2

    {
        firstName: 'Tetiana ',
        mainCategory: '3D',
        proTallent: false,
        availableToWork: true,
        lastName: 'F',
        hourlyRate: 42,
        avatar: "https://www.upwork.com/profile-portraits/c11fTnFoBJwtpJYdKXH6MbigGzO65YJV9Ik_B-dT6ach09WYXFTwhUvMaVUCXmHU3v",
        verified: true,
        description: 'Web Designer with wide experience in graphic design, UI / UX and media/print design.',
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
                title: "Web designer & Graphic Designer | Elementor Develope",
                description: "Hi, there! I'm a Web Designer with wide experience in graphic design, UI / UX and media/print design. I help you connect with your ideal audience with modern, simple, and concise design and trendy ideas. For you I offer: - Optimal terms of performance of works; - Strict adherence to the terms of reference for the project; - Adaptation for mobile devices and tablets; - An individual approach to every client. For my part, I guarantee compliance with deadlines, individual approach, politeness, and pleasant cooperation. As a result, you will receive models that will be fully prepared for the work of the layout designer. Feel free to ask questions, I am always happy to chat with you.",
                comments: [
                    {
                        projectHeading: "UI/UX Designer Required",
                        description: "Really great work from Tetiana. Her colour balances are great, and communication and responsiveness on point. Will be working with her again for sure",
                        commentDate: "April 02 2022",
                        rated: 5,
                        price: 1900,
                    },
                    {
                        projectHeading: "Top notch UI/UX designer needed",
                        description: "Tetiana is a nice person to work with.",
                        commentDate: "March 12 2023",
                        rated: 5,
                        price: 900,
                    },
                    {
                        projectHeading: "Design and Development website Figma + Elementor",
                        description: "Tetiana did an excellent job with a quick turn around.",
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
                Heading: "UI/UX Designer Required",
                title: "Really great work from Tetiana. Her colour balances are great, and communication and responsiveness on point. Will be working with her again for sure",
                date: "March 09, 2023 11:00 AM",
                rated: 4,
            },
            {
                Heading: "Top notch UI/UX designer needed",
                title: "Tetiana is a nice person to work with",
                date: "March 09, 2023 11:00 AM",
                rated: 5,
            }, {
                Heading: "Design and Development website Figma + Elementor",
                title: "Tetiana did an excellent job with a quick turn around.",
                date: "March 09, 2023 11:00 AM",
                rated: 4,
            },
        ],
        specialization: ["web Designer", "Ux Designer", "Graphics"],
        projectsThumbs: [
            'https://rainbowit.net/themes/inbio/wp-content/uploads/2021/09/marketing-young-cute-business-lady-striped-shirt-office-showing-raising-results-1-340x250.jpg',
            'https://rainbowit.net/themes/inbio/wp-content/uploads/2021/09/pretty-curly-young-woman-writing-notes-startup-project-340x250.jpg',
            'https://rainbowit.net/themes/inbio/wp-content/uploads/2021/09/road-sign-direction-perforated-paper-arrow-340x250.jpg',
        ],
    },

    // finsih 3
    {
        firstName: 'Ruslan ',
        mainCategory: '3D',
        proTallent: false,
        availableToWork: true,
        lastName: 'Morris',
        hourlyRate: 102,
        avatar: "https://www.upwork.com/profile-portraits/c15smPrEC9DIIcRV8Dznmo4uJfF4UxNogezl5phAKMKGV2JdOhoob9EUukFtElSFuM",
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
                title: "I will be your Frontend Developer in React js ",
                description: "Experienced web developer with higher technical education with a degree in Information Management Systems and Technologies. I have over 5 years of commercial experience in the front-end development area and 2 years in back-end development and I am always looking to expand my skillset and grow. My main focus is Web applications, UI/UX, sites layout, and landing pages development with an emphasis to use the React.js library. Also in my job, I use WordPress CMS. Career highlights: ✅ Web developer with over 7 years of professional experience in developing and supporting various commercial websites and applications. ✅ Good understanding of modern web development technologies, approaches, and the industry in general. ✅ Have experience working in large teams and with complex products. ✅ Have developed dozens of websites and landing pages, that attract hundreds of new users and help my clients grow their business.  Strong communication skills",
                comments: [
                    {
                        projectHeading: "Top-Notch React.js Developer",
                        description: "Ruslan is a great value addition to any front-end team. He has got leadership and a great understanding and knowledge of front-end development. We are all thankful for his contribution to our project. Will work with him always and will always recommend him. Thank you Ruslan.. it was such a pleasure working with you.",
                        commentDate: "April 02 2022",
                        rated: 5,
                        price: 15212,
                    },
                    {
                        projectHeading: "front-end developer",
                        description: "Very deadline oriented person. Provide pixel perfect coding in very short time period.This was a test paid task. We are going to hire Ruslan for our next project.",
                        commentDate: "March 12 2023",
                        rated: 4.8,
                        price: 23400,
                    },
                    {
                        projectHeading: "Set Selection on Textarea using Javascript",
                        description: "Ruslan was able to complete the job as specified. Good freelancer",
                        commentDate: "April 02 2022",
                        rated: 4.7,
                        price: 2489,
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
                Heading: "Top-Notch React.js Developer",
                title: "Ruslan is a great value addition to any front-end team. He has got leadership and a great understanding and knowledge of front-end development. We are all thankful for his contribution to our project. Will work with him always and will always recommend him. Thank you Ruslan.. it was such a pleasure working with you",
                date: "March 09, 2023 11:00 AM",
                rated: 4,
            },
            {
                Heading: "front-end developer",
                title: "Very deadline oriented person. Provide pixel perfect coding in very short time period.This was a test paid task. We are going to hire Ruslan for our next project..",
                date: "March 09, 2023 11:00 AM",
                rated: 5,
            }, {
                Heading: "Set Selection on Textarea using Javascript",
                title: "Ruslan was able to complete the job as specified. Good freelancer",
                date: "March 09, 2023 11:00 AM",
                rated: 4,
            },
        ],
        specialization: ["React JS", "Web Developer", "web Designer ",],
        projectsThumbs: [
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWBG38F-lq5h1QfvSeC1TWMhAhHy0Q3v9CRw&usqp=CAU',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpJX0Jo6LD9BdP5QKGsmhRPry5lRCOwU8NHg&usqp=CAU',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjkt6-gO3HTEZZaMTQR37i0eTLSfxUbdK6AQ&usqp=CAU',

        ],
    },
    // finsh4 
    {
        firstName: 'Sebastian',
        mainCategory: '3D',
        proTallent: false,
        availableToWork: true,
        lastName: 'Bells',
        hourlyRate: 98,
        avatar: "https://www.upwork.com/profile-portraits/c1i5Qwe91IMwQxFIfH2ynJ5QIsM4tJeBN8SNqNLV2vTR6kvXVPN65BAkW7w2BY0-kH",
        verified: true,
        description: ' i am  Full Stack developer  with experties in Frontend and backend Technalogy',
        category: "interfaces",
        jobs: {
            completed: 102,
            cancelled: 7,
            inProgress: 2
        },
        revneue: 78000,
        services: [
            {
                _id: 's_1',
                title: "I will  be Full Stack Developer ",
                description: "Welcome to my profile, My name is Sebastian, and I'm a professional software engineer with three years of experience, I have worked on many interesting projects with both big and small companies, and I have helped local businesses to automate their services during the pandemic. As a lead developer, I've mentored interns, and taught them how to turn their projects into well-tested and easily maintainable software. I am passionate about learning as much as I can , even during my free time and sharing my experience with others. I have worked with many frameworks/libraries but I discovered React to be my favourite. On server side I love using modern technologies like GraphQL, Docker, Varnish and etc",

                comments: [
                    {
                        projectHeading: "Fullstack Javascript Developer",
                        description: "It was a pleasure to work with Sebastian. He demonstrated excellent communication skills throughout the project, and his coding skills were top-notch. He delivered high-quality work on time and was always responsive to our feedback. We highly recommend Sebastian and look forward to working with him again in the future",
                        commentDate: "March 12 2023",
                        rated: 5,
                        price: 2500,
                    },
                    {
                        projectHeading: "Need a quick fix on my final project",
                        description: "Quick, Easly Explained. A well put together gentleman ready to assist beginners. Totally recommend! Saved me from failing my exam",
                        commentDate: "April 02 2022",
                        rated: 4.5,
                        price: 4000,
                    }, {
                        projectHeading: "Expert React Developers- Fulltime - Long Term",
                        description: "great work and amazing outcome",
                        commentDate: "March 12 2023",
                        rated: 5,
                        price: 7500,
                    },
                    {
                        projectHeading: "ReactJS Developer who wants to build the next big thing",
                        description: "Thinks beyond the task, great team player, super skilled developer and always open to learning something new. You simply can't go wrong with this guy",
                        commentDate: "April 02 2022",
                        rated: 5,
                        price: 8000,
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
        specialization: ["Full Stack developer", "Node JS", "React Js"],
        projectsThumbs: [
            'https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/portfolio-large-04-340x250.jpg',
            'https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/portfolio-large-05-340x250.jpg',
            'https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/portfolio-large-06-340x250.jpg',
        ],
    },

    //finish5

    {
        firstName: 'Domonkos ',
        mainCategory: '3D',
        proTallent: false,
        availableToWork: true,
        lastName: 'Bells',
        hourlyRate: 98,
        avatar: "https://www.upwork.com/profile-portraits/c13IjCH8alEKNMH_fnm_Dj3Delfzl469xVBQjWX30ZsNEY8IYI8WcPnNkj746t-Iwr",
        verified: true,
        description: 'Unity Specialist and C# Expert for 10+ years in the game and software industry.   ',
        category: "interfaces",
        jobs: {
            completed: 102,
            cancelled: 7,
            inProgress: 2
        },
        revneue: 56000,
        services: [
            {
                _id: 's_1',
                title: "Expert Unity Developer ",
                description: "Hello! Unity Specialist and C# Expert for 10+ years in the game and software industry. My goal is to create outstanding product for you the way you've imagined! Contact me if you are looking for: -Reliable and loyal developer -Clean, stable and usable product -Experienced Development Lead or Developer -Producer, Project Manager or Consultant I'm best at: -Project management from ground up -C# and Unity development and workflow -Game play Development -Graphics URP/HDRP/Deferred/Forward (lightning, shaders, post process effects) -Optimization (code and assets too) -Bug fixing and Debugging even in live products as firefighter -Time and resource management (leading teams and providing reliable schedule) -Networking solutions -Documentation My experiences are coming from working with multiple high profile companies, with project types ranging from PC Steam Games, AR and VR Games, Business to Business Applications. Have a nice day and Looking forward working with you!",

                comments: [
                    {
                        projectHeading: "Game coding - create PBR maps and UV mapping from image",
                        description: "As a technical artist, Domonkos is highly skilled, at both the tech and communication sides. He has played an important role in our growing team, for a number of challenging projects. He also offered highly valuable advices in approaching product development. I definetely want to work with him again in upcoming Unity projects",
                        commentDate: "March 12 2023",
                        rated: 5,
                        price: 2500,
                    },
                    {
                        projectHeading: "Looking for a senior Unity developer for educational games",
                        description: "Domonkos is a great Unity developer. He knows his stuff. Great communication too",
                        commentDate: "April 02 2022",
                        rated: 4.5,
                        price: 4000,
                    }, {
                        projectHeading: "Fix issues found in firebase",
                        description: "Amazing person with amazing skills",
                        commentDate: "March 12 2023",
                        rated: 5,
                        price: 7500,
                    },
                    {
                        projectHeading: "Unity Developer",
                        description: "Great to work with. Has deep knowledge in Unity and is committed to putting out high quality code while working efficiently. Maintained good communication throughout the project, and met all requirements successfully ",
                        commentDate: "April 02 2022",
                        rated: 5,
                        price: 8000,
                    },

                ],
                profile: [
                    'https://www.upwork.com/att/download/portfolio/persons/uid/650319826375020544/profile/projects/files/f5cdb152-abe3-4143-a559-20f89a61d6ab',
                    'https://www.upwork.com/att/download/portfolio/persons/uid/650319826375020544/profile/projects/files/92fb0dac-0810-47a8-9414-872f358467ac',
                    'https://www.upwork.com/att/download/portfolio/persons/uid/650319826375020544/profile/projects/files/953678690184065024',
                ],
            }
        ],
        comments: [
            {
                Heading: "Game coding - create PBR maps and UV mapping from image",
                title: "As a technical artist, Domonkos is highly skilled, at both the tech and communication sides. He has played an important role in our growing team, for a number of challenging projects. He also offered highly valuable advices in approaching product development. I definetely want to work with him again in upcoming Unity projects",
                date: "March 09, 2023 11:00 AM",
                rated: 4,
            },
            {
                Heading: "Looking for a senior Unity developer for educational games",
                title: "Domonkos is a great Unity developer. He knows his stuff. Great communication too.",
                date: "March 09, 2023 11:00 AM",
                rated: 5,
            }, {
                Heading: "Fix issues found in firebase",
                title: "Amazing person with amazing skills",
                date: "March 09, 2023 11:00 AM",
                rated: 4,
            },
            {
                Heading: "Unity Developer",
                title: "Great to work with. Has deep knowledge in Unity and is committed to putting out high quality code while working efficiently. Maintained good communication throughout the project, and met all requirements successfully",
                date: "March 09, 2023 11:00 AM",
                rated: 5,
            },
        ],
        specialization: ["Animation", "3D", "Expert Unity"],
        projectsThumbs: [
            'https://www.upwork.com/att/download/portfolio/persons/uid/650319826375020544/profile/projects/files/f5cdb152-abe3-4143-a559-20f89a61d6ab',
            'https://www.upwork.com/att/download/portfolio/persons/uid/650319826375020544/profile/projects/files/92fb0dac-0810-47a8-9414-872f358467ac',
            'https://www.upwork.com/att/download/portfolio/persons/uid/650319826375020544/profile/projects/files/953678690184065024',
        ],
    },
    // finish6 
    {
        firstName: 'Umar ',
        mainCategory: '3D',
        proTallent: false,
        availableToWork: true,
        lastName: ' .B',
        hourlyRate: 98,
        avatar: "https://www.upwork.com/profile-portraits/c1QAd-sSC3s6b36s3SfyztFIBLBAF_UZOwKUWpIdht351wGIdHzx2exaZZfQQhyFpG",
        verified: true,
        description: 'Unity Development | 2D / 3D / PC / Android / iOS / WebGL   ',
        category: "interfaces",
        jobs: {
            completed: 102,
            cancelled: 7,
            inProgress: 2
        },
        revneue: 200000,
        services: [
            {
                _id: 's_1',
                title: "Expert Unity Developer ",
                description: "Unity Development expert with 12+ years of experience, specializing in NFT blockchain games using CryptoCurrency wallet with excellent skills in Software Architecture for Large/Medium Games, Core Game Development, and Backend-Frontend interaction. 🔥TOP FIVE HIGHEST RATED Unity and HIGHEST EARNING (158,000+ USD)My experience as a Unity Developer (Versions 5.3.2 - 2021) is extensive and diverse, I methodically identify the project requirements, and decide on the best architecture using a vast variety of techniques and strategies. I have solved numerous show-stopping performance problems, as well as often re-engineered immensely complex designs and code, providing significantly improved performance on handheld devices and providing an overall better gaming experience. As an Expert Unity Developer, I possess an innate ability to engineer games employing AAA Industry Standard Best Practices and to design mutable and modular code/systems resulting in decoupled components interacting with each other fluidly - these are totally Reusable ♻️, totally Scalable ⚖️ and totally Beautiful ✨",

                comments: [
                    {
                        projectHeading: "Publish Unity/Firebase game to iOS and Google App Store",
                        description: "Very professional and communicative. It's a pleasure working with Umar and his team. I can highly recommend them",
                        commentDate: "March 12 2023",
                        rated: 5,
                        price: 2500,
                    },
                    {
                        projectHeading: "Accessible Chess Game",
                        description: "Umar is a wizard. Even if the specs aren't that detailed, he will break down the tasks and deliver every time. Personal favorite: The  when he gives that, you can be sure a feature is stable! Quick to understand code. Quick to ask the right questions. 11/10",
                        commentDate: "April 02 2022",
                        rated: 4.5,
                        price: 4000,
                    }, {
                        projectHeading: "Upgrading an existing Unity 2018 based app to Unity 2020",
                        description: "Amazing person with amazing skills",
                        commentDate: "March 12 2023",
                        rated: 5,
                        price: 7500,
                    },
                    {
                        projectHeading: "Developer for setting up IAP, Ads and publishing",
                        description: "This developer is the best and most honest of the many developers I have ever seen. He did his best to fix parts that had been spoiled by an agency in the past. Although this follow-up development is quite inconvenient, he got the job done with integrity and perfection. Work was fast, and there was no problem with communication. The period of working with him was always looking forward to and a pleasant experience. I would like to continue working with him. ",
                        commentDate: "April 02 2022",
                        rated: 5,
                        price: 8000,
                    },

                ],
                profile: [
                    'https://www.upwork.com/att/download/portfolio/persons/uid/650319826375020544/profile/projects/files/f5cdb152-abe3-4143-a559-20f89a61d6ab',
                    'https://www.upwork.com/att/download/portfolio/persons/uid/650319826375020544/profile/projects/files/92fb0dac-0810-47a8-9414-872f358467ac',
                    'https://www.upwork.com/att/download/portfolio/persons/uid/650319826375020544/profile/projects/files/953678690184065024',
                ],
            }
        ],
        comments: [
            {
                Heading: "Publish Unity/Firebase game to iOS and Google App Store",
                title: "As a technical artist, Domonkos is highly skilled, at both the tech and communication sides. He has played an important role in our growing team, for a number of challenging projects. He also offered highly valuable advices in approaching product development. I definetely want to work with him again in upcoming Unity projects",
                date: "March 09, 2023 11:00 AM",
                rated: 4,
            },
            {
                Heading: "Accessible Chess Game",
                title: "Umar is a wizard. Even if the specs aren't that detailed, he will break down the tasks and deliver every time. Personal favorite: The  when he gives that, you can be sure a feature is stable! Quick to understand code. Quick to ask the right questions. 11/10",
                date: "March 09, 2023 11:00 AM",
                rated: 5,
            }, {
                Heading: "Upgrading an existing Unity 2018 based app to Unity 2020",
                title: "Amazing person with amazing skills",
                date: "March 09, 2023 11:00 AM",
                rated: 4,
            },
            {
                Heading: "Developer for setting up IAP, Ads and publishing",
                title: "This developer is the best and most honest of the many developers I have ever seen. He did his best to fix parts that had been spoiled by an agency in the past. Although this follow-up development is quite inconvenient, he got the job done with integrity and perfection. Work was fast, and there was no problem with communication. The period of working with him was always looking forward to and a pleasant experience. I would like to continue working with him",
                date: "March 09, 2023 11:00 AM",
                rated: 5,
            },
        ],
        specialization: ["Animation", "3D", "Expert Unity"],
        projectsThumbs: [
            'https://www.upwork.com/att/download/portfolio/persons/uid/650319826375020544/profile/projects/files/f5cdb152-abe3-4143-a559-20f89a61d6ab',
            'https://www.upwork.com/att/download/portfolio/persons/uid/650319826375020544/profile/projects/files/92fb0dac-0810-47a8-9414-872f358467ac',
            'https://www.upwork.com/att/download/portfolio/persons/uid/650319826375020544/profile/projects/files/953678690184065024',
        ],
    },



























    // Animation

    {
        firstName: 'Hammad',
        mainCategory: 'Animation',
        proTallent: false,
        availableToWork: true,
        lastName: 'Shafiq',
        hourlyRate: 95,
        avatar: 'https://avatars.githubusercontent.com/u/42932321?v=4',
        verified: true,
        description: 'Experienced Full Stack Web Developer adept at building apps from scratch. ',
        category: "Full Stack developer",
        jobs: {
            completed: 102,
            cancelled: 7,
            inProgress: 2
        },
        revneue: 234000,
        services: [
            {
                _id: 's_1',
                title: " i will Your Full Stack Developer React || Node js ",
                description: "",
                comments: [
                    {
                        projectHeading: "Post Textile ",
                        description: "PoshTextiles American base company i built the logistics management system akin to Microsoft Business Dynamics. As a Full Stack Developer, I played a key role in utilizing JavaScript extensively, accounting for 99.9% of the project. Leveraging Microsoft APIs, I seamlessly integrated data to facilitate the global export of cloth by PoshTextiles. My system efficiently manages warehouse operations, encompassing shipment creation, checking, picking, packing, and shipping. By integrating FedEx, UPS, and STAMP shipping company APIs, I streamlined the shipping process. The system includes live address validation and supports printing of labels. Additionally, I implemented payment integration between two companies involved in the process.",
                        commentDate: "March 12 2023",
                        rated: 5,
                        price: 23000,
                    },
                    {
                        projectHeading: " Digtal Flow ",
                        description: "Digital Media based in New York .From frontend to Full Stack Project Lead, my journey in digital media has been a captivating adventure. I started by crafting visually appealing interfaces and grew into seamlessly integrating frontend and backend technologies. As a team member and leader, I delivered exceptional results for clients, combining cutting-edge technologies and fostering innovation. With unwavering commitment and a passion for excellence, I continue to push boundaries and create captivating digital experiences.",
                        commentDate: "April 02 2022",
                        rated: 5,
                        price: 60000,
                    },

                ],
                profile: [
                    'https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/293240721/original/6891870e69ea2793c44105520881aa0556da1f9b.png',
                    'https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/250604452/original/789892c3543a3199c6f38b416ca1f42bf92a5039.png',
                    'https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/267148774/original/ddf545f98b847c3cd66c9afe1cf0b680148237f1.png',
                ],
            }
        ],
        comments: [
            {
                Heading: "Post Textile App",
                title: "Muhammad Hamad is working on our logistics management system as Full stack developer . He make custom frontend app pure in JavaScript now is working on backend that will be soon live. He always full fill his commitment . I always paid him advance . I never realized I did mistake 100% recommended",
                date: "Jul 03, 2023 12:00 AM",
                rated: 5,
            },
            {
                Heading: "stock",
                title: "I've had the pleasure of working with Muhammad, as remote Full Stack developer, for the past three years. He consistently displays professionalism, excellent coding skills, effective communication, and honesty. Muhammad's passion for his work goes beyond financial motivations, driving him to strive for perfection.Highly recommended",
                date: "Jan 14, 2022 11:00 AM",
                rated: 5,
            },
        ],
        specialization: ["Full Stack devloper", "web developer", "ReactJs"],
        projectsThumbs: [
            'https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/portfolio-large-01-340x250.jpg',
            'https://fiverr-res.cloudinary.com/images/t_medium7,q_auto,f_auto,q_auto,f_auto/gigs/150311157/original/b2cffba150592f0c20aece34ffefa82869c3237d/develop-a-web-app-with-react-js-node-js.jpeg',
            'https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/portfolio-large-03-340x250.jpg',
        ],
        commentCount: function () {
            return this.comments.length
        },
        ratingCount: function () {
            return this.comments.reduce((a, b) => a + b.rated, 0) / this.commentCount()
        },
    },
    // 1 finish 
    {
        firstName: 'Clive ',
        mainCategory: 'Animation',
        proTallent: false,
        availableToWork: true,
        lastName: 'B',
        hourlyRate: 78,
        avatar: "https://www.upwork.com/profile-portraits/c1vLZ8iVLN2bcmwEFyXQEVnwpSYjzef47L2ZVaXcTUc_IeTA8Pfn-ZxYt4z2qJO5j7",
        verified: true,
        description: 'With over 3 years of industry experience, I am a seasoned UI/UX designer who specializes in crafting clean, modern interfaces ',
        category: "Design",
        jobs: {
            completed: 78,
            cancelled: 3,
            inProgress: 7
        },
        revneue: 78000,
        services: [
            {
                _id: 's_1',
                title: "I will do UIUX for you mobile application or website in figma or xdk",
                description: "Are you looking to elevate your digital presence with captivating and intuitive interfaces? Look no further! With over 5 years of industry experience, I am a seasoned UI/UX designer who specializes in crafting clean, modern interfaces that leave a lasting impression. I have a passion for creating designs that seamlessly blend aesthetics with functionality, ensuring a delightful user experience at every interaction. By staying up-to-date with the latest design trends and best practices, I bring fresh and innovative ideas to the table, breathing life into your brand and product. From concept to completion, I meticulously analyze user needs and behavior to develop visually stunning interfaces that are both visually appealing and easy to navigate. Through a user-centered design approach, I strive to understand your target audience and align their goals with your business objectives, resulting in a harmonious fusion of form and function. With a keen eye for detail, I meticulously craft each element, from typography and color palettes to iconography and layout, creating a cohesive and immersive experience that captivates users and enhances their engagement. I believe in the power of simplicity and elegance, ensuring that every interface I design not only looks great but also functions flawlessly across devices and platforms. Collaboration is at the heart of my process. I work closely with clients, stakeholders, and development teams, valuing open communication and feedback to ensure that your vision is translated into a remarkable reality. I am proficient in industry-standard design tools and methodologies, allowing me to deliver high-quality, pixel-perfect designs on time and within budget. If you're ready to take your digital presence to new heights and leave a lasting impact on your audience, let's connect. Together, we can create an attractive and user-centric interface that sets you apart from the competition and drives meaningful results.",
                comments: [
                    {
                        projectHeading: "Need Graphic Designer for Tech Company Ads and Banners",
                        description: "Clive really did a magnificent job in hearing and understanding my vision and bringing it to life. This website was already in progress which can be a barrier to some designers, as many of the proposals I received wanted to completely scrap my ideas and start fresh. Clive took what I already had and enhanced it in so many ways, while still adding his own personal design touches. He has such an eye for seamless and elegant design, it makes the viewer feel your website rather than just viewing it. Amazing work.",
                        commentDate: "March 12 2023",
                        rated: 5,
                        price: 4500,
                    },
                    {
                        projectHeading: "Ongoing Graphic Design Support",
                        description: "2nd project down with us, and he has been fantastic for building out our landing pages",
                        commentDate: "April 02 2022",
                        rated: 5,
                        price: 3700,
                    }, {
                        projectHeading: "Design Four Startup Web UX/UI Screens and Logo",
                        description: "Really great work from civil. Her colour balances are great, and communication and responsiveness on point. Will be working with her again for sure",
                        commentDate: "March 12 2023",
                        rated: 5,
                        price: 234,
                    },
                    {
                        projectHeading: "Designer to build direct-to-consumer banner ads in Bannersnack",
                        description: "Deep understanding of the aesthetics, pacing, and legibility required for digital marketing design. Clive exceeds expectations and is skilled in clean & efficient motion graphics",
                        commentDate: "April 02 2022",
                        rated: 4.6,
                        price: 1200,
                    },

                ],
                profile: [
                    'https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/portfolio-large-04-340x250.jpg',
                    'https://www.upwork.com/att/download/portfolio/persons/uid/1173403296888061952/profile/projects/files/1253575602255597568',
                    'https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/portfolio-large-06-340x250.jpg',
                ],
            }
        ],
        comments: [
            {
                Heading: "Ongoing Graphic Design Support",
                title: "I highly recommend Clive for any graphic design needs! He provided exceptional support for our email designs, graphic design templates, and brand development. His attention to detail and prompt communication made the design process seamless. His expertise and responsiveness truly exceeded our expectation",
                date: "Feb 09, 2021 10:00 PM",
                rated: 5,
            },
            {
                Heading: "Design Four Startup Web UX/UI Screens and Logo",
                title: "Really great work from civil. Her colour balances are great, and communication and responsiveness on point. Will be working with her again for sure",
                date: "July  03, 2022 8:00 AM",
                rated: 5,
            }, {
                Heading: "Need Graphic Designer for Tech Company Ads and Banners",
                title: "Clive really did a magnificent job in hearing and understanding my vision and bringing it to life. This website was already in progress which can be a barrier to some designers, as many of the proposals I received wanted to completely scrap my ideas and start fresh. Clive took what I already had and enhanced it in so many ways, while still adding his own personal design touches. He has such an eye for seamless and elegant design, it makes the viewer feel your website rather than just viewing it. Amazing work.",
                date: "November  09, 2023 08:00 AM",
                rated: 4,
            },
            {
                Heading: "Designer to build direct-to-consumer banner ads in Bannersnack",
                title: "Deep understanding of the aesthetics, pacing, and legibility required for digital marketing design. Clive exceeds expectations and is skilled in clean & efficient motion graphics",
                date: "March 09, 2023 11:00 AM",
                rated: 4.6,
            },
        ],
        specialization: ["Ux Designer", "Expert Adobe", "Graphics"],
        projectsThumbs: [
            'https://www.upwork.com/att/download/portfolio/persons/uid/1173403296888061952/profile/projects/files/1182948041536147456',
            'https://www.upwork.com/att/download/portfolio/persons/uid/1173403296888061952/profile/projects/files/1253575602255597568',
            'https://www.upwork.com/att/download/portfolio/persons/uid/1173403296888061952/profile/projects/files/7e75af82-e218-4ebf-a1c2-f79532618921',
        ],
    },
    // finish 2

    {
        firstName: 'Tetiana ',
        mainCategory: 'Animation',
        proTallent: false,
        availableToWork: true,
        lastName: 'F',
        hourlyRate: 42,
        avatar: "https://www.upwork.com/profile-portraits/c11fTnFoBJwtpJYdKXH6MbigGzO65YJV9Ik_B-dT6ach09WYXFTwhUvMaVUCXmHU3v",
        verified: true,
        description: 'Web Designer with wide experience in graphic design, UI / UX and media/print design.',
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
                title: "Web designer & Graphic Designer | Elementor Develope",
                description: "Hi, there! I'm a Web Designer with wide experience in graphic design, UI / UX and media/print design. I help you connect with your ideal audience with modern, simple, and concise design and trendy ideas. For you I offer: - Optimal terms of performance of works; - Strict adherence to the terms of reference for the project; - Adaptation for mobile devices and tablets; - An individual approach to every client. For my part, I guarantee compliance with deadlines, individual approach, politeness, and pleasant cooperation. As a result, you will receive models that will be fully prepared for the work of the layout designer. Feel free to ask questions, I am always happy to chat with you.",
                comments: [
                    {
                        projectHeading: "UI/UX Designer Required",
                        description: "Really great work from Tetiana. Her colour balances are great, and communication and responsiveness on point. Will be working with her again for sure",
                        commentDate: "April 02 2022",
                        rated: 5,
                        price: 1900,
                    },
                    {
                        projectHeading: "Top notch UI/UX designer needed",
                        description: "Tetiana is a nice person to work with.",
                        commentDate: "March 12 2023",
                        rated: 5,
                        price: 900,
                    },
                    {
                        projectHeading: "Design and Development website Figma + Elementor",
                        description: "Tetiana did an excellent job with a quick turn around.",
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
                Heading: "UI/UX Designer Required",
                title: "Really great work from Tetiana. Her colour balances are great, and communication and responsiveness on point. Will be working with her again for sure",
                date: "March 09, 2023 11:00 AM",
                rated: 4,
            },
            {
                Heading: "Top notch UI/UX designer needed",
                title: "Tetiana is a nice person to work with",
                date: "March 09, 2023 11:00 AM",
                rated: 5,
            }, {
                Heading: "Design and Development website Figma + Elementor",
                title: "Tetiana did an excellent job with a quick turn around.",
                date: "March 09, 2023 11:00 AM",
                rated: 4,
            },
        ],
        specialization: ["web Designer", "Ux Designer", "Graphics"],
        projectsThumbs: [
            'https://rainbowit.net/themes/inbio/wp-content/uploads/2021/09/marketing-young-cute-business-lady-striped-shirt-office-showing-raising-results-1-340x250.jpg',
            'https://rainbowit.net/themes/inbio/wp-content/uploads/2021/09/pretty-curly-young-woman-writing-notes-startup-project-340x250.jpg',
            'https://rainbowit.net/themes/inbio/wp-content/uploads/2021/09/road-sign-direction-perforated-paper-arrow-340x250.jpg',
        ],
    },

    // finsih 3
    {
        firstName: 'Ruslan ',
        mainCategory: 'Animation',
        proTallent: false,
        availableToWork: true,
        lastName: 'Morris',
        hourlyRate: 102,
        avatar: "https://www.upwork.com/profile-portraits/c15smPrEC9DIIcRV8Dznmo4uJfF4UxNogezl5phAKMKGV2JdOhoob9EUukFtElSFuM",
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
                title: "I will be your Frontend Developer in React js ",
                description: "Experienced web developer with higher technical education with a degree in Information Management Systems and Technologies. I have over 5 years of commercial experience in the front-end development area and 2 years in back-end development and I am always looking to expand my skillset and grow. My main focus is Web applications, UI/UX, sites layout, and landing pages development with an emphasis to use the React.js library. Also in my job, I use WordPress CMS. Career highlights: ✅ Web developer with over 7 years of professional experience in developing and supporting various commercial websites and applications. ✅ Good understanding of modern web development technologies, approaches, and the industry in general. ✅ Have experience working in large teams and with complex products. ✅ Have developed dozens of websites and landing pages, that attract hundreds of new users and help my clients grow their business.  Strong communication skills",
                comments: [
                    {
                        projectHeading: "Top-Notch React.js Developer",
                        description: "Ruslan is a great value addition to any front-end team. He has got leadership and a great understanding and knowledge of front-end development. We are all thankful for his contribution to our project. Will work with him always and will always recommend him. Thank you Ruslan.. it was such a pleasure working with you.",
                        commentDate: "April 02 2022",
                        rated: 5,
                        price: 15212,
                    },
                    {
                        projectHeading: "front-end developer",
                        description: "Very deadline oriented person. Provide pixel perfect coding in very short time period.This was a test paid task. We are going to hire Ruslan for our next project.",
                        commentDate: "March 12 2023",
                        rated: 4.8,
                        price: 23400,
                    },
                    {
                        projectHeading: "Set Selection on Textarea using Javascript",
                        description: "Ruslan was able to complete the job as specified. Good freelancer",
                        commentDate: "April 02 2022",
                        rated: 4.7,
                        price: 2489,
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
                Heading: "Top-Notch React.js Developer",
                title: "Ruslan is a great value addition to any front-end team. He has got leadership and a great understanding and knowledge of front-end development. We are all thankful for his contribution to our project. Will work with him always and will always recommend him. Thank you Ruslan.. it was such a pleasure working with you",
                date: "March 09, 2023 11:00 AM",
                rated: 4,
            },
            {
                Heading: "front-end developer",
                title: "Very deadline oriented person. Provide pixel perfect coding in very short time period.This was a test paid task. We are going to hire Ruslan for our next project..",
                date: "March 09, 2023 11:00 AM",
                rated: 5,
            }, {
                Heading: "Set Selection on Textarea using Javascript",
                title: "Ruslan was able to complete the job as specified. Good freelancer",
                date: "March 09, 2023 11:00 AM",
                rated: 4,
            },
        ],
        specialization: ["React JS", "Web Developer", "web Designer ",],
        projectsThumbs: [
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWBG38F-lq5h1QfvSeC1TWMhAhHy0Q3v9CRw&usqp=CAU',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpJX0Jo6LD9BdP5QKGsmhRPry5lRCOwU8NHg&usqp=CAU',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjkt6-gO3HTEZZaMTQR37i0eTLSfxUbdK6AQ&usqp=CAU',

        ],
    },
    // finsh4 
    {
        firstName: 'Sebastian',
        mainCategory: 'Animation',
        proTallent: false,
        availableToWork: true,
        lastName: 'Bells',
        hourlyRate: 98,
        avatar: "https://www.upwork.com/profile-portraits/c1i5Qwe91IMwQxFIfH2ynJ5QIsM4tJeBN8SNqNLV2vTR6kvXVPN65BAkW7w2BY0-kH",
        verified: true,
        description: ' i am  Full Stack developer  with experties in Frontend and backend Technalogy',
        category: "interfaces",
        jobs: {
            completed: 102,
            cancelled: 7,
            inProgress: 2
        },
        revneue: 78000,
        services: [
            {
                _id: 's_1',
                title: "I will  be Full Stack Developer ",
                description: "Welcome to my profile, My name is Sebastian, and I'm a professional software engineer with three years of experience, I have worked on many interesting projects with both big and small companies, and I have helped local businesses to automate their services during the pandemic. As a lead developer, I've mentored interns, and taught them how to turn their projects into well-tested and easily maintainable software. I am passionate about learning as much as I can , even during my free time and sharing my experience with others. I have worked with many frameworks/libraries but I discovered React to be my favourite. On server side I love using modern technologies like GraphQL, Docker, Varnish and etc",

                comments: [
                    {
                        projectHeading: "Fullstack Javascript Developer",
                        description: "It was a pleasure to work with Sebastian. He demonstrated excellent communication skills throughout the project, and his coding skills were top-notch. He delivered high-quality work on time and was always responsive to our feedback. We highly recommend Sebastian and look forward to working with him again in the future",
                        commentDate: "March 12 2023",
                        rated: 5,
                        price: 2500,
                    },
                    {
                        projectHeading: "Need a quick fix on my final project",
                        description: "Quick, Easly Explained. A well put together gentleman ready to assist beginners. Totally recommend! Saved me from failing my exam",
                        commentDate: "April 02 2022",
                        rated: 4.5,
                        price: 4000,
                    }, {
                        projectHeading: "Expert React Developers- Fulltime - Long Term",
                        description: "great work and amazing outcome",
                        commentDate: "March 12 2023",
                        rated: 5,
                        price: 7500,
                    },
                    {
                        projectHeading: "ReactJS Developer who wants to build the next big thing",
                        description: "Thinks beyond the task, great team player, super skilled developer and always open to learning something new. You simply can't go wrong with this guy",
                        commentDate: "April 02 2022",
                        rated: 5,
                        price: 8000,
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
        specialization: ["Full Stack developer", "Node JS", "React Js"],
        projectsThumbs: [
            'https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/portfolio-large-04-340x250.jpg',
            'https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/portfolio-large-05-340x250.jpg',
            'https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/portfolio-large-06-340x250.jpg',
        ],
    },

    //finish5

    {
        firstName: 'Domonkos ',
        mainCategory: 'Animation',
        proTallent: false,
        availableToWork: true,
        lastName: 'Bells',
        hourlyRate: 98,
        avatar: "https://www.upwork.com/profile-portraits/c13IjCH8alEKNMH_fnm_Dj3Delfzl469xVBQjWX30ZsNEY8IYI8WcPnNkj746t-Iwr",
        verified: true,
        description: 'Unity Specialist and C# Expert for 10+ years in the game and software industry.   ',
        category: "interfaces",
        jobs: {
            completed: 102,
            cancelled: 7,
            inProgress: 2
        },
        revneue: 56000,
        services: [
            {
                _id: 's_1',
                title: "Expert Unity Developer ",
                description: "Hello! Unity Specialist and C# Expert for 10+ years in the game and software industry. My goal is to create outstanding product for you the way you've imagined! Contact me if you are looking for: -Reliable and loyal developer -Clean, stable and usable product -Experienced Development Lead or Developer -Producer, Project Manager or Consultant I'm best at: -Project management from ground up -C# and Unity development and workflow -Game play Development -Graphics URP/HDRP/Deferred/Forward (lightning, shaders, post process effects) -Optimization (code and assets too) -Bug fixing and Debugging even in live products as firefighter -Time and resource management (leading teams and providing reliable schedule) -Networking solutions -Documentation My experiences are coming from working with multiple high profile companies, with project types ranging from PC Steam Games, AR and VR Games, Business to Business Applications. Have a nice day and Looking forward working with you!",

                comments: [
                    {
                        projectHeading: "Game coding - create PBR maps and UV mapping from image",
                        description: "As a technical artist, Domonkos is highly skilled, at both the tech and communication sides. He has played an important role in our growing team, for a number of challenging projects. He also offered highly valuable advices in approaching product development. I definetely want to work with him again in upcoming Unity projects",
                        commentDate: "March 12 2023",
                        rated: 5,
                        price: 2500,
                    },
                    {
                        projectHeading: "Looking for a senior Unity developer for educational games",
                        description: "Domonkos is a great Unity developer. He knows his stuff. Great communication too",
                        commentDate: "April 02 2022",
                        rated: 4.5,
                        price: 4000,
                    }, {
                        projectHeading: "Fix issues found in firebase",
                        description: "Amazing person with amazing skills",
                        commentDate: "March 12 2023",
                        rated: 5,
                        price: 7500,
                    },
                    {
                        projectHeading: "Unity Developer",
                        description: "Great to work with. Has deep knowledge in Unity and is committed to putting out high quality code while working efficiently. Maintained good communication throughout the project, and met all requirements successfully ",
                        commentDate: "April 02 2022",
                        rated: 5,
                        price: 8000,
                    },

                ],
                profile: [
                    'https://www.upwork.com/att/download/portfolio/persons/uid/650319826375020544/profile/projects/files/f5cdb152-abe3-4143-a559-20f89a61d6ab',
                    'https://www.upwork.com/att/download/portfolio/persons/uid/650319826375020544/profile/projects/files/92fb0dac-0810-47a8-9414-872f358467ac',
                    'https://www.upwork.com/att/download/portfolio/persons/uid/650319826375020544/profile/projects/files/953678690184065024',
                ],
            }
        ],
        comments: [
            {
                Heading: "Game coding - create PBR maps and UV mapping from image",
                title: "As a technical artist, Domonkos is highly skilled, at both the tech and communication sides. He has played an important role in our growing team, for a number of challenging projects. He also offered highly valuable advices in approaching product development. I definetely want to work with him again in upcoming Unity projects",
                date: "March 09, 2023 11:00 AM",
                rated: 4,
            },
            {
                Heading: "Looking for a senior Unity developer for educational games",
                title: "Domonkos is a great Unity developer. He knows his stuff. Great communication too.",
                date: "March 09, 2023 11:00 AM",
                rated: 5,
            }, {
                Heading: "Fix issues found in firebase",
                title: "Amazing person with amazing skills",
                date: "March 09, 2023 11:00 AM",
                rated: 4,
            },
            {
                Heading: "Unity Developer",
                title: "Great to work with. Has deep knowledge in Unity and is committed to putting out high quality code while working efficiently. Maintained good communication throughout the project, and met all requirements successfully",
                date: "March 09, 2023 11:00 AM",
                rated: 5,
            },
        ],
        specialization: ["Animation", "3D", "Expert Unity"],
        projectsThumbs: [
            'https://www.upwork.com/att/download/portfolio/persons/uid/650319826375020544/profile/projects/files/f5cdb152-abe3-4143-a559-20f89a61d6ab',
            'https://www.upwork.com/att/download/portfolio/persons/uid/650319826375020544/profile/projects/files/92fb0dac-0810-47a8-9414-872f358467ac',
            'https://www.upwork.com/att/download/portfolio/persons/uid/650319826375020544/profile/projects/files/953678690184065024',
        ],
    },
    // finish6 
    {
        firstName: 'Umar ',
        mainCategory: 'Animation',
        proTallent: false,
        availableToWork: true,
        lastName: ' .B',
        hourlyRate: 98,
        avatar: "https://www.upwork.com/profile-portraits/c1QAd-sSC3s6b36s3SfyztFIBLBAF_UZOwKUWpIdht351wGIdHzx2exaZZfQQhyFpG",
        verified: true,
        description: 'Unity Development | 2D / 3D / PC / Android / iOS / WebGL   ',
        category: "interfaces",
        jobs: {
            completed: 102,
            cancelled: 7,
            inProgress: 2
        },
        revneue: 200000,
        services: [
            {
                _id: 's_1',
                title: "Expert Unity Developer ",
                description: "Unity Development expert with 12+ years of experience, specializing in NFT blockchain games using CryptoCurrency wallet with excellent skills in Software Architecture for Large/Medium Games, Core Game Development, and Backend-Frontend interaction. 🔥TOP FIVE HIGHEST RATED Unity and HIGHEST EARNING (158,000+ USD)My experience as a Unity Developer (Versions 5.3.2 - 2021) is extensive and diverse, I methodically identify the project requirements, and decide on the best architecture using a vast variety of techniques and strategies. I have solved numerous show-stopping performance problems, as well as often re-engineered immensely complex designs and code, providing significantly improved performance on handheld devices and providing an overall better gaming experience. As an Expert Unity Developer, I possess an innate ability to engineer games employing AAA Industry Standard Best Practices and to design mutable and modular code/systems resulting in decoupled components interacting with each other fluidly - these are totally Reusable ♻️, totally Scalable ⚖️ and totally Beautiful ✨",

                comments: [
                    {
                        projectHeading: "Publish Unity/Firebase game to iOS and Google App Store",
                        description: "Very professional and communicative. It's a pleasure working with Umar and his team. I can highly recommend them",
                        commentDate: "March 12 2023",
                        rated: 5,
                        price: 2500,
                    },
                    {
                        projectHeading: "Accessible Chess Game",
                        description: "Umar is a wizard. Even if the specs aren't that detailed, he will break down the tasks and deliver every time. Personal favorite: The  when he gives that, you can be sure a feature is stable! Quick to understand code. Quick to ask the right questions. 11/10",
                        commentDate: "April 02 2022",
                        rated: 4.5,
                        price: 4000,
                    }, {
                        projectHeading: "Upgrading an existing Unity 2018 based app to Unity 2020",
                        description: "Amazing person with amazing skills",
                        commentDate: "March 12 2023",
                        rated: 5,
                        price: 7500,
                    },
                    {
                        projectHeading: "Developer for setting up IAP, Ads and publishing",
                        description: "This developer is the best and most honest of the many developers I have ever seen. He did his best to fix parts that had been spoiled by an agency in the past. Although this follow-up development is quite inconvenient, he got the job done with integrity and perfection. Work was fast, and there was no problem with communication. The period of working with him was always looking forward to and a pleasant experience. I would like to continue working with him. ",
                        commentDate: "April 02 2022",
                        rated: 5,
                        price: 8000,
                    },

                ],
                profile: [
                    'https://www.upwork.com/att/download/portfolio/persons/uid/650319826375020544/profile/projects/files/f5cdb152-abe3-4143-a559-20f89a61d6ab',
                    'https://www.upwork.com/att/download/portfolio/persons/uid/650319826375020544/profile/projects/files/92fb0dac-0810-47a8-9414-872f358467ac',
                    'https://www.upwork.com/att/download/portfolio/persons/uid/650319826375020544/profile/projects/files/953678690184065024',
                ],
            }
        ],
        comments: [
            {
                Heading: "Publish Unity/Firebase game to iOS and Google App Store",
                title: "As a technical artist, Domonkos is highly skilled, at both the tech and communication sides. He has played an important role in our growing team, for a number of challenging projects. He also offered highly valuable advices in approaching product development. I definetely want to work with him again in upcoming Unity projects",
                date: "March 09, 2023 11:00 AM",
                rated: 4,
            },
            {
                Heading: "Accessible Chess Game",
                title: "Umar is a wizard. Even if the specs aren't that detailed, he will break down the tasks and deliver every time. Personal favorite: The  when he gives that, you can be sure a feature is stable! Quick to understand code. Quick to ask the right questions. 11/10",
                date: "March 09, 2023 11:00 AM",
                rated: 5,
            }, {
                Heading: "Upgrading an existing Unity 2018 based app to Unity 2020",
                title: "Amazing person with amazing skills",
                date: "March 09, 2023 11:00 AM",
                rated: 4,
            },
            {
                Heading: "Developer for setting up IAP, Ads and publishing",
                title: "This developer is the best and most honest of the many developers I have ever seen. He did his best to fix parts that had been spoiled by an agency in the past. Although this follow-up development is quite inconvenient, he got the job done with integrity and perfection. Work was fast, and there was no problem with communication. The period of working with him was always looking forward to and a pleasant experience. I would like to continue working with him",
                date: "March 09, 2023 11:00 AM",
                rated: 5,
            },
        ],
        specialization: ["Animation", "3D", "Expert Unity"],
        projectsThumbs: [
            'https://www.upwork.com/att/download/portfolio/persons/uid/650319826375020544/profile/projects/files/f5cdb152-abe3-4143-a559-20f89a61d6ab',
            'https://www.upwork.com/att/download/portfolio/persons/uid/650319826375020544/profile/projects/files/92fb0dac-0810-47a8-9414-872f358467ac',
            'https://www.upwork.com/att/download/portfolio/persons/uid/650319826375020544/profile/projects/files/953678690184065024',
        ],
    },


























    // Graphics

    {
        firstName: 'Hammad',
        mainCategory: 'Marketing',
        proTallent: false,
        availableToWork: true,
        lastName: 'Shafiq',
        hourlyRate: 95,
        avatar: 'https://avatars.githubusercontent.com/u/42932321?v=4',
        verified: true,
        description: 'Experienced Full Stack Web Developer adept at building apps from scratch. ',
        category: "Full Stack developer",
        jobs: {
            completed: 102,
            cancelled: 7,
            inProgress: 2
        },
        revneue: 234000,
        services: [
            {
                _id: 's_1',
                title: " i will Your Full Stack Developer React || Node js ",
                description: "",
                comments: [
                    {
                        projectHeading: "Post Textile ",
                        description: "PoshTextiles American base company i built the logistics management system akin to Microsoft Business Dynamics. As a Full Stack Developer, I played a key role in utilizing JavaScript extensively, accounting for 99.9% of the project. Leveraging Microsoft APIs, I seamlessly integrated data to facilitate the global export of cloth by PoshTextiles. My system efficiently manages warehouse operations, encompassing shipment creation, checking, picking, packing, and shipping. By integrating FedEx, UPS, and STAMP shipping company APIs, I streamlined the shipping process. The system includes live address validation and supports printing of labels. Additionally, I implemented payment integration between two companies involved in the process.",
                        commentDate: "March 12 2023",
                        rated: 5,
                        price: 23000,
                    },
                    {
                        projectHeading: " Digtal Flow ",
                        description: "Digital Media based in New York .From frontend to Full Stack Project Lead, my journey in digital media has been a captivating adventure. I started by crafting visually appealing interfaces and grew into seamlessly integrating frontend and backend technologies. As a team member and leader, I delivered exceptional results for clients, combining cutting-edge technologies and fostering innovation. With unwavering commitment and a passion for excellence, I continue to push boundaries and create captivating digital experiences.",
                        commentDate: "April 02 2022",
                        rated: 5,
                        price: 60000,
                    },

                ],
                profile: [
                    'https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/293240721/original/6891870e69ea2793c44105520881aa0556da1f9b.png',
                    'https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/250604452/original/789892c3543a3199c6f38b416ca1f42bf92a5039.png',
                    'https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/267148774/original/ddf545f98b847c3cd66c9afe1cf0b680148237f1.png',
                ],
            }
        ],
        comments: [
            {
                Heading: "Post Textile App",
                title: "Muhammad Hamad is working on our logistics management system as Full stack developer . He make custom frontend app pure in JavaScript now is working on backend that will be soon live. He always full fill his commitment . I always paid him advance . I never realized I did mistake 100% recommended",
                date: "Jul 03, 2023 12:00 AM",
                rated: 5,
            },
            {
                Heading: "stock",
                title: "I've had the pleasure of working with Muhammad, as remote Full Stack developer, for the past three years. He consistently displays professionalism, excellent coding skills, effective communication, and honesty. Muhammad's passion for his work goes beyond financial motivations, driving him to strive for perfection.Highly recommended",
                date: "Jan 14, 2022 11:00 AM",
                rated: 5,
            },
        ],
        specialization: ["Full Stack devloper", "web developer", "ReactJs"],
        projectsThumbs: [
            'https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/portfolio-large-01-340x250.jpg',
            'https://fiverr-res.cloudinary.com/images/t_medium7,q_auto,f_auto,q_auto,f_auto/gigs/150311157/original/b2cffba150592f0c20aece34ffefa82869c3237d/develop-a-web-app-with-react-js-node-js.jpeg',
            'https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/portfolio-large-03-340x250.jpg',
        ],
        commentCount: function () {
            return this.comments.length
        },
        ratingCount: function () {
            return this.comments.reduce((a, b) => a + b.rated, 0) / this.commentCount()
        },
    },
    // 1 finish 
    {
        firstName: 'Clive ',
        mainCategory: 'Marketing',
        proTallent: false,
        availableToWork: true,
        lastName: 'B',
        hourlyRate: 78,
        avatar: "https://www.upwork.com/profile-portraits/c1vLZ8iVLN2bcmwEFyXQEVnwpSYjzef47L2ZVaXcTUc_IeTA8Pfn-ZxYt4z2qJO5j7",
        verified: true,
        description: 'With over 3 years of industry experience, I am a seasoned UI/UX designer who specializes in crafting clean, modern interfaces ',
        category: "Design",
        jobs: {
            completed: 78,
            cancelled: 3,
            inProgress: 7
        },
        revneue: 78000,
        services: [
            {
                _id: 's_1',
                title: "I will do UIUX for you mobile application or website in figma or xdk",
                description: "Are you looking to elevate your digital presence with captivating and intuitive interfaces? Look no further! With over 5 years of industry experience, I am a seasoned UI/UX designer who specializes in crafting clean, modern interfaces that leave a lasting impression. I have a passion for creating designs that seamlessly blend aesthetics with functionality, ensuring a delightful user experience at every interaction. By staying up-to-date with the latest design trends and best practices, I bring fresh and innovative ideas to the table, breathing life into your brand and product. From concept to completion, I meticulously analyze user needs and behavior to develop visually stunning interfaces that are both visually appealing and easy to navigate. Through a user-centered design approach, I strive to understand your target audience and align their goals with your business objectives, resulting in a harmonious fusion of form and function. With a keen eye for detail, I meticulously craft each element, from typography and color palettes to iconography and layout, creating a cohesive and immersive experience that captivates users and enhances their engagement. I believe in the power of simplicity and elegance, ensuring that every interface I design not only looks great but also functions flawlessly across devices and platforms. Collaboration is at the heart of my process. I work closely with clients, stakeholders, and development teams, valuing open communication and feedback to ensure that your vision is translated into a remarkable reality. I am proficient in industry-standard design tools and methodologies, allowing me to deliver high-quality, pixel-perfect designs on time and within budget. If you're ready to take your digital presence to new heights and leave a lasting impact on your audience, let's connect. Together, we can create an attractive and user-centric interface that sets you apart from the competition and drives meaningful results.",
                comments: [
                    {
                        projectHeading: "Need Graphic Designer for Tech Company Ads and Banners",
                        description: "Clive really did a magnificent job in hearing and understanding my vision and bringing it to life. This website was already in progress which can be a barrier to some designers, as many of the proposals I received wanted to completely scrap my ideas and start fresh. Clive took what I already had and enhanced it in so many ways, while still adding his own personal design touches. He has such an eye for seamless and elegant design, it makes the viewer feel your website rather than just viewing it. Amazing work.",
                        commentDate: "March 12 2023",
                        rated: 5,
                        price: 4500,
                    },
                    {
                        projectHeading: "Ongoing Graphic Design Support",
                        description: "2nd project down with us, and he has been fantastic for building out our landing pages",
                        commentDate: "April 02 2022",
                        rated: 5,
                        price: 3700,
                    }, {
                        projectHeading: "Design Four Startup Web UX/UI Screens and Logo",
                        description: "Really great work from civil. Her colour balances are great, and communication and responsiveness on point. Will be working with her again for sure",
                        commentDate: "March 12 2023",
                        rated: 5,
                        price: 234,
                    },
                    {
                        projectHeading: "Designer to build direct-to-consumer banner ads in Bannersnack",
                        description: "Deep understanding of the aesthetics, pacing, and legibility required for digital marketing design. Clive exceeds expectations and is skilled in clean & efficient motion graphics",
                        commentDate: "April 02 2022",
                        rated: 4.6,
                        price: 1200,
                    },

                ],
                profile: [
                    'https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/portfolio-large-04-340x250.jpg',
                    'https://www.upwork.com/att/download/portfolio/persons/uid/1173403296888061952/profile/projects/files/1253575602255597568',
                    'https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/portfolio-large-06-340x250.jpg',
                ],
            }
        ],
        comments: [
            {
                Heading: "Ongoing Graphic Design Support",
                title: "I highly recommend Clive for any graphic design needs! He provided exceptional support for our email designs, graphic design templates, and brand development. His attention to detail and prompt communication made the design process seamless. His expertise and responsiveness truly exceeded our expectation",
                date: "Feb 09, 2021 10:00 PM",
                rated: 5,
            },
            {
                Heading: "Design Four Startup Web UX/UI Screens and Logo",
                title: "Really great work from civil. Her colour balances are great, and communication and responsiveness on point. Will be working with her again for sure",
                date: "July  03, 2022 8:00 AM",
                rated: 5,
            }, {
                Heading: "Need Graphic Designer for Tech Company Ads and Banners",
                title: "Clive really did a magnificent job in hearing and understanding my vision and bringing it to life. This website was already in progress which can be a barrier to some designers, as many of the proposals I received wanted to completely scrap my ideas and start fresh. Clive took what I already had and enhanced it in so many ways, while still adding his own personal design touches. He has such an eye for seamless and elegant design, it makes the viewer feel your website rather than just viewing it. Amazing work.",
                date: "November  09, 2023 08:00 AM",
                rated: 4,
            },
            {
                Heading: "Designer to build direct-to-consumer banner ads in Bannersnack",
                title: "Deep understanding of the aesthetics, pacing, and legibility required for digital marketing design. Clive exceeds expectations and is skilled in clean & efficient motion graphics",
                date: "March 09, 2023 11:00 AM",
                rated: 4.6,
            },
        ],
        specialization: ["Ux Designer", "Expert Adobe", "Graphics"],
        projectsThumbs: [
            'https://www.upwork.com/att/download/portfolio/persons/uid/1173403296888061952/profile/projects/files/1182948041536147456',
            'https://www.upwork.com/att/download/portfolio/persons/uid/1173403296888061952/profile/projects/files/1253575602255597568',
            'https://www.upwork.com/att/download/portfolio/persons/uid/1173403296888061952/profile/projects/files/7e75af82-e218-4ebf-a1c2-f79532618921',
        ],
    },
    // finish 2

    {
        firstName: 'Tetiana ',
        mainCategory: 'Marketing',
        proTallent: false,
        availableToWork: true,
        lastName: 'F',
        hourlyRate: 42,
        avatar: "https://www.upwork.com/profile-portraits/c11fTnFoBJwtpJYdKXH6MbigGzO65YJV9Ik_B-dT6ach09WYXFTwhUvMaVUCXmHU3v",
        verified: true,
        description: 'Web Designer with wide experience in graphic design, UI / UX and media/print design.',
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
                title: "Web designer & Graphic Designer | Elementor Develope",
                description: "Hi, there! I'm a Web Designer with wide experience in graphic design, UI / UX and media/print design. I help you connect with your ideal audience with modern, simple, and concise design and trendy ideas. For you I offer: - Optimal terms of performance of works; - Strict adherence to the terms of reference for the project; - Adaptation for mobile devices and tablets; - An individual approach to every client. For my part, I guarantee compliance with deadlines, individual approach, politeness, and pleasant cooperation. As a result, you will receive models that will be fully prepared for the work of the layout designer. Feel free to ask questions, I am always happy to chat with you.",
                comments: [
                    {
                        projectHeading: "UI/UX Designer Required",
                        description: "Really great work from Tetiana. Her colour balances are great, and communication and responsiveness on point. Will be working with her again for sure",
                        commentDate: "April 02 2022",
                        rated: 5,
                        price: 1900,
                    },
                    {
                        projectHeading: "Top notch UI/UX designer needed",
                        description: "Tetiana is a nice person to work with.",
                        commentDate: "March 12 2023",
                        rated: 5,
                        price: 900,
                    },
                    {
                        projectHeading: "Design and Development website Figma + Elementor",
                        description: "Tetiana did an excellent job with a quick turn around.",
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
                Heading: "UI/UX Designer Required",
                title: "Really great work from Tetiana. Her colour balances are great, and communication and responsiveness on point. Will be working with her again for sure",
                date: "March 09, 2023 11:00 AM",
                rated: 4,
            },
            {
                Heading: "Top notch UI/UX designer needed",
                title: "Tetiana is a nice person to work with",
                date: "March 09, 2023 11:00 AM",
                rated: 5,
            }, {
                Heading: "Design and Development website Figma + Elementor",
                title: "Tetiana did an excellent job with a quick turn around.",
                date: "March 09, 2023 11:00 AM",
                rated: 4,
            },
        ],
        specialization: ["web Designer", "Ux Designer", "Graphics"],
        projectsThumbs: [
            'https://rainbowit.net/themes/inbio/wp-content/uploads/2021/09/marketing-young-cute-business-lady-striped-shirt-office-showing-raising-results-1-340x250.jpg',
            'https://rainbowit.net/themes/inbio/wp-content/uploads/2021/09/pretty-curly-young-woman-writing-notes-startup-project-340x250.jpg',
            'https://rainbowit.net/themes/inbio/wp-content/uploads/2021/09/road-sign-direction-perforated-paper-arrow-340x250.jpg',
        ],
    },

    // finsih 3
    {
        firstName: 'Ruslan ',
        mainCategory: 'Marketing',
        proTallent: false,
        availableToWork: true,
        lastName: 'Morris',
        hourlyRate: 102,
        avatar: "https://www.upwork.com/profile-portraits/c15smPrEC9DIIcRV8Dznmo4uJfF4UxNogezl5phAKMKGV2JdOhoob9EUukFtElSFuM",
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
                title: "I will be your Frontend Developer in React js ",
                description: "Experienced web developer with higher technical education with a degree in Information Management Systems and Technologies. I have over 5 years of commercial experience in the front-end development area and 2 years in back-end development and I am always looking to expand my skillset and grow. My main focus is Web applications, UI/UX, sites layout, and landing pages development with an emphasis to use the React.js library. Also in my job, I use WordPress CMS. Career highlights: ✅ Web developer with over 7 years of professional experience in developing and supporting various commercial websites and applications. ✅ Good understanding of modern web development technologies, approaches, and the industry in general. ✅ Have experience working in large teams and with complex products. ✅ Have developed dozens of websites and landing pages, that attract hundreds of new users and help my clients grow their business.  Strong communication skills",
                comments: [
                    {
                        projectHeading: "Top-Notch React.js Developer",
                        description: "Ruslan is a great value addition to any front-end team. He has got leadership and a great understanding and knowledge of front-end development. We are all thankful for his contribution to our project. Will work with him always and will always recommend him. Thank you Ruslan.. it was such a pleasure working with you.",
                        commentDate: "April 02 2022",
                        rated: 5,
                        price: 15212,
                    },
                    {
                        projectHeading: "front-end developer",
                        description: "Very deadline oriented person. Provide pixel perfect coding in very short time period.This was a test paid task. We are going to hire Ruslan for our next project.",
                        commentDate: "March 12 2023",
                        rated: 4.8,
                        price: 23400,
                    },
                    {
                        projectHeading: "Set Selection on Textarea using Javascript",
                        description: "Ruslan was able to complete the job as specified. Good freelancer",
                        commentDate: "April 02 2022",
                        rated: 4.7,
                        price: 2489,
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
                Heading: "Top-Notch React.js Developer",
                title: "Ruslan is a great value addition to any front-end team. He has got leadership and a great understanding and knowledge of front-end development. We are all thankful for his contribution to our project. Will work with him always and will always recommend him. Thank you Ruslan.. it was such a pleasure working with you",
                date: "March 09, 2023 11:00 AM",
                rated: 4,
            },
            {
                Heading: "front-end developer",
                title: "Very deadline oriented person. Provide pixel perfect coding in very short time period.This was a test paid task. We are going to hire Ruslan for our next project..",
                date: "March 09, 2023 11:00 AM",
                rated: 5,
            }, {
                Heading: "Set Selection on Textarea using Javascript",
                title: "Ruslan was able to complete the job as specified. Good freelancer",
                date: "March 09, 2023 11:00 AM",
                rated: 4,
            },
        ],
        specialization: ["React JS", "Web Developer", "web Designer ",],
        projectsThumbs: [
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWBG38F-lq5h1QfvSeC1TWMhAhHy0Q3v9CRw&usqp=CAU',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpJX0Jo6LD9BdP5QKGsmhRPry5lRCOwU8NHg&usqp=CAU',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjkt6-gO3HTEZZaMTQR37i0eTLSfxUbdK6AQ&usqp=CAU',

        ],
    },
    // finsh4 
    {
        firstName: 'Sebastian',
        mainCategory: 'Marketing',
        proTallent: false,
        availableToWork: true,
        lastName: 'Bells',
        hourlyRate: 98,
        avatar: "https://www.upwork.com/profile-portraits/c1i5Qwe91IMwQxFIfH2ynJ5QIsM4tJeBN8SNqNLV2vTR6kvXVPN65BAkW7w2BY0-kH",
        verified: true,
        description: ' i am  Full Stack developer  with experties in Frontend and backend Technalogy',
        category: "interfaces",
        jobs: {
            completed: 102,
            cancelled: 7,
            inProgress: 2
        },
        revneue: 78000,
        services: [
            {
                _id: 's_1',
                title: "I will  be Full Stack Developer ",
                description: "Welcome to my profile, My name is Sebastian, and I'm a professional software engineer with three years of experience, I have worked on many interesting projects with both big and small companies, and I have helped local businesses to automate their services during the pandemic. As a lead developer, I've mentored interns, and taught them how to turn their projects into well-tested and easily maintainable software. I am passionate about learning as much as I can , even during my free time and sharing my experience with others. I have worked with many frameworks/libraries but I discovered React to be my favourite. On server side I love using modern technologies like GraphQL, Docker, Varnish and etc",

                comments: [
                    {
                        projectHeading: "Fullstack Javascript Developer",
                        description: "It was a pleasure to work with Sebastian. He demonstrated excellent communication skills throughout the project, and his coding skills were top-notch. He delivered high-quality work on time and was always responsive to our feedback. We highly recommend Sebastian and look forward to working with him again in the future",
                        commentDate: "March 12 2023",
                        rated: 5,
                        price: 2500,
                    },
                    {
                        projectHeading: "Need a quick fix on my final project",
                        description: "Quick, Easly Explained. A well put together gentleman ready to assist beginners. Totally recommend! Saved me from failing my exam",
                        commentDate: "April 02 2022",
                        rated: 4.5,
                        price: 4000,
                    }, {
                        projectHeading: "Expert React Developers- Fulltime - Long Term",
                        description: "great work and amazing outcome",
                        commentDate: "March 12 2023",
                        rated: 5,
                        price: 7500,
                    },
                    {
                        projectHeading: "ReactJS Developer who wants to build the next big thing",
                        description: "Thinks beyond the task, great team player, super skilled developer and always open to learning something new. You simply can't go wrong with this guy",
                        commentDate: "April 02 2022",
                        rated: 5,
                        price: 8000,
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
        specialization: ["Full Stack developer", "Node JS", "React Js"],
        projectsThumbs: [
            'https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/portfolio-large-04-340x250.jpg',
            'https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/portfolio-large-05-340x250.jpg',
            'https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/portfolio-large-06-340x250.jpg',
        ],
    },

    //finish5

    {
        firstName: 'Domonkos ',
        mainCategory: 'Marketing',
        proTallent: false,
        availableToWork: true,
        lastName: 'Bells',
        hourlyRate: 98,
        avatar: "https://www.upwork.com/profile-portraits/c13IjCH8alEKNMH_fnm_Dj3Delfzl469xVBQjWX30ZsNEY8IYI8WcPnNkj746t-Iwr",
        verified: true,
        description: 'Unity Specialist and C# Expert for 10+ years in the game and software industry.   ',
        category: "interfaces",
        jobs: {
            completed: 102,
            cancelled: 7,
            inProgress: 2
        },
        revneue: 56000,
        services: [
            {
                _id: 's_1',
                title: "Expert Unity Developer ",
                description: "Hello! Unity Specialist and C# Expert for 10+ years in the game and software industry. My goal is to create outstanding product for you the way you've imagined! Contact me if you are looking for: -Reliable and loyal developer -Clean, stable and usable product -Experienced Development Lead or Developer -Producer, Project Manager or Consultant I'm best at: -Project management from ground up -C# and Unity development and workflow -Game play Development -Graphics URP/HDRP/Deferred/Forward (lightning, shaders, post process effects) -Optimization (code and assets too) -Bug fixing and Debugging even in live products as firefighter -Time and resource management (leading teams and providing reliable schedule) -Networking solutions -Documentation My experiences are coming from working with multiple high profile companies, with project types ranging from PC Steam Games, AR and VR Games, Business to Business Applications. Have a nice day and Looking forward working with you!",

                comments: [
                    {
                        projectHeading: "Game coding - create PBR maps and UV mapping from image",
                        description: "As a technical artist, Domonkos is highly skilled, at both the tech and communication sides. He has played an important role in our growing team, for a number of challenging projects. He also offered highly valuable advices in approaching product development. I definetely want to work with him again in upcoming Unity projects",
                        commentDate: "March 12 2023",
                        rated: 5,
                        price: 2500,
                    },
                    {
                        projectHeading: "Looking for a senior Unity developer for educational games",
                        description: "Domonkos is a great Unity developer. He knows his stuff. Great communication too",
                        commentDate: "April 02 2022",
                        rated: 4.5,
                        price: 4000,
                    }, {
                        projectHeading: "Fix issues found in firebase",
                        description: "Amazing person with amazing skills",
                        commentDate: "March 12 2023",
                        rated: 5,
                        price: 7500,
                    },
                    {
                        projectHeading: "Unity Developer",
                        description: "Great to work with. Has deep knowledge in Unity and is committed to putting out high quality code while working efficiently. Maintained good communication throughout the project, and met all requirements successfully ",
                        commentDate: "April 02 2022",
                        rated: 5,
                        price: 8000,
                    },

                ],
                profile: [
                    'https://www.upwork.com/att/download/portfolio/persons/uid/650319826375020544/profile/projects/files/f5cdb152-abe3-4143-a559-20f89a61d6ab',
                    'https://www.upwork.com/att/download/portfolio/persons/uid/650319826375020544/profile/projects/files/92fb0dac-0810-47a8-9414-872f358467ac',
                    'https://www.upwork.com/att/download/portfolio/persons/uid/650319826375020544/profile/projects/files/953678690184065024',
                ],
            }
        ],
        comments: [
            {
                Heading: "Game coding - create PBR maps and UV mapping from image",
                title: "As a technical artist, Domonkos is highly skilled, at both the tech and communication sides. He has played an important role in our growing team, for a number of challenging projects. He also offered highly valuable advices in approaching product development. I definetely want to work with him again in upcoming Unity projects",
                date: "March 09, 2023 11:00 AM",
                rated: 4,
            },
            {
                Heading: "Looking for a senior Unity developer for educational games",
                title: "Domonkos is a great Unity developer. He knows his stuff. Great communication too.",
                date: "March 09, 2023 11:00 AM",
                rated: 5,
            }, {
                Heading: "Fix issues found in firebase",
                title: "Amazing person with amazing skills",
                date: "March 09, 2023 11:00 AM",
                rated: 4,
            },
            {
                Heading: "Unity Developer",
                title: "Great to work with. Has deep knowledge in Unity and is committed to putting out high quality code while working efficiently. Maintained good communication throughout the project, and met all requirements successfully",
                date: "March 09, 2023 11:00 AM",
                rated: 5,
            },
        ],
        specialization: ["Animation", "3D", "Expert Unity"],
        projectsThumbs: [
            'https://www.upwork.com/att/download/portfolio/persons/uid/650319826375020544/profile/projects/files/f5cdb152-abe3-4143-a559-20f89a61d6ab',
            'https://www.upwork.com/att/download/portfolio/persons/uid/650319826375020544/profile/projects/files/92fb0dac-0810-47a8-9414-872f358467ac',
            'https://www.upwork.com/att/download/portfolio/persons/uid/650319826375020544/profile/projects/files/953678690184065024',
        ],
    },
    // finish6 
    {
        firstName: 'Umar ',
        mainCategory: 'Marketing',
        proTallent: false,
        availableToWork: true,
        lastName: ' .B',
        hourlyRate: 98,
        avatar: "https://www.upwork.com/profile-portraits/c1QAd-sSC3s6b36s3SfyztFIBLBAF_UZOwKUWpIdht351wGIdHzx2exaZZfQQhyFpG",
        verified: true,
        description: 'Unity Development | 2D / 3D / PC / Android / iOS / WebGL   ',
        category: "interfaces",
        jobs: {
            completed: 102,
            cancelled: 7,
            inProgress: 2
        },
        revneue: 200000,
        services: [
            {
                _id: 's_1',
                title: "Expert Unity Developer ",
                description: "Unity Development expert with 12+ years of experience, specializing in NFT blockchain games using CryptoCurrency wallet with excellent skills in Software Architecture for Large/Medium Games, Core Game Development, and Backend-Frontend interaction. 🔥TOP FIVE HIGHEST RATED Unity and HIGHEST EARNING (158,000+ USD)My experience as a Unity Developer (Versions 5.3.2 - 2021) is extensive and diverse, I methodically identify the project requirements, and decide on the best architecture using a vast variety of techniques and strategies. I have solved numerous show-stopping performance problems, as well as often re-engineered immensely complex designs and code, providing significantly improved performance on handheld devices and providing an overall better gaming experience. As an Expert Unity Developer, I possess an innate ability to engineer games employing AAA Industry Standard Best Practices and to design mutable and modular code/systems resulting in decoupled components interacting with each other fluidly - these are totally Reusable ♻️, totally Scalable ⚖️ and totally Beautiful ✨",

                comments: [
                    {
                        projectHeading: "Publish Unity/Firebase game to iOS and Google App Store",
                        description: "Very professional and communicative. It's a pleasure working with Umar and his team. I can highly recommend them",
                        commentDate: "March 12 2023",
                        rated: 5,
                        price: 2500,
                    },
                    {
                        projectHeading: "Accessible Chess Game",
                        description: "Umar is a wizard. Even if the specs aren't that detailed, he will break down the tasks and deliver every time. Personal favorite: The  when he gives that, you can be sure a feature is stable! Quick to understand code. Quick to ask the right questions. 11/10",
                        commentDate: "April 02 2022",
                        rated: 4.5,
                        price: 4000,
                    }, {
                        projectHeading: "Upgrading an existing Unity 2018 based app to Unity 2020",
                        description: "Amazing person with amazing skills",
                        commentDate: "March 12 2023",
                        rated: 5,
                        price: 7500,
                    },
                    {
                        projectHeading: "Developer for setting up IAP, Ads and publishing",
                        description: "This developer is the best and most honest of the many developers I have ever seen. He did his best to fix parts that had been spoiled by an agency in the past. Although this follow-up development is quite inconvenient, he got the job done with integrity and perfection. Work was fast, and there was no problem with communication. The period of working with him was always looking forward to and a pleasant experience. I would like to continue working with him. ",
                        commentDate: "April 02 2022",
                        rated: 5,
                        price: 8000,
                    },

                ],
                profile: [
                    'https://www.upwork.com/att/download/portfolio/persons/uid/650319826375020544/profile/projects/files/f5cdb152-abe3-4143-a559-20f89a61d6ab',
                    'https://www.upwork.com/att/download/portfolio/persons/uid/650319826375020544/profile/projects/files/92fb0dac-0810-47a8-9414-872f358467ac',
                    'https://www.upwork.com/att/download/portfolio/persons/uid/650319826375020544/profile/projects/files/953678690184065024',
                ],
            }
        ],
        comments: [
            {
                Heading: "Publish Unity/Firebase game to iOS and Google App Store",
                title: "As a technical artist, Domonkos is highly skilled, at both the tech and communication sides. He has played an important role in our growing team, for a number of challenging projects. He also offered highly valuable advices in approaching product development. I definetely want to work with him again in upcoming Unity projects",
                date: "March 09, 2023 11:00 AM",
                rated: 4,
            },
            {
                Heading: "Accessible Chess Game",
                title: "Umar is a wizard. Even if the specs aren't that detailed, he will break down the tasks and deliver every time. Personal favorite: The  when he gives that, you can be sure a feature is stable! Quick to understand code. Quick to ask the right questions. 11/10",
                date: "March 09, 2023 11:00 AM",
                rated: 5,
            }, {
                Heading: "Upgrading an existing Unity 2018 based app to Unity 2020",
                title: "Amazing person with amazing skills",
                date: "March 09, 2023 11:00 AM",
                rated: 4,
            },
            {
                Heading: "Developer for setting up IAP, Ads and publishing",
                title: "This developer is the best and most honest of the many developers I have ever seen. He did his best to fix parts that had been spoiled by an agency in the past. Although this follow-up development is quite inconvenient, he got the job done with integrity and perfection. Work was fast, and there was no problem with communication. The period of working with him was always looking forward to and a pleasant experience. I would like to continue working with him",
                date: "March 09, 2023 11:00 AM",
                rated: 5,
            },
        ],
        specialization: ["Animation", "3D", "Expert Unity"],
        projectsThumbs: [
            'https://www.upwork.com/att/download/portfolio/persons/uid/650319826375020544/profile/projects/files/f5cdb152-abe3-4143-a559-20f89a61d6ab',
            'https://www.upwork.com/att/download/portfolio/persons/uid/650319826375020544/profile/projects/files/92fb0dac-0810-47a8-9414-872f358467ac',
            'https://www.upwork.com/att/download/portfolio/persons/uid/650319826375020544/profile/projects/files/953678690184065024',
        ],
    },





]