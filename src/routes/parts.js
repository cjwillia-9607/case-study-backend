const express = require('express');
const router = express.Router();
const { getInstallGuide, checkCompatibility, troubleshootIssue } = require('../controllers/partsController.js');

router.get('/install-guide/:partNumber', getInstallGuide);
router.get('/compatibility-check/:model/:partNumber', checkCompatibility);
router.get('/troubleshoot/:issue', troubleshootIssue);

module.exports = router;