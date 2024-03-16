import { Request, Response } from "express";
import { User } from "../models/User";
import bcrypt from "bcrypt";
import { UserRoles } from "../constants/UserRole";
import jwt from "jsonwebtoken";
import { TokenData } from "../types/type";
