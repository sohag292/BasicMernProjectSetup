exports.create = async (req, res) => { 
    res.status(200).json({status:"success",data:"p-Create data"})
};


exports.read = async (req, res) => { 
    res.status(200).json({status:"success",data:"p-Read data"})
};


exports.delete = async (req, res) => { 
    res.status(200).json({status:"success",data:"p-Delete data"})
};


exports.update = async (req, res) => {
    res.status(200).json({status:"success",data:"p-Update data"})
 };