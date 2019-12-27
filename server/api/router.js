const router = require('express').Router();

const pg = require('pg');

const Pool = require('pg').Pool
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'facebook',
    password: '123',
    port: 5432,
})


const connection = "postgres://postgres:123@localhost:5432/facebook";



router.post('/insertuser', (req, res) => {

    const client = new pg.Client(connection);

    client.connect().then(result => console.log("ase"));

    client.query(`
                INSERT INTO \"Users\"
                values(
                    '${req.body.userId}','${req.body.username}','${req.body.userPassword}','${req.body.email}','${new Date().toISOString()}','POINT(111 111)'
                    );`
    )
        .then(() => {
            return res.status(200).json({
                message: "user added successfully"
            })
        })

        .catch((err) => {
            return res.status(500).json({
                error: err
            })
        })


});


router.post('/insertgroup', (req, res) => {

    const client2 = new pg.Client(connection);

    client2.connect().then(result => console.log("ase"));
    pool.query(`
                INSERT INTO \"Groups\"(groupId,groupName,description) 
                values(
                    '${req.body.groupId}','${req.body.groupName}','${req.body.description}'
                    );`
    )
        .then(() => {
            return res.status(200).json({
                message: "group added successfully"
            })
        })
        .catch(() => {
            return res.status(500).json({
                error: err
            })
        })


});


router.post('/insertpage', (req, res) => {

    const client3 = new pg.Client(connection);

    client3.connect().then(result => console.log("ase"));
    client3.query(`
                INSERT INTO \"Pages\"(pageId,pageName,createDate,pageAdmin) 
                values(
                    '${req.body.pageId}','${req.body.pageName}','${new Date().toISOString()}','${req.body.admin}'
                    );`
    )
        .then(() => {
            return res.status(200).json({
                message: "page added successfully"
            })
        })
        .catch(() => {
            return res.status(500).json({
                error: err
            })
        })


});




router.get('/getuser', (req, res) => {

    const client4 = new pg.Client(connection);

    client4.connect().then(result => console.log("ase"));
    client4.query(`
    select * from \"Users\"            
    `
    )
        .then((resultt) => {
            return res.status(200).json({
                resultt
            })
        })
        .catch(() => {
            return res.status(500).json({
                error: err
            })
        })


});


module.exports = router;