"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const menus_1 = require("../controllers/menus");
const menuRoutes = (0, express_1.Router)();
menuRoutes.get('/menu', menus_1.getMenus);
/*menuRoutes.post('/menu', addMenu);
menuRoutes.put('/menu/:id', updateMenu);
menuRoutes.delete('/menu/:id', deleteMenu);
menuRoutes.get('/menu/:id', retrieveMenu);*/
exports.default = menuRoutes;
