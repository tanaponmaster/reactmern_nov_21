const express = require("express");
const router = express.Router();
const Products = require("./models/product_schema");
const { tokenIntercept1, tokenIntercept2 } = require("./demo_intercept");
const jwt = require("./jwt");
const formidable = require("formidable");
const path = require("path");
const fs = require("fs-extra");

// http://localhost:8081/api/v2/product
router.get("/product", jwt.verify, async (req, res) => {
  const result = await Products.find();
  res.json(result);
});

// http://localhost:8081/api/v2/product
router.get("/product/name/:keyword", jwt.verify, async (req, res) => {
  var query = { name: new RegExp("^.*" + req.params.keyword + ".*$", "i") };
  const result = await Products.find(query);
  res.json(result);
});

// http://localhost:8081/api/v2/travel/bkk/ny
router.get("/travel/:from/:to", async (req, res) => {
  const { from, to } = req.params;
  res.json({ begin: from, dest: to });
});

// intercept demo
// http://localhost:8081/api/v2/test?token=1234
router.get("/test", tokenIntercept1, tokenIntercept2, (req, res) => {
  res.json({ result: "pass intercept" });
});

// Get single
router.get("/product/id/:id", async (req, res) => {
  let doc = await Products.findOne({ product_id: req.params.id });
  res.json(doc);
});

// Delete Product
router.delete("/product/id/:id", async (req, res) => {
  let doc = await Products.findOneAndDelete({ product_id: req.params.id });
  res.json({ result: "ok", message: JSON.stringify(doc) });
});

// Upload Image
uploadImage = async (files, doc) => {
  if (files.image != null) {
    var fileExtention = files.image.originalFilename.split(".")[1];
    doc.image = `${doc.product_id}.${fileExtention}`;
    var newpath =
      path.resolve(__dirname + "/uploaded/images/") + "/" + doc.image;

    if (fs.existsSync(newpath)) {
      await fs.remove(newpath);
    }
    await fs.move(files.image.filepath, newpath);

    // Update database
    await Products.findOneAndUpdate({ product_id: doc.product_id }, doc);
  }
};

// Add Product
router.post("/product", async (req, res) => {
  try {
    var form = new formidable.IncomingForm();
    form.parse(req, async (err, fields, files) => {
      let doc = await Products.create(fields); // insert
      await uploadImage(files, doc); // save image
      res.json({ result: "ok", message: JSON.stringify(doc) }); // reply result
    });
  } catch (err) {
    res.json({ result: "nok", message: JSON.stringify(err) });
  }
});

module.exports = router;
