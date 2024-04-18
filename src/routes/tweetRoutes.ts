import { Router } from "express";

const router = Router();

// create user
router.post('/', (req,res) => {
    res.status(501).json({message: 'Not implemented yet'});
});

// list
router.get('/', (req, res) => {
    res.status(501).json({message: 'Not Implemented yet'});
})

// get one by id
router.get('/:id', (req, res) => {
    const {id} = req.params;
    res.status(501).json({message: 'Not Implemented yet'});
})

// list
router.get('/', (req,res) => {
    res.status(501).json({message: 'Not Implemented yet'});
})

// update
router.put('/:id', (req, res) => {
    res.status(501).json({message: 'Not Implemented yet!'});
})

// delete 
router.delete('/:id', (req, res) => {
    const {id} = req.params;
    res.status(501).json({message: 'Not Implemented yet'});
})

export default router;