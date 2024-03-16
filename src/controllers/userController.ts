import { Request, Response } from "express"
import { User } from "../models/User";
import bcrypt from "bcrypt";
import { UserRoles } from "../constants/UserRole";

//---------------------------------------------------------------------------

export const userController = {

    //Create user
    async create(req: Request, res: Response): Promise<void> {
    try{

        const { firstName, lastName, email, password, isActive } = req.body;

        if (!firstName || !lastName || !email || !password || !isActive) {
            res.status(400).json({
               message: "All fields must be provided",
            });
            return;
         }

         const hashedPassword = bcrypt.hashSync(password, 10);

         const userToCreate = User.create({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: hashedPassword,
            isActive: isActive,
            role: UserRoles.CLIENT,
         });

         // Save to BD
         await User.save(userToCreate);

         res.status(201).json({
            message: "User has been created",
         });

    } catch (error) {
        res.status(500).json({
            message: "Failed to create user",
        });
    }
},
    async getAll(req: Request, res: Response): Promise<void> {
        try {
            const page = Number(req.query.page) || 1;
            const limit = Number(req.query.limit) || 250;

            const [ users, totalUsers] = await User.findAndCount({
                relations: {
                    role: true,
                 },
                 select: {
                    role: {
                       name: true,
                    },
                 },
                 skip: (page - 1) * limit,
                 take: limit,
            });
        if(users.length === 0) {
                res.status(404).json({
                    message: "Users not found",});
                return;
            }

         const totalPages = Math.ceil(totalUsers / limit);

            
            res.status(200).json(users);

        } catch (error) {
        res.status(500).json({
            message: "Something went wrong",
        });
        }
    },


    async getById(req: Request, res: Response): Promise<void> {
        try {
            const userId = Number(req.params.id);
   
            const user = await User.findOne({
               relations: {
                  role: true,
               },
               where: { id: userId },
            });
   
            if (!user) {
               res.status(404).json({ message: "User not found" });
               return;
            }
   
            res.json(user);
         } catch (error) {
            res.status(500).json({
               message: "Failed to retrieve user",
            });
         }
      },

      async delete(req: Request, res: Response): Promise<void> {
        try {
            const userId = Number(req.params.id);

         const deleteResult = await User.delete(userId);
        
         if (deleteResult.affected === 0) {
            res.status(404).json({ message: "User not delete" });
            return;
         }

         res.status(200).json({ message: "User deleted successfully" });
      } catch (error) {
         res.status(500).json({
            message: "Failed to delete user",
         });

      }

    }
};
