/**
 * Created by madhubhushan on 1/27/2017.
 */
var request = require('request-json');

export function calculateRating(totalReviewCount)
{
    var rating = 3;

    rating = ((totalReviewCount.goodCount)/(totalReviewCount.goodCount + totalReviewCount.badCount))*5;

    return rating;
}

export function getDataFromServer(movieName, reviewTxt)
{
    var data = {
            "reviews": [
                {   "review": "This is a very nice movie",
                    "isPositive" : true
                },
                {
                    "review": "This was not so good",
                    "isPositive" : false,
                },
                {
                    "review": "This is a good movie",
                    "isPositive" : true,
                },
                {
                    "review": "This is a nice movie",
                    "isPositive" : true,
                },
                {
                    "review": "The movie was not that much interesting",
                    "isPositive" : false,
                }
            ],
            "reviewsCount": {
                "positive": 70,
                "negative": 30
            },
            "cloudTags": [
                { value: "Zootopia", count: 10 }, { value: "Star Wars", count: 13 },
                { value: "Deadpool", count: 15 },{ value: "Alice in Wonderland", count: 7 },
                { value: "Suicide Squad", count: 12 }, { value: "Captain America", count: 8 },
                { value: "La La Land", count: 13 }, { value: "Moana", count: 9 },
                { value: "Kungfu Panda", count: 14 }, { value: "Star Trek", count: 13 },
                { value: "Arrival", count: 12 }, { value: "X Men", count: 16 },
                { value: "Dr Strange", count: 14 }, { value: "Moonlight", count: 7 },
                { value: "The Jungle Book", count: 13 }, { value: "Lights Out", count: 11 }
            ]
    };

    return data;
}

export function  getDataFromAPI(movieName, reviewTxt)
{

}