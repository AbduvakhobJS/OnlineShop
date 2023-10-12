const RatingModel = require('../model/ratingModel')
const ObjectId = require('mongodb').ObjectId
const ProductModel = require('../model/productModel')


exports.createOne = async (req, res, next) => {
    const { rating, product_ID } = req.body
    const result = new RatingModel({
        rating: rating,
        product_ID: product_ID
    })
    await result.save()
    .then(async() => {
        const countRatingNews = await RatingModel.aggregate([
            {
                $match: {
                    product_ID: new ObjectId(product_ID)
                }
            },
            {
                $group: {
                    _id: "$product_ID",
                    count: { $sum: 1 },
                    totalSum: {$sum: "$rating"}
                }
            },
            {
                $project: {
                    _id: 1,
                    count: 1,
                    totalSum: {
                        $round: [
                            {
                                $divide: [
                                    "$totalSum", "$count"
                                ]
                            },
                            1
                        ]
                    },
                }
            }
        ])
        const updateRating = await ProductModel.findByIdAndUpdate(product_ID)
        if (countRatingNews == "" ) {
            updateRating.rating = rating
        } 
        else {
            updateRating.rating = countRatingNews[0].totalSum
        }
        await updateRating.save()
        res.json({
            rating: countRatingNews,
            product_ID: updateRating
        })

    })
        .catch((error) => {
            res.json(error)
        })
    
}