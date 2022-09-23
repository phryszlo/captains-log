# captain's log

a Per Scholas assignmnent   
09-23-2022  
-----------

I am doing my mongoose routes using async/await in this form:   
```
app.get('/logs/:id', async (req, res) => {
  await Log.findById(req.params.id)
    .then((foundLog) => {
      res.render('Show', {
        log: foundLog,
      });
    })   
    .catch((err) => { 
      res.json(err);
    }) 
});
```
