const bcrypt = require('bcrypt');

module.exports = function(app, knex, session){
    app.use(session({
        secret: 'my test session',
        resave: true,
        saveUninitialized: false
    }));

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
            const hashPassport = bcrypt.hashSync(req.body.password, 10);
            const currentDate = new Date().toUTCString();
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

    app.post('/api/logInUser', async (req, res)=> {
        try {
            const match = await knex
                .select("id", "password").from("Users").where({email: req.body.email});

            if (match.length === 0) {
                res.status(401).send({status: "error", msg: "Неверная почта"});
            } else {
                const data = bcrypt.compareSync(req.body.password, match[0].password);

                if (!data) {
                    res.send({status: "error", msg: "Неверный пароль"});
                } else {
                    res.session = {
                        userId: match[0].id
                    };
                    console.log(res.session);
                    res.status(200).send({status: "success"});
                }
            }
        }catch (e) {
            console.log(e);
        }
    });


    app.get("*", (req, res) => {
        res.sendFile(__dirname + '/dist/index.html')
    });

};