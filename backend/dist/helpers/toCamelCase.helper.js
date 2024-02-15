"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertToCamelCase = void 0;
function convertToCamelCase(str) {
    // Using replace method with regEx
    return str
        .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
        return index == 0 ? word.toLowerCase() : word.toUpperCase();
    })
        .replace(/\s+/g, "");
}
exports.convertToCamelCase = convertToCamelCase;
