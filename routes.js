const crypto = require('crypto');
const secret = 'DearFriendPressR4Ultimate';

module.exports = function(app, knex){

    app.get('/api/courses.json', async (req, res)=>{
        const data = await knex
            .select().from('Courses');
        res.send(data);
    });

    app.get('/api/count_courses', async (req, res)=> {
        const data = await knex
            .count("id").from("Courses");
        res.send(data);
    });

    app.post('/api/checkEmail', async (req, res)=> {
        const data = await knex
            .count("id").from("Users").where({email: req.body.email});
        res.send(data);
    });

    app.post('/api/signup', async (req, res)=> {
        if (req.body.email && req.body.password) {
            console.log(req.body);
            const hashPassport = crypto.createHmac('sha256', secret)
                .update(req.body.password)
                .digest('hex');
            const currentDate = new Date().toUTCString();
            console.log(hashPassport);
            try {
                await knex('Users')
                    .insert({email: req.body.email, password: hashPassport, createdAt: currentDate, updatedAt: currentDate});

                res.send({status: "success"});
            }catch (e) {
                res.send({status: "error", msg: e});
            }

        } else {
            res.send({status: "error", msg: "Ошибка введенных данных"});
        }
    });

    app.get("*", (req, res) => {
        res.sendFile(__dirname + '/dist/index.html')
    });

};