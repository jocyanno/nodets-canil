import {Request, Response} from "express";
import {createMenuObjects} from '../helpers/createMenuObjects'
import {Pet} from '../models/pet';

export const home = (req: Request, res: Response) =>{
  let list = Pet.getAll();

  res.render('pages/page', {
    menu: createMenuObjects(''),
    banner: {
      title: 'Todos os Animais',
      background: 'allanimals.jpg'
    },
    list
  });
}
export const dogs = (req: Request, res: Response) =>{
  let list = Pet.getFronType('dog');

  res.render('pages/page', {
    menu: createMenuObjects('dog'),
    banner: {
      title: 'Cachorros',
      background: 'banner_dog.jpg'
    },
    list
});
}
export const cats = (req: Request, res: Response) =>{
  let list = Pet.getFronType('cat');

  res.render('pages/page', {
    menu: createMenuObjects('cat'),
    banner: {
      title: 'Gatos',
      background: 'banner_cat.jpg'
    },
    list
});
}
export const fishes = (req: Request, res: Response) =>{
  let list = Pet.getFronType('fish');

  res.render('pages/page', {
    menu: createMenuObjects('fish'),
    banner: {
      title: 'Peixes',
      background: 'banner_fish.jpg'
    },
    list
});
}
