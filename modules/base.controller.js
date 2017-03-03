

class Controller {
  constructor(facade) {
    this.facade = facade;
  }

  /**
   * @api {find} /{collection}/{query} find
   * @apiName find
   * @apiGroup BaseController
   * @apiDescription Find a collection base on mongosee find function
   * @apiParam {Object} query Express Query Object
   *
   * @apiSuccess {StatusCode} 200
   * @apiSuccess {collection} Mongo collection result of the find
   *
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *       productId: fafsa,
   *       applicant: {
   *         email: john.doe@gmail.com,
   *         firstName: John ,
   *         lastName: Doe,
   *         ...
   *      },
   *      ...
   *     }
   *
   */

  find(req, res, next) {
    return this.facade.find(req.query)
    .then(collection => res.status(200).json(collection))
    .catch(err => next(err));
  }

  /**
   * @api {findOne} /{collection}/{id} findOne
   * @apiName findOne
   * @apiGroup BaseController
   * @apiDescription Find a aunique element based on mongosee findOne function
   *
   * @apiParam {Object} query Express Query Object
   *
   * @apiSuccess {StatusCode} 200
   * @apiSuccess {collection} Mongo collection result of the find
   *
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *       productId: fafsa,
   *       applicant: {
   *         email: john.doe@gmail.com,
   *         firstName: John ,
   *         lastName: Doe,
   *         ...
   *      },
   *      ...
   *     }
   *
   */

  findOne(req, res, next) {
    return this.facade.findOne(req.query)
    .then(doc => res.status(200).json(doc))
    .catch(err => next(err));
  }

  findById(req, res, next) {
    return this.facade.findById(req.params.id)
    .then((doc) => {
      if (!doc) { return res.status(404).end(); }
      return res.status(200).json(doc);
    })
    .catch(err => next(err));
  }

  create(req, res, next) {
    this.facade.create(req.body)
    .then(doc => res.status(201).json(doc))
    .catch(err => next(err));
  }

  update(req, res, next) {
    const conditions = { _id: req.params.id };

    this.facade.update(conditions, req.body)
    .then((doc) => {
      if (!doc) { return res.status(404).end(); }
      return res.status(200).json(doc);
    })
    .catch(err => next(err));
  }

  remove(req, res, next) {
    this.facade.remove(req.params.id)
    .then((doc) => {
      if (!doc) { return res.status(404).end(); }
      return res.status(204).end();
    })
    .catch(err => next(err));
  }

}

module.exports = Controller;
