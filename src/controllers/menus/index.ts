import { Request, Response } from "express";
import Menu from "../../models/menu";
import { IMenu } from "../../types/menu";

const getMenus = async (req: Request, res: Response): Promise<void> => {
  try {
    const menus: IMenu[] = await Menu.find();
    res.status(200).json({ menus });
  } catch (error){
    throw error;
  }
};
/*
const addMenu = async (req: Request, res: Response): Promise<void> => {
  try {
    const body = req.body as Pick<IMenu, "name" | "description" | "price">;
    const menu: IMenu = new Menu({
      name: body.name,
      description: body.description,
      price: body.price,
    });

    const newMenu: IMenu = await menu.save();
    res.status(201).json(newMenu);
  } catch (error) {
    throw error;
  }
};

const retrieveMenu = async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      params: { id },
    } = req;

    const menu: IMenu | null = await Menu.findById({ _id: id });

    res.status(menu ? 200: 404).json({ menu });
  } catch (error) {
    throw error;
  }
};

const updateMenu = (req: Request, res: Response): Promise<void> => {
  try {
    const {
      params: { id },
      body,
    } = req;

    const updateMenu: IMenu | null = await Menu.findByIdAndUpdate(
      { _id: id },
      body
    );

    res.status(updateMenu ? 200 : 404).json({
      menu: updateMenu,
    });

  } catch (error) {
    throw error;
  }
}

const deleteMenu = async (req: Request, res: Response): Promise<void> => {
  try {
    const deletedMenu: IMenu | null = await Menu.findByIdAndDelete(
      req.params.id
    );
    res.status(204).json({
      todo: deleteMenu,
    });
  } catch (error) {
    throw error;    
  }
};
*/
export { getMenus/*, addMenu, updateMenu, deleteMenu, retrieveMenu*/};