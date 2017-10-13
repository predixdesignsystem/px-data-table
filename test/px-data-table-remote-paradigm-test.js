var remoteDataFixture1, remoteDataFixture2, remoteDataFixture3,
  remoteDataFilteringFixture1, remoteDataFilteringFixture2, remoteDataSortingFixture1, remoteDataSortingFixture2;
var getStyle = function (el, style){
  return window.getComputedStyle( el, null ).getPropertyValue( style );
};

var data =[
  {
    "index": 0,
    "name": "Liz Grimes",
    "first": "Isabel long name to test left elipse",
    "last": "Conrad",
    "image": "https://s3.amazonaws.com/uifaces/faces/twitter/enda/73.jpg",
    "boolean": true,
    "guid": "8ea90ed8-83e1-4a28-a371-e5c0e1d0e021",
    "integer": 28,
    "date": "Sun Aug 14 1994 03:27:03 GMT-0700 (PDT)",
    "address": "3 Vista Place",
    "city": "Longbranch",
    "state": "North Carolina",
    "zip": 64470,
    "country": "Lesotho",
    "email": "isabelconrad@scentric.com",
    "phone": "(817) 426-2901",
    "color": "rgb(76,120,108)"
  },
  {
    "index": 1,
    "name": "Frazier Lara",
    "first": "Jocelyn",
    "last": "Wooten",
    "image": "https://s3.amazonaws.com/uifaces/faces/twitter/guillogo/73.jpg",
    "boolean": false,
    "guid": "7017f9b1-690e-4c9d-8eee-f63285ca5148",
    "integer": 10,
    "date": "Tue May 24 1988 14:10:20 GMT-0700 (PDT)",
    "address": "2 Catherine Street",
    "city": "Healy",
    "state": "Connecticut",
    "zip": 41121,
    "country": "Mongolia",
    "email": "jocelynwooten@scentric.com",
    "phone": "(901) 441-2582",
    "color": "rgb(134,91,60)"
  },
  {
    "index": 2,
    "name": "Dora Griffith",
    "first": "Valentine",
    "last": "Meyer",
    "image": "https://s3.amazonaws.com/uifaces/faces/twitter/iboldurev/73.jpg",
    "boolean": true,
    "guid": "8c3bd9ad-e8d6-4ea4-85e6-d145295f3f91",
    "integer": 99,
    "date": "Sat Feb 17 1973 03:45:57 GMT-0800 (PST)",
    "address": "4 Whitty Lane",
    "city": "Nicholson",
    "state": "South Carolina",
    "zip": 41343,
    "country": "Germany",
    "email": "valentinemeyer@scentric.com",
    "phone": "(956) 428-2996",
    "color": "rgb(201,142,97)"
  },
  {
    "index": 3,
    "name": "Shelley Molina",
    "first": "Silva",
    "last": "Alexander",
    "image": "https://s3.amazonaws.com/uifaces/faces/twitter/smalonso/73.jpg",
    "boolean": true,
    "guid": "37224065-ac71-4716-be9a-108ecddfee47",
    "integer": 16,
    "date": "Wed Aug 02 1995 07:03:12 GMT-0700 (PDT)",
    "address": "2 Berkeley Place",
    "city": "Manila",
    "state": "Michigan",
    "zip": 22009,
    "country": "Thailand",
    "email": "silvaalexander@scentric.com",
    "phone": "(823) 415-2224",
    "color": "rgb(113,105,251)"
  },
  {
    "index": 4,
    "name": "Rita Lopez",
    "first": "Hopkins",
    "last": "Wong",
    "image": "https://s3.amazonaws.com/uifaces/faces/twitter/taherrapee/73.jpg",
    "boolean": false,
    "guid": "1ea0922e-179d-4057-abeb-d8fe63e55da8",
    "integer": 94,
    "date": "Wed Sep 21 2011 04:03:55 GMT-0700 (PDT)",
    "address": "4 Tompkins Avenue",
    "city": "Movico",
    "state": "Maine",
    "zip": 89440,
    "country": "Seychelles",
    "email": "hopkinswong@scentric.com",
    "phone": "(814) 488-2063",
    "color": "rgb(133,126,66)"
  },
  {
    "index": 5,
    "name": "Wagner Shelton",
    "first": "Harriet",
    "last": "Sherman",
    "image": "https://s3.amazonaws.com/uifaces/faces/twitter/ismailmayat/73.jpg",
    "boolean": true,
    "guid": "46a4a1bc-97af-46e0-aedd-c3cc42e6b8f5",
    "integer": 27,
    "date": "Wed Jul 07 2010 05:48:57 GMT-0700 (PDT)",
    "address": "3 Stratford Road",
    "city": "Makena",
    "state": "Kansas",
    "zip": 21389,
    "country": "Chad",
    "email": "harrietsherman@scentric.com",
    "phone": "(887) 497-3612",
    "color": "rgb(195,89,110)"
  },
  {
    "index": 6,
    "name": "Bethany Adkins",
    "first": "Stacie",
    "last": "Bartlett",
    "image": "https://s3.amazonaws.com/uifaces/faces/twitter/carlyson/73.jpg",
    "boolean": false,
    "guid": "17aac57d-4644-44d8-8a6b-b2eedd3d42dc",
    "integer": 49,
    "date": "Sun Mar 14 1999 23:13:33 GMT-0800 (PST)",
    "address": "4 Luquer Street",
    "city": "Newcastle",
    "state": "Iowa",
    "zip": 72190,
    "country": "Uruguay",
    "email": "staciebartlett@scentric.com",
    "phone": "(957) 412-3261",
    "color": "rgb(164,84,221)"
  },
  {
    "index": 7,
    "name": "Angelia Rowe",
    "first": "Charlene",
    "last": "Stevens",
    "image": "https://s3.amazonaws.com/uifaces/faces/twitter/thewillbeard/73.jpg",
    "boolean": true,
    "guid": "f3c6a195-d50e-479f-9c2a-c54c2a629852",
    "integer": 13,
    "date": "Sat Jan 04 1992 04:10:22 GMT-0800 (PST)",
    "address": "4 Tiffany Place",
    "city": "Dargan",
    "state": "Vermont",
    "zip": 31427,
    "country": "Burkina Faso",
    "email": "charlenestevens@scentric.com",
    "phone": "(946) 404-2511",
    "color": "rgb(99,147,74)"
  },
  {
    "index": 8,
    "name": "Knox Rivers",
    "first": "Reyes",
    "last": "Hartman",
    "image": "https://s3.amazonaws.com/uifaces/faces/twitter/tgormtx/73.jpg",
    "boolean": true,
    "guid": "88e71d65-5a7a-4973-a1dc-9f5c1df485c8",
    "integer": 41,
    "date": "Sat May 28 1994 15:27:35 GMT-0700 (PDT)",
    "address": "3 Wythe Place",
    "city": "Coldiron",
    "state": "Nebraska",
    "zip": 76971,
    "country": "Greenland",
    "email": "reyeshartman@scentric.com",
    "phone": "(910) 533-3832",
    "color": "rgb(99,55,193)"
  },
  {
    "index": 9,
    "name": "Warren Scott",
    "first": "Alissa",
    "last": "Duncan",
    "image": "https://s3.amazonaws.com/uifaces/faces/twitter/andresenfredrik/73.jpg",
    "boolean": true,
    "guid": "dfc23019-ab40-4597-91fe-74bcf60a9e2b",
    "integer": 54,
    "date": "Sun Feb 08 2009 21:57:53 GMT-0800 (PST)",
    "address": "4 Henderson Walk",
    "city": "Oley",
    "state": "Florida",
    "zip": 38878,
    "country": "Fiji",
    "email": "alissaduncan@scentric.com",
    "phone": "(876) 584-3746",
    "color": "rgb(218,58,52)"
  },
  {
    "index": 10,
    "name": "Mai Shepherd",
    "first": "Christina",
    "last": "Craft",
    "image": "https://s3.amazonaws.com/uifaces/faces/twitter/mwarkentin/73.jpg",
    "boolean": false,
    "guid": "7b829e11-da52-4302-a645-4711c9af7df2",
    "integer": 40,
    "date": "Sat Apr 18 1992 20:34:36 GMT-0700 (PDT)",
    "address": "3 Ocean Court",
    "city": "Fairmount",
    "state": "New Jersey",
    "zip": 95002,
    "country": "Viet Nam",
    "email": "christinacraft@scentric.com",
    "phone": "(842) 503-2389",
    "color": "rgb(181,253,141)"
  },
  {
    "index": 11,
    "name": "Flora Tran",
    "first": "Burt",
    "last": "Landry",
    "image": "https://s3.amazonaws.com/uifaces/faces/twitter/herkulano/73.jpg",
    "boolean": false,
    "guid": "3efeb9cc-5705-4e17-b800-42ee8e354d30",
    "integer": 64,
    "date": "Fri Apr 30 1982 14:23:53 GMT-0700 (PDT)",
    "address": "2 Butler Street",
    "city": "Walker",
    "state": "Wisconsin",
    "zip": 56241,
    "country": "France, Metropolitan",
    "email": "burtlandry@scentric.com",
    "phone": "(914) 461-3510",
    "color": "rgb(95,147,193)"
  },
  {
    "index": 12,
    "name": "Crawford Jordan",
    "first": "Baldwin",
    "last": "Hammond",
    "image": "https://s3.amazonaws.com/uifaces/faces/twitter/jonny_moon/73.jpg",
    "boolean": true,
    "guid": "758e8af9-6a3c-47e1-a062-b49e6263b6e8",
    "integer": 80,
    "date": "Sat Sep 22 2012 18:24:55 GMT-0700 (PDT)",
    "address": "3 Preston Court",
    "city": "Vincent",
    "state": "Washington",
    "zip": 47560,
    "country": "Uganda",
    "email": "baldwinhammond@scentric.com",
    "phone": "(800) 559-2165",
    "color": "rgb(175,176,59)"
  },
  {
    "index": 13,
    "name": "Stanley Williams",
    "first": "Laverne",
    "last": "Hampton",
    "image": "https://s3.amazonaws.com/uifaces/faces/twitter/alyssalowww/73.jpg",
    "boolean": false,
    "guid": "718262e9-01e7-4016-b068-6edd11a14a38",
    "integer": 62,
    "date": "Sat Sep 27 1975 16:25:15 GMT-0700 (PDT)",
    "address": "4 Varet Street",
    "city": "Breinigsville",
    "state": "Oregon",
    "zip": 54164,
    "country": "Antarctica",
    "email": "lavernehampton@scentric.com",
    "phone": "(988) 478-3842",
    "color": "rgb(225,78,134)"
  },
  {
    "index": 14,
    "name": "Key Keith",
    "first": "Kirsten",
    "last": "Chang",
    "image": "https://s3.amazonaws.com/uifaces/faces/twitter/rafelorden/73.jpg",
    "boolean": true,
    "guid": "1e75c394-1574-4168-a33d-c5895f7af76d",
    "integer": 47,
    "date": "Tue Sep 18 1990 08:36:33 GMT-0700 (PDT)",
    "address": "4 Ryder Avenue",
    "city": "Wheatfields",
    "state": "Illinois",
    "zip": 28092,
    "country": "Kiribati",
    "email": "kirstenchang@scentric.com",
    "phone": "(882) 531-2818",
    "color": "rgb(118,83,134)"
  },
  {
    "index": 15,
    "name": "Lizzie Oneal",
    "first": "Mercado",
    "last": "Hancock",
    "image": "https://s3.amazonaws.com/uifaces/faces/twitter/wim1k/73.jpg",
    "boolean": false,
    "guid": "8fbb9f3a-64df-4069-9aec-0d3dd0c2dd3f",
    "integer": 22,
    "date": "Thu Jan 02 1986 03:48:22 GMT-0800 (PST)",
    "address": "4 Sumner Place",
    "city": "Ruckersville",
    "state": "West Virginia",
    "zip": 65886,
    "country": "Ecuador",
    "email": "mercadohancock@scentric.com",
    "phone": "(996) 557-3624",
    "color": "rgb(244,178,231)"
  },
  {
    "index": 16,
    "name": "Bentley Guthrie",
    "first": "Obrien",
    "last": "Bruce",
    "image": "https://s3.amazonaws.com/uifaces/faces/twitter/rpeezy/73.jpg",
    "boolean": false,
    "guid": "720e6095-dc65-4bef-b8bf-56b3e43c13e8",
    "integer": 33,
    "date": "Sat Sep 09 1989 04:51:19 GMT-0700 (PDT)",
    "address": "2 Chester Street",
    "city": "Finzel",
    "state": "Mississippi",
    "zip": 52444,
    "country": "Bulgaria",
    "email": "obrienbruce@scentric.com",
    "phone": "(923) 461-2312",
    "color": "rgb(52,103,133)"
  },
  {
    "index": 17,
    "name": "Marsh Cleveland",
    "first": "Pearl",
    "last": "Moran",
    "image": "https://s3.amazonaws.com/uifaces/faces/twitter/sectronov/73.jpg",
    "boolean": true,
    "guid": "9b385d87-2847-44f4-acae-a47970ff7c9f",
    "integer": 8,
    "date": "Tue Apr 26 1988 18:46:50 GMT-0700 (PDT)",
    "address": "4 Portland Avenue",
    "city": "Henrietta",
    "state": "Rhode Island",
    "zip": 53764,
    "country": "American Samoa",
    "email": "pearlmoran@scentric.com",
    "phone": "(964) 543-3486",
    "color": "rgb(168,119,234)"
  },
  {
    "index": 18,
    "name": "Maude Perry",
    "first": "Underwood",
    "last": "Barton",
    "image": "https://s3.amazonaws.com/uifaces/faces/twitter/starburst1977/73.jpg",
    "boolean": true,
    "guid": "0f6385b5-481e-4ddf-9ad4-b91f8e951922",
    "integer": 33,
    "date": "Wed Apr 23 2014 06:02:36 GMT-0700 (PDT)",
    "address": "3 Mermaid Avenue",
    "city": "Deputy",
    "state": "Georgia",
    "zip": 58449,
    "country": "Angola",
    "email": "underwoodbarton@scentric.com",
    "phone": "(946) 414-3492",
    "color": "rgb(112,197,153)"
  },
  {
    "index": 19,
    "name": "Knapp Pratt",
    "first": "Solomon",
    "last": "Lloyd",
    "image": "https://s3.amazonaws.com/uifaces/faces/twitter/mocabyte/73.jpg",
    "boolean": true,
    "guid": "895a8dab-d037-46f4-b822-795814f418d9",
    "integer": 72,
    "date": "Thu Apr 13 1978 08:14:17 GMT-0800 (PST)",
    "address": "4 Glenwood Road",
    "city": "Berlin",
    "state": "New Mexico",
    "zip": 64625,
    "country": "Bhutan",
    "email": "solomonlloyd@scentric.com",
    "phone": "(802) 539-3360",
    "color": "rgb(69,68,176)"
  },
  {
    "index": 20,
    "name": "Jodi Tanner",
    "first": "Lyons",
    "last": "Stevenson",
    "image": "https://s3.amazonaws.com/uifaces/faces/twitter/iamasifmirza/73.jpg",
    "boolean": false,
    "guid": "f6a0ef12-6a1e-48a8-990a-da79c0bbf30e",
    "integer": 79,
    "date": "Tue Feb 11 2003 17:16:18 GMT-0800 (PST)",
    "address": "3 Cropsey Avenue",
    "city": "Lewis",
    "state": "Arizona",
    "zip": 89420,
    "country": "Dominica",
    "email": "lyonsstevenson@scentric.com",
    "phone": "(818) 424-2348",
    "color": "rgb(178,99,182)"
  },
  {
    "index": 21,
    "name": "Mamie Crane",
    "first": "Swanson",
    "last": "Richardson",
    "image": "https://s3.amazonaws.com/uifaces/faces/twitter/benoitboucart/73.jpg",
    "boolean": true,
    "guid": "66c048df-eefc-4c09-a468-b3044e4e7f11",
    "integer": 26,
    "date": "Sun Jun 30 2002 05:57:21 GMT-0700 (PDT)",
    "address": "3 Aurelia Court",
    "city": "Inkerman",
    "state": "Texas",
    "zip": 10482,
    "country": "Egypt",
    "email": "swansonrichardson@scentric.com",
    "phone": "(810) 406-3416",
    "color": "rgb(230,107,202)"
  },
  {
    "index": 22,
    "name": "Cooley Macdonald",
    "first": "Aida",
    "last": "Hurley",
    "image": "https://s3.amazonaws.com/uifaces/faces/twitter/markwienands/73.jpg",
    "boolean": false,
    "guid": "466a665b-b7b6-4eae-b404-e9b5a8d1641d",
    "integer": 20,
    "date": "Sun Jan 05 2014 15:48:57 GMT-0800 (PST)",
    "address": "4 Hall Street",
    "city": "Stouchsburg",
    "state": "District Of Columbia",
    "zip": 32399,
    "country": "Chile",
    "email": "aidahurley@scentric.com",
    "phone": "(975) 451-3272",
    "color": "rgb(119,239,85)"
  },
  {
    "index": 23,
    "name": "Snow Blankenship",
    "first": "Mccormick",
    "last": "Jensen",
    "image": "https://s3.amazonaws.com/uifaces/faces/twitter/menghe/73.jpg",
    "boolean": false,
    "guid": "961f5da2-2479-4f45-9132-9e89a8bc32e4",
    "integer": 70,
    "date": "Tue Jan 22 1974 01:18:15 GMT-0700 (PDT)",
    "address": "3 Lewis Place",
    "city": "Elizaville",
    "state": "Virgin Islands",
    "zip": 32784,
    "country": "Norfolk Island",
    "email": "mccormickjensen@scentric.com",
    "phone": "(961) 443-3343",
    "color": "rgb(204,198,130)"
  },
  {
    "index": 24,
    "name": "Gabriela Brock",
    "first": "Ramona",
    "last": "Meyers",
    "image": "https://s3.amazonaws.com/uifaces/faces/twitter/heyanata/73.jpg",
    "boolean": false,
    "guid": "07133f92-9308-420e-ae7b-e5ecd657aa85",
    "integer": 76,
    "date": "Sat Sep 15 1984 07:22:38 GMT-0700 (PDT)",
    "address": "3 Rodney Street",
    "city": "Orin",
    "state": "Puerto Rico",
    "zip": 60446,
    "country": "Japan",
    "email": "ramonameyers@scentric.com",
    "phone": "(839) 591-3993",
    "color": "rgb(236,222,59)"
  },
  {
    "index": 25,
    "name": "Graciela Orr",
    "first": "Sharp",
    "last": "Lindsay",
    "image": "https://s3.amazonaws.com/uifaces/faces/twitter/thibaut_re/73.jpg",
    "boolean": true,
    "guid": "0ea67b0a-5ea7-4e07-8d06-48b6e2a00c6e",
    "integer": 39,
    "date": "Mon May 25 1970 21:04:46 GMT-0700 (PDT)",
    "address": "2 Tech Place",
    "city": "Kraemer",
    "state": "Maryland",
    "zip": 24019,
    "country": "Saudi Arabia",
    "email": "sharplindsay@scentric.com",
    "phone": "(852) 538-3232",
    "color": "rgb(218,74,95)"
  }
];

