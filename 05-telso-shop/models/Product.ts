import mongoose, {Schema,model,Model} from 'mongoose';
import { IProduct } from '../interfaces';

const productSchema:Schema = new Schema({
    description: {type: String, required: true},
    images : [{type: String}],
    inStock: {type: Number, required: true, default: 0},
    price: {type: Number, required: true, default: 0},
    sizes: [{
        type: String,
        enum: {
            values : ['XS','S','M','L','XL','XXL','XXXL'],
            message: '{VALUE} is not valid'
        }
    }],
    slug : {type: String, required: true, unique: true},
    tags : [{type: String}],
    title :  {type: String, required: true},
    type: {type: String, required: true, enum: {values: ['shirts','pants','hoodies','hats'], message: '{VALUE} is not valid' }},
    gender: {type: String, required: true, enum: {values: ['men','women','kid','unisex'], message: '{VALUE} is not valid' }}

    //TODO: crear createdAt y updatedAt

},{
    timestamps: true
});

//TODO: crear indice de mongo


const Product: Model<IProduct> = mongoose.models.Product || model('Product', productSchema);

export default Product;

