exports.buildDatabase = function(db)
{
    const sql = `create table IF NOT EXISTS plants
    (
        id integer
            constraint table_name_pk
            primary key autoincrement,
        name varchar(255),
        species varchar(255),
        age int,
        location varchar(255),
        mood varchar(255),
        trait varchar(255),
        type varchar(15)
    );    
    `;

    db.run(sql, {}, (err) => {
        if(err) {
            console.log(err);
            process.exit(-1);
        }

        db.all('select * from plants;', [], (err, rows) => {
            if(err)
                reject(err);

            //console.log(rows);
            if(rows.length === 0)
                seedData(db);
        });
    });
};

function seedData(db) {
    const plants = [
        ['Herby', 'Aloe Vera', 3, 'St Kilda', 'Happy', 'Sub Burn Remedy', 'herb'],
        ['Frolt', 'Sage', 4, 'Perth', 'Parched', 'Tasty Tea', 'herb'],
        ['blinky', 'Eucalyptus', 30, 'Wine Glass Bay', 'relaxed', 'Slow Waltz', 'tree'],
        ['Groak', 'Oak', 54, 'Cygnet', 'chilly', 'Fat Rumba', 'tree'],
        ['Neee', 'Lavender', 1, 'Botanical Gardens', 'pampered', 'Cha Cha', 'shrub']
    ];

    for(let i = 0; i < plants.length; i++)
    {
        // insert one row into the langs table
        db.run(`INSERT INTO plants(name, species, age, location, mood, trait, type) VALUES(?, ?, ?, ? , ?, ?, ?)`, plants[i], function(err) {
            if (err) {
                return console.log(err.message);
            }
            // get the last insert id
            //console.log(`A row has been inserted with rowid ${this.lastID}`);
        });
    }
}
