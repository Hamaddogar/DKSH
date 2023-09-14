import { toast } from 'react-toastify';
import axios from 'axios';
import { APIS } from './endPoints';

export const Toaster = (type, error) => {
    switch (type) {
        case 'loading':
            toast.loading('Loading...', {
                position: 'top-right',
                autoClose: false,
                hideProgressBar: true,
            });
            break;
        case 'success':
            toast.success('Loaded', {
                position: 'top-right',
                autoClose: 3000,
                hideProgressBar: true,
            });
            break;
        case 'error':
            toast.error(`${error}`, {
                position: 'top-right',
                autoClose: 3000,
                hideProgressBar: true,
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
            hour12: true,
        };

        const date = new Date(dateString);
        const formattedDate = date.toLocaleString('en-US', options).replace(' at', '');

        return formattedDate;
    } else {
        const options = {
            year: 'numeric',
            month: 'long',
            day: '2-digit',
        };

        const date = new Date(dateString);
        const formattedDate = date.toLocaleString('en-US', options);

        return formattedDate;
    }
};

export const updateSetting = async ({ userId, settings }) => {
    const res = await axios.post(APIS.updateSettings, { userId, settings });
    console.log('theme', res.data);
};

// selected Dummy Profile
export const dummy = {
    jobs: {
        completed: 102,
        cancelled: 7,
        inProgress: 2,
    },
    _id: '6477d04bb132f36d15119a89',
    firstName: 'Hammad',
    mainCategory: 'Interfaces',
    proTallent: false,
    availableToWork: true,
    lastName: 'Shafiq',
    hourlyRate: 140,
    avatar: 'https://avatars.githubusercontent.com/u/42932321?v=4',
    verified: true,
    description: 'Experienced Full Stack Web Developer adept at building apps from scratch. ',
    category: 'Full Stack developer',
    revenue: 234000,
    services: [
        {
            title: ' i will Your Full Stack Developer React || Node js ',
            description: '',
            comments: [
                {
                    projectHeading: 'Post Textile ',
                    description:
                        'Muhammad Hamad is working on our logistics management system as Full stack developer . He make custom frontend app pure in JavaScript now is working on backend that will be soon live. He always full fill his commitment . I always paid him advance . I never realized I did mistake 100% recommended',
                    commentDate: '2023-03-11T19:00:00.000Z',
                    rated: 5,
                    price: 23000,
                    _id: '6477d04bb132f36d15119a8b',
                },
                {
                    projectHeading: ' Digtal Flow ',
                    description:
                        "I've had the pleasure of working with Muhammad, as remote Full Stack developer, for the past three years. He consistently displays professionalism, excellent coding skills, effective communication, and honesty. Muhammad's passion for his work goes beyond financial motivations, driving him to strive for perfection.Highly recommended",
                    commentDate: '2022-04-01T19:00:00.000Z',
                    rated: 5,
                    price: 60000,
                    _id: '6477d04bb132f36d15119a8c',
                },
            ],
            profile: [
                'https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/293240721/original/6891870e69ea2793c44105520881aa0556da1f9b.png',
                'https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/250604452/original/789892c3543a3199c6f38b416ca1f42bf92a5039.png',
                'https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/267148774/original/ddf545f98b847c3cd66c9afe1cf0b680148237f1.png',
            ],
            _id: '6477d04bb132f36d15119a8a',
        },
    ],
    comments: [
        {
            Heading: 'Post Textile App',
            title: 'Muhammad Hamad is working on our logistics management system as Full stack developer . He make custom frontend app pure in JavaScript now is working on backend that will be soon live. He always full fill his commitment . I always paid him advance . I never realized I did mistake 100% recommended',
            date: '2023-07-02T19:00:00.000Z',
            rated: 5,
            _id: '6477d04bb132f36d15119a8d',
        },
        {
            Heading: 'stock',
            title: "I've had the pleasure of working with Muhammad, as remote Full Stack developer, for the past three years. He consistently displays professionalism, excellent coding skills, effective communication, and honesty. Muhammad's passion for his work goes beyond financial motivations, driving him to strive for perfection.Highly recommended",
            date: '2022-01-14T06:00:00.000Z',
            rated: 5,
            _id: '6477d04bb132f36d15119a8e',
        },
    ],
    specialization: ['Full Stack devloper', 'ReactJs', 'Node Js'],
    projectsThumbs: [
        'https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/portfolio-large-01-340x250.jpg',
        'https://fiverr-res.cloudinary.com/images/t_medium7,q_auto,f_auto,q_auto,f_auto/gigs/150311157/original/b2cffba150592f0c20aece34ffefa82869c3237d/develop-a-web-app-with-react-js-node-js.jpeg',
        'https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/portfolio-large-03-340x250.jpg',
    ],
    __v: 0,
};

export const countryList = [
    'Afghanistan',
    'Aland Islands',
    'Albania',
    'Algeria',
    'American Samoa',
    'Andorra',
    'Angola',
    'Anguilla',
    'Antarctica',
    'Antigua And Barbuda',
    'Argentina',
    'Armenia',
    'Aruba',
    'Australia',
    'Austria',
    'Azerbaijan',
    'The Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bermuda',
    'Bhutan',
    'Bolivia',
    'Bosnia and Herzegovina',
    'Botswana',
    'Bouvet Island',
    'Brazil',
    'British Indian Ocean Territory',
    'Brunei',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Cape Verde',
    'Cayman Islands',
    'Central African Republic',
    'Chad',
    'Chile',
    'China',
    'Christmas Island',
    'Cocos (Keeling) Islands',
    'Colombia',
    'Comoros',
    'Congo',
    'Democratic Republic of the Congo',
    'Cook Islands',
    'Costa Rica',
    "Cote D'Ivoire (Ivory Coast)",
    'Croatia',
    'Cuba',
    'Cyprus',
    'Czech Republic',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'East Timor',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Ethiopia',
    'Falkland Islands',
    'Faroe Islands',
    'Fiji Islands',
    'Finland',
    'France',
    'French Guiana',
    'French Polynesia',
    'French Southern Territories',
    'Gabon',
    'The Gambia',
    'Georgia',
    'Germany',
    'Ghana',
    'Gibraltar',
    'Greece',
    'Greenland',
    'Grenada',
    'Guadeloupe',
    'Guam',
    'Guatemala',
    'Guernsey and Alderney',
    'Guinea',
    'Guinea-Bissau',
    'Guyana',
    'Haiti',
    'Heard Island and McDonald Islands',
    'Honduras',
    'Hong Kong S.A.R.',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iran',
    'Iraq',
    'Ireland',
    'Israel',
    'Italy',
    'Jamaica',
    'Japan',
    'Jersey',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kiribati',
    'North Korea',
    'South Korea',
    'Kuwait',
    'Kyrgyzstan',
    'Laos',
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Macau S.A.R.',
    'Macedonia',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Man (Isle of)',
    'Marshall Islands',
    'Martinique',
    'Mauritania',
    'Mauritius',
    'Mayotte',
    'Mexico',
    'Micronesia',
    'Moldova',
    'Monaco',
    'Mongolia',
    'Montenegro',
    'Montserrat',
    'Morocco',
    'Mozambique',
    'Myanmar',
    'Namibia',
    'Nauru',
    'Nepal',
    'Bonaire, Sint Eustatius and Saba',
    'Netherlands',
    'New Caledonia',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'Niue',
    'Norfolk Island',
    'Northern Mariana Islands',
    'Norway',
    'Oman',
    'Pakistan',
    'Palau',
    'Palestinian Territory Occupied',
    'Panama',
    'Papua new Guinea',
    'Paraguay',
    'Peru',
    'Philippines',
    'Pitcairn Island',
    'Poland',
    'Portugal',
    'Puerto Rico',
    'Qatar',
    'Reunion',
    'Romania',
    'Russia',
    'Rwanda',
    'Saint Helena',
    'Saint Kitts And Nevis',
    'Saint Lucia',
    'Saint Pierre and Miquelon',
    'Saint Vincent And The Grenadines',
    'Saint-Barthelemy',
    'Saint-Martin (French part)',
    'Samoa',
    'San Marino',
    'Sao Tome and Principe',
    'Saudi Arabia',
    'Senegal',
    'Serbia',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Slovakia',
    'Slovenia',
    'Solomon Islands',
    'Somalia',
    'South Africa',
    'South Georgia',
    'South Sudan',
    'Spain',
    'Sri Lanka',
    'Sudan',
    'Suriname',
    'Svalbard And Jan Mayen Islands',
    'Swaziland',
    'Sweden',
    'Switzerland',
    'Syria',
    'Taiwan',
    'Tajikistan',
    'Tanzania',
    'Thailand',
    'Togo',
    'Tokelau',
    'Tonga',
    'Trinidad And Tobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Turks And Caicos Islands',
    'Tuvalu',
    'Uganda',
    'Ukraine',
    'United Arab Emirates',
    'United Kingdom',
    'United States',
    'United States Minor Outlying Islands',
    'Uruguay',
    'Uzbekistan',
    'Vanuatu',
    'Vatican City State (Holy See)',
    'Venezuela',
    'Vietnam',
    'Virgin Islands (British)',
    'Virgin Islands (US)',
    'Wallis And Futuna Islands',
    'Western Sahara',
    'Yemen',
    'Zambia',
    'Zimbabwe',
    'Kosovo',
    'Curaçao',
    'Sint Maarten (Dutch part)',
];

export const commentCount = function (comments) {
    return comments?.length;
};
export const ratingCount = function (comments, commentCount) {
    let number = comments.reduce((a, b) => a + b.rated, 0) / commentCount;
    return number.toFixed(1);
};
export const profileName = function (firstName, lastName) {
    return `${firstName} ${lastName}`;
};

// Function to call the /country endpoint and get country information
export const getCountryData = async () => {
    try {
        const response = await fetch(APIS.getCountry); // Replace '/country' with your actual endpoint URL
        if (!response.ok) {
            // Handle non-2xx status codes (e.g., 404 Not Found, 500 Internal Server Error)
            throw new Error('Failed to fetch data from the server.');
        }
        const data = await response.json();
        return data; // Return the data object containing country information
    } catch (error) {
        console.error('Error fetching country data:', error);
        return null; // Return null or handle the error appropriately in your application
    }
};
