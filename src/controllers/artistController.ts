import { Request, Response } from "express";
import { TattoArtist } from "../models/TattoArtist";
import { UserRoles } from "../constants/UserRole";
import { Dates } from "../models/dates";



//------------------------------------------------------------------------------

export const artistController = {

    async create(req: Request, res: Response): Promise<void> {
        try {
            const{firstName, email} = req.body;

            if (!firstName ||!email ) {
                res.status(400).json({
                    message: "All fields must be provided",
                });
                return;
            }

            const artistToCreate = TattoArtist.create({
                firstName: firstName,
                email: email,
            });

            //save to BD
            await TattoArtist.save(artistToCreate);

            res.status(201).json({
                message: "Tatto artist has been created",
            });

        } catch (error) {
            res.status(500).json({
                message: "Failed to create tatto artist",
            });
        }

    },

    
    async getAll(req: Request, res: Response): Promise<void> {
        try {
            const page = Number(req.query.page) || 1;
            const limit = Number(req.query.limit) || 10;

            const [artist, totalArtist] = await TattoArtist.findAndCount({
                select: {
                    firstName: true, 
                    email: true,
                },   
            });
            if (artist.length === 0) {
                res.status(404).json({
                    message: "Arstist not found",
                });
                return;
            }

            res.status(200).json({
                message: "Tatto artists found",
                user: UserRoles.ARTIST,
                Name: artist,
                totalArtist: totalArtist,

            });

        } catch (error) {
            res.status(500).json({
                message: "Something went wrong",
            });
        }
    },

    async getById(req: Request, res: Response): Promise<void> {
        try {
            const artistId = Number(req.params.id);

            const artists = await TattoArtist.findOne({
                    select: {
                        firstName: true,
                        email: true,
                    },
            
                    where: { id: artistId },
                });

            if (!artists) {
                res.status(404).json({ message: "Tatto artist not found" });
                return;
            }

            res.json(artists);
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
            const artistId = Number(req.params.id)
            const {...resArtistData} = req.body;

            const artistToUpdate = await TattoArtist.findOne({where: {id: artistId}});
                if(!artistToUpdate) {
                    res.status(404).json({ message: "Date not found" });
                    return;
                }
                console.log(artistToUpdate);
                

                
                const updatedArtist: Partial<TattoArtist> = {
                    ...artistToUpdate,
                    ...resArtistData,
                };
                
                await TattoArtist.save(updatedArtist);

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
                const artistId = Number(req.params.id);

                const deleteResult = await TattoArtist.delete(artistId);

                if(deleteResult.affected === 0) {
            res.status(404).json({ message: "Employed not delete" });
            return;
            }

            

            res.status(200).json({ 
                message: "Employed deleted successfully" });
        } catch(error) {
            res.status(500).json({
            message: "Failed to delete employed",
            });
        }
    },
 };
