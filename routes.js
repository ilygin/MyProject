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

    app.get("*", (req, res) => {
        res.sendFile(__dirname + '/dist/index.html')
    });

};