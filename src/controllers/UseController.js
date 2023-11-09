exports.create = async (req, res) => { 
    res.status(200).json({status:"success",data:"U-Create data"})
};


exports.read = async (req, res) => { 
    res.status(200).json({status:"success",data:"U-Read data"})
};


exports.delete = async (req, res) => { 
    res.status(200).json({status:"success",data:"U-Delete data"})
};


exports.update = async (req, res) => {
    res.status(200).json({status:"success",data:"U-Update data"})
 };