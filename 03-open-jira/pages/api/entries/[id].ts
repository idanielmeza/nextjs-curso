import {isValidObjectId} from 'mongoose';
import type { NextApiRequest, NextApiResponse } from 'next'
import {db} from '../../../database';
import { Entry, IEntry } from '../../../models';


type Data = 
|{msg: string}
|IEntry

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

    const {id} = req.query;

    if(!isValidObjectId(id)){
        return res.status(400).json({msg: 'Invalid id'})
    }

    switch (req.method) {
        case 'PUT':
            return updateEntry(req,res);
        
        case 'GET':
            return getEntry(req,res);

        case 'DELETE':
            return deleteEntry(req,res);

        default:
            return res.status(400).json({msg: 'Endpoint no existe'})
    }

}

const updateEntry = async(req: NextApiRequest, res: NextApiResponse<Data>)=>{
    
    const {id} = req.query;
    
    await db.connect();
    
    const entry = await Entry.findById(id);
    
    if(!entry){
        await db.disconnect();
        return res.status(404).json({msg: 'Entry not found'})
    }

    const {description = entry.description , status = entry.status} = req.body;

    try {
        const updatedEntry = await Entry.findByIdAndUpdate(id, {description, status}, {runValidators: true, new: true});
        res.status(201).json(updatedEntry!)
    } catch (error) {
        console.log({error})
        res.status(400).json({msg: 'Error updating entry'})
    }finally{
        console.log('entro al finally')
        await db.disconnect();
    }
    
}

const getEntry = async(req: NextApiRequest, res: NextApiResponse<Data>)=>{

    const {id} = req.query;

    try {
        await db.connect();
        const entry = await Entry.findById(id);

        if(!entry){
            return res.status(404).json({msg: 'Entry not found'})
        }

        return res.status(200).json(entry)

    } catch (error) {

        return res.status(400).json({msg: 'Error getting entry'})

    }finally{
        await db.disconnect();
    }

}

const deleteEntry = async(req: NextApiRequest, res: NextApiResponse<Data>)=>{
    const {id} = req.query;

    try {
        await db.connect();
        const entry = await Entry.findByIdAndDelete(id);

        if(!entry){
            return res.status(404).json({msg: 'Entry not found'})
        }

        return res.status(200).json(entry)

    } catch (error) {

        return res.status(400).json({msg: 'Error deleting entry'})

    }finally{
        await db.disconnect();
    }
}