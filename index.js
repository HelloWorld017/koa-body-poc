/**
 * koa-body - example.js
 * Copyright(c) 2014
 * MIT Licensed
 *
 * @author  Charlike Mike Reagent (@tunnckoCore)
 * @author  Daryl Lau (@dlau)
 * @api private
 */
var Koa       = require('koa'),
    app       = new Koa(),
    router    = require('koa-router')(),
    koaBody   = require('koa-body')({multipart:true}),
	fs        = require('fs');

router.post('/', koaBody,
  (ctx) => {
	ctx.body = fs.readFileSync(ctx.request.body.files.uploads[0].path, 'utf8');
  }
);

app.use(router.routes());

var port = process.env.PORT || 3333;
app.listen(port);
