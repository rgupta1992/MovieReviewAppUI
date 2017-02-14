/**
 * Created by madhubhushan on 1/27/2017.
 */

import TotalReviewsCount from "../data/TotalReviewsCount";
import ReviewAppData from "../data/ReviewAppData";
import ReviewData from "../data/ReviewData";
import WordCloudTagData from "../data/WordCloudTagData";

export function getTotalReviewsCount(data) {
    var obj = data.reviewsCount;

    return new TotalReviewsCount(obj.positive, obj.negative);
}

export function getTotalReviews(data)
{
    var totalReviews = [];

    for(var i=0 ; i < data.reviews.length; i++)
    {
        var obj = data.reviews[i];
        totalReviews.push(new ReviewData(obj.movieName, obj.review, obj.isPositive));
    }

    return totalReviews;
}

export function getCloudTagsData(data)
{
    var cloudTagsData = [];

    for(var i=0;i <data.cloudTags.length;i++)
    {
        var obj = data.cloudTags[i];
        cloudTagsData.push(new WordCloudTagData(obj.value, obj.count));
    }

    return cloudTagsData;
}

export function getReviewAppData(data)
{
    console.log('in getReviewAppData method', data);

    var totalReviews = getTotalReviews(data);
    var reviewsCount = getTotalReviewsCount(data);
    var cloudTagData = data.cloudTags;

    return new ReviewAppData(totalReviews, reviewsCount, cloudTagData);
}