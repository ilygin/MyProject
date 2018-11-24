const db = require("./models");
const passport = require("./config/passport");
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
    //
    // app.get('/api/chapters-list/:id.json', async (req, res) =>{
    //     const data = await knex
    //         .select().from('chapters')
    //         .where({course_id: req.params.id});
    //     res.send(data);
    // });
    //
    // // кол-во глав в первом курсе
    // app.get('/api/count_chapter.json', async (req, res) => {
    //     const data = await knex('courses')
    //         .count('chapter as count_chapter')
    //         .where('course_name', 'Первый курс');
    //     res.send(data);
    // });
    //
    // // кол-во глав пройденных вторым пользаком
    // app.get('/api/progress.json', async (req, res) =>{
    //     const data = await knex
    //         .select('last_chapter as last_chapter')
    //         .from('users_progress')
    //         .where('user_id', '2');
    //     res.send(data);
    // });
    //
    // //получения текста главы
    // app.get('/api/text.json', async (req, res) => {
    //     const data = await knex
    //         .select('context')
    //         .from('courses_context')
    //         .where({course_id: '1', chapter_id: '1'});
    //     res.send(data);
    // });
    //
    // // добавление пользователя
    // app.post('/api/add_user', async (req, res) => {
    //     const data = await knex('users')
    //         .insert({email: req.body.email, password: req.body.password});
    //     res.send({status:'Success', id: data[0]});
    // });
    //
    // app.get('/api/checkEmail/:email', async function(req, res){
    //     const data = await knex
    //         .select().from('users')
    //         .where({email: req.params.email});
    //     data[0] ? res.send({status: 'Пользователль найден'}) : res.send({status: 'Пользователль не найден'});
    // });

    app.post("/api/login/", passport.authenticate("local"), function(req, res) {
        // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
        // So we're sending the user back the route to the members page because the redirect will happen on the front end
        // They won't get this or even be able to access this page if they aren't authed
        res.json("/my_account");
    });

    // app.post("/api/signup", function(req, res) {
    //     db.User.create({
    //         email: req.body.email,
    //         password: req.body.password
    //     }).then(function() {
    //         res.redirect(307, "/my_account");
    //     }).catch(function(err) {
    //         console.log(err);
    //         res.json(err);
    //         // res.status(422).json(err.errors[0].message);
    //     });
    // });
    //
    // app.get("/logout", function(req, res) {
    //     req.logout();
    //     res.redirect("/");
    // });
    //
    app.get("/api/user_data", function(req, res) {
        if (!req.user) {
            // The user is not logged in, send back an empty object
            res.json({});
        }
        else {
            // Otherwise send back the user's email and id
            // Sending back a password, even a hashed password, isn't a good idea
            res.json({
                email: req.user.email,
                id: req.user.id
            });
        }
    });

    app.get("*", (req, res) => {
        res.sendFile(__dirname + '/dist/index.html')
    });

};