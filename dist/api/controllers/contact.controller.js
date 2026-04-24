"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleInquiry = void 0;
const async_handler_js_1 = require("../middlewares/async-handler.js");
const contact_service_js_1 = require("../services/contact.service.js");
/**
 * Controller: Handles HTTP requests, performs validation, and delegates logic to services.
 */
exports.handleInquiry = (0, async_handler_js_1.asyncHandler)(async (req, res) => {
    const { name, email, message } = req.body;
    // 2. Delegate to Service Layer
    const result = await contact_service_js_1.contactService.processInquiry({ name, email, message });
    // 3. Return Standardized Response
    return res.status(200).json({
        status: 'success',
        data: result,
        message: 'Inquiry received successfully.'
    });
});
