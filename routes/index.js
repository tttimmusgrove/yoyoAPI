var express = require('express');
var router = express.Router();
var knex = require('../knex');
/**
 * @api {get} /api/activity Request all activity information
 * @apiName GetActivity
 * @apiGroup Activity
 *
 * @apiSuccessExample {array} Success-Response:
 *     HTTP/1.1 200 OK
 *     [
        {
        "activity_id":4,
        "type_id":1,
        "name":"Walking",
        "date":"7/25/2016",
        "duration":30,
        "client_id":2,
        "username":"tttim"
        },
        {...}
       ]
 */
router.get('/yoyo', function(req, res, next) {
    knex('yoyo').select('yoyo.id as yoyo_id', 'type.id as type_id', 'type.type', 'yoyo.name', 'yoyo.price', 'yoyo.difficulty', 'yoyo.rating', 'yoyo.imageURL', 'yoyo.videoUrl').join('type', function() {
        this.on('yoyo.type_id', '=', 'type.id')
    }).then(function(data) {
        res.json(data);
    })
});
/**
 * @api {get} /api/activity/:id Request specific activity information
 * @apiName GetActivityById
 * @apiGroup Activity
 *
 * @apiSuccessExample {array} Success-Response:
 *     HTTP/1.1 200 OK
 *     [
        {
        "activity_id":4,
        "type_id":1,
        "name":"Walking",
        "date":"7/25/2016",
        "duration":30,
        "client_id":2,
        "username":"tttim"
        }
       ]
 */
router.get('/yoyo/:id', function(req, res, next) {
    knex('yoyo').select('yoyo.id as yoyo_id', 'type.id as type_id', 'type.type', 'yoyo.name', 'yoyo.price', 'yoyo.difficulty', 'yoyo.rating', 'yoyo.imageURL', 'yoyo.videoUrl').join('type', function() {
        this.on('yoyo.type_id', '=', 'type.id')
    }).where('yoyo.id', '=', req.params.id).then(function(data) {
        res.json(data);
    })
});
/**
 * @api {post} /api/activity Add a new activity
 * @apiName PostActivity
 * @apiGroup Activity
 *
 * @apiSuccessExample {array} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
        success: 'Adding was successful'
       }
 */
router.post('/yoyo', function(req, res, next) {
    var body = {
        name: req.body.date,
        price: req.body.type_id,
        rating: req.body.client_id,
        difficulty: req.body.duration,
        imageURL: req.body.imageURL,
        videoUrl: req.body.videoUrl,
        type_id: req.body.type_id
    }
    knex('yoyo').insert(body).then(function() {
        res.json({success: 'Adding was successful'})
    }).catch(function(err) {
        res.json({error: "Adding unsuccessful"})
    })
})
/**
 * @api {put} /api/activity/:id Update specific activity
 * @apiName UpdateActivity
 * @apiGroup Activity
 *
 * @apiSuccessExample {object} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
        success: 'Adding was successful'
       }
 */
router.put('/yoyo/:id', function(req, res, next) {
    var body = {
        name: req.body.date,
        price: req.body.type_id,
        rating: req.body.client_id,
        difficulty: req.body.duration,
        imageURL: req.body.imageURL,
        videoUrl: req.body.videoUrl,
        type_id: req.body.type_id
    }
    knex('yoyo').update(body).where('yoyo.id', '=', req.params.id).then(function() {
        res.json({success: 'Adding was successful'})
    }).catch(function(err) {
        res.json({error: "Adding unsuccessful"})
    })
})
/**
 * @api {delete} /api/activity/:id Deletes specific activity
 * @apiName DeleteActivity
 * @apiGroup Activity
 *
 * @apiSuccessExample {object} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
        success: 'Deleting was successful'
       }
 */
router.delete('/yoyo/:id', function(req, res, next) {
    knex('yoyo').where('id', '=', req.params.id).del().then(function() {
        res.json({success: 'Deleting was successful'})
    }).catch(function(err) {
        res.json({error: "Deleting unsuccessful"})
    })
});
module.exports = router;
