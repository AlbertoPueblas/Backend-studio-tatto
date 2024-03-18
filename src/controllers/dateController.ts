import { Request, Response } from "express"
import { Dates } from "../models/dates";
import { UserRoles } from "../constants/UserRole";



//---------------------------------------------------------------------------

export const dateController = {

    //Create date
    async create(req: Request, res: Response): Promise<void> {
        try {

            const { appointmentDate, user, job, artist } = req.body;

            if (!appointmentDate || !user || !job ||  !artist ) {
                res.status(400).json({
                    message: "All fields must be provided",
                });
                return;
            }

            const dateToCreate = Dates.create({
                appointmentDate: appointmentDate ,
                userId: user.id,
                jobId: job.id,
                user: user,
                job: job,
            });


            // Save to BD
            await Dates.save(dateToCreate);

            res.status(201).json({
                message: "Date has been created",
            });

        } catch (error) {
            res.status(500).json({
                message: "Failed to create date",
            });
        }
    },




    async getAll(req: Request, res: Response): Promise<void> {
        try {

            const page = Number(req.query.page) || 1;
            const limit = Number(req.query.limit) || 250;
            
            const [dates, totalDates] = await Dates.findAndCount({
                relations: {
                    user: true,
                    job: true,
                },
      
           
            });
            if (dates.length === 0) {
                res.status(404).json({
                    message: "Dates not found",
                });
                return;
            }

            const totalPages = Math.ceil(totalDates / limit);

            res.status(200).json({
                dates: dates.slice((page - 1) * limit, page * limit),
                current_page: page,
                per_page: limit,
                total_pages: totalPages,
            });

        } catch (error) {
            res.status(500).json({
                message: "Something went wrong",
            });
        }
    },

    async getById(req: Request, res: Response): Promise<void> {
        try {
            const dateId = Number(req.params.id);

            const date = await Dates.findOne({
                    relations: {
                        user: true,
                        job: true,
                    },
            
                    where: { id: dateId },
                });

            if (!date) {
                res.status(404).json({ message: "Date not found" });
                return;
            }

            res.json(date);
        } catch (error) {
            res.status(500).json({
                message: "Failed to retrieve Date",
            });
        }
    },

    async update(
        req: Request<{id:string}, {}, Partial <Date>>,
        res: Response): Promise<void> {
        try {
            const dateId = Number(req.params.id)
            const {...resDatesData} = req.body;

            const dateToUpdate = await Dates.findOne({where: {id: dateId}});
                if(!dateToUpdate) {
                    res.status(404).json({ message: "Date not found" });
                    return;
                }
                console.log(dateToUpdate);
                

                
                const updatedDate: Partial<Date> = {
                    ...dateToUpdate,
                    ...resDatesData,
                };
                
                await Dates.save(dateToUpdate);

                res.status(202).json({
                    message: "Date has been updated",
                });
                
            } catch (error) {
                res.status(500).json({
                    message: "UDate not found",
                });      
            }      
        },

        async delete(req: Request, res: Response): Promise < void> {
            try {
                const DateId = Number(req.params.id);

                const deleteResult = await Dates.delete(DateId);

                if(deleteResult.affected === 0) {
            res.status(404).json({ message: "Date not delete" });
            return;
            }

            

            res.status(200).json({ 
                message: "Date deleted successfully" });
        } catch(error) {
            res.status(500).json({
            message: "Failed to delete date",
            });
        }
    },

};

