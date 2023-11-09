exports.create = async (req, res) => { 
    res.status(200).json({status:"success",data:"a-Create data"})
};


exports.read = async (req, res) => { 
    res.status(200).json({status:"success",data:"a-Read data"})
};


exports.delete = async (req, res) => { 
    res.status(200).json({status:"success",data:"a-Delete data"})
};


exports.update = async (req, res) => {
    res.status(200).json({status:"success",data:"a-Update data"})
 };