const Router = require('@koa/router');
const Product = require('../models/Product')
const Stock = require('../models/Stock')
const axios = require('axios');
const AppConstants = require('../constants/AppConstants');

const router = new Router({
   prefix: '/stocks'
});



router.post('/', async ctx => {

   try {
      //validate data as required
      console.log('tre1.0',ctx.request.body)

      const stock = new Stock(ctx.request.body);
      console.log('tre1',stock)


      await stock.save();

      const product = await Product.findById({ _id: stock.product })
      product.stocks.push(stock);
      await product.save();

      //return new Stock object, after saving it to Publisher
      ctx.response.status = (200)
      ctx.response.body = { success: true, data: stock };

   } catch (err) {
      console.log(err)
      ctx.response.status = 400
      if (err.path) {
         ctx.response.body = { success: false, error: `Provide a valid value for ${err.path}` };
      } else {
         ctx.response.body = { success: false, error: `An error occured` };
      }
   }
})

router.put('/:id', async ctx => {
   try {
      //validate req.body data before saving
      let { id } = ctx.params
      let { stockId, product, recievedQty, supplierId, outGoingQty, 
         purchasePrice, stockLocation, recievedDate,  deflectionFromIdealHarvest, daysSinceHarvested , predictedExpiryDate } = ctx.request.body;
      const filter = { _id: id };

      const stock = {
         stockId: stockId,
         product: product,
         supplierId: supplierId,
         outGoingQty: outGoingQty,
         recievedQty: recievedQty,
         purchasePrice: purchasePrice,
         recievedDate: recievedDate
      };

      var updatedStock = await Stock.findOneAndUpdate(filter, stock, {
         new: true,
      }).catch((err) => {
         ctx.response.status = 400
         ctx.response.body = { success: false, message: err.message };
      })
      ctx.response.status = (200)
      ctx.response.body = { success: true, data: updatedStock };
   } catch (err) {
      ctx.response.status = 400
      ctx.response.body = { success: false, message: err.message };
   }
});

router.delete('/:id', async ctx => {
   try {
      let { id } = ctx.params;
      var deletedStock = await Stock.findOneAndRemove({ _id: id });
      ctx.response.status = (200)
      ctx.response.body = { success: true, data: deletedStock };

   } catch (err) {
      ctx.response.status = 400
      ctx.response.body = { success: false, message: err.message };
   }
});



module.exports = router;