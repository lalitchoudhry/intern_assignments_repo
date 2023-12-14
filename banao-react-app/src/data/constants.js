// import all assets icon
import peopleIcon from './../assets/icon/people-icon.png';
import placeIcon from './../assets/icon/place-icon.png';
import productIcon from './../assets/icon/product-icon.png';
import programIcon from './../assets/icon/program-icon.png';


export const EXPLORE_TYPE = [
    {
        label: "People - Community",
        value: "community"
    },
    {
        label: "Places - Venues",
        value: "venues"
    },
    {
        label: "Programs - Events",
        value: "events"
    },
    {
        label: "Producta - Store",
        value: "store"
    },
    {
        label: "Blogs",
        value: "blogs"
    }
]


export const FEATURE_TYPE = [
    { 
        label: "People",
        icon: peopleIcon,
        description: "Find a teacher, coach, or expert for your hobby interest in your locality.  Find a partner, teammate, accompanist or collaborator.",
        btnName: "Connect",
        value: ""
    },
    {
        label: "Place",
        icon: placeIcon,
        description: "Find a class, school, playground, auditorium, studio, shop or an event venue.  Book a slot at venues that allow booking through hobbycue.",
        btnName: "Meet up",
        value: ""
    },
    {
        label: "Product",
        icon: productIcon,
        description: "Find equipment or supplies required for your hobby.  Buy, rent or borrow from shops, online stores or from community members.",
        btnName: "Get it",
        value: ""
    },
    {
        label: "Program",
        icon: programIcon,
        description: "Find events, meetups and workshops related to your hobby.  Register or buy tickets online.",
        btnName: "Attend",
        value: ""
    }
]