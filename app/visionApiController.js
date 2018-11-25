const vision = require('@google-cloud/vision');
const fs = require('fs');
const client = new vision.ImageAnnotatorClient({
  keyFilename: './app/keyfiles/TestVisionApiKey.json'
});

exports.processImageGet=(req,res)=>{
    client
  .labelDetection('./app/uploads/nature_1.jpg')
  .then(results => {
    const labels = results[0].labelAnnotations;
      res.send(results);
    console.log('Labels:');
    labels.forEach(label => console.log(label));
    //console.log(results);
  })
  .catch(err => {
    console.error('ERROR:', err);
  });

}
exports.processImagePost=(req,res)=>{
    client
  .labelDetection('./app/uploads/'+req.param('imageName'))
  .then(results => {
    const labels = results[0].labelAnnotations;
    deleteFile(req.param('imageName'));
    res.send(labels);
     
  })
  .catch(err => {
    console.error('ERROR:', err);
  });

}
function deleteFile(image)
{
  fs.unlink('./app/uploads/'+image, (err) => {
  if (err) throw err;
  console.log('successfully deleted /tmp/hello');
});
}

