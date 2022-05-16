const Router = require('@koa/router');
const Order = require('../models/Order')
const router = new Router({
    prefix: '/orders'
});

router.post('/', async ctx => {
    try {
        //validate req.body data before saving
        let { orderId, customerId, items, total} = ctx.request.body;
            const order = new Order({
                orderId: orderId,
                customerId: customerId,
                items: items,
                total: total,
            });

            await order.save();
            ctx.response.status = (201)
            ctx.response.body = { success: true, data: order };
    } catch (err) {
        ctx.response.status = 400
        ctx.response.body = { success: false, message: err.message };
    }
});

router.put('/:id', async ctx => {
    try {
        let { orderId, customerId, items, total } = ctx.request.body;
        let { id } = ctx.params;
        const filter = { _id: id };

        const order = {
                orderId: orderId,
                customerId: customerId,
                items: items,
                total: total
            };

            var updatedOrder = await Order.findOneAndUpdate(filter, order, {
                new: true,
             })
            ctx.response.status = (200)
            ctx.response.body = { success: true, data: updatedOrder };
    } catch (err) {
        ctx.response.status = 400
        ctx.response.body = { success: false, message: err.message };
    }
});


router.get('/', async ctx => {
    try {
        const data = await Order.find();
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
        console.log(id);
        const data = await Order.find({_id:id});
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
        var deletedOrder = await Order.findById({"_id":id})
        await Order.deleteOne({_id: id});
        ctx.response.status = (200)
        ctx.response.body = { success: true, data: deletedOrder };

    } catch (err) {
        ctx.response.status = 400
        ctx.response.body = { success: false, message: err.message };
    }
});
module.exports = router;