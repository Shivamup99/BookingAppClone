import hotelScema from "../modals/hotelModal.js"

export const getAllHotel = async(req,res,next)=>{
    const {min,max,...others} = req.query;
    try {
        const hotel = await hotelScema.find({
            ...others,cheapestPrice:{$gt:min |1 ,$lt:max||999}
        }).limit(req.query.limit)
        res.status(200).json(hotel)
    } catch (error) {
       next(error)
    }
}
export const getaHotel = async(req,res,next)=>{
    try {
        const hotel = await hotelScema.findById(req.params.id)
        res.status(200).json(hotel)
    } catch (error) {
        next(error)
    }
}


export const createHotel =async(req,res,next)=>{
    const hotel = await  hotelScema.create(req.body)
    try {
        let saveHotel = await hotel.save()
        res.status(201).json(saveHotel)
    } catch (error) {
        next(error)
    }
}

export const updateHotel =async(req,res,next)=>{
    try {
        const hotel = await hotelScema.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        res.status(201).json(hotel)
    } catch (error) {
        next(error)
    }
}

export const deleteHotel =async(req,res,next)=>{
    try {
         await hotelScema.findByIdAndDelete(req.params.id)
        res.status(200).json('hotel deleted successfully')
    } catch (error) {
        next(error)
    }
}

export const getCityHotel = async(req,res,next)=>{
    const cities = req.query.cities.split(',')
    try {
        const list = await Promise.all(cities.map(city=>{
            return hotelScema.countDocuments({city:city})
        }))
        res.status(200).json(list)
    } catch (error) {
        next(error)
    }
}

export const getTypeHotel = async(req,res,next)=>{
    try {
        const hotelCount = await hotelScema.countDocuments({type:'hotel'})
        const vilaCount=await hotelScema.countDocuments({type:'vila'})
        const apartmentCount =await hotelScema.countDocuments({type:'apartment'})
        const resortCount = await hotelScema.countDocuments({type:'resort'})
        const cabinCount = await hotelScema.countDocuments({type:'cabin'})
        res.status(200).json([
            {type:'hotel',count:hotelCount},
            {type:'vilas',count:vilaCount},
            {type:'apartments',count:apartmentCount},
            {type:'resorts',count:resortCount},
            {type:'cabins',count:cabinCount}
        ])
    } catch (error) {
        next(error)
    }
}