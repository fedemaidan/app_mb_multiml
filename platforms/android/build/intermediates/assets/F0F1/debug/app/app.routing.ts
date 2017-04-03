import { LoginComponent } from "./pages/login/login.component";
import { ListComponent } from "./pages/list/list.component";
import { ListPreguntasComponent } from "./pages/list-preguntas/list-preguntas.component";
import { WebComponent } from "./pages/web/web.component";
import { ConversacionComponent } from "./pages/conversacion/conversacion.component";

export const routes = [
  { path: "", component: LoginComponent },
  { path: "list", component: ListComponent },
  { path: "preguntas", component: ListPreguntasComponent },
  { path: "web", component: WebComponent },
  { path: "conversacion", component: ConversacionComponent },
];

export const navigatableComponents = [
  LoginComponent,
  ListComponent,
  ListPreguntasComponent,
  WebComponent,
  ConversacionComponent
];