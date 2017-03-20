
### Running the project

Make sure you have node version >= 6 because this project uses native supported ES6 features. No need to use babel or compile anything.

**Run locally using**:

```bash
npm run dev

```
the app runs on `localhost:8080`

### Testing

The project uses [Jest](https://facebook.github.io/jest/) as the test runner. The "easier" part boiled down to three primary features:

 - All dependencies are mocked by default
 - All in one
 - Ease of setup and configuration
 - Auto-magically finds and runs all your tests; no registration required
 - Developed and maintained by Facebook

**Run the tests using:**

```bash
npm run test
```
### API Docs
[apiDoc](http://apidocjs.com/) creates a documentation from API annotations in your source code.

	/**
	 * @api {get} /user/:id Request User information
	 * @apiName GetUser
	 * @apiGroup User
	 *
	 * @apiParam {Number} id Users unique ID.
	 *
	 * @apiSuccess {String} firstname Firstname of the User.
	 * @apiSuccess {String} lastname  Lastname of the User.
	 */

**Generate the docs using:**

```bash
npm run docs
```
### Development Notes:

**Controller:**

HTTP layer, in this instance you can manage express request, response and next. In `base.controller` are the basic RESTful methods find, findOne, findById, create, update and remove. Because this class is extending from there, you got that solved. You can overwrite extended methods or create custom ones easily using ES6 classes.

**Facade:**

This layer works as a simplified interface of mongoose and as business model layer, in this instance you can manage your business logic. Here are some use case examples:

- Validate collection
- Create collection x before creating collection y
- In `base.facade` you have the basic support for RESTful methods. Because this class is extending from there, you got that solved. You can overwrite extended methods or create custom ones here. Also you can support more mongoose functionality like skip, sort etc.