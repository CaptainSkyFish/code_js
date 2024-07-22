// const app = express()

// enum ResponseStatus {
//     NotFound = 404,
//     Success =  200,
//     ServerError = 511
// }

// app.get("/", (req, res) => {
//     if (!req.query.userId) 
//         res.status(Response.st).json({msg: "messageee"});
//     else
//         res.status().json({msg: "message"})
// })


function add<U>(arg: U): U {
    return (arg);
}

const output1 = add<string>("ban");
const output2 = add<number>(100);

console.log(`${output1} \n ${output2}`);