import { Boostrap } from "./config/Boostrap";
import { HelloWorldRoutes } from "./config/routes/HelloWorld.route";

// app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
//   console.error(err);
//   res.status(500).send({ error: "Algo salió mal" });
// });



function Power() {
  const boostrap = new Boostrap();
  boostrap.Inject([new HelloWorldRoutes]);
  boostrap.Start();
}

Power();