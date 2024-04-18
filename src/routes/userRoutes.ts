import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const router = Router();
const prisma = new PrismaClient();

// create user
router.post('/', async (req,res) => {
    const {email, name, username} = req.body; 
    try {
        const result = await prisma.user.create({
        data: {
            email,
            name,
            username,
            bio: "Hello, I'm new here",
            },
        })
        
        res.json(result);
    } catch (error) {
        res.status(400).json({error: 'Username and email should be unique'});
    }

});

// list
router.get('/', async (req, res) => {
    const allUsers = await prisma.user.findMany();
    
    res.json(allUsers);
})

// get one by id
router.get('/:id', async (req, res) => {
    const {id} = req.params;
    
    const user = prisma.user.findUnique({where: {id: Number(id)}});
    
    res.json(user);
})

// update
router.put('/:id', async (req, res) => {
    const {id} = req.params;
    const {bio, name, image} = req.body;

    try{
        const result = await prisma.user.update({
            where: {id: Number(id)},
            data: {bio, name, image}
        })
        res.json(result)
    }catch(error){
        res.status(400).json({error: "Error to update the user"});
    }
})

// delete 
router.delete('/:id', async(req, res) => {
    const {id} = req.params;
    
    try{
        await prisma.user.delete({where: {id: Number(id)}});

        res.sendStatus(200)
    }catch(error){
        res.status(400).json({error: "Failed to delete user"});
    }
})

export default router;