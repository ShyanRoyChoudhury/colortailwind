import express from 'express';
import { findNearestTailwindColor } from './colorconversion';

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req: any, res: any) => {
  res.send("Done");
});

app.post("/test", (req, res)=>{
    const {hexColor}  = req.body;
    //console.log(hexColor)
    const tailwindColor = findNearestTailwindColor(hexColor);
    res.send(tailwindColor);
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
