const mongodb=require('mongodb')
const MongoClient=mongodb.MongoClient;

var _db;
const mongoconnect=(callback)=>{
    MongoClient.connect('mongodb+srv://sanjay:sanjayji@cluster0-semln.mongodb.net/sih?retryWrites=true',{ useNewUrlParser: true })
.then(client=>{
    console.log('Connected')
    _db=client.db()
    callback()
})
.catch(err=>{
    console.log(err)
})
}
const getdb=()=>{
    if(_db){
        return _db;
    }
    throw 'No database found'
}



exports.mongoconnect = mongoconnect
exports.getdb = getdb