(function() {

angular
.module('app.providers')
.provider('dataProvider', function () {

    this.$get = function (){ 
        return {
            "home" : {
                "profile_pic" : "../assets/profile-pic.jpg",
                "sections" : [
                    {"heading" : "Intro", "description" : "Hii, welcome to my profile. Software Developer, Music, Books, Anime."},
                    {"heading" : "email", "description" : "subhamkumarchandrawansi@gmail.com"},
                    {"heading" : "github", "description" : "https://github.com/isubham"}
                ]
            },
            "nav" : {
                "brand" : {"name" : "Subham Kumar"},
                "links" : [
                    {"title" : "Videos", "url" : ""},
                    {"title" : "Blogs", "url" : ""},
                    {"title" : "Music", "url" : ""},
                    {"title" : "Anime", "url" : ""},
                ]
            },

            "youtube" : {
                "music" : {
                    "rock" : [
                        {"title" : "Weezer - Say It Ain't So", "url" : "ENXvZ9YRjbo", "plays" : []},
                        {"title" : "Tessa Violet - Crush", "url" : "SiAuAJBZuGs", "plays" : []},
                        {"title" : "Nirvan - Come as You are", "url" : "vabnZ9-ex7o", "plays" : []},
                        {"title" : "Radiohead - Creep", "url" : "XFkzRNyygfk", "plays" : []},
                        {"title" : "Green Day - 21 Guns", "url" : "r00ikilDxW4", "plays" : []},
                        {"title" : "Green Day - Boulevard of Broken Dreams", "url" : "Soa3gO7tL-c", "plays" : []},
                        {"title" : "The Script - The Man who cann't be Moved", "url" : "gS9o1FAszdk", "plays" : []},
                        {"title" : "Oasis - Don't Look Back In Anger", "url" : "r8OipmKFDeM", "plays" : []},
                        {"title" : "Hoobastank - The Reason", "url" : "fV4DiAyExN0", "plays" : []},
                        {"title" : "a-ha - Take On Me", "url" : "djV11Xbc914", "plays" : []},
                        {"title" : "Richard Marx - Right Here Waiting", "url" : "y2zeudxXjuU", "plays" : []},
                        {"title" : "Bryam Adams - (Everything I Do) I Do It For You", "url" : "Y0pdQU87dc8"},
                        {"title" : "Gym Class Heroes - Stereo Hearts ft. Adam Levine", "url" : "T3E9Wjbq44E"},
                        {"title" : "Incubus - Drive", "url" : "fgT9zGkiLig"},

                        {"title" : "Creed - My Sacrifice", "url" : "O-fyNgHdmLI"},

                        {"title" : "Creed - One Last Breadth", "url" : "qnkuBUAwfe0"},


                        {"title" : "Apache Kafka - Confluent", "url" : "FKgi3n-FyNU"},
                        {"title" : "AngularJS : components", "url" : "-74JwepmlPg"},

                    ],

                    "pop" : [
                        
                        {"title" : "AngularJS : components", "url" : "https://www.youtube.com/watch?v=w0EF3AxJwLU"},

                        
                    ]
                }
            },

            "spotify" : [
                {
                    "artist" : "chico with honeyworks",
                    "title" : "Otomondeya",
                    "url" : "https://open.spotify.com/embed/album/2GBDADasYHm9Rho9U0fET9"
                },
                {
                    "artist" : "chico with honeyworks | The First Take",
                    "title" : "Shiawase",
                    "url": "https://open.spotify.com/embed/track/3aXBwWaLJdVLrNrHlKQd1s"
                }

            ],

            "body" : {

            },

            "footer" : {

            },
            "blogs" : [
                {
                    "date" : "2020-11-14T09:16:16.346Z",
                    "heading" : "HTTP History",
                    "description" : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, aspernatur cumque! Rem veniam quod consequatur autem, neque porro nesciunt? Blanditiis error eum assumenda repellat sequi excepturi eligendi, ad quia repudiandae?",
                },
                {
                    "date" : "2020-11-14T09:16:16.346Z",
                    "heading" : "HTTP Evolution",
                    "description" : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, aspernatur cumque! Rem veniam quod consequatur autem, neque porro nesciunt? Blanditiis error eum assumenda repellat sequi excepturi eligendi, ad quia repudiandae?",
                },
                {
                    "date" : "2020-11-14T09:16:16.346Z",
                    "heading" : "Browsers",
                    "description" : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, aspernatur cumque! Rem veniam quod consequatur autem, neque porro nesciunt? Blanditiis error eum assumenda repellat sequi excepturi eligendi, ad quia repudiandae?",
                }
            ]
        }
    }

});

})();

