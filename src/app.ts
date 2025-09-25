import fastify from "fastify";
import { ZodError } from "zod";
import { env } from "./env";
import { UserAlreadyExistsError } from "./use-cases/errors/user-already-exists-error";
import fastifyJwt from "@fastify/jwt";
import fastifyCookie from '@fastify/cookie'
import { gymsRoutes } from "./http/controllers/gyms/route";
import { checkInsRoutes } from "./http/controllers/check-ins/routes";
import { usersRoutes } from "./http/controllers/users/routes";

export const app = fastify();

// registrando o plugin de JWT
app.register(fastifyJwt,{
  secret: env.JWT_SECRET,
  cookie:{
    cookieName: 'refreshToken', // nome do cookie
    signed: false // se o cookie é assinado ou não
  },
  sign:{
    expiresIn: '10m'// tempo de expiração do token de 10 minutos
  }
})

// registrando cookie 
app.register(fastifyCookie)

// registrando as rotas
app.register(usersRoutes)
app.register(gymsRoutes)
app.register(checkInsRoutes)

app.setErrorHandler((error, request, reply) => {
   if (error instanceof ZodError) {
    return reply
      .status(400)
      .send({ message: 'Validation error.', issues: error.format() })
  }
  if (env.NODE_ENV !== 'production') {
    console.error(error)
  } else {
    // TODO: Here we should log to a external tool like DataDog/NewRelic/Sentry
  }
  if (error instanceof UserAlreadyExistsError) {
    return reply.status(409).send({ message: error.message });
  }
  return reply.status(500).send({ message: "Internal Server Error" });
});
