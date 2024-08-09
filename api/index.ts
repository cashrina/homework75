import express from 'express';
// @ts-ignore
import Vigenere from "caesar-salad/vigenere";
const app = express();
const port = 8080;

const PASSWORD = 'password';

const vigenereCipher = Vigenere.Cipher(PASSWORD);
const vigenereDecipher = Vigenere.Decipher(PASSWORD);

app.get('/encode/:text', (req, res) => {
    return res.send(vigenereCipher.crypt(req.params.text));
});

app.get('/decode/:text', (req, res) => {
    return res.send(vigenereDecipher.crypt(req.params.text));
});

app.listen(port, () => {
    console.log(`TASK2: http://localhost:${port}`);
});