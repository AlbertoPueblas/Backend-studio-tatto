import { Request, Response } from "express";
import { User } from "../models/User";
import bcrypt from "bcrypt";
import { UserRoles } from "../constants/UserRole";
import jwt from "jsonwebtoken";

//--------------------------------------------------------------------------

export const authController = {

   async register(req: Request, res: Response): Promise<void> {

      try {

         const { firstName, email, password } = req.body;

         if (!firstName || !email || !password) {
            res.status(400).json({
               message: "All fields must be provided",
            });
            return;
         }

         const users = await User.find();
         for (let element of users) {
            if (element.email === email) {
               res.status(400).json({
                  message: "Email is already in use",
               });
               return;
            }
         };

         const hashedPassword = bcrypt.hashSync(password, 10);

         const userToCreate = User.create({
            firstName: firstName,
            email: email,
            password: hashedPassword,
            role: UserRoles.CLIENT,
         });

         // Save to BD
         await User.save(userToCreate);

         res.status(201).json({
            message: "User has been register",
         });

      } catch (error) {
         res.status(500).json({
            message: "Failed to create user",
         });
      }
   },

   async login(req: Request, res: Response): Promise<void> {
      try {
         const { email, password, } = req.body;
            console.log(req.body);
            
         if (!email || !password) {
            res.status(400).json({
               message: "email and password must be provided",
            });
            return;
         }

         const user = await User.findOne({
            relations: {
               role: true,
            },
            where: { email: email },
            select: { id: true, email: true, password: true },
         });
         if (!user) {
            res.status(400).json({
               message: "Bad credentials",
            });
            return;
         }
         const isPasswordMatch = bcrypt.compareSync(password, user.password)
         console.log(password, user.password);
         
         if (!isPasswordMatch) {
            res.status(400).json({
               message: "Bad request",
            });
            return;
         }

         const tokenPayload={
            userId: user.id,
            userRole: user.role.name,
         };

         // Generate token
         const token = jwt.sign(
            tokenPayload,
            process.env.JWT_SECRET as string,
            {
               expiresIn: "3h",
            }
         );


         res.status(200).json({
            message: "Login succesfully",
            token,
         });
      } catch (error) {
         res.status(500).json({
            message: "Failed to login user",
         });
      }
   },
};
