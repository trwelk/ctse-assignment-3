const Router = require('@koa/router');
const Product = require('../models/Product')
const Stock = require('../models/Stock')
const router = new Router({
    prefix: '/products'
});

router.post('/', async ctx => {
    try {
        //validate req.body data before saving
        let { productId, productName, productType, description, unitOfMeasurement, stocks , unitPrice} = ctx.request.body;
            const product = new Product({
                productId: productId,
                description: description,
                productName: productName,
                productType: productType,
                unitOfMeasurement: unitOfMeasurement,
                stocks: stocks,
                unitPrice:unitPrice
            });

            await product.save();
            ctx.response.status = (201)
            ctx.response.body = { success: true, data: product };
    } catch (err) {
        ctx.response.status = 400
        ctx.response.body = { success: false, message: err.message };
    }
});

router.put('/:id', async ctx => {
    try {
        //validate req.body data before saving
        let { productId, productName, productType, description, unitOfMeasurement, stocks , unitPrice} = ctx.request.body;
        let { id } = ctx.params;
        const filter = { _id: id };

        const product = {
                productId: productId,
                productName: productName,
                productType: productType,
                description:description,
                unitOfMeasurement: unitOfMeasurement,
                stocks: stocks,
                unitPrice:unitPrice
            };

            var updatedProduct = await Product.findOneAndUpdate(filter, product, {
                new: true,
             })
            ctx.response.status = (200)
            ctx.response.body = { success: true, data: updatedProduct };
    } catch (err) {
        ctx.response.status = 400
        ctx.response.body = { success: false, message: err.message };
    }
});


router.get('/', async ctx => {
    try {
        const data = await Product.find()
                .populate({ path: 'stocks'})    ;
        ctx.response.status = 200
        ctx.response.body = { success: true, data: data };
    } catch (err) {
        ctx.response.status = 400
        ctx.response.body = { success: false, message: err.message };
    }
})

router.get('/:id', async ctx => {
    try {
        let { id } = ctx.params;
        const data = await Product.find({_id:id})
            .populate({ path: 'stocks' });
        ctx.response.status = 200
        ctx.response.body = { success: true, data: data };
    } catch (err) {
        ctx.response.status = 400
        ctx.response.body = { success: false, message: err.message };
    }
 })


router.delete('/:id', async ctx => {
    try {
        let { id } = ctx.params;
        var deletedProduct = await Product.findById({"_id":id})
        await Product.deleteOne({_id: id});
        ctx.response.status = (200)
        ctx.response.body = { success: true, data: deletedProduct };

    } catch (err) {
        ctx.response.status = 400
        ctx.response.body = { success: false, message: err.message };
    }
});
module.exports = router;