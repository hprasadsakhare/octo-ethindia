import { TILES } from "./tiles";
import {
  PLACEMENT_TYPE_FIRE,
  PLACEMENT_TYPE_ICE,
  PLACEMENT_TYPE_PLANT,
  PLACEMENT_TYPE_PLATE,
  PLACEMENT_TYPE_SWITCH,
  PLACEMENT_TYPE_SWITCH_DOOR,
  PLACEMENT_TYPE_WALL,
  PLACEMENT_TYPE_WATER,
} from "@/helpers/consts";

export const landUpgradeCheck = (userLevel, width) => {
  console.log("level = " + userLevel + " | width = " + width);
  if (userLevel >= 2 && width < 12) return true;
  if (userLevel >= 4 && width < 16) return true;
  if (userLevel >= 6 && width < 20) return true;
  if (userLevel >= 8 && width < 24) return true;
  return false;
};
export const editorData = [
  {
    id: 1,
    name: "water",
    trait: null,
    levelCap: 4,
    frameCoord: TILES.WATER1,
    value: PLACEMENT_TYPE_WATER,
  },
  {
    id: 2,
    name: "Fire",
    trait: null,
    levelCap: 6,
    frameCoord: TILES.FIRE1,
    value: PLACEMENT_TYPE_FIRE,
  },
  {
    id: 3,
    name: "Wall",
    trait: null,
    levelCap: 0,
    frameCoord: "6x2",
    value: PLACEMENT_TYPE_WALL,
  },
  {
    id: 4,
    name: "Ice",
    trait: null,
    levelCap: 1,
    frameCoord: TILES.ICE,
    value: PLACEMENT_TYPE_ICE,
  },
  {
    id: 5,
    name: "Switch",
    trait: null,
    levelCap: 4,
    frameCoord: TILES.PURPLE_BUTTON,
    value: PLACEMENT_TYPE_SWITCH,
  },
  {
    id: 6,
    name: "Switchable Open Door",
    trait: null,
    levelCap: 4,
    frameCoord: TILES.PURPLE_DOOR_OUTLINE,
    value: PLACEMENT_TYPE_SWITCH_DOOR,
  },
  {
    id: 7,
    name: "Switchable Close Door",
    frameCoord: TILES.PURPLE_DOOR_SOLID,
    trait: null,
    levelCap: 4,
    value: PLACEMENT_TYPE_SWITCH_DOOR,
  },
  {
    id: 8,
    name: "Plant 1",
    levelCap: 2,
    frameCoord: TILES.PLANT_1,
    trait: 1,
    value: PLACEMENT_TYPE_PLANT,
  },
  {
    id: 9,
    name: "Plant 2",
    levelCap: 3,
    frameCoord: TILES.PLANT_2,
    trait: 2,
    value: PLACEMENT_TYPE_PLANT,
  },
  {
    id: 10,
    name: "Plant 3",
    levelCap: 4,
    frameCoord: TILES.PLANT_3,
    trait: 3,
    value: PLACEMENT_TYPE_PLANT,
  },
  {
    id: 11,
    name: "Plant 4",
    levelCap: 5,
    frameCoord: TILES.PLANT_4,
    trait: 4,
    value: PLACEMENT_TYPE_PLANT,
  },
  {
    id: 12,
    name: "Plant 5",
    levelCap: 6,
    frameCoord: TILES.PLANT_5,
    trait: 5,
    value: PLACEMENT_TYPE_PLANT,
  },
  {
    id: 13,
    name: "Plant 6",
    levelCap: 7,
    frameCoord: TILES.PLANT_6,
    trait: 6,
    value: PLACEMENT_TYPE_PLANT,
  },
  {
    id: 14,
    name: "Plant 7",
    levelCap: 8,
    frameCoord: TILES.PLANT_7,
    trait: 7,
    value: PLACEMENT_TYPE_PLANT,
  },
  {
    id: 15,
    name: "Plant 8",
    levelCap: 9,
    frameCoord: TILES.PLANT_8,
    trait: 8,
    value: PLACEMENT_TYPE_PLANT,
  },
  {
    id: 16,
    name: "Fence 1",
    levelCap: 2,
    frameCoord: TILES.NAME_PLATE_1,
    trait: 1,
    value: PLACEMENT_TYPE_PLATE,
  },
  {
    id: 17,
    name: "Fence 2",
    levelCap: 3,
    frameCoord: TILES.NAME_PLATE_2,
    trait: 2,
    value: PLACEMENT_TYPE_PLATE,
  },
  {
    id: 18,
    name: "Fence 3",
    levelCap: 4,
    frameCoord: TILES.NAME_PLATE_3,
    trait: 3,
    value: PLACEMENT_TYPE_PLATE,
  },
  {
    id: 19,
    name: "Fence 4",
    levelCap: 5,
    frameCoord: TILES.NAME_PLATE_4,
    trait: 4,
    value: PLACEMENT_TYPE_PLATE,
  },
  {
    id: 20,
    name: "Fence 5",
    levelCap: 6,
    frameCoord: TILES.NAME_PLATE_5,
    trait: 5,
    value: PLACEMENT_TYPE_PLATE,
  },
  {
    id: 21,
    name: "Fence 6",
    levelCap: 7,
    frameCoord: TILES.NAME_PLATE_6,
    trait: 6,
    value: PLACEMENT_TYPE_PLATE,
  },
  {
    id: 22,
    name: "Fence 7",
    levelCap: 8,
    frameCoord: TILES.NAME_PLATE_7,
    trait: 7,
    value: PLACEMENT_TYPE_PLATE,
  },
  {
    id: 23,
    name: "Fence 8",
    levelCap: 9,
    frameCoord: TILES.NAME_PLATE_8,
    trait: 8,
    value: PLACEMENT_TYPE_PLATE,
  },
];
