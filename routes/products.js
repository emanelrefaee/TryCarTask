var express=require('express');
var database=require('../config/db_connection')

var router=express.Router();

router.get('/create',(req,res,next)=>
{
   res.render('product-create');
});


//Get All Products
router.get('/all',(req,res,next)=>
{
    if(database !=null)
      database.query('SELECT * FROM view_products WHERE deleted=0',(err,results)=>
      {
          if(!err)
            res.render('products-all',{products:results})
      });

});

//New Product
router.post('/post-form',(req,res,next)=>{
    if(database !=null)
      database.query('INSERT INTO products SET ?',req.body,(err,success)=>
      {
          if(!err)
           res.send('success');
           else
           res.send(err.message);
  
      });
  });

  
//Delete Product 
router.put('/edit/:id',(req,res,next)=>
{
    database.query("UPDATE products SET deleted=1 WHERE product_id='"+req.params.id+"' ",(err,results)=>
      {
    res.send(req.params.id.toString());

          if(!err)
            res.send(results);
            //res.render('products-all',{products:results})
      });
});


module.exports=router;