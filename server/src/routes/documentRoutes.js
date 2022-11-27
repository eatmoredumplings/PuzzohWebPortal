const express = require("express");
const router = express.Router();
const { getDocuments, addDocument, deleteDocument } = require('../controllers/document')

router.get('/documents', getDocuments)
router.post('/document', addDocument)
router.delete('/document/:id', deleteDocument)

module.exports = router;