var additionalData = [
  {
  "index": 26,
  "name": "Cooley Macdonald Two",
  "first": "Aida",
  "last": "Hurley",
  "image": "https://s3.amazonaws.com/uifaces/faces/twitter/markwienands/73.jpg",
  "boolean": false,
  "guid": "466a665b-b7b6-4eae-b404-e9b5a8d1641d",
  "integer": 20,
  "date": "Sun Jan 05 2014 15:48:57 GMT-0800 (PST)",
  "address": "4 Hall Street",
  "city": "Stouchsburg",
  "state": "District Of Columbia",
  "zip": 32399,
  "country": "Chile",
  "email": "aidahurley@scentric.com",
  "phone": "(975) 451-3272",
  "color": "rgb(119,239,85)"
  },
  {
    "index": 27,
    "name": "Snow Blankenship Two",
    "first": "Mccormick",
    "last": "Jensen",
    "image": "https://s3.amazonaws.com/uifaces/faces/twitter/menghe/73.jpg",
    "boolean": false,
    "guid": "961f5da2-2479-4f45-9132-9e89a8bc32e4",
    "integer": 70,
    "date": "Tue Jan 22 1974 01:18:15 GMT-0700 (PDT)",
    "address": "3 Lewis Place",
    "city": "Elizaville",
    "state": "Virgin Islands",
    "zip": 32784,
    "country": "Norfolk Island",
    "email": "mccormickjensen@scentric.com",
    "phone": "(961) 443-3343",
    "color": "rgb(204,198,130)"
  },
  {
    "index": 28,
    "name": "Gabriela Brock Two",
    "first": "Ramona",
    "last": "Meyers",
    "image": "https://s3.amazonaws.com/uifaces/faces/twitter/heyanata/73.jpg",
    "boolean": false,
    "guid": "07133f92-9308-420e-ae7b-e5ecd657aa85",
    "integer": 76,
    "date": "Sat Sep 15 1984 07:22:38 GMT-0700 (PDT)",
    "address": "3 Rodney Street",
    "city": "Orin",
    "state": "Puerto Rico",
    "zip": 60446,
    "country": "Japan",
    "email": "ramonameyers@scentric.com",
    "phone": "(839) 591-3993",
    "color": "rgb(236,222,59)"
  },
  {
    "index": 29,
    "name": "Graciela Orr Two",
    "first": "Sharp",
    "last": "Lindsay",
    "image": "https://s3.amazonaws.com/uifaces/faces/twitter/thibaut_re/73.jpg",
    "boolean": true,
    "guid": "0ea67b0a-5ea7-4e07-8d06-48b6e2a00c6e",
    "integer": 39,
    "date": "Mon May 25 1970 21:04:46 GMT-0700 (PDT)",
    "address": "2 Tech Place",
    "city": "Kraemer",
    "state": "Maryland",
    "zip": 24019,
    "country": "Saudi Arabia",
    "email": "sharplindsay@scentric.com",
    "phone": "(852) 538-3232",
    "color": "rgb(218,74,95)"
  }
  ];
  var minidata =
  [
  {
    "first": "Valentine",
    "last": "Meyer",
    "image": "https://s3.amazonaws.com/uifaces/faces/twitter/iboldurev/73.jpg",
    "boolean": true,
    "guid": "8c3bd9ad-e8d6-4ea4-85e6-d145295f3f91",
    "integer": 99,
    "date": "Sat Feb 17 1973 03:45:57 GMT-0800 (PST)",
    "address": "4 Whitty Lane",
    "city": "Nicholson",
    "state": "South Carolina",
    "zip": 41343,
    "country": "Germany",
    "email": "valentinemeyer@scentric.com",
    "phone": "(956) 428-2996",
    "color": "<button class='btn' style='color:rgb(201,142,97);'>Blue Bottle cardigan</button>"
  },
  {
    "first": "Silva",
    "last": "Alexander",
    "image": "https://s3.amazonaws.com/uifaces/faces/twitter/smalonso/73.jpg",
    "boolean": true,
    "guid": "37224065-ac71-4716-be9a-108ecddfee47",
    "integer": 16,
    "date": "Wed Aug 02 1995 07:03:12 GMT-0700 (PDT)",
    "address": "2 Berkeley Place",
    "city": "Manila",
    "state": "Michigan",
    "zip": 22009,
    "country": "Thailand",
    "email": "silvaalexander@gmail.com",
    "phone": "(823) 415-2224",
    "color": "<button class='btn' style='color:rgb(113,105,251);'>Freegan tilde</button>"
  },
  {
    "first": "Hopkins",
    "last": "Wong",
    "image": "https://s3.amazonaws.com/uifaces/faces/twitter/taherrapee/73.jpg",
    "boolean": false,
    "guid": "1ea0922e-179d-4057-abeb-d8fe63e55da8",
    "integer": 94,
    "date": "Wed Sep 21 2011 04:03:55 GMT-0700 (PDT)",
    "address": "4 Tompkins Avenue",
    "city": "Movico",
    "state": "Maine",
    "zip": 89440,
    "country": "Seychelles",
    "email": "hopkinswong@hotmail.com",
    "phone": "(814) 488-2063",
    "color": "<button class='btn' style='color:rgb(133,126,66);'>bespoke gastropub</button>"
  },
  {
    "first": "Harriet",
    "last": "Sherman",
    "image": "https://s3.amazonaws.com/uifaces/faces/twitter/ismailmayat/73.jpg",
    "boolean": true,
    "guid": "46a4a1bc-97af-46e0-aedd-c3cc42e6b8f5",
    "integer": 27,
    "date": "Wed Jul 07 2010 05:48:57 GMT-0700 (PDT)",
    "address": "3 Stratford Road",
    "city": "Makena",
    "state": "Kansas",
    "zip": 21389,
    "country": "Chad",
    "email": "harrietsherman@scentric.com",
    "phone": "(887) 497-3612",
    "color": "<button class='btn' style='color:rgb(195,89,110);'>dreamcatcher fingerstache</button>"
  },
  {
    "first": "Stacie",
    "last": "Bartlett",
    "image": "https://s3.amazonaws.com/uifaces/faces/twitter/carlyson/73.jpg",
    "boolean": false,
    "guid": "17aac57d-4644-44d8-8a6b-b2eedd3d42dc",
    "integer": 49,
    "date": "Sun Mar 14 1999 23:13:33 GMT-0800 (PST)",
    "address": "4 Luquer Street",
    "city": "Newcastle",
    "state": "Iowa",
    "zip": 72190,
    "country": "Uruguay",
    "email": "staciebartlett@scentric.com",
    "phone": "(957) 412-3261",
    "color": "<button class='btn' style='color:rgb(164,84,221);'>Etsy beard</button>"
  },
  {
    "first": "Lindsay",
    "last": "Meyer",
    "image": "https://s3.amazonaws.com/uifaces/faces/twitter/iboldurev/73.jpg",
    "boolean": true,
    "guid": "8c3bd9ad-e8d6-4ea4-85e6-d145295f3f91",
    "integer": 99,
    "date": "Sat Feb 17 1973 03:45:57 GMT-0800 (PST)",
    "address": "4 Whitty Lane",
    "city": "Nicholson",
    "state": "South Carolina",
    "zip": 41343,
    "country": "Germany",
    "email": "lindsay@gmail.com",
    "phone": "(956) 428-2996",
    "color": "<button class='btn' style='color:rgb(201,142,97);'>Austin meggings</button>"
  },
  {
    "first": "Shelley",
    "last": "Alexander",
    "image": "https://s3.amazonaws.com/uifaces/faces/twitter/smalonso/73.jpg",
    "boolean": true,
    "guid": "37224065-ac71-4716-be9a-108ecddfee47",
    "integer": 16,
    "date": "Wed Aug 02 1995 07:03:12 GMT-0700 (PDT)",
    "address": "2 Berkeley Place",
    "city": "Manila",
    "state": "Michigan",
    "zip": 22009,
    "country": "Thailand",
    "email": "shelley@hotmail.com",
    "phone": "(823) 415-2224",
    "color": "<button class='btn' style='color:rgb(113,105,251);'>Kitsch banjo</button>"
  },
  {
    "first": "Rita",
    "last": "Wong",
    "image": "https://s3.amazonaws.com/uifaces/faces/twitter/taherrapee/73.jpg",
    "boolean": false,
    "guid": "1ea0922e-179d-4057-abeb-d8fe63e55da8",
    "integer": 94,
    "date": "Wed Sep 21 2011 04:03:55 GMT-0700 (PDT)",
    "address": "4 Tompkins Avenue",
    "city": "Movico",
    "state": "Maine",
    "zip": 89440,
    "country": "Seychelles",
    "email": "rita@yahoo.com",
    "phone": "(814) 488-2063",
    "color": "<button class='btn' style='color:rgb(133,126,66);'>Brooklyn authentic</button>"
  },
  {
    "first": "Joe",
    "last": "Sherman",
    "image": "https://s3.amazonaws.com/uifaces/faces/twitter/ismailmayat/73.jpg",
    "boolean": true,
    "guid": "46a4a1bc-97af-46e0-aedd-c3cc42e6b8f5",
    "integer": 27,
    "date": "Wed Jul 07 2010 05:48:57 GMT-0700 (PDT)",
    "address": "3 Stratford Road",
    "city": "Makena",
    "state": "Kansas",
    "zip": 21389,
    "country": "Chad",
    "email": "joejoe@yahoo.com",
    "phone": "(887) 497-3612",
    "color": "<button class='btn' style='color:rgb(195,89,110);'>Pickled cray scenester</button>"
  },
  {
    "first": "Jane",
    "last": "Bartlett",
    "image": "https://s3.amazonaws.com/uifaces/faces/twitter/carlyson/73.jpg",
    "boolean": false,
    "guid": "17aac57d-4644-44d8-8a6b-b2eedd3d42dc",
    "integer": 49,
    "date": "Sun Mar 14 1999 23:13:33 GMT-0800 (PST)",
    "address": "4 Luquer Street",
    "city": "Newcastle",
    "state": "Iowa",
    "zip": 72190,
    "country": "Uruguay",
    "email": "jane@scentric.com",
    "phone": "(957) 412-3261",
    "color": "<button class='btn' style='color:rgb(164,84,221);'>8-bit migas</button>"
  }
];

