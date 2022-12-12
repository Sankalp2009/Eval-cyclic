const {Todo} = require('./../model/Todo.model');
exports.getAllTodos = async (req, res) => 
{ 
    try
    {
        const Todos = await Todo.find();
        res
        .status(202)
        .json({
            status: 'Success',
            result: Todos.length,
            data: { Todos }
        });
    }
    catch(err)
    {
        console.log(err);
        res.status(500).send('Server error');
        return;
    }   
}
exports.getTodosById = async (req, res) => 
{
    try
    {
        const id = req.params.id;
        const Todo = await Todo.findById(id);
        res
       .status(202)
       .json({
            status: 'Success',
            result: Todo,
            data: { Todo }
       })    
    }
    catch(err)
    {
        console.log(err);
        return res.status(404).json({
                         status: 'Error',
                         message: 'Invalid Todo'

    })
}
}   
exports.createTodos = async (req, res)=> 
{   
    try {
    const newTodo = await Todo.create(req.body)
    console.log(newTodo)
            res.status(202).json({
            status: 'Success',
            data: {
                Todo : newTodo
            }
        });
    } 
    catch (error) 
    {
        res.status(404).json({
                    status: 'Error',
                    message: 'Invalid Todo'
                })
    }

}
exports.updateTodos = async (req, res) => {

    try
    {
        const id = req.params.id;
        const Todo = await Todo.findByIdAndUpdate(id,req.body,{
            new : true
        })
        res
       .status(202)
       .json({
            status: 'Success',
            data: { Todo }
       })    
    }
    catch(err)
    {
        console.log(err);
        return res.status(404).json({
                         status: 'Error',
                         message: 'Invalid Todo'

    })
} 
}
exports.deleteTodos = async (req, res) => {

    try
    {
        const id = req.params.id;
        const Todo = await Todo.findByIdAndRemove(id,req.body)
        res
       .status(202)
       .json({
            status: 'Success',
            data: null
       })    
    }
    catch(err)
    {
        console.log(err);
        return res.status(404).json({
                         status: 'Error',
                         message: 'Invalid Todo'

    })
} 
}