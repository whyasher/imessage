const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'asherlokko',
    database: 'imessage_games'
});

db.connect(err => {
    if (err) {
        console.log(err);
    } else {
        console.log('Database Connected');
    }
});

app.post('/register', (req, res) => {

    const { name, email } = req.body;

    const sql =
        'INSERT INTO registrations (name,email) VALUES (?,?)';

    db.query(sql, [name, email], (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: 'Registration successful'
        });
    });
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});