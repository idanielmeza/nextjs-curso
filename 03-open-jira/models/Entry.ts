import mongoose,{Model,Schema} from 'mongoose';
import { Entry } from '../interfaces';

export interface IEntry extends Entry{
    
}

const entrySchema = new Schema({
    description: {type: String, required: true},
    createdAt: {type: Number},
    status: {
        type: String,
        enum: {
            values: ['pendding', 'in-progress', 'finished'],
            msg: '{VALUE} no es un estado valido'
        },
        default: 'pendding'
    },
});


const EntryModel: Model<IEntry> = mongoose.models.Entry || mongoose.model('Entry', entrySchema);

export default EntryModel;