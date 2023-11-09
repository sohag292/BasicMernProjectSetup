exports.create = async (req, res) => { 
    res.status(200).json({status:"success",data:"S-Create data"})
};


exports.read = async (req, res) => { 
    res.status(200).json({status:"success",data:"S-Read data"})
};


exports.delete = async (req, res) => { 
    res.status(200).json({status:"success",data:"S-Delete data"})
};


exports.update = async (req, res) => {
    res.status(200).json({status:"success",data:"S-Update data"})
 };