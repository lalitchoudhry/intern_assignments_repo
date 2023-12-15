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

export const FOOTER_LINKS = [
    {
        head: "Hobbycue",
        listItem:[
            { label:"Abbout us", value:""},
            { label:"Our Services", value:""},
            { label:"Work with Us", value:""},
            { label:"FAQ", value:""},
            { label:"Contact Us", value:""}
        ]
    },
    {
        head: "How Do I",
        listItem:[
            { label:"Sign Up", value:"" },
            { label:"Add a Listing", value:"" },
            { label:"Claim Listing", value:"" },
            { label:"Post a Query", value:"" },
            { label:"Add a Blog Post", value:"" },
            { label:"Other Queries", value:"" }
        ]
    },
    {
        head: "Quick Links",
        listItem:[
            { label:"Listings", value:"" },
            { label:"Blog Posts", value:"" },
            { label:"Shop / Store", value:"" },
            { label:"Community", value:"" }
        ]
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

export const POST_TYPE = [
    { 
        label: "People",
        icon: peopleIcon,
        description: "An Individual or Organization.  Teacher, Coach, Professional or Online Seller.  Company, Business or Association.",
        value: ""
    },
    {
        label: "Place",
        icon: placeIcon,
        description: "An Address.  Classroom, Shop, Performance or Event Venue, Sports Arena, Play Area, Studio, School or Campus.",
        value: ""
    },
    {
        label: "Product",
        icon: productIcon,
        description: "An Item that you can Book, Buy or Rent.  Appointment, Ticket, or Voucher.  Equipment, Instrument or Activity Kit.",
        value: ""
    },
    {
        label: "Program",
        icon: programIcon,
        description: "An Event with Venue and Date.  Meetup, Workshop or Webinar.  Exhibition, Performance or Competition.",
        value: ""
    }
]