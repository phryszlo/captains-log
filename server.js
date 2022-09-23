const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
var favicon = require('serve-favicon');

const Log = require('./models/log.js');

require('dotenv').config(); 
  
const app = new express();
const PORT = process.env.PORT || 3000;  
     
// Middlewares
app.use(express.static('public')); 
app.use(favicon(__dirname + '/public/images/favicon.ico'));
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
   
// this a body parser
app.use(express.urlencoded({ extended: false }));
 
// look it up    
app.use(methodOverride("_method"))
  
mongoose.connect(process.env.MONGO_URI, {   
  useNewUrlParser: true,
  useUnifiedTopology: true    
});
mongoose.connection.once('open', () => { 
  console.log(mongoose.connection);     
  console.log('connected to mongo'); 
});  

//  Index
app.get('/', (req, res) => {
  res.redirect("/logs");
})

app.get('/logs', async (req, res) => {
  await Log.find()  
    .then((allLogs) => {
      res.render('Index', {
        logs: allLogs, 
      }); 
      // res.json(allLogs);
    })
    .catch((err) => {
      res.json(err); 
    }) 
})

    
// New
app.get('/logs/new', (req,res ) => {
  res.render('New', {});
})

// POST
app.post('/logs', async (req, res) => {
  if (req.body.shipIsBroken === "on") {
    req.body.shipIsBroken = true;
  }
  else {
    req.body.shipIsBroken = false;
  }

  await Log.create(req.body)
    .then((createdLog) => {
      res.redirect('/logs');
    })
    .catch((err) => {
      res.json();
    })

})

// Edit
app.get('/logs/:id/edit', async (req, res) => {
  await Log.findById(req.params.id)
    .then((foundLog) => {
      res.render('Edit', {
        log: foundLog,
      });
    })
    .catch((err) => {
      res.json(err);
    })
})
// Update
app.put('/logs/:id', async (req, res) => {
  if (req.body.shipIsBroken === "on") {
    req.body.shipIsBroken = true;
  }
  else {
    req.body.shipIsBroken = false;
  }

  console.log(`put ${req.params.id}`);

  await Log.findByIdAndUpdate(req.params.id, req.body)
    .then((updatedLog) => {
      res.redirect(`/logs/${req.params.id}`);
    })
    .catch ((err) => {
      res.json(err);
    });
})
// DELETE
app.delete('/logs/:id', async (req, res) => {

console.log(`delete: ${req.params.id}`);
  await Log.findByIdAndRemove(req.params.id)
    .then(() => {
      res.redirect('/logs');
    })
    .catch((err) => {
      res.json();
    })
})


// Seeds
app.get('/logs/seed/', async (req, res) => {
  await Log.create([
    {
      title: "lost tire",
      entry: "this is a spaceship. who cares.",
      shipIsBroken: false,
    },
    {
      title: "radiation leak",
      entry: "more than usual",
      shipIsBroken: true,
    },
    {
      title: "myrtle ate the carburator",
      entry: "this is a spaceship, not an old van. who cares.",
      shipIsBroken: false,
    },
  ])
  .then (() => {
    res.redirect("/logs");
  })
  .catch((err) => {
    res.json(err);
  })
});
  
// Show
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
 

app.listen(PORT, () => {
  console.log(`server listens on ${PORT}`);
})