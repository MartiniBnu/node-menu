import { Request, Response } from "express";
import Menu from "../../models/menu";
import { IMenu } from "../../types/menu";

const getMenus =async (req:Request, res:Response): Promise<void> => {
  try {
    const menus: IMenu[] = await Menu.find();
    res.status(200).json({menus});
  } catch (error){
    throw error;
  }
}