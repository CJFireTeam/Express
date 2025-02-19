import { Boostrap } from "./config/Boostrap";
import { AuthRoutes } from "./config/routes/AuthRoutes";
import { HelloWorldRoutes } from "./config/routes/HelloWorld.route";
import { UserRoutes } from "./config/routes/UserRoutes";

// app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
//   console.error(err);
//   res.status(500).send({ error: "Algo salió mal" });
// });



function Power() {
  const boostrap = new Boostrap();
  boostrap.Inject([
    new HelloWorldRoutes(),
    new UserRoutes(),
    new AuthRoutes()
  ]);
  boostrap.Start();
}

Power();