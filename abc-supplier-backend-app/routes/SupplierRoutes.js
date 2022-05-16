const Router = require('@koa/router');
const Supplier = require('../models/Supplier')
const router = new Router({
    prefix: '/suppliers'
});

router.post('/', async ctx => {
    try {
        //validate req.body data before saving
        let { supplierId, name, description, location } = ctx.request.body;
            const supplier = new Supplier({
                supplierId: supplierId,
                name: name,
                description: description,
                location: location,
            });

            await supplier.save();
            ctx.response.status = (201)
            ctx.response.body = { success: true, data: supplier };
    } catch (err) {
        ctx.response.status = 400
        ctx.response.body = { success: false, message: err.message };
    }
});

router.put('/:id', async ctx => {
    try {
        let { supplierId, name, description, location } = ctx.request.body;
        let { id } = ctx.params;
        const filter = { _id: id };

        const supplier = {
                supplierId: supplierId,
                name: name,
                description: description,
                location: location,
            };

            var updatedSupplier = await Supplier.findOneAndUpdate(filter, supplier, {
                new: true,
             })
            ctx.response.status = (200)
            ctx.response.body = { success: true, data: updatedSupplier };
    } catch (err) {
        ctx.response.status = 400
        ctx.response.body = { success: false, message: err.message };
    }
});


router.get('/', async ctx => {
    try {
        const data = await Supplier.find();
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
        const data = await Supplier.find({_id:id});
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
        var deletedSupplier = await Supplier.findById({"_id":id})
        await Supplier.deleteOne({_id: id});
        ctx.response.status = (200)
        ctx.response.body = { success: true, data: deletedSupplier };

    } catch (err) {
        ctx.response.status = 400
        ctx.response.body = { success: false, message: err.message };
    }
});
module.exports = router;