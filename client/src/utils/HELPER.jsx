import { toast } from 'react-toastify';

export const Toaster = (type, error) => {
  switch (type) {
    case 'loading':
      toast.loading('Loading...', {
        position: "top-right",
        autoClose: false,
        hideProgressBar: true
      });
      break;
    case 'success':
      toast.success('Loaded', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true
      });
      break;
    case 'error':
      toast.error(`${error}`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true
      });
      break;

    default:
      break;
  }

};


export const formatDate = (dateString, withTime = true) => {

  if (withTime) {
    const options = {
      year: 'numeric',
      month: 'long',
      day: '2-digit',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    };

    const date = new Date(dateString);
    const formattedDate = date.toLocaleString('en-US', options).replace(' at', '');

    return formattedDate;
  } else {
    const options = {
      year: 'numeric',
      month: 'long',
      day: '2-digit'
    };

    const date = new Date(dateString);
    const formattedDate = date.toLocaleString('en-US', options);

    return formattedDate;
  }

};




// selected Dummy Profile 
export const dummy = {
  "jobs": {
    "completed": 102,
    "cancelled": 7,
    "inProgress": 2
  },
  "_id": "6477d04bb132f36d15119a89",
  "firstName": "Hammad",
  "mainCategory": "Interfaces",
  "proTallent": false,
  "availableToWork": true,
  "lastName": "Shafiq",
  "hourlyRate": 140,
  "avatar": "https://avatars.githubusercontent.com/u/42932321?v=4",
  "verified": true,
  "description": "Experienced Full Stack Web Developer adept at building apps from scratch. ",
  "category": "Full Stack developer",
  "revenue": 234000,
  "services": [
    {
      "title": " i will Your Full Stack Developer React || Node js ",
      "description": "",
      "comments": [
        {
          "projectHeading": "Post Textile ",
          "description": "Muhammad Hamad is working on our logistics management system as Full stack developer . He make custom frontend app pure in JavaScript now is working on backend that will be soon live. He always full fill his commitment . I always paid him advance . I never realized I did mistake 100% recommended",
          "commentDate": "2023-03-11T19:00:00.000Z",
          "rated": 5,
          "price": 23000,
          "_id": "6477d04bb132f36d15119a8b"
        },
        {
          "projectHeading": " Digtal Flow ",
          "description": "I've had the pleasure of working with Muhammad, as remote Full Stack developer, for the past three years. He consistently displays professionalism, excellent coding skills, effective communication, and honesty. Muhammad's passion for his work goes beyond financial motivations, driving him to strive for perfection.Highly recommended",
          "commentDate": "2022-04-01T19:00:00.000Z",
          "rated": 5,
          "price": 60000,
          "_id": "6477d04bb132f36d15119a8c"
        }
      ],
      "profile": [
        "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/293240721/original/6891870e69ea2793c44105520881aa0556da1f9b.png",
        "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/250604452/original/789892c3543a3199c6f38b416ca1f42bf92a5039.png",
        "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/267148774/original/ddf545f98b847c3cd66c9afe1cf0b680148237f1.png"
      ],
      "_id": "6477d04bb132f36d15119a8a"
    }
  ],
  "comments": [
    {
      "Heading": "Post Textile App",
      "title": "Muhammad Hamad is working on our logistics management system as Full stack developer . He make custom frontend app pure in JavaScript now is working on backend that will be soon live. He always full fill his commitment . I always paid him advance . I never realized I did mistake 100% recommended",
      "date": "2023-07-02T19:00:00.000Z",
      "rated": 5,
      "_id": "6477d04bb132f36d15119a8d"
    },
    {
      "Heading": "stock",
      "title": "I've had the pleasure of working with Muhammad, as remote Full Stack developer, for the past three years. He consistently displays professionalism, excellent coding skills, effective communication, and honesty. Muhammad's passion for his work goes beyond financial motivations, driving him to strive for perfection.Highly recommended",
      "date": "2022-01-14T06:00:00.000Z",
      "rated": 5,
      "_id": "6477d04bb132f36d15119a8e"
    }
  ],
  "specialization": [
    "Full Stack devloper",
    "ReactJs",
    "Node Js"
  ],
  "projectsThumbs": [
    "https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/portfolio-large-01-340x250.jpg",
    "https://fiverr-res.cloudinary.com/images/t_medium7,q_auto,f_auto,q_auto,f_auto/gigs/150311157/original/b2cffba150592f0c20aece34ffefa82869c3237d/develop-a-web-app-with-react-js-node-js.jpeg",
    "https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/portfolio-large-03-340x250.jpg"
  ],
  commentCount: function () {
    return this.comments?.length
  },
  ratingCount: function () {
    let number = this.comments.reduce((a, b) => a + b.rated, 0) / this.commentCount()
    return number.toFixed(1)
  },
  profileName: function () {
    return `${this.firstName} ${this.lastName}`
  },
  "__v": 0
};