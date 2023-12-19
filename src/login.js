import express from 'express';
import mysql from 'mysql';
import cors from 'cors'
import dotenv from 'dotenv';
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_DATABASE,
	port: process.env.DB_PORT
})

app.post('/signup', (req, res) => {
	const sql = "INSERT INTO usertable (`username`, `email`, `password`) VALUES (?)";
	const values = [
		req.body.username,
		req.body.email,
		req.body.password
	]
	db.query(sql, [values], (err, data) => {
		if(err) {
			return res.json('Error');
		}
		return res.json(data);
	})
})

app.post('/login', (req, res) => {
	const sql = "SELECT * FROM usertable WHERE `username` = ? AND `password` = ?";
	db.query(sql, [req.body.username,req.body.password], (err, data) => {
		if(err) {
			return res.json('Error');
		}
		if(data.length > 0) {
			return res.json('Success');
		} else {
			return res.json('Fail');
		}
	})
})

app.listen(3000, () => {
	console.log('listening')
})