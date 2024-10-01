import { Request, Response } from "express";
import userModel from "../model/userModel";
import SliderModel from "../model/SliderModel";

export const viewAllSlider = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const users = await userModel.find();

    return res.status(200).json({
      message: "All users found",
      data: users,
      status: 200,
    });
  } catch (error: any) {
    return res.status(200).json({
      message: "Error getting users ",
      status: 404,
    });
  }
};

export const createSlider = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { video, image, profession, skills } = req.body;
    const slider = await SliderModel.create({
      video,
      image,
      profession,
      skills,
    });

    return res.status(201).json({
      message: "slider account successfully",
      data: slider,
      status: 201,
    });
  } catch (error: any) {
    return res.status(404).json({
      message: "Error creating slider",
      status: 404,
    });
  }
};

export const loginUserAccount = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { email, password } = req.body;
    const users = await userModel.findOne({ email });

    if (users) {
      if (password === users.password) {
        return res.status(201).json({
          message: "user login",
          data: users,
          status: 201,
        });
      } else {
        return res.status(404).json({
          message: "password is incorrect",
        });
      }
    } else {
      return res.status(404).json({
        message: "Email not found",
      });
    }
  } catch (error: any) {
    return res.status(404).json({
      message: "Error creating user account",
      status: 404,
    });
  }
};
