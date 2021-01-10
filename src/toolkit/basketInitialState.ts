import { bat, ball, wicket, glub, pad, handpad, helmet, cap, roundcap, glass, shirt, complete } from '../images';

interface ProductItem {
    id       : number;
    pic      : string;
    name     : string;
    about    : string;
    quantity : number;
    price    : number;
    added   ?: boolean;    //update later
}

export const basketInitialState: ProductItem[] = [
    {
        id       : 1,
        pic      : bat,
        name     : "Bats",
        about    : "A cricket Bat is a specialised piece of equipment used by batsmen in the sport of cricket to hit the ball, typically consisting of a cane handle attached to a flat-fronted willow-wood blade.",
        price    : 20,
        quantity : 0
    },
    {
        id       : 2,
        pic      : ball,
        about    : "A cricket Ball is a hard, solid ball used to play cricket. A cricket ball consists of a cork core wound with string then a leather cover stitched on, and manufacture is regulated by cricket law at first-class level.",
        name     : "Balls",
        price    : 10,
        quantity : 0
    },
    {
        id       : 3,
        pic      : wicket,
        name     : "Wickets",
        about    : "A crikcet Wicket is one of the two sets of three stumps and two bails at either end of the pitch. The fielding team's players can hit the wicket with the ball in a number of ways to get a batsman out.",
        price    : 25,
        quantity : 0
    }, 
    {
        id       : 4,
        pic      : glub,
        name     : "Glubs",
        about    : "A cricket Wicket-keeper's glubs have an anterior surface designed for catching the ball, while offering protection to fingers and the palms of the hands from painful impact.",
        price    : 15,
        quantity : 0,
    },
    {
        id       : 5,
        pic      : pad,
        name     : "Pads",
        about    : "A cricket Pad are protective equipment used by batters in the sport of cricket, catchers in the sports of baseball and fastpitch softball, and by goaltenders in ice hockey, bandy and box lacrosse.",
        price    : 20,
        quantity : 0
    },
    {
        id       : 6,
        pic      : handpad,
        name     : "Handpads",
        about    : "A cricket Handpads first appeared in the England. They were developed to protect the lower part of the legs from the hard leather ball that was used to bowl deliveries in the game.",
        price    : 15,
        quantity : 0
    },
    {
        id       : 7,
        pic      : helmet,
        name     : "Helmets",
        about    : "A cricket Helmet were not in common use until the 1970s. The first helmets were seen in World Series Cricket, with Dennis Amiss being the first player to consistently wear a helmet.",
        price    : 25,
        quantity : 0
    },
    {
        id       : 8,
        pic      : cap,
        name     : "Caps",
        about    : "A cricket Cap is a type of soft cap, often made from felt, that is a traditional form of headwear for players of the game of cricket, regardless of age or gender.",
        price    : 5,
        quantity : 0
    },
    {
        id       : 9,
        pic      : roundcap,
        name     : "Roundcaps",
        about    : "A cricket RoundCap is a type of hard cap, often made from felt, that is a traditional form of headwear for players of the game of cricket, regardless of age or gender.",
        price    : 10,
        quantity : 0
    },
    {
        id       : 10,
        pic      : glass,
        name     : "Glasses",
        about    : "A cricket Glasses, also known as eyeglasses or spectacles, are vision aids, consisting of glass or hard plastic lenses mounted in a frame that holds them in front of a person's eyes.",
        price    : 5,
        quantity : 0
    },
    {
        id       : 11,
        pic      : shirt,
        name     : "Shirt",
        about    : "A cricket shirt and clothing is regulated by the laws of cricket. Cricket clothing, known as cricket whites, or flannels, is slightly loose fitting.",
        price    : 15,
        quantity : 0
    },
    {
        id       : 12,
        pic      : complete,
        name     : "Complete",
        about    : "A cricket equipment is regulated by Cricket clothing, known as cricket whites, or flannels, is slightly loose fitting so as not to restrict players' movements protective equipment.",
        price    : 50,
        quantity : 0
    }
]