document.addEventListener("WebComponentsReady", function() {

  remoteDataFixture1 = document.getElementById('remoteData1');
  remoteDataFixture1.tableData = minidata;

  remoteDataFixture2 = document.getElementById('remoteData2');
  remoteDataFixture2.tableData = minidata;

  remoteDataFixture3 = document.getElementById('remoteData3');
  remoteDataFixture3.tableData = minidata;

  remoteDataFilteringFixture1 = document.getElementById('remoteDataFiltering1');
  remoteDataFilteringFixture1.tableData = minidata;

  remoteDataFilteringFixture2 = document.getElementById('remoteDataFiltering2');
  remoteDataFilteringFixture2.tableData = minidata;

  remoteDataSortingFixture1 = document.getElementById('remoteDataSorting1');
  remoteDataSortingFixture1.tableData = minidata;

  remoteDataSortingFixture2 = document.getElementById('remoteDataSorting2');
  remoteDataSortingFixture2.tableData = minidata;

  runTests();
});



function runTests() {

  suite('Unit Tests for data remote property being `true`', function () {

    suite('Page 1', function () {

      test('Default pagination size is 10', function(){
        assert.equal(remoteDataFixture1.pageSize, 10, 'Default page size should be 10 rows.');
      });

      test('Default rows displayed size is 10', function(){
        var tb = Polymer.dom(remoteDataFixture1.root).querySelector('aha-table'),
            rowCount = Polymer.dom(tb.root).querySelectorAll('.rows').length;
        assert.equal(rowCount, 10, 'Default rows displayed should be 10 rows.');
      });

      test('Pagination shows 1-10 of 100', function(){
        var paginationSpan = document.getElementById('remoteData1').querySelector('.summary.px-pagination');
        var paginationTextString = paginationSpan.textContent.replace(/\s\s*/g,' ').trim();
        assert.equal(paginationTextString, '1-10 of 100', 'Shows correct pagination counts.');
      });

      test('Page 1 should be selected', function(){
        var paginationPager = document.getElementById('remoteData1').querySelector('.px-pagination');
        // note: classList does not have prototype Array methods
        var page1IconClassList = paginationPager.children[0].classList.toString().split(' ');
        assert.equal(document.getElementById('remoteData1').querySelector('.px-pagination .btn--icon.btn--pagination--number').textContent, '1',
          '"1" is the selected page in the pagination component');
      });

      test('Page 2 should NOT be selected', function(){
        var paginationPager = document.getElementById('remoteData1').querySelector('.px-pagination');
        // note: classList does not have prototype Array methods
        var page2IconClassList = paginationPager.children[1].classList.toString().split(' ');
        assert.equal(document.getElementById('remoteData1').querySelectorAll('.px-pagination .btn--icon.btn--pagination--number').length, 1,
          'No other page number is selected');
      });

      test('Clicking Next Page button fires a `px-page-change-intent` event', function(done) {
        var dataTable = document.getElementById('remoteData1');
        var pageChangeButton = dataTable.querySelector('.px-pagination .btn--pagination.next');

        dataTable.addEventListener('px-page-change-intent', (evt) => {
          assert(true, 'Event is triggered');
          assert.equal(parseInt(evt.detail,10), 2, 'Requesting page 2');
          done();
        });

        pageChangeButton.click();
      });

      test('Updating properties triggers appearance of Page 2', function() {
        var page = 2;
        var dataTable = document.getElementById('remoteData1');

        dataTable.firstItemIndex = 11;
        dataTable.totalEntries = 50;

        var paginationSpan = dataTable.querySelector('.summary.px-pagination');
        var paginationTextString = paginationSpan.textContent.replace(/\s\s*/g,' ').trim();
        assert.equal(paginationTextString, '11-20 of 50', 'Shows correct pagination counts.');

        var paginationPager = dataTable.querySelector('.px-pagination');
        // note: classList does not have prototype Array methods
        var pageNIconClass = paginationPager.children[page - 1].classList.toString().split(' ');
        assert.equal(document.getElementById('remoteData1').querySelector('.px-pagination .btn--icon.btn--pagination--number').textContent, '2',
          'Page 2 is selected');
      });

    });

    suite('Page 2', function () {

      test('Default pagination size is 10', function(){
        assert.equal(remoteDataFixture2.pageSize, 10, 'Default page size should be 10 rows.');
      });

      test('Default rows displayed size is 10', function(){
        var tb = Polymer.dom(remoteDataFixture2.root).querySelector('aha-table'),
            rowCount = Polymer.dom(tb.root).querySelectorAll('.rows').length;
        assert.equal(rowCount, 10, 'Default rows displayed should be 10 rows.');
      });

      test('Pagination shows 11-20 of 100', function(){
        var paginationSpan = document.getElementById('remoteData2').querySelector('.summary.px-pagination');
        var paginationTextString = paginationSpan.textContent.replace(/\s\s*/g,' ').trim();
        assert.equal(paginationTextString, '11-20 of 100', 'Shows correct pagination counts.');
      });

      test('Page 2 should be selected', function(){
        var paginationPager = document.getElementById('remoteData2').querySelector('.px-pagination');
        // note: classList does not have prototype Array methods
        var page1IconClassList = paginationPager.children[0].classList.toString().split(' ');
        assert.equal(document.getElementById('remoteData2').querySelector('.px-pagination .btn--icon.btn--pagination--number').textContent, '2',
          '"1" is the selected page in the pagination component');
      });

      test('Page 1 should NOT be selected', function(){
        var paginationPager = document.getElementById('remoteData2').querySelector('.px-pagination');
        // note: classList does not have prototype Array methods
        var page2IconClassList = paginationPager.children[1].classList.toString().split(' ');
        assert.equal(document.getElementById('remoteData2').querySelectorAll('.px-pagination .btn--icon.btn--pagination--number').length, 1,
          'No other page number is selected');
      });

      test('Clicking Previous Page button fires a `px-page-change-intent` event', function(done) {
        var dataTable = document.getElementById('remoteData2');
        var pageChangeButton = dataTable.querySelector('.px-pagination .btn--pagination.previous');

        dataTable.addEventListener('px-page-change-intent', (evt) => {
          assert(true, 'Event is triggered');
          assert.equal(parseInt(evt.detail,10), 1, 'Requesting page 1');
          done();
        });

        pageChangeButton.click();
      });

      test('Updating properties triggers appearance of Page 1', function() {
        var page = 1;
        var dataTable = document.getElementById('remoteData2');

        dataTable.firstItemIndex = 1;
        dataTable.totalEntries = 50;

        var paginationSpan = dataTable.querySelector('.summary.px-pagination');
        var paginationTextString = paginationSpan.textContent.replace(/\s\s*/g,' ').trim();
        assert.equal(paginationTextString, '1-10 of 50', 'Shows correct pagination counts.');

        var paginationPager = dataTable.querySelector('.px-pagination');
        // note: classList does not have prototype Array methods
        var pageNIconClass = paginationPager.children[page - 1].classList.toString().split(' ');
        assert.equal(document.getElementById('remoteData2').querySelector('.px-pagination .btn--icon.btn--pagination--number').textContent, '1',
          'Page 1 is selected');
      });

    });

    suite('Rows per Page Dropdown', function () {

      test('On change, it fires a `px-page-size-change-intent` event', function(done) {
        var dataTable = document.getElementById('remoteData3');
        var pageSizeSelectDropdown = dataTable.querySelector('.pagination px-pagination#pagination px-dropdown');


        dataTable.addEventListener('px-page-size-change-intent', (evt) => {
          assert(true, 'Event is triggered');
          var val = typeof evt.detail === "string" ? parseInt(evt.detail,10) : evt.detail;
          assert.equal(val, 10, 'Requesting page size of 10');
          done();
        });

        // because this a px-* component, you can't mutate the selected item with js
        // so we have to expect the value to be what is currently selected
        // this could be improved by changing the dropdown value with clicks
        pageSizeSelectDropdown.fire('selected-changed');
      });


      test('Updates value accordingly when value is passed in', function() {
        var dataTable = document.getElementById('remoteData3');
        var pageSizeSelectDropdown = dataTable.querySelector('.pagination px-pagination#pagination px-dropdown');

        dataTable.pageSize = 20;
        dataTable.totalEntries = 100;

        assert.equal(pageSizeSelectDropdown.selected, 20);

        var paginationSpan = dataTable.querySelector('.summary.px-pagination');
        var paginationTextString = paginationSpan.textContent.replace(/\s\s*/g,' ').trim();
        assert.equal(paginationTextString, '1-20 of 100', 'Shows correct pagination counts.');
      });

    });

    suite('Filtering', function () {

      test('Send event with combined filter string for one column', function (done) {

          var dataTable = document.querySelector('#remoteDataFiltering1');
          var lastNameFilterSelector = 'div > div.tr.tr--filter > :nth-child(2) > input';
          var lastNameFilter = dataTable.querySelector(lastNameFilterSelector);

          dataTable.addEventListener('px-filter-change-intent', (evt) => {
            assert(true, 'Event is triggered');
            assert.equal(evt.detail, '[{"name":"last","userEntry":"ab"}]', 'Requesting filter change');
            done();
          });

          lastNameFilter.value = 'ab';
          lastNameFilter.dispatchEvent(new Event('input'));
      });

      test('Send event with combined filter string for all columns', function (done) {

          var filters = [{name:'first', userEntry:'ab'}, {name:'last', userEntry:'cd'}];

          var dataTable = document.querySelector('#remoteDataFiltering2');
          var ahaTable = dataTable.querySelector('#dataTable');

          var firstNameFilterSelector = 'div > div.tr.tr--filter > :nth-child(1) > input';
          var firstNameFilter = dataTable.querySelector(firstNameFilterSelector);

          var lastNameFilterSelector = 'div > div.tr.tr--filter > :nth-child(2) > input';
          var lastNameFilter = dataTable.querySelector(lastNameFilterSelector);

          var imageFilterSelector = 'div > div.tr.tr--filter > :nth-child(3) > input';
          var imageFilter = dataTable.querySelector(imageFilterSelector);

          dataTable.addEventListener('px-filter-change-intent', (evt) => {
            assert(true, 'Event is triggered');
            assert.equal(evt.detail, JSON.stringify(filters), 'Requesting filter change on multiple columns');
            done();
          });

          ahaTable.filteredColumns = filters;
          imageFilter.dispatchEvent(new Event('input'));

      });
    });

    suite('Sorting', function () {

      test('Send event with combined sort string for one column', function (done) {

          var dataTable = document.querySelector('#remoteDataSorting1');
          var sortHeadingSelector = 'div > div.tr .th:nth-of-type(2) .column-head.sorted-text-hover';
          var sortHeading = dataTable.querySelector(sortHeadingSelector);

          dataTable.addEventListener('px-sort-change-intent', (evt) => {
            assert(true, 'Event is triggered');
            assert.equal(evt.detail, '[{"name":"last","direction":"ascending"}]', 'Requesting sort change');
            done();
          });

          sortHeading.dispatchEvent(new Event('click'));
      });

      test('Send event with combined sort string for one column', function (done) {

          var dataTable = document.querySelector('#remoteDataSorting2');
          var sortHeadingSelector = 'div > div.tr .th:nth-of-type(2) .column-head.sorted-text-hover';
          var sortHeading = dataTable.querySelector(sortHeadingSelector);

          sortHeading.dispatchEvent(new Event('click'));

          dataTable.addEventListener('px-sort-change-intent', (evt) => {
            assert(true, 'Event is triggered');
            assert.equal(evt.detail, '[{"name":"last","direction":"descending"}]', 'Requesting sort change');
            done();
          });

          // second click
          sortHeading.dispatchEvent(new Event('click'));
      });

    });

  });

}


// HELPER FUNCTIONS

function simulateChangeEvent(el)
{
    if (document.all)
    {
        el.change();
    }
    else
    {
        var evObj = document.createEvent('MouseEvents');
        evObj.initMouseEvent('selected-change', true, true, window, 1, 12, 345, 7, 220, false, false, true, false, 0, null );
        el.dispatchEvent(evObj);
    }
}
