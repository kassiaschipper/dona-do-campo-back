import { CreateMatchesParams } from "../repositories/matches-repository.js"
import Joi from "joi";
import JoiDateFactory from "@joi/date";

const joiDate = Joi.extend(JoiDateFactory);

export const matcheSchema = Joi.object<CreateMatchesParams>({
  home: Joi.string().required(),
  visitor: Joi.string().required(),
  date: joiDate.date().format("YYYY-MM-DD"),
  time: Joi.string().required(),
  court: Joi.string().required()
});

