const router = require('express').Router();

const pg = require('pg');

const connection = "postgres://postgres:123@localhost:5432/facebook";

const client = new pg.Client(connection);

client.connect().then(result => console.log("ase"));


router.post('/insertuser', (req, res) => {

    client.query(`
                INSERT INTO \"Users\"
                values(
                    '${req.body.userId}','${req.body.username}','${req.body.userPassword}','${req.body.email}','${new Date().toISOString()}'
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

    client.query(`
                INSERT INTO \"Groups\"(groupId,groupNmae,groupOwner,description) 
                values(
                    ${databaseInfo.groupId},${req.body.groupName},${req.body.groupOwner},${req.body.description}
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

    client.query(`
                INSERT INTO \"Pages\"(pageId,pageName,createDate,pageAdmin) 
                values(
                    ${databaseInfo.pageId},${req.body.pageName},${new Date().toISOString()},${req.body.admin}}
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

module.exports = router;