import { PiDeviceRotateBold } from 'react-icons/pi';
import { CiCrop } from "react-icons/ci";
import { BsEmojiHeartEyes } from "react-icons/bs";
import { BsPersonHeart } from "react-icons/bs";
import { IconType } from 'react-icons';
import img1 from '../../public/Assets/images/create-account.png'
import img2 from '../../public/Assets/images/menuchart.png'
import img3 from '../../public/Assets/images/meals.png'
import img4 from '../../public/Assets/images/drinks.png'

export type NavItem = {
    id: string;
    List: string;
    href: string;
};

export type WhyScandishItem = {
    id: string;
    icon: IconType;
    boldText: string;
    smallText: string;
};


export const navslist: NavItem[] = [
    {
        id: "home",
        List: "Home",
        href: "/home"
    },
    {
        id: "Features",
        List: "Features",
        href: "/features"
    },
    {
        id: "work",
        List: "How it works",
        href: "/works"
    },
    {
        id: "Testimonial",
        List: "Testimonial",
        href: "/testimony"
    },
    {
        id: "contact",
        List: "Contact us",
        href: "/contact"
    }
];

export const whyscandish: WhyScandishItem[] = [
    {
        id: 'one',
        icon:  CiCrop,
        boldText: 'Easy Menu Management',
        smallText: 'Create, upload, and update menu items effortlessly.'
    },
    {
        id: 'two',
        icon: PiDeviceRotateBold,
        boldText: 'Easy Menu Management',
        smallText: 'Create, upload, and update menu items effortlessly.'
    },
    {
        id: 'three',
        icon: BsEmojiHeartEyes,
        boldText: 'Easy Menu Management',
        smallText: 'Create, upload, and update menu items effortlessly.'
    },
    {
        id: 'four',
        icon: BsPersonHeart,
        boldText: 'Easy Menu Management',
        smallText: 'Create, upload, and update menu items effortlessly.'
    },
];


export const scanfeatures = [
    {
        id: 'one',
        mainText: 'Customizable Templates:',
        span: 'Choose from a variety of templates to match your organization style.'
    },
    {
        id: 'two',
        mainText: 'Multi-Device Compatibility:',
        span: ' Access your digital menu on any device, anywhere.'
    },
    {
        id: 'three',
        mainText: 'Photo and Description Uploads:',
        span: 'Add detailed descriptions and high-quality images to showcase your menu..'
    },
    {
        id: 'four',
        mainText: 'Price Management:',
        span: ' Easily update and manage prices for all your menu items.'
    },
];


export const howitworks = [
    {
        id: 'one',
        number:'01',
        title: 'Sign up',
        description: 'Create your account and set up your organization profile.',
        img: img1
    },
    {
        id: 'two',
        number:'02',
        title: 'Upload Menu',
        description: 'Add your menu items, descriptions, prices, and images.',
        img: img2
    },
    {
        id: 'three',
        number:'03',
        title: 'Customize',
        description: 'Choose a template and customize your digital menu.',
        img: img3
    },
    {
        id: 'four',
        number:'04',
        title: 'Go Live',
        description: 'Publish your menu and provide your customers with an exceptional dining experience.',
        img: img4
    },
];

