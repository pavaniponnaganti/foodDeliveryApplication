import express from 'express';
import bodyparser from 'body-parser';
const app = express();
const port = 5000;
app.use(bodyparser.json());


const foodList = [
  {
    oderID: '#345',
    store: 'pavani ',
    user: 'PP',
    address: 'banglore',
    status: 'Pending ',
    orderDate: '24-02-2020'
  },
  {
    oderID: '#345',
    store: 'pavani ',
    user: 'PP',
    address: 'banglore',
    status: 'Pending ',
    orderDate: '30-02-2020'
  },
  {
    oderID: '#345',
    store: 'pavani ',
    user: 'baby',
    address: 'banglore',
    status: 'Pending ',
    orderDate: '24-02-2020'
  },
  {
    oderID: '#345',
    store: 'pavani ',
    user: 'Darling',
    address: 'banglore',
    status: 'Pending ',
    orderDate: '24-02-2020'
  },
  {
    oderID: '#345',
    store: 'pavani ',
    user: 'PP',
    address: 'banglore',
    status: 'Pending ',
    orderDate: '24-02-2020'
  },
  {
    oderID: '#345',
    store: 'pavani ',
    user: 'PP',
    address: 'banglore',
    status: 'Pending ',
    orderDate: '24-02-2020'
  },
]
//const welcomSliderInfo =[];
const welcomSliderInfo=[
  {
    sortno:'1',
    title:'Alu65',
    imagepath:''
  },
  {
    sortno:'2',
    title:'Biryani',
    imagepath:''
  },
  {
    sortno:'3',
    title:'Pulihora with Alu',
    imagepath:''
  }
]

const bannerList=[
  {
   city:'bangalore',
   image:'',
   position:'Top',
   status:'Active',
   restaurant:'bawarchi'
  },
  {
    city:'Tirunammalai',
    image:'',
    position:'Top',
    status:'Active',
    restaurant:'paradise'
   },
   {
    city:'Vizag',
    image:'',
    position:'Top',
    status:'Active',
    restaurant:'SpecialMagic'
   }
]

const manageCitiesList=[
  {
    name: 'Jalandhar',
    status:'Active'
  },
  {
    name: 'Arshad Nawaz',
    status:'InActive'
  },
  {
    name: 'Saharan Punit',
    status:'Active'
  }
]

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET'); //to give access to all the methods provided
        return res.status(200).json({});
    }
    next(); //so that other routes can take over
});

app.get('/foodlist', (req, res) => {
  res.send({
     result : foodList
  });
});

app.get('/bannerlist', (req,res) =>
{
  res.send({
    data:bannerList
  });
})

app.get('/welcomeslider',(req,res) =>
{
  res.send({
    result: welcomSliderInfo 
  });
})

app.get('/manage-cities',(req,res)=>
{
  res.send({
    data:manageCitiesList
  })
})

app.get('/welcomesliderAdd')

app.post('/welcomeAdd',(req:any,res)=> {
  console.log('============= Data  =================')
  console.log(req.body);
  if(req.body.title !='' &&  req.body.imagepath !='' && req.body.sortno !='' ) {
var slider = {
 title: req.body.title,
 imagepath: req.body.imagepath,
 sortno:req.body.sortno
  }
  console.log('slider data....')
  console.log(slider);
 welcomSliderInfo.push(slider);
 res.send({
   message: 'Record Added succesfully',
   result: welcomSliderInfo
 });
 }
})

app.post('/bannerAdd',(req,res) => {
  if(req.body.city != '' && req.body.image != '' && req.body.position != '' && req.body.status != '' && req.body.restaurant != ''){
    var banner = {
      city: req.body.city,
      image: req.body.image,
      position: req.body.position,
      status: req.body.status,
      restaurant:req.body.restaurant      
    }
    bannerList.push(banner);
    res.send({
      message:'data loaded successfully',
      result: bannerList
    });
  }
})

app.post('/bannerDelete',(req,res) =>{
  // removeByAttr(bannerList,'city','bangalore');
  for(var i=0; i <= bannerList.length; i++){
      if(bannerList[i].city == req.body.city){
        bannerList.splice(i,1);
        res.send({
          message:'record deleted successfully',
          result:bannerList
        });
      }
  }
})

app.post('/manage-cities-add',(req,res) =>{
  if(req.body.name != '' && req.body.status != ''){
    var manageCities = {
      name: req.body.name,
      status: req.body.status
    }
    manageCitiesList.push(manageCities);
    res.send({
      message:'data has loaded finally',
      data: manageCitiesList
    });
  }
})

app.post('/manage-cities-delete',(req,res) =>{
  for(var i=0; i<= manageCitiesList.length; i++)
  {
    if(manageCitiesList[i].name == req.body.name){
      manageCitiesList.splice(i,1);
      res.send({
        message:'recod deleted successfully',
        resss:manageCitiesList
      });
    }
  }
})

// var removeByAttr = function(arr, attr, value){
//   var i = arr.length;
//   while(i--){
//      if( arr[i] 
//          && arr[i].hasOwnProperty(attr) 
//          && (arguments.length > 2 && arr[i][attr] === value ) ){ 

//          arr.splice(i,1);

//      }
//   }
//   return arr;
// }

app.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  return console.log(`server is listening on ${port}`);
});