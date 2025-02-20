import { Boostrap } from "./config/Boostrap";
import { AuthRoutes } from "./infraestructure/routes/Auth.route";
import { HelloWorldRoutes } from "./infraestructure/routes/HelloWorld.route";
import { UserRoutes } from "./infraestructure/routes/User.route";

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