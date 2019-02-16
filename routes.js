const bcrypt = require('bcryptjs');

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
        try {
            const data = await knex
                .count("id").from("Users")
                .where({email: req.body.email});
            res.send(data);
        }catch(e) {
            res.send(e);
        }
    });

    function checkLoginUser(req, res, next) {
        if (req.session.user) {
            next();
        }else {
            res.redirect("/");
        }
    }

    app.post('/auth/signup', async (req, res)=> {
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

    app.post('/auth/logInUser', async (req, res)=> {
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
                    req.session.user = match[0];
                    res.status(200).send({status: "success"});
                }
            }
        }catch (e) {
            console.log(e);
        }
    });

    app.get("/auth/logout", (req, res) => {
        req.session.destroy(()=>{
            res.redirect("/");
        })
    });

    app.get("/auth/isAuthorized", (req, res) => {
        if(req.session.user){
            res.send({isAuthorized:true});
        }else {
            res.send({isAuthorized: false});
        }
    });

    app.get("/account", checkLoginUser, (req, res, next)=>{
        next();
    });

    app.post('/api/newCourse/savePageData', async (req, res)=> {
        let currentDate = new Date().toUTCString();
        try {
            await knex('CourseContent')
                .insert({updatedAt: currentDate,
                    updatedBy: req.session.user.id,
                    pageContent: req.body.content,
                    courseId: req.body.courseId,
                    numberPage: req.body.pageNumber,
                    title: req.body.title
                });
            res.status(200).send({status: "success"});
        }catch (e) {
            console.log(e);
            res.status(503).send({status: "error", msg: e});
        }
    });

    app.get('/api/loadCourseData/:idCourse', async (req, res)=>{
        try{
            console.log(req.body)
            const data = await knex
                .select().from('CourseContent')
                .where({courseId: req.body.idCourse});
            res.send(data);
        }catch (e) {
            console.log(e);
            res.status(503).send({status: "error", msg: e});
        }
    });

    app.get("*", (req, res) => {
        res.sendFile(__dirname + '/dist/index.html')
    });

};
