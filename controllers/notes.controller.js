

const Notes = require('../models/notes.model');

exports.createNotes = async (req, res) => {
    const data = await Notes.create(req.body);
    res.json(data);
}


exports.getNotes = async (req, res) => {
    const data = await Notes.find();
    res.json(data);
}

exports.updateNotes = async (req, res) => {
    try {
        const data = await Notes.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true },
            res.json({ message: 'updatedd sucessfully', data })
        )
    }catch(err){
        res.status(500).json({error:err.message})
    }

};

exports.updateNotes = async(req,res)=>{
    try{
        const data = await Notes.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new:true},
            res.json({message:'updated',data})
        )
    }catch(err){
        res.status(500).json({error:err.message})
    }
}