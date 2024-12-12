import express from "express";
import { hash } from "bcryptjs";
import { UserModel } from "./db";

const app = express();
app.use(express.json())

app.post('api/v1/signup', async (req,res) =>{
    const {username, password} = req.body;
    const hashedPassword = hash(password, 10); 
    await UserModel.create({
        username:username,
        password: hashedPassword
    })
    res.json({
        message: "User signed up"
    })
})
app.post('api/v1/signin', (req,res) =>{})
app.post('api/v1/content', (req,res) =>{})
app.delete('api/v1/content', (req,res) =>{})
app.get('api/v1/content', (req,res) =>{})
app.post('api/v1/brain/share', (req,res) =>{})