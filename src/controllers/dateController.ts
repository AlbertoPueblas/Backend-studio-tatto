import { Request, Response } from "express"
import { Dates } from "../models/Dates";
import { User } from "../models/User";

//---------------------------------------------------------------------------

export const dateController = {
    
    //Create date
    async create(req: Request, res: Response): Promise<void> {
        try {
            const userId = Number(req.tokenData.userId)
            const { appointmentDate, jobId, tattoArtistId } = req.body;
            
            if ( !appointmentDate  || !jobId || !tattoArtistId ) {
                res.status(400).json({
                    message: "All fields must be provided",
                });
                return;
            }
            const user = await User.findOne({
                where:{id: userId}
            })
            const dateToCreate = Dates.create({
                appointmentDate: appointmentDate ,
                jobId: jobId,
                tattoArtistId: tattoArtistId,
                userId: userId,
            });

            
            // Save to BD
            await Dates.save(dateToCreate);

            res.status(201).json({
                message: "Date has been created",
            });
            
        } catch (error) {
            res.status(500).json({
                message: "Failed to create date",
                error: (error as any).message,
            });
        }
    },

    


    async getAll(req: Request, res: Response): Promise<void> {
        try {

            const page = Number(req.query.page) || 1;
            const limit = Number(req.query.limit) || 25;
            
            const [dates, totalDates] = await Dates.findAndCount({
                select:{
                    id: true,
                    appointmentDate: true,
                    userId: true,
                    jobId: true,
                    tattoArtistId: true,
                },
                skip: (page - 1) * limit,
                take: limit,
            });
            if (dates.length === 0) {
                res.status(404).json({
                    message: "Dates not found",
                });
                return;
            }

            const totalPages = Math.ceil(totalDates / limit);

            res.status(200).json({
                dates: dates,
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
            console.log(dateId);
            
            const date = await Dates.findOne({
                select: {
                    id: true,
                    appointmentDate: true,
                    userId: true,
                    jobId: true,
                    tattoArtistId: true,

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
                error: (error as any).message
            });
        }
    },
    
    async update(
        req: Request<{id:string}, {}, Partial <Dates>>,
        res: Response): Promise<void> {
        try {
            const dateId = Number(req.tokenData.id)
            
            const {...resDatesData} = req.body;
            
            console.log(resDatesData, " yo soy data");
            const dateToUpdate = await Dates.findOne({where: {id: resDatesData.id}});
                if(!dateToUpdate) {
                    res.status(404).json({ message: "Date not found" });

                    return;
                }
                
                const updatedDate: Partial<Dates> = {
                    ...dateToUpdate,
                    ...resDatesData,
                    id: Number(resDatesData.id)
                };
                
                await Dates.save(updatedDate);

                res.status(202).json({
                    message: "Date has been updated",
                });
                
            } catch (error) {
                res.status(500).json({
                    message: "Update not found",
                    error: (error as any).message,
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
   
    async getDatesByArtist(req: Request, res: Response): Promise < void> {
        try {
            const artistId = req.tokenData.artistId

            const datesForShows = await Dates.find({
                    select: {
                        id: true,
                        tattoArtistId: true,
                        jobId: true,
                        userId: true,
                        appointmentDate: true,
                    },
                    
                where: { id: artistId },
        });
        if(!datesForShows) {
            res.status(404).json({ message: "Dates not found" });
            return;
        }

        const artistDate = datesForShows;
        if(artistDate.length === 0) {
            res.status(404).json({ message: "Dates not found" });
            return;
        }

            res.status(200).json(datesForShows);
        } catch (error) {
            res.status(500).json({
                message: "Failed to retrieve Dates",});
        }
    }
 };


