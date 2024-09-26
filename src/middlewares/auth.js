


const adminAuth = (req,res,next)=>{
    const token = "xyz";
    console.log('auth middleware for admin routes');
    if(token !== "xyz") {
        res.status(401).send({message:'unauthorized'})
    } else {
        next()
    }
}

const userAuth =(req,res,next)=>{
    console.log('from auth user')
    const token = "abc1";
    if(token!=="abc") {
        res.status(401).send({message:'unauthorized user'})
    } else {
        next()
    }
}

module.exports = {
    adminAuth,
    userAuth
}